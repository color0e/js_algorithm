//정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
//1.X가 3으로 나누어 떨어지면, 3으로 나눈다.
//2.X가 2로 나누어 떨어지면, 2로 나눈다.
//3.1을 뺀다.
//정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
// 그리고 숫자변화 과정도 출력하시오.
//10의 경우에 10 -> 9 -> 3 -> 1 로 3번 만에 만들 수 있다.
let makeone = (number) => {
        let count = 0;
        let start = 1;
        let stack = new Array();
        let changeprocess = "";

        stack.push(start);

        while(start!=number){
            if(start * 3 <= number){
                start = start * 3;
                count++;
                stack.push(start);
                continue;
            }

            if(start * 2 <= number){
                start = start * 2;
                count++;
                stack.push(start);
                continue;
            }

            if(start + 1 <= number){
                start = start + 1;
                count++;
                stack.push(start);
                continue;
            }

        }

        console.log("[최소연산 횟수]");
        console.log(count);
        console.log("[숫자변화과정]");
        while(stack.length>0){
            if(stack.length==1){
                changeprocess = changeprocess + stack.pop();
            }else{
                changeprocess = changeprocess + stack.pop() + "=>";
            }
        }
        console.log(changeprocess);
}

makeone(10);
makeone(100);