import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    priceSale: {
        type: Number,
    },
    describe: {
        type: String,
    },
    mainImage: {
        type: String,
    },
    subImages: {
        type: String,
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
},
    { timestamps: true, versionKey: false });

productSchema.plugin(mongoosePaginate);

export default mongoose.model("Product", productSchema);