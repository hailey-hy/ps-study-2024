function solution(s){
    const strings = s.split('');
    const stack = [];

    for (const string of strings) {
        if(stack.length === 0) {
            stack.push(string);
        }
        else if(string === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        }
        else {
            stack.push(string);
        }
    }

    return stack.length === 0 ? true : false;
}