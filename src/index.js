
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let newArr = []
  if(matrix !== undefined){
    for (let i = 0; i < matrix.length; i++) {
    for (let j =0; j < matrix[i].length; j++) {
      let c = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      console.log("c "+c);
      console.log("elem: "+matrix[i][c]);
      newArr.push(matrix[i][c])
    }
  }
  return newArr;
  }
  return newArr;
}

