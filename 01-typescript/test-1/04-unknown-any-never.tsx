let unknownValue : unknown = 10;
unknownValue = "Hello World";
console.log(unknownValue);
console.log(typeof unknownValue);

let anyValue : any = 10;
anyValue.set = "100";
console.log( typeof anyValue);

let neverValue : never;
neverValue = 10;

neverValue = "Hello World";

neverValue = (() => { throw new Error("This is a never type"); })();