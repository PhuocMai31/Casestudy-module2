"use strict";
exports.__esModule = true;
exports.Foodmanager = void 0;
var fooditem_1 = require("./fooditem");
var Foodmanager = /** @class */ (function () {
    function Foodmanager() {
    }
    Foodmanager.prototype.add = function (id, name, price) {
        Foodmanager.listmenu.push(new fooditem_1.food(id, name, price));
    };
    Foodmanager.prototype.update = function (id, price) {
        var a = this.findById(id);
        if (a == -1) {
            console.log("----Không Có Món ăn sử dụng ID này-----");
        }
        else {
            for (var _i = 0, _a = Foodmanager.listmenu; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.getId() == id) {
                    i.setPrice(price);
                }
            }
            console.log("-----Sửa giá món ăn thành công------");
        }
    };
    Foodmanager.prototype.show = function () {
        return Foodmanager.listmenu;
    };
    Foodmanager.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            console.log("----Không Có Món ăn sử dụng ID này---");
        }
        else {
            Foodmanager.listmenu.splice(index, 1);
            console.log("Xóa món ăn khỏi menu thành công");
        }
    };
    Foodmanager.prototype.findById = function (id) {
        for (var i = 0; i < Foodmanager.listmenu.length; i++) {
            if (Foodmanager.listmenu[i].getId() == id) {
                return i;
            }
        }
        return -1;
    };
    Foodmanager.listmenu = [];
    return Foodmanager;
}());
exports.Foodmanager = Foodmanager;
// let Food = new food(1,"Mì Xào",45000);
// let Food1 = new food(2,"Mì Trộn",35000);
// let Food2 = new food(3,"Mì Cay 7 cấp độ",50000);
// let Food3= new food(4,"Bánh Mì",22000);
// let foodmanager=new Foodmanager();
// foodmanager.add(1,"Mì Xào",45000);
// foodmanager.add(2,"Mì Trộn",35000);
// foodmanager.add(3,"Mì Cay 7 cấp độ",50000);
// foodmanager.add(4,"Bánh Mì",22000);
// console.table(foodmanager.show());
// let Food5=new food(5,"Lúa Mì",505050);
// foodmanager.update(1,Food5);
// foodmanager.delete(2)
// console.table(foodmanager.show())
