import UserModel from '../shared/models/user.js'
import bcrypt from 'bcrypt';
import make_token from '../shared/helpers/make_token.js'

let salt = 10;
let controller = {
    get: async (req, res) => {
        let users = await UserModel.find();
        return res.status(200).send({ data: users });
    },
    store: async (req, res) => {
        try {
            if (req.params.id) {
                let userPatch = (await UserModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false, new: true }))
                if (!userPatch) return res.status(404).send({ error: "NO NEWS UPDATE" });
                return res.status(200).send({ data: userPatch });
            } else {
                console.log(req.body)
                if (!req.body.password) return res.status(400).send({ message: 'NO_PASSWORD', code: "102.1" });
                if (!req.body.email) return res.status(400).send({ message: 'NO_EMAIL', code: "102.1" });
                let data = req.body;
                data.password = await bcrypt.hash(req.body.password, salt);
                let userStored = await UserModel.create(data);
                userStored = userStored.toObject();
                delete userStored.password;
                return res.status(200).send({ data: userStored });
            }

        } catch (e) {
            console.log("ERR 102.500", e);
            return res.status(500).send({ error: e, message: "ERROR USER NO CREATE", code: "102.500" });
        }

    },

    login: async (req, res) => {
        if (!req.body.password) return res.status(400).send({ message: 'NO_PASSWORD', code: "103.1" });
        if (!req.body.email) return res.status(400).send({ message: 'NO_EMAIL', code: "103.2" });
        let user = await UserModel.findOne({ email: req.body.email });
        if (!user) return res.status(401).send({ message: 'NO_AUTHORIZATION', code: "103.3" });
        bcrypt.compare(req.body.password, user.password, async function (err, result) {
            if (result == true) {
                let token = make_token.createToken(user._id, 60);
                return res.status(400).send({ data: token });
            } else {
                return res.status(401).send({ message: 'NO_AUTHORIZATION', code: "103.4" });
            }
        });
    },

    delete: async (req, res) => {
        try {
            console.log('Eliminando Usuario');
            let deleteItem = await UserModel.deleteOne({ _id: req.params.id });
            if (!deleteItem) return res.status(400).send({ error: "USER_HAS_NOT_BEEN_DELETED", code: 379 });
            return res.status(200).send({ data: "USER_HAS_BEEN_REMOVED" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "DELETE ERROR CATCH LOT", message: error.message, code: "600.500" })
        }
    }
}

export default controller;
