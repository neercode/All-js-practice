let arr = ["ram", "shyam", "mohan"]
let mar = "this is ass news text";
let newarr = ["1", "2", "18", "3", "6", "15"]
let newarr2 = ["knvn", "bkdvbkbck"]

var st1r = "JavaScript is fun";
var output = st1r
.split("")
.reverse()
.join("");
console.log(output);

var qwerty = "john".split('');
console.log(qwerty)
var qwerty2 = qwerty.reverse();
console.log(qwerty2)
var qwerty3 = "jones".split('');
var n =qwerty2.push(qwerty3);
console.log(n)
console.log("array 1: length=" + qwerty.length + " last=" + qwerty.slice(-1));
console.log("array 2: length=" + qwerty2.length + " last=" + qwerty2.slice(-1));


console.log(false=="0")    //true
console.log(0.2+0.1)


let newname = mar.split(" ");
console.log(newname)

// let concatarr = arr.concat(newarr2, newarr)
let concatarr = [...arr, ...newarr, ...newarr2]
console.log(concatarr);

const joiningelements = arr.join("-");



console.log(joiningelements);
console.log(newarr.sort());
let a = arr.sort();
console.log(a)

const hifhfh = (a, b) => {
    return a - b;
}
newarr.sort(hifhfh)
console.log(newarr)



// this will delete the element but occupy the space and element no will be the same 
let remove = delete arr[1];
console.log(arr);
// splice & slice method
// slice will take out the elements and form a new array 
let neeraj = ["shyam", "rahul", "karan", "sita", "jyoit"]
let pant = neeraj.slice(1, 3)
console.log(pant)
let neer = neeraj.slice(2) //will return whole array with index 2
console.log(neer)


//splice :it can remove and add elemnets in  existing array

// remove
const fff = neeraj.splice(1, 3)
console.log(neeraj)
    // add
let iooio = ["shyam", "rahul", "karan", "sita", "jyoit"]
const rrr = iooio.splice(2, 1, "gita", "bahadur")

console.log(iooio);


// .........................................................
let arr1 = ["ram", "shyam", "mohan"]
    // for (i = 0; i < arr1.length; i++) {
    //     console.log(`first element position  is ${i} element is ${arr1[i]} `)
    // }
arr1.forEach((v) => {
    console.log(v);
})
let var1 = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9", ["10", "11", "12"]]
]
console.log(var1[2][3][1]);

// ------------------------------------------------------------------
const items = [
    { name: "bike", price: 100 },
    { name: "tv", price: 200 },
    { name: "album", price: 10 },
    { name: "book", price: 5 },
    { name: "phone", price: 500 },
    { name: "computer", price: 1000 },
    { name: "keyboard", price: 25 }

];
//find out the name whose price is greater than more than 100
let filtereditems = items.filter((v) => v.price > 100).map((v) => v.name)


console.log(items);
console.log(filtereditems);
//find out the name whose price is greater than more than 100 by reduce method
let reducemethod = items.reduce((acc, curv, index, array) => {
    debugger;
    if (curv.price > 100) {
        return acc = acc.push(curv.name);


    }

})
console.log(reducemethod)

// ..........................................
let mapped = items.map((v) => {
    return v.name;
    // return (v.name === "bike");

})
console.log(mapped);

// ...............................
let founditem = items.find((v) => {
    return (v.name === "bike");
})
console.log(founditem)
    // ................................
let foreach = items.forEach((v) => {
        console.log(v.price)
    })
    // ................................ returns boolean value
const inexpensiveitems = items.some((v) => {
    return v.price <= 100
})
console.log(inexpensiveitems)
    // ................................ returns boolean value
const inexpensiveitems1 = items.every((v) => {
    return v.price <= 1000
})
console.log(inexpensiveitems1)


// ................................ reduce



// ................................ includes
const includestwo = items.includes(2)
console.log(includestwo)


const a1 = ["1", "2"];
console.log(a1);
const b1 = Array.isArray(a1)
console.log(b1);


const ac1 = "vbdvkbkvvkvkvkn"
console.log(ac1);
const bc1 = Array.isArray(ac1)
console.log(bc1);



var mmm = [-3, 8, 7, 6, 5, -4, 3, 2, 1, 1, 2, 12];
// Sample Output : -4,-3,1,2,3,5,6,7,8
var kkk = [...new Set(mmm)]; //duplicates items remove
console.log(kkk)
const nnn = kkk.sort((a, b) => {
    return a - b;
})
console.log(nnn)



const lll = ["g", "h", "1", "m"]
const yyy = lll.toString();
console.log(yyy);

//........................................................
// changing elements in array to binary 
let ttt = ["5", "2", "3", "4"]
    // changing to binary
let ytyt = ttt.map((x) => x.toString(2));
console.log(ytyt);
//double the  every elements
let sss = ttt.map((x) => {
    return x * 2
})
console.log(sss);


let x = ["1", "2", "3", "4", "5", "6"]
let y = x.filter((v) => {
    return v > 4;
})
console.log(y);

// reducer method thapa technical is the best

let array1 = [1, 2, 3, 4, 5, 6, 7]
let array2 = array1.reduce((accumulator, curvalue, index, array) => {
    // debugger;
    return accumulator = (accumulator) + curvalue;
}, 7)
console.log(array2);
// average of values of array
let array3 = array1.reduce((acc, curv, index, array) => {

    // debugger;
    let total = acc + curv;
    if (index === array1.length - 1) {
        return total / array1.length
    }
    return total;
})
console.log(array3);


function mult() {
    for (i = 1; i <= 10; i++) {
        document.write(`2 x ${ i } = ${ 2 * i }`);
        document.write("<br>");
    }
}
mult();


// ............................
let str = [1, 2, 3, 4, 5, 6, 9, 8, 7]
let yu = str.slice(1, 3);
console.log(yu);
// str.splice(0, 5, "ghgjgj", 'qwerty');
// str.splice(3, 2);
delete str[3]
delete str[4]
console.log(str);



// string manupalation
let hi12 = "this is javascript code"
let hgjk = hi12.substr(8, 22);
console.log(hgjk);
let tyty = hi12.substring(8, 24);
console.log(tyty);


// **********************************************************************************************
// Array and object destructuring


let alphabet =["A","B","C","D","E"]
 const [a1a,,c1c,...rest]=alphabet 
 console.log(a1a);    //A
 console.log(rest)     //D,E

 function sumandmultiply(a,b){
    return [a+b,a*b,a/b]
 }
 const [sum,multiply,division="no division"]=sumandmultiply(5,2)
 console.log(sum)     //7
 console.log(multiply)     //10
 console.log(division)     //2.5

// object destructuring
const person1={
    name:"john",
    age:25,
    food:"cake",
    address:{
        city:"delhi",
        state:"Newdelhi"
    },
    color:"red"
}
const {name:fname,age=32,food,address:{city,state},car="maruti",...restparameter}=person1
console.log(car)  //maruti
console.log(fname)  //john(mapping goes through)
console.log(age)  //25(bcs it alraedy holds age 25 if not holds then 32)
console.log(city)  //delhi
console.log(state) //newdelhi
console.log(restparameter) ////{color:red}


// combining objects
const personA={
   
    age:25,
    food:"cake",
    address:{
        city:"delhi",
        state:"Newdelhi"
    },
    color:"yellow"
}
const personB={
    name:"john",
    
    food:"watermelon",
    
    color:"red"
}
const person3={...personA,...personB}
console.log(person3)   ////{age: 25, food: 'watermelon', address: {…}, color: 'red', name: 'john'}
// .............................................


const person123={
    name:"john",
    age:25,
    food:"cake",
    address:{
        city:"delhi",
        state:"Newdelhi"
    },
    color:"red"
}
function printUser ({name,age,food="watrmelon"}){
    console.log (`name is ${name} ,age is ${age } , loved food is ${food}`)
                 // name is john ,age is 25 , love dfood is cake
}
printUser(person123);


// *******************************************************************************************
// .............................
// let akjkkjk = document.getElementById("one");
// akjkkjk.innerText = "FKFSKNK"

// const fun = () => {
//     alert("nnvvnvnvk")
// }
// let counter = 0;

// setTimeout(fun, 2000);




// setTimeout(() => {
//     alert("mvvvkn")
// }, 2000);

// let t = setInterval(() => {
//     alert("jfvjbvjbvj")
// }, 2000);

// let counter;
// for (let counter = 0; counter < 5; counter++);
// if (counter == 4) {
//     clearInterval(t)
// }
