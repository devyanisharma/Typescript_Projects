//passed variable is a object
const user = {name: "devyn",age : 5, isActive : true}
function saveUser(user:{name:string, age:number, isActive:boolean}):string{
    return `${user.name} ${user.age} ${user.isActive}`
}
saveUser(user)

//return type is variable
function createuser():{name:string, age:number, isActive:boolean}{
    return {name: "devyn",age : 5, isActive : true};

}
createuser();

export {}