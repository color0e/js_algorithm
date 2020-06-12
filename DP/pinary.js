let pinary = (num) => {
    let dp = new Map();
    if(num==1 || num==2){
        return 1;
    }
    if(num==3){
        return 2;
    }
    dp.set(3+"_"+0,1);
    dp.set(3+"_"+1,1);
    let getPinarycount = (num,last) => {
        if(dp.get(num+"_"+last)){
            return dp.get(num+"_"+last);
        }

        let r = 0;

        switch(last){
            case 0:
                r = getPinarycount(num-1,1);
                r = r + getPinarycount(num-1,0);
                dp.set(num+"_"+0,r);
                break;
            case 1:
                r = getPinarycount(num-1,0);
                dp.set(num+"_"+1,r);
                break;
        }

        return r;
    }
    return getPinarycount(num-1,1)+2*getPinarycount(num-1,0);
}

console.log(pinary(3));
console.log(pinary(4));
console.log(pinary(5));