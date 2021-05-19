document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const number = document.getElementById('number').value;
  const _arr = [];
  const _hours = [1, 2];

  function printResult(maxIndex) {
    if (_arr[maxIndex - 1].total == number) {
      console.log(_arr.slice(0, maxIndex).map((item) => item.val));
    }
  }

  function calculate(index, x) {
    if (x === 0) {
      printResult(index);
      return;
    }

    for (const hour of _hours) {
      if (hour > x) {
        printResult(index);
        return;
      }

      _arr[index] = {
        val: hour,
        total: _arr[index - 1] ? _arr[index - 1].total + hour : hour,
      };
      calculate(index + 1, x - hour);
    }
  }

  calculate(0, number);
});
