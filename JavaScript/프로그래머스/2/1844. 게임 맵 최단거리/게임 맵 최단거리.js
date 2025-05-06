class Queue {
    constructor() {
        this.q = {};
        this.head = 0;
        this.tail = 0;
    }
    
    enqueue(value) {
        this.q[this.tail++] = value;
    }
    
    dequeue() {
        return this.q[this.head++];
    }
    
    isEmpty(){
        return this.head === this.tail;
    }
}

function solution(maps) {
    let answer = Infinity;
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const queue = new Queue();
    queue.enqueue([0, 0, 1]);
    visited[0][0] = true;
    
    while (!queue.isEmpty()) {
        const [x, y, distance] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            
            if(nx === n - 1 && ny === m - 1 && maps[nx][ny] === 1) {
                return distance + 1
            }
            
            if(nx < n && ny < m && nx >= 0 && ny >= 0 && maps[nx][ny] === 1 && !visited[nx][ny]) {
               queue.enqueue([nx, ny, distance + 1]);
                visited[nx][ny] = true;
            }
        }
    }
    return -1
}