let s = parseInt(prompt("Nhập số giây: ")); // 4800
let h = s / 3600;
if (h < 1) {  // tính giờ
    h = 0;
} else {
    h = parseInt(h);
    s = s - h * 3600;
}

let p = s / 60;
if (h < 1) {  // tính phút
    h = 0;
} else {
    p = parseInt(p);
    s = s - p * 60;
}
alert(`${h} giờ ${p} phút ${s} giây`); 