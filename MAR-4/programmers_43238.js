// 입국심사

function solution(n, times) {
    let answer = 0;
    let left = 1;
    let right = Math.max(...times) * n;
    
    while (left <= right){
        const mid = parseInt((left + right) / 2);
        let people = 0;
        for (let time of times) {
            people += parseInt(mid / time)
            if (people > n){
                break;
            }
        }
        if (people >= n) {
            answer = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return answer;
}