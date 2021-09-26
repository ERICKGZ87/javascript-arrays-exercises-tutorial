var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];
var newpeople= [];


function deletePerson(a,b,) {
    for (let i = 0; i <= people.length - 1; i++) {
            
        let data = people[i]
        newpeople.push(data)
      
        
            if (data ==a || data==b)
            { 
             newpeople.pop(data);
            
            }
                 
             
    }
    return newpeople
   
}


console.log(deletePerson('daniella','emilio'));
newpeople=[]
console.log(deletePerson('juan','emilio'));
newpeople=[]
console.log(deletePerson('emilio')); 