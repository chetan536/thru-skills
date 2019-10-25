let name = 'ashu';
let age = 25;
let gender = 'male';

let obj = {  name,
    age,  
    gender,
   desc(){
       console.log(this.name)
   }
}

console.log(obj)

obj.desc();