// chương trình tìm số nguyên tố

// nhập số cần nhập
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

//tìm số nguyên tố
if (number <= 1) {   //TH nhỏ hơn 2
    console.log(`${number} không phải là số nguyên tố `);
} else {
    if (number === 2) { // nếu number = 2 thì khỏi kiểm tra
        
    } else {    //TH lớn hơn 2
        for (let i = 2; i <= Math.sqrt(number); i++) { 
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }   
    }

    if (isPrime) {
        console.log(`${number} là số nguyên tố`);
    } else {
        console.log(`${number} không phải là số nguyên tố`);
    }
}
//tìm số nguyên tố end

