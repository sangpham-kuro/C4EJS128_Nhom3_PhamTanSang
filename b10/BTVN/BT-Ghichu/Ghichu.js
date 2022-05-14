let note = [];
let bl= true;
function dsnote() {
    console.clear();
   
        for (let i=0; i< note.length;i++) {
            console.log(`${(i+1)} ${note[i]} \n`);
    }
    
}

while (bl) {
    let act = parseInt(prompt("Nhập số để chọn: \n 1. Xem ghi chú \n 2. Thêm ghi chứ \n 3. Sửa ghi chú \n 4. Xóa ghi chú \n 5. Thoát ứng dụng"));
    switch (act) {
        case 1: //xem ghi chú
            if (note.length === 0) {
                console.log("Không có ghi chú");
            } else {
                dsnote();
            let indexWatch= prompt("Nhập số thứ tự ghi chú muốn xem: ");
            console.clear();
            console.log(`${note[indexWatch-1]}`);
            }
            break;
        case 2: // Thêm ghi chú
            note.push(prompt(`Nhập ghi chú ${note.length+1}`));

            break;
    
        case 3: // Sửa ghi chú
            if (note.length === 0) {
                console.log("Không có ghi chú");
            } else {
                dsnote();
                dsnote();
                let indexFix= prompt("Nhập số thứ tự ghi chú muốn sửa: ");
                note[indexFix-1]= prompt("Sửa ghi chú: ",`${note[indexFix-1]}`);
            }
          
            break;
            dsnote();
        case 4: // Xóa ghi chú
            if (note.length === 0) {
                console.log("Không có ghi chú");
            } else {
                dsnote();
            let indexDel= prompt("Nhập số thứ tự ghi chú muốn xóa: ");
            note.splice(indexDel-1,1)
            dsnote();
            }
            break;
    
        default:
       
            bl= false;
            break;
    }
}