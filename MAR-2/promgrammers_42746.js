// 가장 큰 수

function solution(numbers) {
    const answer = numbers.map(number => number.toString());
    answer.sort((a,b) => (b + a) - (a + b));
    
    return answer.join('') == 0 ? '0' : answer.join('')
}