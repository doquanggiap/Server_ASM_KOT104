const { Product } = require("../model/Product")

exports.layDanhSach = async (req, res) => {
    try {
        const cateID = req.query.cateID;
        let data;

        if (cateID) {
            data = await Product.find({ cateID: cateID })
        } else {
            data = await Product.find()
        }

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

exports.them = async (req, res) => {
    try {
        const data = req.body

        const objProduct = new Product({
            productName: data.productName,
            description: data.description,
            image: data.image,
            price: data.price,
            cateID: data.cateID
        })

        const result = await objProduct.save()
        if (result) {
            res.json({
                status: 200,
                message: "Thêm sản phẩm thành công",
                data: result
            })
        } else {
            res.json({
                status: 400,
                message: "Thêm sản phẩm thất bại",
                data: []
            })
        }
    } catch (error) {
        res.status(400).json({
            "msg": error.message
        })
    }
}

exports.laySanPhamTheoId = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findById(id);

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
