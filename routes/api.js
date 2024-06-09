var express = require('express');
// var multer = require('multer');
// var upload = multer({ dest: 'public/images/' });
var router = express.Router();
var UserCtrl = require('../controller/UserController');
var CategoryCtrl = require('../controller/CategoryController');
var ProductCtrl = require('../controller/ProductController');

// người dùng
router.post('/register', UserCtrl.DangKy)

router.post('/login', UserCtrl.DangNhap)

// danh mục
router.get('/categories', CategoryCtrl.layDanhSach)


// sản phẩm
router.post('/product', ProductCtrl.them)
router.get('/products', ProductCtrl.layDanhSach)
router.get('/get-product-by-id/:id', ProductCtrl.laySanPhamTheoId)



module.exports = router;
