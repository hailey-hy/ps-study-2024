def solution(answers):
    
    one = [1, 2, 3, 4, 5] * 10000
    two = [2, 1, 2, 3, 2, 4, 2, 5] * 10000
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * 10000
    
    points = [0, 0, 0]
    
    for index, i in enumerate(answers):
        if i == one[index]:
            points[0] += 1
        if i == two[index]:
            points[1] += 1
        if i == three[index]:
            points[2] += 1
        
    winner = []
    
    for index, i in enumerate(points):
        if(i == max(points)):
            winner.append(index + 1)
    
    return winner