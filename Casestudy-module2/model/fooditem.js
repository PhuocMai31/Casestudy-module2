"use strict";
exports.__esModule = true;
exports.food = void 0;
var food = /** @class */ (function () {
    function food(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    food.prototype.getId = function () {
        return this.id;
    };
    food.prototype.setId = function (value) {
        this.id = value;
    };
    food.prototype.getName = function () {
        return this.name;
    };
    food.prototype.setName = function (value) {
        this.name = value;
    };
    food.prototype.getPrice = function () {
        return this.price;
    };
    food.prototype.setPrice = function (value) {
        this.price = value;
    };
    return food;
}());
exports.food = food;
