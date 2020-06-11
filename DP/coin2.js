let coins = [1,5,12];

let coinCounter = (money,coins) => {
    let dp = new Map();

    coins.sort(function(a,b){
        return b-a;
    });

    console.log(coins);

    let getMinCount = (money,index) => {
       let count = 0;
       let temp = money;
       let i = index;
       
       if(dp.get(money+"_"+index)){
           return dp.get(money+"_"+index);
       }
       
       if(index == coins.length){
           return 999999;
       }

       while(temp!==0){
            temp = temp - coins[i];
            count++;
            if(temp<0){
                count=999999;
                break;
            }
            if(temp < coins[i]){
                if(i!==coins.length-1){
                    i = i + 1;
                }
            }
       }
       
        let result = Math.min.apply(null,[count,getMinCount(money,index+1)]);
        dp.set(money+"_"+index,result);
        return result;
    }

    console.log(getMinCount(money,0));
    console.log(dp);

};

coinCounter(15,coins);