const { mongoose } = require('./db')

const billDetailSchema = new mongoose.Schema(
    {
        billID: { type: mongoose.Schema.Types.ObjectId, ref: 'Bill' },
        productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
    },
    {
        timestamps: true,
        collection: 'BillDetail'
    }
)

let BillDetail = mongoose.model('BillDetail', billDetailSchema)

module.exports = { BillDetail }