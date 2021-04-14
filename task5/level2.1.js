// 结果描述 5 -> 5,5,5,5,5

for (var i = 0; i < 5; i++) {
    function test(i) {
        setTimeout(function () {
            console.log(new Date, i);
        },1000);
    };
    test(i);
}
console.log(new Date, i);
