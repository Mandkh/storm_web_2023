console.log('Lesson Day 20 - JS Arrays');

// array of numbers
var myNumbers = [5, 8, 103, 32, 7];
console.log(myNumbers);

// array of strings
var shoppingList = ['milk', 'eggs', 'bread', 'cheese', 'butter'];
console.log(shoppingList);

var randomList = [5, 7, 'milk', 'eggs', true, false];
console.log(randomList);

// accesing array elements

console.log(myNumbers[2]); // 103

//change array elements
console.log('before change shoppinglist: ', shoppingList);
shoppingList[3] = 'meat';
console.log('after change the shoppingLists:', shoppingList)
//example of the arrray
var arr = [5, 8, 103, 32, 7];



println(arr[2]);


var shoppingList = ["bread", "eggs",
    "milk", "cookies"];

// Let's print out index 1
println(shoppingList[1]);


// Let's get cake instead of milk
println(shoppingList[2]);
shoppingList[2] = "cake";
println(shoppingList[2])
//                                       PUSHING
var arr = [];
arr.push(5);

println(arr[0]);
println(arr[1]);

// Push lets you add to the array
arr.push(12);
arr.push(1);
arr.push(200);
arr.push(3);

println(arr[4]);
// Pop removes
var last = arr.pop();

prrintln(last);
println(arr[4]);
//                                    Print shopping list 
var arr = ["bread", "eggs",
    "milk", "cookies"];

for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    println(cur);
}

var list = ["bread", "eggs", "milk", "cookies", "bananas", "tuna", "lettuce", "yogurt", "cheese", "chicken", "cucumbers", "orange juice", "salt", "doritos", "lemonade", "apples", "paper towels", "red onion", "minced garlic", "tumeric", "donuts", "bagels", "crackers", "red pepper", "green pepper", "spinach", "canola oil", "vanilla", "flour", "brown sugar", "powdered sugar", "lime"];

for (var i = 0; i < list.length; i++) {
    println(list[i]);
}
//                                      Measured print
var list = ["bread", "eggs", "milk", "cookies", "bananas", "tuna", "lettuce", "yogurt", "cheese", "chicken", "cucumbers", "orange juice", 'lime, potatoes'];

// Prints the first 5 items in the list

for (var i = 0; i < 5; i++) {
    println(list[i]);
}

// Prints the first half of the list

for (var i = 0; i < list.length / 2; i++) {
    println(list[i]);
}
//                                  CAN CHANGE THE PRINT
var arr = [1, 8, 123, 103, 992,
    21, 2, 2, 144, 523,
    13, 90, 77, 12, 13];

var max = arr[0]

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
        max = arr[i];
    }
}

println(max);
//                        multiply all define in var 
	// Write your code here
	var arr = [1, 8, 3, 4, 2, 9];
	var sum = 1;
	for (var i = 0; i < arr.length; i++) {
	    var cur = arr[i];
	    sum = sum * cur;
	   
	}
    println(sum);
print("hello, ");
print("world");
//                                auejg08h w65ny 
var arr = [1,2,3,4];
function start(){
    var arr = [1, 2, 3, 4, 5];
    var doubled = doubleList(arr);
    print(doubled);
}
    function doubleList(arr){
       
        var double = [];
        for (var i = 0; i < arr.length; i++){
        var current = arr[i];
        double = current + "," + arr[i];
        
        println(double);
        
        }
    }
