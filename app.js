//2) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

function multiplier(array) {
  let first = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      first += Math.pow(array[i], 2);
      console.log(array[i]+" * "+array[i]+" = "+ Math.pow(array[i], 2));
    }
  }
  return first;
}

console.log("final: " + multiplier([1,2,3,4,5,6,7,8,9,10]));








//3) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.


function isItDivided(params){
    for (let i = 0; i < params.length; i++) {
        let num = params[i];
        if (num%3==0&&num%7==0) {
            console.log( num + ". Becuase: " + (num+ " / " + "3" + " = " + (num / 3)) + "       &       " + (num+ " / " + "7" + " = " + (num / 7)))        
        }
    }
}
isItDivided([3,4,5,7,21,42,49,84, 105, 140])


