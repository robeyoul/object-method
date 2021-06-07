var person= {
   name: 'Robeyoul Awal',
   Age: 30,
   Married: true,
   nationality: 'Bangladeshi'
   
}

for (props in person){
   console.log(`${props}: ${person[props]}`);
}

/* output

name: Robeyoul Awal
Age: 30
Married: true
nationality: Bangladeshi


*/