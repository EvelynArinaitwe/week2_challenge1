const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const year_today= 2019;
let birth_year, age;
rl.question('In Which year were you born ? ', (answer) => {
    // TODO: Log the answer in a database
    birth_year= answer;
   
  age= (year_today)-parseInt(birth_year);
  //console.log('you are '+ age + ' years old');
  
  if(age<18){
      console.log(age +' years old. You are a minor');
  }
  else if((age>18) && (age<36)){
      console.log(age +' years old. You are a youth')
  }
  else{
      console.log(age +' years old. You are an elder');
  }
 
    rl.close();
    
  });
  





