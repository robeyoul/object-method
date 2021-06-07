/* 
getter এবং setter 


*/
// function vs get

var person= {
   name: 'Robeyoul Awal',
   Roll: 23,
   Class: 'Six',
   language: 'en',
   lang(){
      return this.language
   }
   
}

console.log(person.lang()); //en

//getter


var person1= {
   name: 'Robeyoul Awal',
   Roll: 23,
   Class: 'Six',
   language: 'en',
   get lang(){
      return this.language
   }
   
}

console.log(person1.lang); // en
