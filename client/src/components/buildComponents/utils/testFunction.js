let arr = [];

const element = "element"

function incrementer (n, item ,array){
    const newArr = [];
for (let i = 0; i<n;i++ ){
    newArr.push(item)
}
array = newArr
return array
}



console.log(incrementer(6, element, arr))