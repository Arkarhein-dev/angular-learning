// enum Role {
//     ADMIN, USER
// }
// console.log(Role.ADMIN);
// console.log(Role.USER);

// // object
// const user :{
//     name:string,
//     age:number,
//     role: Role,
//     isActive?:boolean
// } = {
//     name: "Arkar Hein",
//     age: 23,
//     role: Role.ADMIN
// }
// console.log(user.name);
// console.log(user.age);
// console.log(user);


// ts array
// console.log("************ ts array ************");
// const numbers : number[] = [1,2,3,4,5];
// console.log(numbers);

// const stringArr : Array<string> = ["Hello","World"];
// console.log(stringArr);

// Type ===================================================================================
// type PersonType = {
//     name: string;
//     age: number;
//     status: "active" | "inactive";
//     role: "admin" | "user";
//     grade?: number;
// }
// const person1: PersonType = {
//     name : "Arkar Hein",
//     age : 23,
//     status : "active",
//     role : "user",
//     grade : 12
// }
// console.log(person1);


//  Function ======================================================================
// const addFn = (a: number , b: number)=>{
//     return a+b;
// }

// function addFn2(a:number, b: number): string {
//     return (a+b).toString();
// }

// const result = addFn(10,20);
// console.log(result);
// console.log(addFn2(10,20));

// // custom function type
// type CustomFn = (a: number, b: number) => number;

// const addFn3 : CustomFn= (a,b) =>{
//     return a+b;
// }

// const result2 = addFn3(10,20);
// console.log(result2);


// const printFn = (message : string): void =>{
//     console.log(message);
// } 

// printFn("Hello World");



// // function overloading
// function overloadFn (a: number, b: number): number
// function overloadFn (a: string, b: string): string
// function overloadFn (a : number | string , b : number | string) : number | string {
//     if(typeof a === "number" && typeof b === "number"){
//         return a+b;
//     }
//     if(typeof a === "string" && typeof b === "string"){
//         return a.concat(b);
//     }

//     throw new Error("Invalid input types");
// }

// const result3 = overloadFn("Arkar", "Hein");
// console.log(result3);


// Insersction ===============================================
type Person ={
    name: string;
    age : number;
}
type AdminRole = {
    role : "ADMIN";
}

const admin :Person & AdminRole = {
    name: "Arkar Hein",
    age: 23,
    role: "ADMIN"
}

console.log(admin);
