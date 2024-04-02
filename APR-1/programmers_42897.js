// 도둑질

function solution(money) {
    const dpFirst = Array(money.lenght).fill(0);
    dpFirst[0] = money[0];
    dpFirst[1] = Math.max(money[0], money[1]);
    
    for (let i = 2; i < money.length - 1; i++){
        dpFirst[i] = Math.max(dpFirst[i - 1], dpFirst[i - 2] + money[i]);
    }
    
    const dpSecond = Array(money.length).fill(0);
    dpSecond[0] = 0;
    dpSecond[1] = money[1];
    
    for (let i = 2; i < money.length; i++){
        dpSecond[i] = Math.max(dpSecond[i - 1], dpSecond[i - 2] + money[i]);
    }
    
    const answer = Math.max(dpFirst.pop(), dpSecond.pop());
    return answer;
}