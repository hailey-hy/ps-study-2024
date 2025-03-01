function solution(friends, gifts) {
    const gift_index = Array(friends.length).fill(0);
    const matrix = Array.from({length: friends.length}, () => Array(friends.length).fill(0));
    const answer = Array(friends.length).fill(0);
    
    gifts.forEach((gift) => {
        const [ giver, taker ] = gift.split(' ');
        const i = friends.indexOf(giver);
        const j = friends.indexOf(taker);
        
        matrix[i][j] += 1;
        gift_index[i] += 1;
        gift_index[j] -= 1;
    })
    
    for (i = 0; i < friends.length; i++) {
        for (j = 0; j < friends.length; j++) {
            if(i === j) continue;
            if(matrix[i][j] === matrix[j][i]) { //선물 지수 비교
                if(gift_index[i] > gift_index[j]) {
                    answer[i] += 1;
                } 
            } else {
                if(matrix[i][j] > matrix[j][i]) {
                    answer[i] += 1;
                }
            }
        }
    }
    return Math.max(...answer)
}


// 
