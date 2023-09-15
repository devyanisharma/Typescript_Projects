/*all variables of function are compulsary to have type.
if you want any variable to be default we can assign value like we did for isadmin */
//normal function
function user(name, email, age) {
    console.log("".concat(name, " ").concat(email, "  ").concat(age));
}
user("devyani", "a@b.com", 24);
//arrow function
var adduser = function (name, email, isadmin) {
    if (isadmin === void 0) { isadmin = false; }
    console.log("".concat(name, " ").concat(email, "  ").concat(isadmin));
};
adduser("devyani", "a@b.com");
//when we are returning something we need to mention type of return value or else it will gave error while processing further with that returned value
function addtwo(num) {
    return num + 2;
}
var getnumber = addtwo(5);
//arrays
var heros = ["spiderman", "thor", "captaionAmerica"];
heros.map(function (hero) {
    return "heroname is ".concat(hero);
});
