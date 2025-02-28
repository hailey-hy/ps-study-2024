function solution(str1, str2) {
    return [...str1].map((str, index) => str + str2[index]).join('');
}