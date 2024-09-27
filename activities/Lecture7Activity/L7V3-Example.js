// Objects
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// So far we've used Arrays as a way of working with a collection of elements of the same structure or data type. Objects, on the other hand, allow for us to group multiple sets of data that are related to each other or belong together


// Creating Objects
// When defining an object, we can define custom properties with each having its own value, this value can be of any type. For example:

let anObject = {
	left: 1,
	right: 2
}
console.log(anObject.left);
// return 1

// We could also delete an Object's property with the delete operator
delete anObject.left;
console.log(anObject);
// returns {right: 2};

// Why delete an object if we can set its value to null or undefined? It comes down to what we want to do. If we set a property to undefined or null, then we still have the property present in our object. If, on the other hand, we delete a property, then the property and its value are no longer present in our object. So it comes down to asking ourselves whether we need the property or not.


// The IN operator
// We could also check to see if a property is present in an object with the in operator
console.log("left" in anObject);
// returns false since we deleted the property in line #16


// The KEYS function
// We could also check to see which properties are present in an object
console.log(Object.keys(anObject));
// returns ["right"] since we deleted the left property


// The ASSIGN Function
// The assign function is useful to use whenever we want to copy all the properties from one object to another
let object1 = {
	a: 1,
	b: 2,
	c: 3,
	d: null
}
console.log(Object.keys(object1));
// returns ["a", "b", "c","d"] as an array

let object2 = new Object(); // here I've created an empty object to copy the properties of object1 into it

// the syntax for the assign function is Object.assign(target, source)
object2 = Object.assign(object2, object1);
console.log(object2);
// returns { a:1,b:2,c:3,d:null }
console.log(Object.keys(object2));
// returns [ "a","b","c","d" ] 


// Creating an Array of Objects
let schedule =  [
	{
		events: ["dog walk", "breakfast", "class",],
		coffee: false
	},
	{
		events: ["dog walk", "breakfast", "meetings"],
		coffee: true
	}
];
console.log(schedule);
// returns Object, Object

// Mutability
// One of the cool things about Objects, and Arrays, is its mutability, unlike other data types
// We know that JS is a loosely typed language, that is to say that variables are not tied to a specific data type and for the most part we might think that types of values (numbers, stringa, booleans) are mutable since we can change variable values rather easily in JavaScript
// However, JS does something different. When we create a variable (let's say a string) and append a value to it, e.g.,
let string1 = "Hello";
string1 += " World"; //we concatenate "World" to string1
// What JS does here is actually create a new variable with the "Hello World" value and assigns it to string1
// This is done because in JS, strings, numbers and booleans are immutable (they actually can't be changed once we create them, even though it looks like we change them all the time)

// Objects and Arrays are different, they are mutable. We can change the keys in an array or the properties in an Object and have an object have different properties at different points in our script

// We can change the default mutable behaviour of Objects and Arrays by defininf them as "const" instead of "let"

// Object Identity
let objectRef1 = {value: 10};
let objectRef2 = objectRef1;
let objectRef3 = {value: 10};
console.log(objectRef1 == objectRef2);
// returns true
console.log(console.log(objectRef1 == objectRef3));
// returns false

// Why isn't console.log(objectRef1 == objectRef3); true?! This is because there's a difference between having two references to the same object (i.e., objectRef1 and objectRef2) and having two different objects containing the same properties (i.e., objectRef1 and objectRef3). Since objectRef1 and objectRef2 have bindings to the same object (i.e., objectRef1), this means that a change in objectRef1 also changes objectRef2 which we interpret as "objectRef1 and objectRef2 have the same IDENTITY"
// When we wrote 'console.log(objectRef1 == objectRef3);' what we are doing is comparing the identity of the objects


//The Math Object
// The Math object has a large number of math functions (e.g., maximum, minimu, cosine, sine, tangent, acos, square root, pi, etc), which allows us to use these functions much more easily in our code.

console.log(Math.random());
// returns a random number
console.log(Math.floor(Math.random() * 10));
// the Math.floor() function is useful to use when we want to work with a whole random number instead of a fractional one, in this case Math.floor() rounds down to the nearest whole number (based on the result from Math.random() * 10
// Math.ceil() rounds up to the nearest whole number, and Math.round() rounds to the nearest whole number

// Lets create a function that points to a random point in a circle, in this case we want the user to provide us with the radius of the circle so that we can calculate the rest
function randomPointCircle(radius) {
	let angle = Math.random() * 2 * Math.PI;
	return {
		x: radius * Math.cos(angle),
		y: radius * Math.sin(angle)
	};
}
console.log(randomPointCircle(6));
// returns {x:   , y:    }   try it out!


// Optional Property Access
// We can use the TERNARY (?) operator when we're not sure if a given value will produce a property, but still want the interpreter to read a property from the object. 
// The syntax is a?b, which will be read as its equivalent of a.b if a isn't null or undefined, otherwise it will return 'undefined'
// For example:
function city(object) {
	return object.address?.city;
}

console.log(city({address: {city: "Halifax"}}));
// returns Halifax

console.log(city({name: "Gabriella"}));
//returns undefined


//JSON 
// If we want to store data or send data somewhere, we can serialize or convert the data to a flat description of it (since data is innitially just a bunch of memory addresses which is not always useful for working with data). JSON is a popular data serialization format, used a lot in Restful APIs (though not the only data format we can use with Restful APIs).
// JSON uses the same syntax as JS Objects and Arrays, but it does have some restrictions.
// 1. Property names have to be surrounded by quotes ("")
// 2. Only simple data expressions are allowed as values, nothing that requires computation
// 3. Comments are also not allowed

// JSON Syntax Example:
let data = {
	"coffee": false,
	"events": ["work", "meeting"]
}

// Notice the above example is different from the usual Object Syntax we've been using, but that's because now we're using JavaScript Object Notation, we're not creating an JS Object

// JSON's Built-in Functions
// Stringify: converts data to JSON format
let str1 = JSON.stringify({coffee: false, events: ["weekend"]});
console.log(str1);
// returns str1 as a JSON coded string
// {"coffee": false, "events":["weekend"]}

//Parse: converts a JSON string into the value it evaluates to
console.log(JSON.parse(str1).coffee);
// returns false as a boolean value
console.log(JSON.parse(str1).events);
// returns (1)[ weekend ] as an array







