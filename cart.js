document.addEventListener("DOMContentLoaded", function () {
    const countElements = document.querySelectorAll('.count');

    countElements.forEach(function (countElement) {
      const numberElement = countElement.querySelector('.number');
      const plusElement = countElement.querySelector('.plus');
      const minusElement = countElement.querySelector('.minus');

      plusElement.addEventListener('click', function () {
        numberElement.textContent = String(Number(numberElement.textContent) + 1);
      });

      minusElement.addEventListener('click', function () {
        if (Number(numberElement.textContent) > 0) {
          numberElement.textContent = String(Number(numberElement.textContent) - 1);
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", setupCountButtons);
