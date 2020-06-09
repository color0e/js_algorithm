let stickers = [[50,10,100,20,40],[30,50,70,10,60]];
let stickers2 = [[10,30,10,50,100,20,40],[20,40,30,50,60,20,80]];

let Desk = (s) => {
    let DP = new Map();
    let getMaxpoint = (index,prev)=>{
        let result;
        if(DP.get(index+"_"+prev)!==undefined){
            return DP.get(index+"_"+prev)
        }

        if(index==s[0].length-1){
            switch(prev){
                case 0:
                    result=s[0][index]>s[1][index]?s[0][index]:s[1][index];
                    break;
                case 1:
                    result=s[1][index];
                    break;
                case 2:
                    result=s[0][index];
                    break;
            } 
            DP.set(index+"_"+prev,result);
            return result;
        }

        switch(prev){
            case 0:
                result = Math.max.apply(null,[getMaxpoint(index+1,0),s[0][index]+getMaxpoint(index+1,1),s[1][index]+getMaxpoint(index+1,2)]);
                break;
            case 1:
                result = Math.max.apply(null,[getMaxpoint(index+1,0),s[1][index]+getMaxpoint(index+1,2)]);
                break;
            case 2:
                result = Math.max.apply(null,[getMaxpoint(index+1,0),s[0][index]+getMaxpoint(index+1,1)]);
                break;
        }
        
        DP.set(index+"_"+prev,result);
        return result;
    }

    console.log(getMaxpoint(0,0));
    console.log(DP);
}

Desk(stickers);
Desk(stickers2);

