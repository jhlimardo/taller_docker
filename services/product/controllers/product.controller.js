import ProductModel from '../shared/models/product.js';

export  default  {
    get : async (req, res) => {
        try {
            let products = await ProductModel.find();
            return res.status(200).send({data: products});
        } catch (e) {
            console.log("ERR --- ", e);
            return res.status(500).send({error: e, message: "NO PRODUCT GET", code: "0000"});
        }
    },
    store: async (req, res) => {
        try {
            const data = req.body;
            const id = req.params.id;

            if (id) {
                let updateProduct = await ProductModel.findByIdAndUpdate(id, data, { useFindAndModify: false, new: true });
                if (!updateProduct) return res.status(404).send({error: "PRODUCT_NOT_FOUND"})
                return res.status(200).send({data: updateProduct});
            } else {
                let newProduct = await ProductModel.create(data);
                return res.status(200).send({data: newProduct});
            }

        } catch (error) {
            console.log("ERR --- ", error);
            return res.status(500).send({error: e, message: "CANNOT STORE", code: "0000"});
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            
            const deleteProduct = await ProductModel.deleteOne({_id: id});

            if (!deleteProduct) return res.status(400).send({error: "PRODUCT_HAS_NOT_BEEN_DELETED", code: 379})
            return res.status(200).send({data: deleteProduct});

        } catch (error) {
            console.log("ERR --- ", error);
            return res.status(500).send({error: e, message: "CANNOT DELETE", code: "0000"});
        }
    }
}