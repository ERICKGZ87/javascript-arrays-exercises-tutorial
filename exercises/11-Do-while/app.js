let i = 21;

let result='';

do {

  i = i-1;
  result +="\n"+i
  if (i > 0 && i % 5 == 0 )
  {
    result+='!'
  }
  

} while (i>1);
console.log(result +"\n"+'LIFTOFF')



