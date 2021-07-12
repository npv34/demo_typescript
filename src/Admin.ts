import {Model} from "./User";
import User = Model.User;
import {InterfaceUser} from "../interface/InterfaceUser";

class Admin extends User implements InterfaceUser {

    add(data: any): void {
    }

    delete(index: number): void {
    }

    getAll(): any[] {
        return [];
    }

}
