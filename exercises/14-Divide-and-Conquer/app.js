let list_of_numbers = [1,2,33,10,20,4];
//[4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];
let odd = [];
let even = [];
let juntos=[];

function mergeTwoList(list_of_numbers) {
    for (let i = 0; i <= list_of_numbers.length - 1; i++) {
        let data=list_of_numbers[i];

        if (data %2==0)
        {
                even.push(data)
                juntos.push(data)
        }
        else
        {
            odd.push(data)
            juntos.push(data)
            
        }
    }
    return juntos=odd.concat(even);
}
console.log(mergeTwoList(list_of_numbers))
//console.log(odd.length)
//console.log(even.length)
