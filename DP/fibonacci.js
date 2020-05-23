var arr = new Array();

var fibonacci = (num)=>{
    if(num<=1){
        arr[num] = num;
        return num;
    }
    if(arr[num]!=undefined){
        return arr[num];
    }

    var result = fibonacci(num-1)+fibonacci(num-2);
    arr[num] = result;
    return result;
}

console.log(fibonacci(10));