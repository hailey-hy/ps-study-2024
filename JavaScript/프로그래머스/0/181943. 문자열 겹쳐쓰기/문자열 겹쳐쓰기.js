function solution(my_string, overwrite_string, s) {
    const end = s + overwrite_string.length;
    const answer = my_string.split('')
    .map((str, inx) => {
        if(inx >= s && inx < end) {
            return str = overwrite_string[inx - s]
        }
        return str
    })
    .join('');
    return answer;
}