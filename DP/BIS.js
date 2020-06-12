//Biggest Increasing Subsequence

let data = [1,100,2,50,60,3,5,6,7,8];

let BIS = (data) =>{
    let dp = new Map();
    let max = data[0];
    for(index in data){
        let sum = data[index];
        for(var i=0;i<index;i++){
            if(data[i]<data[index]){
                    sum = data[index] + dp.get(i+"");
            }
        }
        dp.set(index+"",sum);
    }

    for(let item of dp){
        max = max>item[1]?max:item[1];
    }

    return max;
}
console.log(BIS(data));