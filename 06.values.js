/* 

Object.values(objName) return the value of the object
*/

var person={
   name: 'Robeyoul Awal',
   roll: 10,
   married: true,
   fullName: function(){
      console.log(this.name+ this.roll);
   }
}


console.log(Object.values(person));

/* output 
[ 'Robeyoul Awal', 10, true, [Function: fullName] ]

*/

