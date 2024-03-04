//  최댓값과 최솟값 

function solution(s) {
    const array = s.split(' ').map(elem => parseInt(elem))
    const answer = new Array(Math.min(...array), Math.max(...array))
    return answer.join(' ')
}