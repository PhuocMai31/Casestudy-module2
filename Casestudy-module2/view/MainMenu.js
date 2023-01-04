"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var UserManager_1 = require("../controller/UserManager");
var AdminMenu_1 = require("./AdminMenu");
var UserMenu_1 = require("./UserMenu");
var readlineSync = require('readline-sync');
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.adminMenu = new AdminMenu_1.AdminMenu();
        this.userMenu = new UserMenu_1.UserMenu();
        this.userManager = new UserManager_1.UserManager();
        this.menu = "\n    ......Ph\u1EA7n m\u1EC1m qu\u1EA3n l\u00ED m\u00F3n \u0103n.....\n    1. \u0110\u0103ng nh\u1EADp Admin/User\n    2. \u0110\u0103ng k\u00ED t\u00E0i kho\u1EA3n User\n    3. Tho\u00E1t";
    }
    MainMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Mời chọn lại");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    var username_1 = readlineSync.question("Email dang nhap: ");
                    var password_1 = readlineSync.question("Mat khau: ");
                    var status_1 = this.userManager.login(username_1, password_1);
                    if (status_1 == -1) {
                        console.log("Sai tên tài khoản hoặc mật khẩu ");
                    }
                    else if (status_1 == 0) {
                        // Goi den amdin
                        this.adminMenu.selection();
                    }
                    else {
                        // Goi den User
                        this.userMenu.selection();
                    }
                    break;
                }
                case 2: {
                    var flag = true;
                    while (flag) {
                        var username = readlineSync.question("Email dang ki?: ");
                        if (!MainMenu.validateEmail(username)) {
                            console.log("Định dạng Email không hợp lệ!");
                        }
                        else {
                            flag = false;
                        }
                    }
                    while (!flag) {
                        var password = readlineSync.question("Mat Khau?: ");
                        if (!MainMenu.validatePassWord(password)) {
                            console.log("Mật khẩu phải có tối thiểu tám ký tự, ít nhất một chữ cái và một số !");
                        }
                        else {
                            flag = true;
                        }
                    }
                    var role = 1;
                    this.userManager.register(username, password, role);
                    console.log("Tạo tài khoản đặt món thành công!");
                    break;
                }
                case 3:
                    return;
            }
        }
    };
    MainMenu.validatePassWord = function (inputPassword) {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(inputPassword);
    };
    MainMenu.validateEmail = function (inputEmail) {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(inputEmail);
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
