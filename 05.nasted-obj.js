var myObj= {
   name : 'Robeyoul Awal',
   age: 30,
   cars: [
      {
         name: 'ford', 
         model:['focus','Muskan']
         
      },
      {
         name: 'corola',
         model:['v5','bigBoss','Glam']
         
      },
      {
         name: 'BMW',
         model:['abz5','Mpc10']
         
      }
      ]
}

// print only the car model

for (let i in myObj.cars){
   console.log(myObj.cars[i].model);
}

/* output

[ 'focus', 'Muskan' ]
[ 'v5', 'bigBoss', 'Glam' ]
[ 'abz5', 'Mpc10' ]
*/