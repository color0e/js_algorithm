let coin = [500,100,50,10];

let getCoin = (money)=>{
    
    let result = new Array();
    
    for(i in coin){
        result.push(parseInt(money/coin[i]));
        money = money % coin[i];
    }

    return result;
}

let getCoinlist = ()=>{
    return coin;
}

console.log("Coin List:["+getCoinlist()+"]");
console.log("Return Coin Count:["+getCoin(2380)+"]");