"use strict";
exports.__esModule = true;
var foodmanager_1 = require("./foodmanager");
var Userfoodmanager = /** @class */ (function () {
    function Userfoodmanager() {
        this.fooddro = [];
        // constructor() {
        //     this.foodorder.push(new food(1,"mi cay", 25000));
        //     this.foodorder.push(new food(3,"mi xao", 40000));
        //     this.foodorder.push(new food(4,"mi lanh", 45000));
        //     this.foodorder.push(new food(5,"com chien", 50000));
        //
        // }
    }
    Userfoodmanager.prototype.order = function (name) {
        for (var i = 0; i < foodmanager_1.Foodmanager.listmenu.length; i++) {
            if (foodmanager_1.Foodmanager.listmenu[i].getName() == name) {
                this.fooddro.push(foodmanager_1.Foodmanager.listmenu[i]);
                console.log("Đặt món thành công!");
            }
            else {
                console.log("---Không có món ăn này---");
            }
        }
    };
    Userfoodmanager.prototype.showoder = function () {
        return this.fooddro;
    };
    Userfoodmanager.prototype.total = function () {
        var sum = 0;
        var sl = 0;
        for (var _i = 0, _a = this.fooddro; _i < _a.length; _i++) {
            var i = _a[_i];
            sum = sum + i.getPrice();
            sl = sl + 1;
        }
        console.log("T\u1ED5ng s\u1ED1 ti\u1EC1n b\u1EA1n c\u1EA7n thanh to\u00E1n cho ".concat(sl, " m\u00F3n \u0111\u00E3 \u0111\u1EB7t l\u00E0: ").concat(sum, " VN\u0110 "));
    };
    Userfoodmanager.prototype["delete"] = function (name) {
        var index = this.findById(name);
        if (index == -1) {
            console.log("Danh sách đã dặt không có món ăn này");
        }
        else {
            this.fooddro.splice(index, 1);
            console.log("Xóa món thành công");
        }
    };
    Userfoodmanager.prototype.findById = function (name) {
        for (var i = 0; i < this.fooddro.length; i++) {
            if (this.fooddro[i].getName() == name) {
                return i;
            }
        }
        return -1;
    };
    return Userfoodmanager;
}());
exports["default"] = Userfoodmanager;
;
