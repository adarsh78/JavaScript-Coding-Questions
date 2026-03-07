function multiplicationTable (num) {
    let mul = ""
    if(num < 1) return "Enter number greater than or equal to 1";

    for(let i = 1; i <= 10; i++){
        mul = num + " " + "*" + " " + i + " = " + (num * i);
        console.log(mul);
    }
}

multiplicationTable(5);