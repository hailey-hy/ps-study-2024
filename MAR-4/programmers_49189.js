// 가장 먼 노드

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

function solution(n, edge) {
    const graph = Array.from({ length: n + 1}, () => []);
    
    edge.forEach(e => {
        const [left, right] = e;
        graph[left].push(right);
        graph[right].push(left);
    })
    
    const visited = Array(n + 1).fill(Infinity)
    
    const q = new Queue()
    q.push([1, 0])
    visited[1]= 0
    
    while (q.size() > 0){
        const [now, cnt] = q.popleft()
        for (const i of graph[now]){
            if (visited[i] > cnt + 1){
                visited[i] = cnt + 1
                q.push([i, cnt + 1])
            }}
}
    const filteredVisited = visited.filter(v => v < Infinity)
    return filteredVisited.filter(num => num === Math.max(...filteredVisited)).length;
}