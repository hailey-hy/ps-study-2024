const words = {
    'zero' : '0',
    'one' : '1',
    'two' : '2',
    'three' : '3', 
    'four' : '4', 
    'five' : '5', 
    'six' : '6', 
    'seven' : '7',
    'eight' : '8',
    'nine' : '9'
}

function solution(s) {
    let answer = '';
    let temp = '';
    [...s].map((value) => {
        if (Number.isFinite(Number(value))) {
           answer += value; 
        } else {
            temp += value;
            if(temp in words) {
                answer += words[temp];
                temp = '';
            }
        }
    })
    return Number(answer);
}