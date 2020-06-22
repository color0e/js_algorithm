let ascentNumber  = (number) => {
    let dp = new Array(number);

    for(let i=0;i<number;i++){
        dp[i] = new Array(10);
        dp[i].fill(0);
    }

    
    for(let i=0;i<10;i++){
        dp[0][i] = 1;
    }
    
    for(let i=1;i<number;i++){
        for(let k=0;k<10;k++){
            for(let j=0;j<10;j++){
                dp[i][j] = k<=j ? dp[i][j]+dp[i-1][k]:dp[i][j];
            }
        }
    }

    let result = 0;
    for(let i=0;i<10;i++){
        result = result + dp[number-1][i];
    }

    return result;
}

console.log(ascentNumber(3));