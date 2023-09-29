function largerNum(getalA, getalB){
  if(getalA > getalB){
    return getalA;
  } 
  else if(getalA < getalB){
    return getalB;
  } 
  else {
    return 0;
  }
}
let x = largerNum(7, 9);
console.log(x);

function myFunction(a, b){
  let firstArgumentBigger = a >b;
  console.log(firstArgumentBigger);
}