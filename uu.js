var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var sumBtn = document.getElementById("sum");
function add(num1, num2) {
    return num1 + num2;
}
sumBtn === null || sumBtn === void 0 ? void 0 : sumBtn.addEventListener('click', function () {
    var sum = add(+num1.value, +num2.value);
    console.log(sum);
});
