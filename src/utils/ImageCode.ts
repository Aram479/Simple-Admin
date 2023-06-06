export function creatCode() {
  const chars = ['A', 'B', 'C', 'D', 'a', 'b', 'c', 'd', '0', '1', '2', '3'];  
  let randCode = "";  
  for (let i = 0; i < 4; i++) {
   let randPosition = Math.floor(Math.random() * (chars.length - 1)); 
      randCode += chars[randPosition];
  }
  return randCode
}