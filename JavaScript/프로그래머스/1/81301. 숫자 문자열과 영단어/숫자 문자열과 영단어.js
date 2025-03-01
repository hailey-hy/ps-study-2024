const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function solution(s) {
    let answer = s;
    for (i = 0; i < 10; i++) {
        const splited = answer.split(words[i]);
        answer = splited.join(`${i}`);
    }
    return Number(answer);
}