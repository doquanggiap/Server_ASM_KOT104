const { Category } = require("../model/Category")

exports.layDanhSach = async (req, res) => {
    try {
        let data = await Category.find()

        if (data) {
            // Tìm index của item có cateName là 'Popular'
            const popularIndex = data.findIndex(item => item.cateName === 'Popular');

            // Nếu tìm thấy item 'Popular'
            if (popularIndex !== -1) {
                // Lấy ra item 'Popular'
                const popularItem = data[popularIndex];

                // Xóa item 'Popular' khỏi vị trí hiện tại
                data.splice(popularIndex, 1);

                // Đặt item 'Popular' lên đầu danh sách
                data.unshift(popularItem);
            }

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
