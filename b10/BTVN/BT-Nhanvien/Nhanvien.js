let a = [
    {
        firstName: "",
        lastName: "",
        age: "",
        role: "",
        salary: "",
        active: true,
        email: "",
        address: "",
        phone: ""
    }
];
a[1] =  JSON.parse(JSON.stringify(a[0]));
a[2] =  JSON.parse(JSON.stringify(a[0]));

function dsa() {
    console.clear();
        for (let i=0; i< a.length;i++) {
            console.log(`${(i+1)}. ${a[i]['firstName']} ${a[i]['lastName']} \n`);
    }
}

function CreditA(i) {
    console.clear();
    console.log(`Nhân viên ${(i+1)}`);
    console.log(`First Name : ${a[i]['firstName']}`); 
    console.log(`Last Name : ${a[i]['lastName']}`); 
    console.log(`Age : ${a[i]['age']}`); 
    console.log(`Role : ${a[i]['role']}`); 
    console.log(`Salary : ${a[i]['salary']}`); 
    console.log(`Active : ${a[i]['active']}`); 
    console.log(`Email : ${a[i]['email']}`); 
    console.log(`Address : ${a[i]['address']}`); 
    console.log(`Phone : ${a[i]['phone']}`); 
    }



let bl = true;
while (bl) {
    let act = parseInt(prompt("Nhập số để chọn: \n 1. Xem thông tin nhân viên \n 2. Thêm thông tin nhân viên \n 3. Sửa thông tin nhân viên \n 4. Xóa thông tin nhân viên \n 5. Thoát ứng dụng"));
    switch (act) {
        case 1: //xem 
            
            dsa();
            let indexWatch= prompt("Nhập số thứ tự nhân viên muốn xem: ");
            console.clear();
            CreditA(indexWatch-1);
            break;
        case 2: // Thêm 
            dsa();
            let indexWrite= prompt("Nhập số thứ tự nhân viên muốn thêm nội dung: ");
            indexWrite--;
            a[indexWrite]['firstName'] = prompt(`First Name : `); 
            a[indexWrite]['lastName'] = prompt(`Last Name : `); 
            a[indexWrite]['age'] = prompt(`Age : `); 
            a[indexWrite]['role'] = prompt(`Role : `); 
            a[indexWrite]['salary'] = prompt(`Salary : `); 
            a[indexWrite]['active'] = prompt(`Active (True or False): `); 
            a[indexWrite]['email'] = prompt(`Email : `,` @ `); 
            a[indexWrite]['address'] = prompt(`Address : `); 
            a[indexWrite]['phone'] = prompt(`Phone : `); 
            CreditA(indexWrite);
            break;
    
        case 3: // Sửa 
            dsa();
            let indexFix= prompt("Nhập số thứ tự nhân viên muốn thêm nội dung: ");
            indexFix--;
            a[indexFix]['firstName'] = prompt(`First Name : `,`${a[indexFix]['firstName']}`); 
            a[indexFix]['lastName'] = prompt(`Last Name : `,`${a[indexFix]['lastName']}`); 
            a[indexFix]['age'] = prompt(`Age : `,`${a[indexFix]['age']}`); 
            a[indexFix]['role'] = prompt(`Role : `,`${a[indexFix]['role']}`); 
            a[indexFix]['salary'] = prompt(`Salary : `,`${a[indexFix]['salary']}`); 
            a[indexFix]['active'] = prompt(`Active (True or False) : `,`${a[indexFix]['active']}`); 
            a[indexFix]['email'] = prompt(`Email : `,`${a[indexFix]['email']}`); 
            a[indexFix]['address'] = prompt(`Address : `,`${a[indexFix]['address']}`); 
            a[indexFix]['phone'] = prompt(`Phone : `,`${a[indexFix]['phone']}`); 
            CreditA(indexFix);
          
            break;
        
        case 4: // Xóa ghi chú
        dsa();
            let indexDel= prompt("Nhập số thứ tự nhân viên muốn thêm nội dung: ");
            indexDel--;
            a[indexDel]['firstName'] = ""; 
            a[indexDel]['lastName'] = ""; 
            a[indexDel]['age'] = ""; 
            a[indexDel]['role'] = ""; 
            a[indexDel]['salary'] = ""; 
            a[indexDel]['active'] = ""; 
            a[indexDel]['email'] = ""; 
            a[indexDel]['address'] = ""; 
            a[indexDel]['phone'] = ""; 
            break;
    
        default:
       
            bl= false;
            break;
    }

}