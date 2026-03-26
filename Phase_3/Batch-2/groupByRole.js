function groupbyRole(arr) {

    let obj = {};

    for(let char of arr){
        if(!obj[char.role]){
            obj[char.role] = [];
        }

        obj[char.role].push(char);
    }
    return obj;
}

console.log(
  groupbyRole([
    { name: "Adarsh", role: "frontend" },
    { name: "Rahul", role: "backend" },
    { name: "Amit", role: "frontend" },
    { name: "Neha", role: "designer" },
  ]),
);
