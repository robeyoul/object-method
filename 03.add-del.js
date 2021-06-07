/* 
here  i do how to add and delete item in object
*/

var person= {
   name: 'Robeyoul Awal',
   Age: 22
}
// adding item
person.married= true
person['country']= 'Bnagladesh'

console.log(person);
/* output

{
  name: 'Robeyoul Awal',
  Age: 22,
  married: true,
  country: 'Bnagladesh'
}
*/

//delete item

delete person.country

console.log(person);
/* output
{ name: 'Robeyoul Awal', Age: 22, married: true }
*/