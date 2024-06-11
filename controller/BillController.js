const { Bill } = require("../model/Bill")

const moment = require('moment')

exports.them = async (req, res) => {
    try {
        const data = req.body

        // Validate date format
        if (!moment(data.date, 'DD/MM/YYYY', true).isValid()) {
            return res.json({
                status: 400,
                message: "Ngày tháng không hợp lệ",
                data: []
            })
        }

        const objBill = new Bill({
            date: data.date,
            userID: data.userID
        })

        const result = await objBill.save()
        if (result) {
            res.json({
                status: 200,
                message: "Thêm bill thành công",
                data: result
            })
        } else {
            res.json({
                status: 400,
                message: "Thêm bill thất bại",
                data: []
            })
        }
    } catch (error) {
        res.status(400).json({
            "msg": error.message
        })
    }
}