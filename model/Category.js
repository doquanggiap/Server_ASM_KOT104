const { mongoose } = require('./db')
const categorySchema = new mongoose.Schema(
    {
        cateName: { type: String, required: true },
        image: { type: String, required: true },
    },
    {
        timestamps: true,
        collection: 'Category'
    }
)

let Category = mongoose.model('Category', categorySchema)

module.exports = { Category }