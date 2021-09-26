var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
for (let i =0;i<=chunk_one.length-1;i++)
{
    let data=chunk_one[i];
    newArray.push(data)
}
for (let x =0;x<=chunk_two.length-1;x++)
{
    let data2=chunk_two[x]
    newArray.push(data2)

}

    
    return newArray
}


console.log(mergeArrays());