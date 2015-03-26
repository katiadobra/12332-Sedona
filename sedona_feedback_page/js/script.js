(function() {

  var plusCounter = document.querySelector('.counter-action.minus');
  var minusCounter = document.querySelector('.counter-action.plus');
  var elements = document.querySelector('.counter-input');
  var currentvalue;
  currentvalue = parseInt(elements.value);

  plusCounter.addEventListener('click', function(event) {
    event.preventDefault();

    currentvalue = parseInt(elements.value) + 1;
    if (currentvalue < 1) {
      currentvalue = 1
    }
    if (currentvalue > 30) {
      currentvalue = 30
    }
    document.querySelector('.travel-time').value = currentvalue;
  });

  minusCounter.addEventListener('click', function(event) {
    event.preventDefault();

    currentvalue = parseInt(elements.value) - 1;
    document.querySelector('.travel-time').value = currentvalue;
  });

})();