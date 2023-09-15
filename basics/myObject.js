"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "devyn", age: 5, isActive: true };
//passed variable is a object
function saveUser(user) {
    return "".concat(user.name, " ").concat(user.age, " ").concat(user.isActive);
}
saveUser(user);
function createuser() {
    return { name: "devyn", age: 5, isActive: true };
}
createuser();
