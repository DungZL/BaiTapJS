let eleBtn1 = document.getElementById("bai1")
let eleBtn2 = document.getElementById("bai2")
let eleBtn3 = document.getElementById("bai3")
let eleBtn4 = document.getElementById("bai4")
let eleBtn5 = document.getElementById("bai5")

let bai1 = document.getElementById("bai1");
let bai2 = document.getElementById("bai2");
let bai3 = document.getElementById("bai3");
let bai4 = document.getElementById("bai4");
let bai5 = document.getElementById("bai5");

document.getElementById("btn1").addEventListener("click", function () {
    bai2.classList.add('d-none');
    bai3.classList.add('d-none');
    bai4.classList.add('d-none');
    bai5.classList.add('d-none');
    bai1.classList.remove('d-none');

    btn2.innerHTML = "📒 Bài 2";
    btn3.innerHTML = "📒 Bài 3";
    btn4.innerHTML = "📒 Bài 4";
    btn5.innerHTML = "📒 Bài 5";
    btn1.innerHTML = "📖 Bài 1";
})

document.getElementById("btn2").addEventListener("click", function () {
    bai1.classList.add('d-none');
    bai2.classList.remove('d-none');
    bai3.classList.add('d-none');
    bai4.classList.add('d-none');
    bai5.classList.add('d-none');

    btn1.innerHTML = "📒 Bài 1";
    btn3.innerHTML = "📒 Bài 3";
    btn4.innerHTML = "📒 Bài 4";
    btn5.innerHTML = "📒 Bài 5";
    btn2.innerHTML = "📖 Bài 2";
})

document.getElementById("btn3").addEventListener("click", function () {
    bai1.classList.add('d-none');
    bai2.classList.add('d-none');
    bai3.classList.remove('d-none');
    bai4.classList.add('d-none');
    bai5.classList.add('d-none');

    btn1.innerHTML = "📒 Bài 1";
    btn3.innerHTML = "📖 Bài 3";
    btn4.innerHTML = "📒 Bài 4";
    btn5.innerHTML = "📒 Bài 5";
    btn2.innerHTML = "📒 Bài 2";
})

document.getElementById("btn4").addEventListener("click", function () {
    bai1.classList.add('d-none');
    bai2.classList.add('d-none');
    bai3.classList.add('d-none');
    bai4.classList.remove('d-none');
    bai5.classList.add('d-none');

    btn1.innerHTML = "📒 Bài 1";
    btn3.innerHTML = "📒 Bài 3";
    btn4.innerHTML = "📖 Bài 4";
    btn5.innerHTML = "📒 Bài 5";
    btn2.innerHTML = "📒 Bài 2";
})

document.getElementById("btn5").addEventListener("click", function () {
    bai1.classList.add('d-none');
    bai2.classList.add('d-none');
    bai3.classList.add('d-none');
    bai4.classList.add('d-none');
    bai5.classList.remove('d-none');

    btn1.innerHTML = "📒 Bài 1";
    btn2.innerHTML = "📒 Bài 2";
    btn3.innerHTML = "📒 Bài 3";
    btn4.innerHTML = "📒 Bài 4";
    btn5.innerHTML = "📖 Bài 5";
})