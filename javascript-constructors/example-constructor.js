
function ExampleConstructor() {}
console.log('ExampleConstructor prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype: ', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('example object: ', example);

var isInstanceExample = example instanceof ExampleConstructor;
console.log('instanceof ExampleConstructor: ', isInstanceExample);
