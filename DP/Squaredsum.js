let squaredSum = (number) => {

    let squared = (num) => {
        return num * num;
    }

    let sum = 0;
    let count = 0;
    let temp = squared(number-1)
    let k = 1;
    while(number != sum){

        if(number < sum){
            sum = sum - temp;
            k = k + 1;
            count--;
            continue;
        }

        temp = squared(number-k);
        sum = sum + temp;
        count++;
    }
    
    return count;
}

console.log(squaredSum(11));