// bài 1: Viết chương trình in ra các số từ 1 đến n?

// var enter_number;
// var enter_number = prompt("Nhập số");

// for (var i = 1; i <= enter_number; i++) {
//     document.write(i + ' ');
// }



// ---------------------END-----------------------

// bài 2: Viết chương trình in ra các số lẻ từ 1 đến n
// var enter_number;
// var enter_number = prompt("Nhập số");

// for (var i = 1; i <= enter_number; i++) {
//     if (i % 2 == 1) {
//         document.write(i + ' ');
//     } else {

//     }
// }

// ---------------------END-----------------------


// bài 3: Viết chương trình in ra các số chẵn từ 1 đến n
// var enter_number;
// var enter_number = prompt("Nhập số");

// for (var i = 1; i <= enter_number; i++) {
//     if (i % 2 == 0) {
//         document.write(i + ' ');
//     } else {

//     }
// }

// ---------------------END-----------------------



// bài 5: Viết chương trình tính tổng từ 1 đến n?

// var total = 0;
// var enter_number = prompt("Nhập số")
// for (var i = 1; i <= enter_number; i++) {
//     total = total + i;
// }
// document.write("Tổng cac số từ 1 tới " + enter_number + " là: " + total);


// ---------------------END-------------------------------------------------

// bài 6: Viết chương trình tính tổng bình phương của các số từ 1 đến n?

// var total = 0;
// var enter_number = prompt("Nhập số")
// for (var i = 1; i <= enter_number; i++) {
//     total = total + i * i;
// }
// document.write("Tổng bình phương của các số từ 1 tới " + enter_number + " là: " + total);


// ---------------------END-----------------------------------------------------------


//bài 7: Tính tổng các số lẻ trong khoảng 1 đến n?

// var total = 0;
// var enter_number = prompt("Nhập số")
// for (var i = 1; i <= enter_number; i++) {
//     if (i % 2 == 1) {
//         total = total + i;
//     }
// }
// document.write("ính tổng các số lẻ trong khoảng 1 đến " + enter_number + " là: " + total);

// ---------------------END-------------------------------------------

// bài 8: Kiểm tra số n có toàn số lẻ tạo thành hay không?


// console.log("*****")
// var n = 79119;
// var check = true;

// while (n > 0) {
//     var remain = n % 10
//     if (remain % 2 == 0) {
//         check = false;
//         break;
//     }
//     n = Math.floor(n / 10);
//     console.log("n: ", n, "remain:" , remain)
// }
// if (check) {
//     alert("N is combine of odd numbers")
// } else {
//     alert("N is not OKE")
// }