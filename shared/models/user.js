import  mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UserSchema = Schema({
    email : {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    name: {type: String, required: true},
    lastName: {type: String, required:true},
    password : { type:String, required:true }
},{ timestamps: {  } });

export default mongoose.model('User', UserSchema);
