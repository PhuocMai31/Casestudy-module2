"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var foodmanager_1 = require("../model/foodmanager");
var readlineSync = require('readline-sync');
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.adminmanager = new foodmanager_1.Foodmanager();
        this.menu = "Xin ch\u00E0o Admin:\n                     ---Vui l\u00F2ng ch\u1ECDn ch\u1EE9c n\u0103ng---\n                    1.Th\u00EAm m\u00F3n\n                    2.Hi\u1EC3n th\u1ECB danh s\u00E1ch m\u00F3n \u0103n\n                    3.S\u1EEDa gi\u00E1 m\u00F3n\n                    4.X\u00F3a m\u00F3n\n                    5.Tho\u00E1t ";
    }
    AdminMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 5) {
                    console.log("Wrong choice. Try again");
                }
            } while (choice < 1 || choice > 5);
            switch (choice) {
                case 1:
                    var id = readlineSync.question("Id: ");
                    var foodname = readlineSync.question("Ten Mon: ");
                    var price = +readlineSync.question("Gia Tien: ");
                    this.adminmanager.add(id, foodname, price);
                    console.log('"Món ăn đã được thêm vào menu thành công"');
                    break;
                case 2:
                    console.log("Danh sách Món ăn: ");
                    console.table(this.adminmanager.show());
                    break;
                case 3:
                    var idupdate = readlineSync.question("Ban muon sua gia mon an theo id nao: ");
                    var priceupdate = +readlineSync.question("Nhap vao gia tien muon sua: ");
                    this.adminmanager.update(idupdate, priceupdate);
                    break;
                case 4:
                    var idremove = readlineSync.question("Bạn muốn xóa món ăn theo id nào?: ");
                    this.adminmanager["delete"](idremove);
                    break;
                case 5:
                    return;
            }
        }
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
