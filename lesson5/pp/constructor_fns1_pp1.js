let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // runs the constructor code; logs "2"

foo.bar(); // invokes the 'bar' method  on 'foo'; logs "2"
Foo(); // invokes 'Foo' w/o 'new'; context is global obj; logs "2"

obj = {};
Foo.call(obj); // invokes 'Foo' w/o 'new'; context is 'obj'; logs "2"
obj.bar(); // invokes the 'bar' method  on 'obj'; logs "2"

console.log(this.a); // logs "2" (in a browser), "undefined" (in node)
