#  순위

import sys

def solution(n, results):
    array = [[sys.maxsize] * (n + 1) for _ in range(n + 1)]
    for win, lose in results:
        array[lose][win] = 1
    
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if i == j:
                array[i][j] = 0
    
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            for k in range(1, n + 1):
                array[j][k] = min(array[j][i] + array[i][k], array[j][k])
    
    answer = 0
    for a in range(1, n + 1):
        cnt = 0
        for b in range(1, n + 1):
            if array[a][b] < sys.maxsize or array[b][a] < sys.maxsize:
                cnt += 1 
        if cnt == n:
            answer += 1
    
    return answer