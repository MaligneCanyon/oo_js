let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp; // 1
// we don't know for certain whether we are ref'ing boo.myProp (far.myProp
// may have been reassigned)

console.log(far.hasOwnProperty('myProp')); // F; inherited, owned by 'boo'
far.myProp = 2;
console.log(far.hasOwnProperty('myProp')); // T; overriden, owned by 'far'
