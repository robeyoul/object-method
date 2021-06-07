


// creating an object

var person ={
   fName: 'Robeyoul Awal ',
   lName: 'Raju',
   age: 25,
   married: false,
   skills: ['html','css','Javascript'],
   fullName: function (){
      return this.fName + this.lName
   }
}

console.log(person);

console.log(person.fullName());

// way 2

var newPerson= new Object()

newPerson.name= 'Raju'
newPerson.age= 55
newPerson.married= true

console.log(newPerson);