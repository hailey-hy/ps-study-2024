def solution(answers):
    
    patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    points = [0, 0, 0]
    
    for index, answer in enumerate(answers):
        for inx, pattern in enumerate(patterns):
            if answer == pattern[index % len(pattern)]:
                points[inx] += 1
        
    winner = []
    
    for index, i in enumerate(points):
        if(i == max(points)):
            winner.append(index + 1)
    
    return winner