let stickers = [[50,10,100,20,40],[30,50,70,10,60]];
let stickers2 = [[10,30,10,50,100,20,40],[20,40,30,50,60,20,80]];

let Desk = (s) => {
    let getMaxpoint = (index,prev)=>{
        if(index==s[0].length-1){
            switch(prev){
                case 0:
                    return s[0][index]>s[1][index]?s[0][index]:s[1][index];
                case 1:
                    return s[1][index];
                case 2:
                    return s[0][index];
            } 
        }
        switch(prev){
            case 0:
                return Math.max.apply(null,[getMaxpoint(index+1,0),s[0][index]+getMaxpoint(index+1,1),s[1][index]+getMaxpoint(index+1,2)]);
            case 1:
                return Math.max.apply(null,[getMaxpoint(index+1,0),s[1][index]+getMaxpoint(index+1,2)]);
            case 2:
                return Math.max.apply(null,[getMaxpoint(index+1,0),s[0][index]+getMaxpoint(index+1,1)]);
        }
    }

    console.log(getMaxpoint(0,0));
}

Desk(stickers);
Desk(stickers2);

