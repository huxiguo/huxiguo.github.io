function Foo() {
  Foo.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}
Foo.prototype.a = function () {
  console.log(3)
}
Foo.a = function () {
  console.log(4)
}
Foo.a()
let obj = new Foo();
obj.a()
Foo.a()

var fn = undefined;
function Foo() {
  Foo.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
  fn = function () {
    console.log(88);
  }
}
Foo.prototype.a = function () {
  console.log(3)
}
Foo.a = function () {
  console.log(4)
}
fn = function () {
  console.log(99);
}
fn();
Foo.a()
let obj1 = new Foo();
obj1.a()
Foo.a()
fn();