 function text (){

  const figure = [ 1, 3, 6, 8, ];
  const text =['one', 'thee', 'six', 'eight'];
  const a = [];
   for(let i = 0 ; i < arguments.length; i++){
    a [i] = text[arguments[i]];

   }
return a ;
 }

 console.log(text(8,6,3,1))