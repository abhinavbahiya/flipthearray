'use strict';

const flipTheArray = (request, response) => {
  const {
    arr,
    n,
    k
  } = request.body;
  const result = flip(arr, n, k);
  response.status(200).json({
    result
  });
}

const flip = (arr, n, k) => {
  let rotation = k > 3 ? k % 4 : k;
  const newArray = rotate(rotation, n, arr);
  return newArray;
}

const rotate = (rotation, n, arr) => {
  if (rotation === 0) {
    return arr;
  } else {
    const newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push([]);
    }
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        newArray[j][(n - (i + 1))] = arr[i][j];
      }
    }
    return rotate(rotation - 1, n, newArray);
  }
}

module.exports = {
  flipTheArray,
  flip
};
