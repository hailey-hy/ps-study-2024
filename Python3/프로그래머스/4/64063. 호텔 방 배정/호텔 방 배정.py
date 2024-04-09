def solution(k, room_number):
    answer = []
    room = {}

    for num in room_number:
        number = room.get(num, 0)
        if number:
            temp = [num]
            while True:
                index = number
                number = room.get(number, 0)
                if not number:
                    answer.append(index)
                    room[index] = index + 1
                    for i in temp:
                        room[i] = index + 1
                    break
                temp.append(number)
        else:
            answer.append(num)
            room[num] = num + 1
    return answer