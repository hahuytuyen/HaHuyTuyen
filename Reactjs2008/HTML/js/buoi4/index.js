// bài 15
var name = "NguyeN THI tho tHu hA";
name = name.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join("")
console.log("Name: ", name);
name = "NguyeN THI tho tHu hA";