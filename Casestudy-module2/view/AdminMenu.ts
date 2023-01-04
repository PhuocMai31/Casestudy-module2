import {Foodmanager} from "../model/foodmanager";

const readlineSync = require('readline-sync');

export class AdminMenu{
    public adminmanager = new Foodmanager()
    private menu = `Xin chào Admin:
                     ---Vui lòng chọn chức năng---
                    1.Thêm món
                    2.Hiển thị danh sách món ăn
                    3.Sửa giá món
                    4.Xóa món
                    5.Thoát `;
    selection(){
        while(true){
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Choice: ");
                if (choice < 1 || choice > 5) {
                    console.log("Wrong choice. Try again");
                }
            }
            while (choice < 1 || choice > 5);

            switch (choice){
                case 1:
                    let id = readlineSync.question("Id: ");
                    let foodname = readlineSync.question("Ten Mon: ");
                    let price = +readlineSync.question("Gia Tien: ");
                    this.adminmanager.add(id,foodname,price)
                    console.log('"Món ăn đã được thêm vào menu thành công"')
                    break;
                case 2:
                    console.log("Danh sách Món ăn: ")
                    console.table(this.adminmanager.show())
                    break;
                case 3:
                    let idupdate = readlineSync.question("Ban muon sua gia mon an theo id nao: ");
                    let priceupdate = +readlineSync.question("Nhap vao gia tien muon sua: ");
                    this.adminmanager.update(idupdate,priceupdate)
                    break;

                case 4:
                    let idremove = readlineSync.question("Bạn muốn xóa món ăn theo id nào?: ");
                    this.adminmanager.delete(idremove);
                    break;
                case 5:
                    return;
            }
        }
    }
}
