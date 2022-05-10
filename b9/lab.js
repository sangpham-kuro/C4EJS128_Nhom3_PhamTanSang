// let a = 10;
// let b = 15;
// //  1-1
// console.log("1-1");
// if (a > b) {
//     console.log(" a lon hon b");
// } else {
//     console.log(" a nho hon b");
// }

// // 1-2
// console.log("1-2");
// if (a == 10) {
//     console.log("a bang 10 ");
// } else {
//     console.log(" a khong bang 10");
// }

// // 1-3
// console.log("1-3");
// if (a === "10") {
//     console.log("a bang 10 va cung kieu du lieu");
// } else {
//     if (a == 10) {
//         console.log("a bang 10 va khong cung kieu du lieu");
//     } else {
//         console.log("a khong bang 10 va khong cung kieu du lieu");
//     }

// }

// // 2-a
// console.log("2");
// var a = 10;
// var b = Number(a);
// var c = a * 1;
// console.log(a, b, c);

// // 2-b
//    console.log("2-b");
// var a = 10;
// var b = '';
//     if (a) {
//        console.log('a is truthy');
//     }

//     if (b) {
//        console.log('b is truthy');
//     }

// 3-1
//    console.log("3-1");
// let a = "mindX";
//         let b = '';

//         if (a || b) {
//         	console.log("hello")
//         }

// 3-2
// console.log("3-2");
// let a = "mindX";
//         let b = '';

//         if (a && true && !b) {
//         	console.log("hello")
//         }

//4
console.log("4");
number = prompt("Nhap number: ");
if (number % 3 === 0) {
    console.log(number / 3);
} else {
    console.log( number," khong chia het cho 3 va du ", (number%3));
  }