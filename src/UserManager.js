"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var GithubService_1 = require("../service/GithubService");
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.githubService = new GithubService_1.GithubService();
    }
    UserManager.prototype.showList = function () {
        this.githubService.getAll().then(function (res) {
            console.log(res);
        })["catch"](function (err) {
            console.log(err.message);
        });
    };
    return UserManager;
}());
exports.UserManager = UserManager;
