// LESSON 3 START 

// 1
// let num = 1000

// for(let i = num; i < 100000; i++){
//     if(i % 3 === 0){
//         console.log(i)
//         break
//     }
// }


// 2

// const user = {
//     name: 'Elnur',
//     height: 179,
//     phone: {
//         model: 'Iphone',
//     },
//     orders: ['book', 'mouse', 'mousepad']
// }


// user.height ++
// user.phone.model = 'Samsung'
// user.phone.version = 'S22'
// delete user.name
// user.orders.shift(0)
// user.orders.pop()
// user.orders.splice(0, 0, 'ball')
// user.orders.push("headphones")

// console.log(user)



// 3

// const info = ["Resul", "Serifov", 35]

// console.log(info[0]+" "+info[1]+', '+String(info[2]))



// ===================================================
// ===================================================

// LESSON 4 START

// 1-ci sual
// WHILE

// const myArr = ['cup', 'plate', 'spoon', 'knife', 'fork']
// let counter = 0
// while (counter<myArr.length) {
// console.log(myArr[counter]);
// counter++;

// }

// -------------


// 2-ci sual

// const myArr = ['xiyar', 'pomidor', 'Sogan', 'yerkoku', 'sarimsaq', 'semeni']

// let counter = 0;

// while (counter < myArr.length) {
//     const el = myArr[counter]
//     if (el[0].toLowerCase() === "s") {
//         console.log(el);
//     }
//     counter++

// }
// -------------------------

// 3-cu sual

// let counter=1
// let result=0
// while (counter<101) {
// result+=counter
//     counter++
// }
// console.log(result);


// ------------

// 4-cu sual

// let counter = 0

// const myArr = ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']

// while (counter < myArr.length) {

//     const el = myArr[counter]
//     counter++
//     if (el.length !== 5) {
//         continue;
//     }
//     console.log(el[el.length - 1]);
// }
// ---------------------

// 5-ci sual

// let counter = 100000

// while (counter > 0) {
//     if (counter % 9999 === 0) {
//         console.log(counter);
//         break;
//     }
//     counter--

// }

// 6-ci sual

// const sentence = 'Men her gun Javascript oyrenirem'
// const saitler = "aıoueəiöü"

// let result = ""
// let counter = 0

// while (counter < sentence.length) {
//     const char = sentence[counter]

//     if (!saitler.includes(char)) {
//         result += char

    
//     }
// counter++
// }

// console.log(result);


// ===================================================
// ===================================================


// LESSON 5 START

// 1-ci sual

//1. 
// let arr = ['cup', 'plate', 'spoon', 'knife', 'fork']

// for(a of arr){
//     console.log(a)
// }

//2.
// arr = ['pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']


// for(a of arr){
//     if (a[0] === 's'){
//         console.log(a)
//     }
// }

//3.

// let result = 0

// for (let i = 1; i < 101; i++) {
//     result += i
// }

// console.log(result)


//4.

// arr = ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']


// for (a of arr) {
//     if (a.length === 5) {
//         console.log(a[a.length-1])
//     }
// }


//5.
// for (let i = 100000; i > 0; i--) {
//     if (i % 9999 === 0) {
//         console.log(i)
//         break
//     }
// }

//6.

// let sentence = "Men her gun Javascript oyrenirem"

// let sait = "aıoueəiöü"

// let result = ""


// for (word of sentence){
//     if (!sait.includes(word)){
//         result += word
//     }
// }

// console.log(result)


//7.
// const computer = {
//     cpu: 'intel i5',
//     ram: '8',
//     gpu: 'NVIDIA',
// }


// for (key in computer){
//     console.log(key, computer[key])
// }



//8.
