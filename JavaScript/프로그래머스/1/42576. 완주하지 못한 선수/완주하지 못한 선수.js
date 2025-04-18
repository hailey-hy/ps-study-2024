function solution(participant, completion) {
    const map = new Map();
    for (const name of completion) {
        map.set(name, (map.get(name) || 0) + 1);
    }
    
    const result = participant.filter(name => {
        if(map.has(name)) {
            map.set(name, map.get(name) - 1);
            if(map.get(name) === 0) {
                map.delete(name)
            }
            return false
        } else {
            return true
        }
                                              });

    return result.length > 0 ? result.join('') : 'nothing';
}
