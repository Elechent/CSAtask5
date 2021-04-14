let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day."
str = str.replace(/\�\?\w/,function(c){
    return c.toUpperCase();
})
str = str.replace(/[\�\?]/g,' ');
str = str.replace(/\s{1,4}/g,' ')
console.log(str) // 'I'm going to take a trip to Daocheng on May Day.'