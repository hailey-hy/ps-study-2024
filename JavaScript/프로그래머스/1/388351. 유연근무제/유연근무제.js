function parseTime(time) {
    const timeStr = time.toString().padStart(4, '0');
    const hour = parseInt(timeStr.slice(0, 2), 10);
    const minute = parseInt(timeStr.slice(2, 4), 10);
    
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
}

function solution(schedules, timelogs, startday) {
    
    let answer = 0;
    
    for (const [index, staff] of timelogs.entries()) {
        const deadline = parseTime(schedules[index]);
        let isPass = true;
        
        for (const [inx_time, time] of staff.entries()) {
            const today = (startday + inx_time) % 7;
            if(today > 0 && today < 6) { // 주말 제외
                const parsedTime = parseTime(time);
                const timeDiff = (parsedTime - deadline) / (1000 * 60)
                if(timeDiff > 10) { // 10분 지각 체크
                    isPass = false;
                }
            }
        }
        
        if(isPass) {
            answer += 1;
        }
    }

    return answer;
}