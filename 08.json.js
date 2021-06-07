var person = {
   name: 'Robeyoul',
   Roll: 10,
   Year: 'fourteen'
}
//convert object to json
var string= JSON.stringify(person)

console.log(string);


/* 
output

{
"name":"Robeyoul",
"Roll":10,
"Year":"fourteen"
   
}
*/

// convert json to object
var x= JSON.parse(string)
console.log(x);
/* 
output 

{ 
name: 'Robeyoul', 
Roll: 10,
Year: 'fourteen'
}
*/