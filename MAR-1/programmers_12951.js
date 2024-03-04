// JadenCase 문자열 만들기

function solution(s) {
    const array = s.split(' ');
    const answer = new Array();
    array.forEach(elem => {
        answer.push(elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase());
    });   
    return answer.join(' ');
}