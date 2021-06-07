var person= {
   name: 'Robeyoul Awal',
   occupation: 'student',
   subject: 'Finance',
   semester: [
      
      {
         semesterName: '1st',
         subject:['Accunting','Finance','Banking']
         
      },
      {
         semesterName: '2nd',
         subject: ['Marketing','Insurance','Math']
      },
      {
         semesterName: '3rd',
         subject: ['Economic','Public','Management']
      }
      ]
}


for( let props in person.semester){
   console.log(person.semester[props]);
}

/* output

{ semesterName: '1st', subject: [ 'Accunting', 'Finance', 'Banking' ] }

{ semesterName: '2nd', subject: [ 'Marketing', 'Insurance', 'Math' ] }

{
  semesterName: '3rd',
  subject: [ 'Economic', 'Public', 'Management' ]
}
*/



