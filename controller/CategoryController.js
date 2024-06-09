const { Category } = require("../model/Category")

exports.layDanhSach = async (req, res) => {
    try {
        const data = await Category.find()

        if (data) {
            res.json(data)
        } else {
            res.json([])
        }
    } catch (error) {
        res.status(400).json({
            "msg": error.message
        })
    }
}
