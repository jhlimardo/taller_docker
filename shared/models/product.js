import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let productSchema = Schema({
    name : String,
    sku : String,
    price : { type : Number, default : 0 },
    status: { type: Number, default: 1 },
    more  : {}
},{ timestamps: {  } });


export default mongoose.model('Product', productSchema);
