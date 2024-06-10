const { mongoose } = require('./db')
const billSchema = new mongoose.Schema(
    {
        date: { type: String, required: true },
        userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
        collection: 'Bill'
    }
)

let Bill = mongoose.model('Bill', billSchema)

module.exports = { Bill }