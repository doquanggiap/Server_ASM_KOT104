const { BillDetail } = require("../model/BillDetail")

exports.them = async (req, res) => {
    try {
        const data = req.body

        const objBillDetail = new BillDetail({
            billID: data.billID,
            productID: data.productID,
            quantity: data.quantity
        })

        const result = await objBillDetail.save()
        if (result) {
            res.json({
                status: 200,
                message: "Thêm BillDetail thành công",
                data: result
            })
        } else {
            res.json({
                status: 400,
                message: "Thêm BillDetail thất bại",
                data: []
            })
        }
    } catch (error) {
        res.status(400).json({
            "msg": error.message
        })
    }
}