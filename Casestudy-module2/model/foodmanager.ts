
import {food} from "./fooditem";

export class Foodmanager {
       static listmenu:food[] =[]
        add(id: number, name: string, price: number){
                Foodmanager.listmenu.push(new food(id, name, price))
        }
        update(id,price: number) {
                let a=this.findById(id);
                if(a==-1){
                        console.log("----Không Có Món ăn sử dụng ID này-----")
                }else{
                        for (const i of Foodmanager.listmenu) {
                                if (i.getId() == id ){
                                         i.setPrice(price)
                                }
                        }
                        console.log("-----Sửa giá món ăn thành công------")
                }
        }
        show() {
                return Foodmanager.listmenu;
        }
        delete(id) {
                let index=this.findById(id);
                if(index==-1){
                        console.log("----Không Có Món ăn sử dụng ID này---")
                }else{
                        Foodmanager.listmenu.splice(index,1)
                        console.log("Xóa món ăn khỏi menu thành công")
                }

        }
        findById(id) {
                for(let i = 0; i< Foodmanager.listmenu.length; i++){
                        if (Foodmanager.listmenu[i].getId()==id){
                                return i;
                        }
                }
                return -1;
        }
}
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
