// bài 21
var array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
var total = array_1.reduce((a, b) => {
    return a + b
}, 0)
console.log("21. Tổng: ", total)

// bài 22
var array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var max = Math.max.apply(Math, array_2);
var min = Math.min.apply(Math, array_2);
var mid = "Em chưa nghĩ ra :D"
console.log("22. Lớn = " + max + " Nhỏ = " + min + " Trung bình = " + mid);

// bài 23
var array_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function mostFrequency(array_3) {
    var max = 0
    var count = 1
    for (var i = 0; i < array_3.length; i++) {
        if (array_3[i] == array_3[i + 1]) {
            count++
            if (count > max) {
                max = count
            }
        } else {
            count = 1
        }
    }
    return max
}
console.log("23. Output: ", mostFrequency(array_3))


// bài 25
var array_5 = [1, 2, 3, 2, 3, 4, 6, 7];
var array_5_new = array_5.map(a => a * a);
console.log("25. Mảng mới tạo ra khi bình phương mảng array_5: ", array_5_new);


//bai27
var students = [{
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
for (var i = 0; i < students.length; i++) {
    students[i].firstName = students[i].firstName.substring(0, 1).toUpperCase() + (students[i].firstName.substr(1)).toLowerCase();
}
for (var i = 0; i < students.length; i++) {
    if (students[i].firstName.includes("a") && students[i].firstName.length >= 3) {
        console.log("27. Tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự", students[i]);
    }
}

//bai28
var students = [{
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }

]
for (var i = 0; i < students.length; i++) {
    if (students[i].lastName.includes("Do")) {
        console.log("28. Tên học sinh cá biệt", students[i]);
    }
}
//bài 29
var students = [{
        id: "T3HXX1",
        firstName: "Ngan",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

function sortName(std) {
    std.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    return std
}
console.log("29. studens", sortName(students))
    //bài 30
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
var maxTwo = []
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < Math.max(...numbers)) {
        maxTwo.push(numbers[i])
    }
}
var result = Math.max(...maxTwo)
if (result === -Infinity) {
    console.log(-1)
} else {
    console.log("30.Số lớn thứ 2: ", result)
}