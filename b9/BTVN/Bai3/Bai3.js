// nextDay

// input
let day = parseInt(prompt("Nhập ngày: "));
let month = parseInt(prompt("Nhập tháng: "));
let year = parseInt(prompt("Nhập năm: "));
let maxDay;
//input

//kiểm tra tháng
switch (month <= 7) {
    case true:  //trường hợp tháng nhỏ hơn hoặc bằng 7
        if (month === 2) {

            //kiểm tra năm nhuận nếu là tháng 2
            if ((year % 4 === 0) && (year % 100 !== 0)) {
                maxDay = 29;
    
            } else {
                maxDay = 28;
            }
            // kiểm tra năm nhuận nếu là tháng 2
            break;
        } else {
            // kiểm tra tháng nếu không phải tháng 2
            if (month % 2 === 0) {
                maxDay = 30;
            } else {
                maxDay = 31;
            }
            // kiểm tra tháng nếu không phải tháng 2
        }
        break;

    default: //trường hợp tháng lớn hơn 7
        if (month % 2 === 0) {
            maxDay = 31;
        } else {
            maxDay = 30;
        }
        break;
}
// tính ngày tiếp theo
if (day !== maxDay) {    //trường hợp không qua tháng mới
    day++;
} else {    // trường hợp qua tháng mới
    day = 1;
    if (month !== 12) { //trường hợp không qua năm mới
        month++;
    } else {    //trường hợp qua năm mới
        month = 1;
        year++;
    }
}
// tính ngày tiếp theo

// in ra ngày kế tiếp (output)
console.log(`Ngày kế tiếp: ${day}/${month}/${year}`);
// in ra ngày kế tiếp (output)
