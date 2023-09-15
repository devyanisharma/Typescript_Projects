/*all variables of function are compulsary to have type. 
if you want any variable to be default we can assign value like we did for isadmin */

//normal function
function user(name:string,email:string,age:number){
    console.log( `${name} ${email}  ${age}`);
}
user("devyani","a@b.com",24)

//arrow function
var adduser =  (name:string,email:string, isadmin:boolean = false ):string=>{
    return `${name} ${email}  ${isadmin}`
}
adduser("devyani","a@b.com");

//when we are returning something we need to mention type of return value or else it will gave error while processing further with that returned value
function addtwo(num:number):number{
    return num+2;
}
var getnumber = addtwo(5);

//arrays
const heros = ["spiderman","thor","captaionAmerica"];
heros.map((hero):string =>{
    return `heroname is ${hero}`
})

export {}