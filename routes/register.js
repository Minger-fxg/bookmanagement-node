var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let inform = req.query;

    let username = inform.newUsername;
    let password = inform.newPassword;
    let result = {
        state: 'success',
        message: "注册成功!!!您的账号为" + username
    };
    res.send(result);
});

router.post('/', function(req, res, next) {
    let inform = req.body.params;
    console.log(req);

    let username = inform.newUsername;
    let password = inform.newPassword;
    let result = {
        state: 'success',
        message: "注册成功!!!您的账号为" + username
    };
    res.send(result);

});

module.exports = router;