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
// Bài 1
document.getElementById("resultbtn1").addEventListener("click", function (e) {
    e.preventDefault(); 
    let salary1Day = Number(document.getElementById("salary_1day").value);
    let daysWorked = Number(document.getElementById("days_worked").value);

    let totalSalary = salary1Day * daysWorked;
    
    document.getElementById("result").innerHTML = "👉 Tổng tiền lương: " + " VNĐ";
});

// Bài 2
document.getElementById("resultbtn2").addEventListener("click", function (e) {
    e.preventDefault();

    let n1 = Number(document.getElementById("ave1").value);
    let n2 = Number(document.getElementById("ave2").value);
    let n3 = Number(document.getElementById("ave3").value);
    let n4 = Number(document.getElementById("ave4").value);
    let n5 = Number(document.getElementById("ave5").value);
    let n6 = Number(document.getElementById("ave6").value);
    
    let average = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
    
    document.getElementById("result").innerHTML = "👉 Giá trị trung bình: " + average;
});

// Bài 3
document.getElementById("resultbtn3").addEventListener("click", function (e) {
    e.preventDefault();
    let usd = Number(document.getElementById("usdcount").value);
    let exchangeRate = 23500;
    
    let vnd = usd * exchangeRate;
    
    let formattedVND = new Intl.NumberFormat('vi-VN').format(vnd);
    
    document.getElementById("result").innerHTML = "👉 Số tiền quy đổi: " + formattedVND + " VNĐ";
});

// Bài 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById("resultbtn4").addEventListener("click", function (e) {
    e.preventDefault();
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    
    let area = length * width;
    let perimeter = (length + width) * 2;
    
    document.getElementById("result").innerHTML = "👉 Diện tích: " + area + " | Chu vi: " + perimeter;
});

// Bài 5
document.getElementById("resultbtn5").addEventListener("click", function (e) {
    e.preventDefault();
    let number = Number(document.getElementById("numbercount").value);
    
    let tens = Math.floor(Math.abs(number) / 10);
    let units = Math.abs(number) % 10;
    
    let total = tens + units;
    
    document.getElementById("result").innerHTML = "👉 Tổng 2 ký số: " + total;
});