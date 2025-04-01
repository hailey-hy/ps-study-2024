def solution(sizes):
    sizes.sort()
    x = 0
    y = 0
    
    for i, j in sizes:
        if i > j:
            ver = j
            hor = i
        else:
            ver = i
            hor = j
        x = max(ver, x)
        y = max(hor, y)
        
    return x * y