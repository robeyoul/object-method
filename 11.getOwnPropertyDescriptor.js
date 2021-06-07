/* 
Object.getOwnPropertyDescriptor - এর মাধ্যমে আমরা object এর নিজস্ব প্রোপার্টি গুলো দেখতে পারব।



*/


var myObj={
   a: 2
}

console.log(myObj); // {a:2}
console.log(myObj.a); // 2

console.log(Object.getOwnPropertyDescriptor(myObj,'a'));


/* output

      { 
         value: 2,
         writable: true, 
         enumerable: true, 
         configurable: true 
         
      }
*/






/* -----------------------------------
  using defineProperty
-------------------------------------*/
var myObj1= {}

Object.defineProperty(myObj1,'a',{
   value: 4
})
console.log(myObj1); // {}
console.log(myObj1.a); // 4

console.log(Object.getOwnPropertyDescriptor(myObj1,'a'));


/* output


      { 
         value: 4, 
         writable: false, 
         enumerable: false, 
         configurable: false 
            
      }

## here everything is false.
*/


/* 
--------------------------------------
--------------------------------------
######         writable       #######
--------------------------------------
writable বলতে object create করার পর বাহির থেকে নতুন কোন প্রপার্টি যোগ করা বুঝায়।
যেমন: person নামের একটি object আছে। 

var person={
   name: 'Raju'
}
 যদি নতুন প্রপার্টি যোগ করি -
 person.roll= 20
 
 এটাই হলো writable। writable যদি true হয় থাকলে আমরা বাহির থেকে প্রপার্টি অ্যাড করতে পারবো কিন্তু false হলে পারব না।
 
 
 
 -------------------------------------
 #####         enumerable       #####
 -------------------------------------

enumerable বলতে পুরো object কে show করা বুঝায়। যেমন:

var person={
   a: 2
}

console.log(person) 
output should be => {a:2}

এখানে আমরা পুরো object কে তার প্রপার্টি ও ভ্যালু একসাথে দেখতে পাচ্ছি। এটাই enumerable।

যদি enumerable true হয় তাহলে আমরা পুরো object কে উপরের মত দেখতে পাব।
false হলে আমরা object টি দেখতে পাব না। কিন্তু প্রপার্টি দিয়ে ভ্যালু গুলো বের করা যাবে। যেমন:
console.log(person.a) //2

-------------------------------------
#####       configurable       #####
-------------------------------------

configurable বলতে object কে reassign করা এবং delete করা বুঝায়। যেমন:

var person={
   name: 'Robeyoul',
   roll: 20
}
delete person.roll



var person ={
   name: 'Raju'
}
log(person) // {name: 'Raju'}

এখানে আমরা object কে reassign করতে পারছি।

যদি configurable true থাকে তাহলে আমরা object কে reassign এবং delete করতে পারবো। আর যদি false থেকে তাহলে পারব না।

*/
