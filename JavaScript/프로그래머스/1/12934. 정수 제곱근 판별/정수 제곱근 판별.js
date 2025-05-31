function solution(n) {
    
    const root = Math.sqrt(n);
    
    return root % 1 === 0 ? (root + 1) ** 2 : -1;
}