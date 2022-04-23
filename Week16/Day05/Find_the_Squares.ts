/* export const findSquares = (num: number): string => {
    let smallerNum: number = (num-1)/2;
    let biggerNum: number = smallerNum + 1;

    return `${biggerNum*biggerNum}-${smallerNum*smallerNum}` ;
}; */

export function findSquares(num: number): string {
    let smallerNum: number = (num - 1) / 2;
    let biggerNum: number = smallerNum + 1;

    return `${biggerNum * biggerNum}-${smallerNum * smallerNum}`;
}

console.log(findSquares(5))