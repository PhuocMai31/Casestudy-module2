import {UserManager} from "../controller/UserManager";
import {AdminMenu} from "./AdminMenu";
import {UserMenu} from "./UserMenu";

const readlineSync = require('readline-sync');

export class MainMenu {
    private adminMenu: AdminMenu = new AdminMenu();
    private userMenu: UserMenu = new UserMenu();
    private userManager: UserManager = new UserManager();
    private menu: string = `
    ......Phần mềm quản lí món ăn.....
    1. Đăng nhập Admin/User
    2. Đăng kí tài khoản User
    3. Thoát`

    public selection(): void {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 3) {
                    console.log("Mời chọn lại");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    let username = readlineSync.question("Email dang nhap: ");
                    let password = readlineSync.question("Mat khau: ");
                    let status = this.userManager.login(username, password);
                    if (status == -1) {
                        console.log("Sai tên tài khoản hoặc mật khẩu ");
                    } else if (status == 0) {
                        // Goi den amdin
                        this.adminMenu.selection();
                    } else {
                        // Goi den User
                        this.userMenu.selection();
                    }
                    break;
                }
                case 2: {
                    let flag = true;
                    while (flag) {
                        var username = readlineSync.question("Email dang ki?: ");
                        if (!MainMenu.validateEmail(username)) {
                            console.log(
                                "Định dạng Email không hợp lệ!"
                            );
                        } else {
                            flag = false;
                        }
                    }

                    while (!flag) {
                        var password = readlineSync.question("Mat Khau?: ");
                        if (!MainMenu.validatePassWord(password)) {
                            console.log(
                                "Mật khẩu phải có tối thiểu tám ký tự, ít nhất một chữ cái và một số !"
                            );
                        } else {
                            flag = true;
                        }
                    }
                    var role = 1;
                    this.userManager.register(username, password, role);
                    console.log("Tạo tài khoản đặt món thành công!")
                    break;
                }
                case 3:
                    return;
            }
        }
    }
    static validatePassWord(inputPassword: string) {
        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(inputPassword);
    }
    static validateEmail(inputEmail: string) {
        let regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(inputEmail);
    }
}
