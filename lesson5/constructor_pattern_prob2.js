function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
// lizzy.scamper(); // TypeError; scamper is not a fn
// because the constructor was invoked w/o using the 'new' op,
// 'this' creates properties and fns on the global obj, not on 'lizzy'
global.scamper(); //=> I'm scampering!
