const sort = (numbers) => {
  if (numbers.length <= 1) {
    return numbers;
  }
  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    let j = i - 1;
    while ((j >= 0) && (current < numbers[j])) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = current;
  }
  return numbers;
};

console.log(sort([10,2,10,10,10,10,8,2,7,8]));