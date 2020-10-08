let a = 10;
let obj = {
  a // err ? obj.a's value is undefined ? no ... equals 10
}
console.log(obj); // { a: 10 }

let newObj = obj;
newObj.a += 10; // reassignment; now 20; mutates newObj and obj
console.log(newObj); // { a: 20 }
console.log(newObj.a); // 20
console.log(obj.a); // 20
console.log(a); // 10

console.log(obj.a === a); // false; 'a' is an immutable primitive
console.log(newObj === obj); // true; both pt to the same obj
