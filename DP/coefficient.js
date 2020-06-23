let coefficient = (n,k) => {
    let dp = new Array(n+1);
    dp.fill(0);
    let mul = 1;
    for(let i=1;i<=n;i++){
        mul = mul * i;
        dp[i] = mul; 
    }

    let result = dp[n]/(dp[n-k]*dp[k]);

    return result%10007;
}

console.log(coefficient(5,2));
console.log(coefficient(10,2));