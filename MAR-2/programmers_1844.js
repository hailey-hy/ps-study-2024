// 게임 맵 최단거리

class Queue {
    constructor(){
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }
    
    size() {
        if (this.store[this.rear] === undefined){
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }
    
    push(value) {
        if(this.size() === 0) {
            this.store['0'] = value;
        } else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    }
    
    popleft() {
        let tmp;
        tmp = this.store[this.front];
        delete this.store[this.front];
        if(this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
            return tmp;
        } else {
            this.front += 1;
            return tmp;
        }
    }
}

function solution(maps) {
    
    const visited = Array.from(
        Array(maps.length), () => Array(maps[0].length).fill(Infinity)
    );
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const q = new Queue();
    
    const n = maps[0].length;
    const m = maps.length;
    
    q.push([0, 0, 1]);
    visited[0][0] = 1;
    
    while (q.size()) {
        const [nowX, nowY, cost] = q.popleft();
        for(let i = 0; i < 4; i++){
            const newX = nowX + dx[i];
            const newY = nowY + dy[i];
            if(newX >= 0 && newX < m && newY >= 0 && newY < n){
                const isOpen = maps[newX][newY] === 1;
                if(isOpen && visited[newX][newY] > cost + 1){
                visited[newX][newY] = cost + 1;
                q.push([newX, newY, cost + 1]);
                }
            }
        }
    }

    return visited[m - 1][n - 1] < Infinity ? visited[m - 1][n - 1] : -1;
}