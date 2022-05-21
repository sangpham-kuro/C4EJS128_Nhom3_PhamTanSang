function init () {
    const nope= document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");

    // Code ở đây
    // changed my life
    button.addEventListener("click", function() {
        paragraph.innerText = "Tôi giàu sau khi học lập trình tại mindX";
    }
    )

    // mouseover
    nope.addEventListener("mouseover", function() {
        nope.setAttribute("style","background-color:#ff0000;color:#ffffff")
    }
    )

    //mouseout
    nope.addEventListener("mouseout", function() {
        nope.setAttribute("style","background-color:;color:")
    }
    )

    // toi rat tiec
    nope.addEventListener("click", function() {
        alert("Bạn có chắc chắn không muốn thay đổi cuộc dời bạn?");
        nope.innerText = "Tôi rất tiếc";

    }
    )
}

window.addEventListener("load", init);
// load Event là 