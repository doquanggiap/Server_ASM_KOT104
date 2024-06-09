const { mongoose } = require('./db')
const productSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        cateID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
    },
    {
        timestamps: true,
        collection: 'Product'
    }
)

let Product = mongoose.model('Product', productSchema)

module.exports = { Product }