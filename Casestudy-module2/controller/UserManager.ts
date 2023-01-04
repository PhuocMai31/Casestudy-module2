import {User} from "../model/User";


export class UserManager{
    private userList: User[] = [];
    constructor() {
        this.userList.push(new User('admin', '123', 0));
        this.userList.push(new User('user', '123', 1));
    }

    register(username: string, password: string, role: number){
        this.userList.push(new User(username, password,role = 1));
    }
    login(username: string, password: string): number{
        let index = -1;
        this.userList.map((user)=>{
            if(user.getUsername() === username && user.getPassword() === password){
                index = user.getRole();
                return;
            }
        })
        return index;
    }
}