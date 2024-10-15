var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqueNumbers = [];
const array = numbers.sort((a, b) => a - b);
for (let index = 0; index < array.length-1; index++) {
    if(array[index]==array[index+1]){
        continue;
    }
    uniqueNumbers.push(array[index]);
    
    
}

console.log(uniqueNumbers);
