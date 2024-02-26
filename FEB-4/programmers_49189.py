# 가장 먼 노드

def solution(n, edge):
    graph = [[] for _ in range(n + 1)]
    
    for elem in edge:
        x, y = elem
        graph[x].append(y)
        graph[y].append(x)
        
    visited = [False for _ in range(n + 1)]
    visited[1] = True
    queue = [[1, 0]]
    answer = [0 for _ in range (n + 1)]
    
    while queue:
        now, length = queue.pop(0)
        for new in graph[now]:
            if not visited[new]:
                queue.append([new, length + 1])
                answer[new] = length + 1
                visited[new] = True
    
    return answer.count(max(answer))