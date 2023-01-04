"use strict";
exports.__esModule = true;
exports.UserMenu = void 0;
var Userfoodmanager_1 = require("../model/Userfoodmanager");
var foodmanager_1 = require("../model/foodmanager");
var readlineSync = require('readline-sync');
var UserMenu = /** @class */ (function () {
    function UserMenu() {
        this.admin = new foodmanager_1.Foodmanager();
        this.userManager = new Userfoodmanager_1["default"]();
        this.menu = "X\u00ECn ch\u00E0o User:\n            ---Vui l\u00F2ng ch\u1ECDn ch\u1EE9c n\u0103ng sau----\n                    1.Hi\u1EC3n Th\u1ECB Menu:\n                    2.\u0110\u1EB7t M\u00F3n:\n                    3.Hi\u1EC3n th\u1ECB m\u00F3n \u0111\u00E3 \u0111\u1EB7t:\n                    4.Thanh to\u00E1n:\n                    5.X\u00F3a m\u00F3n \u0111\u00E3 \u0111\u1EB7t:\n                    6.Exit";
    }
    UserMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 6) {
                    console.log("Chọn sai. Mời chọn lại");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 2:
                    var foodName = readlineSync.question("Moi chon mon: ");
                    this.userManager.order(foodName);
                    break;
                case 3:
                    console.log("Hiển thị món dã đặt ");
                    console.table(this.userManager.showoder());
                    break;
                case 4:
                    this.userManager.total();
                    break;
                case 5:
                    var foodRemove = readlineSync.question("Mon ban muon xoa khoi danh sach order: ");
                    this.userManager["delete"](foodRemove);
                    break;
                case 1:
                    console.table(this.admin.show());
                    break;
                case 6:
                    return;
            }
        }
    };
    return UserMenu;
}());
exports.UserMenu = UserMenu;
