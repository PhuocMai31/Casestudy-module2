
import {food} from "./fooditem";
import  {Foodmanager} from "./foodmanager"
import {User} from "./User";
export default class Userfoodmanager {

    fooddro = []

    order(name: string) {
        for (let i = 0;  i <  Foodmanager.listmenu.length; i++) {
            if (Foodmanager.listmenu[i].getName() == name) {
                this.fooddro.push(Foodmanager.listmenu[i])
                console.log("Đặt món thành công!")
            } else {
                console.log("---Không có món ăn này---")
            }
        }
    }
    showoder() {
        return this.fooddro;
    }
    total(){
        let sum = 0;
        let sl = 0;
        for (const i of this.fooddro) {
            sum = sum + i.getPrice();
            sl = sl + 1;
        }

        console.log(`Tổng số tiền bạn cần thanh toán cho ${sl} món đã đặt là: ${sum} VNĐ `)
    }
    delete(name) {
        let index=this.findById(name);
        if(index==-1){
            console.log("Danh sách đã dặt không có món ăn này")
        }else{
            this.fooddro.splice(index,1)
            console.log("Xóa món thành công");
        }

    }
    findById(name: string) {
        for(let i = 0; i< this.fooddro.length; i++){
            if (this.fooddro[i].getName() == name){
                return i;
            }
        }
        return -1;
    }



































































    // constructor() {
    //     this.foodorder.push(new food(1,"mi cay", 25000));
    //     this.foodorder.push(new food(3,"mi xao", 40000));
    //     this.foodorder.push(new food(4,"mi lanh", 45000));
    //     this.foodorder.push(new food(5,"com chien", 50000));
    //
    // }
};



