// 1부터 50의 자연수 중 짝수를 구하는 함수
let arr=[]
function isEven() {
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
    arr.push(i)
  }
  return arr
}
isEven();