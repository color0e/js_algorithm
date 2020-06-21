
let easyStairs = (number) => {
    let count = 0;
    if(number==1){
        return 9;
    }

    let getStairs = (num,prev) =>{
        if(prev==0){
            count++;
        }else if(prev==9){
            count++;

            if(num!==number-1){
                return getStairs(num+1,0);
            }

        }else{
            count = count + 2;
        }
        
        if(num==number-1&&prev==9){
            return count;
        }

        return getStairs(num,prev+1);
    }

    return getStairs(1,1);

}

console.log(easyStairs(2));
console.log(easyStairs(3));