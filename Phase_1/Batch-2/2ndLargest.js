// Find second largest number in array (without sort)

const secondLargest = (arr) => {
    // let firstLargest = 0;
    // arr.forEach((elem) => {
    //     if(elem > firstLargest);
    //     return elem;
    // });

    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] > arr[i]) return arr[j];
            continue;
        }
    }
}

console.log(secondLargest([1,4,5,3,2]));
console.log(secondLargest([1,14,25,23,42]));