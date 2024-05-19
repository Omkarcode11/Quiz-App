export function shuffledArray(arr){
    let i = arr.length 
    let ranI;
    while(i>0){
      ranI = Math.floor(Math.random()*i)
      i--
      [arr[i],arr[ranI]] = [arr[ranI],arr[i]]
      return arr
    }
}