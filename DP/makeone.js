//정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
//1.X가 3으로 나누어 떨어지면, 3으로 나눈다.
//2.X가 2로 나누어 떨어지면, 2로 나눈다.
//3.1을 뺀다.
//정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
//10의 경우에 10 -> 9 -> 3 -> 1 로 3번 만에 만들 수 있다.
let dp = new Map();
dp.set(0,0);
dp.set(1,0);
let counter = 0;

let makeone = (number) => {
    counter++;

        if(number == 1) return 0;

        if(dp.get(number)!=undefined){
            return dp.get(number);
        }

        let min = Math.min.apply(null,[number%3==0?makeone(number/3):9999999,number%2==0?makeone(number/2):9999999,number-1>0?makeone(number-1):9999999])+1; 

        dp.set(number,min);
        return min;
}

console.log(makeone(10));
console.log(makeone(100));