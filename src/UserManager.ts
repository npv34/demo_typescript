import {IUser} from "../interface/IUser";
import {GithubService} from "../service/GithubService";

export class UserManager {
    private githubService: any;

    constructor() {
        this.githubService = new GithubService();
    }

    showList() {
        this.githubService.getAll().then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.message)
        });
    }
}
