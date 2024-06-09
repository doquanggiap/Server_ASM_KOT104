const { Category } = require("../model/Category")

exports.layDanhSach = async (req, res) => {
    try {
        const data = await Category.find()

        if (data) {
            res.json({
                status: 200,
                message: "Lấy danh sách thành công",
                data: data
            })
        } else {
            res.json({
                status: 400,
                message: "Lấy danh sách thất bại",
                data: []
            })
        }
    } catch (error) {
        res.status(400).json({
            "msg": error.message
        })
    }
}
