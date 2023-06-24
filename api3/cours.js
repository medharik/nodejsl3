// object destructuring
let personne ={nom:"doe",prenom:"john",age:20 };

//clone 
let personne2={...personne,salaire:8000,nom:"Sarr"};
personne.nom="JANE";
console.log(personne,personne2)
let t=[1,2,3];
let t2=[4,...t,5];
console.log('t2 est ',t2)
// let nom =personne.nom;
// let prenom =personne.prenom;
// let age =personne.age;
// const {age}=personne;
// let t=[1,2,3];
// let  [a,b,c]=[1,2,3];
//spread 
