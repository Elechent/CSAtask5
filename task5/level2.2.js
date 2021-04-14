for (var i = 0; i < 5; i++) {

    (function (i) {
        setTimeout(function () {
            console.log(new Date, i);
        }, i * 1000);
    }(i));
}
i = 0
console.log(new Date, i);