import Usermanagerr from "../model/Userfoodmanager"
import Userfoodmanager from "../model/Userfoodmanager";
import {Foodmanager} from "../model/foodmanager";
import {AdminMenu} from "./AdminMenu";
const readlineSync = require('readline-sync');

export class UserMenu  {
    private admin = new Foodmanager()
    private userManager = new Userfoodmanager()
    private menu = `Xìn chào User:
            ---Vui lòng chọn chức năng sau----
                    1.Hiển Thị Menu:
                    2.Đặt Món:
                    3.Hiển thị món đã đặt:
                    4.Thanh toán:
                    5.Xóa món đã đặt:
                    6.Exit`;
    selection(){
        while(true){
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 6) {
                    console.log("Chọn sai. Mời chọn lại");
                }
            } while (choice < 1 || choice > 6);
            switch (choice){
                case 2:
                    let foodName: string = readlineSync.question("Moi chon mon: ");
                    this.userManager.order(foodName)
                    break;
                case 3:
                    console.log("Hiển thị món dã đặt ")
                    console.table(this.userManager.showoder())
                    break;
                case 4:
                    this.userManager.total();
                    break;
                case 5:
                    let foodRemove: string = readlineSync.question("Mon ban muon xoa khoi danh sach order: ");
                    this.userManager.delete(foodRemove);
                    break;
                case 1:
                    console.table(this.admin.show());
                    break;
                case 6:
                    return;
            }
        }

    }
}