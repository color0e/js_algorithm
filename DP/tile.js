let tile = (n) =>{
    let dp = new Map();
    
    let getTilecount = (num) => {
        if(dp.get(num)){
            return dp.get(num);
        }
        
        if(num==1){
            dp.set(1,1);
            return 1;
        }
        if(num==2){
            dp.set(2,2);
            return 2;
        }

        let result = getTilecount(num-1)+getTilecount(num-2);
        dp.set(num,result);
        return result;
    }

    return getTilecount(n)%15746;
    
}

console.log(tile(3));
console.log(tile(4));
console.log(tile(5));
console.log(tile(10));
console.log(tile(300));