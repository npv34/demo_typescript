"use strict";
exports.__esModule = true;
exports.Model = void 0;
var Model;
(function (Model) {
    var User = /** @class */ (function () {
        function User(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
        }
        User.prototype.setName = function (name) {
            this.name = name;
        };
        return User;
    }());
    Model.User = User;
})(Model = exports.Model || (exports.Model = {}));
