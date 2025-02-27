function solution(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return arr1.length > arr2.length ? 1 : -1
    }
    else {
        sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
        sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
        if(sum1 > sum2) return 1
        else if(sum1 < sum2) return -1
        else return 0
    }
}