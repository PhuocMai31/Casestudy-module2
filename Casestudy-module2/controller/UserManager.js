"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var User_1 = require("../model/User");
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.userList = [];
        this.userList.push(new User_1.User('admin', '123', 0));
        this.userList.push(new User_1.User('user', '123', 1));
    }
    UserManager.prototype.register = function (username, password, role) {
        this.userList.push(new User_1.User(username, password, role = 1));
    };
    UserManager.prototype.login = function (username, password) {
        var index = -1;
        this.userList.map(function (user) {
            if (user.getUsername() === username && user.getPassword() === password) {
                index = user.getRole();
                return;
            }
        });
        return index;
    };
    return UserManager;
}());
exports.UserManager = UserManager;
