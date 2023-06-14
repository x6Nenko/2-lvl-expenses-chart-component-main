fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tooltips = document.querySelectorAll('.tooltiptext');
    const columns = document.querySelectorAll('.column')

    data.forEach((item, index) => {
      tooltips[index].textContent = `$${item.amount.toFixed(2)}`;
      columns[index].style.height = `${(parseFloat(item.amount.toFixed(2)) / getMaxAmount(data)) * 150}px`;
    });
  })
  .catch(error => console.error(error));

function getMaxAmount(data) {
  let max = 0;
  data.forEach(item => {
    if (item.amount > max) {
      max = item.amount;
    }
  });
  return max;
}