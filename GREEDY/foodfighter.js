//전자레인지가 하나있고, 조리시간과 먹는시간이 적힌 음식들이 주어졌다.
//음식은 한번에 하나만 전자레인지에 조리가 가능하고,
//이떄 음식을 최단시간에 모두 먹으려면 어떠한 순서로 음식을 먹어야하는가 ?
//음식을 먹는 순서와 조리를 시작하고 음식을 다 먹는데까지의 최소시간을 구하여라.

//음식들.. [조리시간,먹는시간]
let foods = [[20,10],[30,50],[40,30],[50,60]];

let foodfighter = (foods)=>{
    foods.sort(function(a,b){
        return b[1]-a[1];
    });
    
    let cooktime = 0;
    let mintime = 0;
    for(i in foods){
        if(i==0){
            cooktime = foods[i][0];
            mintime = foods[i][0] + foods[i][1];
            continue;
        }
        cooktime = cooktime + foods[i][0];
        mintime = cooktime > mintime ? cooktime+foods[i][1]:mintime+foods[i][1];  
    }

    let result = {"먹는순서":foods,"최소시간":mintime};


    return result;
}

console.log(foodfighter(foods));