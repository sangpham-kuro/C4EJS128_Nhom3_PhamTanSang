let input = document.querySelector(".caculatorSpace")
let items = Array.from(document.querySelectorAll(".item"));
items.forEach(function (userClick) {
    userClick.addEventListener("click", function () {
            switch (userClick.innerText) {
                case 'AC':
                    input.innerText = '0';
                    break;
                case 'DEL':
                    let arrTempInput = Array.from(input.innerText);
                    arrTempInput.splice(arrTempInput.length - 1, 1);
                    if (arrTempInput.length != 0) {
                        input.innerText = arrTempInput.join('');
                    } else {
                        input.innerText = '0';
                    }
                    break;
                case '=':
                    input.innerText = eval(input.innerText);
                    break;
                default:
                    if (input.innerText == '0') input.innerText = '';
                    input.innerText += userClick.innerText;
                    break;
            }
    })
});