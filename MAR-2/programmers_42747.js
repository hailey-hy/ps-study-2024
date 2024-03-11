//  H-Index

function solution(citations) {
    citations.sort((a, b) => b - a)
    console.log(citations)
    for(const [inx, elem] of citations.entries()){
        if(inx + 1 > elem){
            return inx
        }
    }
    return citations.length
}