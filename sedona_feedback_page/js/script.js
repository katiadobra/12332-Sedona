(function() {

  var controls = document.querySelectorAll('.counter-action');
  var counter = document.querySelector('.counter-input');

  for (var i = controls.length - 1; i >= 0; i--) {
    // console.log(controls[i]);

    var control = controls[i];
    console.log(control);
    if (control.classList.contains('plus')) {

      control.addEventListener('click', onPlusClicked);

    } else if (control.classList.contains('minus')) {
      control.addEventListener('click', onMinusClicked);
    }
  };


  counter.addEventListener('change', onCounterChange);


  function onCounterChange(event) {
    console.log(this);
    console.log(this.value);
  }


  function onPlusClicked(event) {
    event.preventDefault();

    console.log(this);
    var parent = this.parentNode,
        input = parent.querySelector('input'),
        value = parseInt(input.value);
    if (!isNaN(value)) {  
      value = value + 1;
    } else {
      value = 0;
    }

    input.value = value;
  }

  function onMinusClicked(event) {
    event.preventDefault();

    var parent = this.parentNode,
      input = parent.querySelector('input');
      value = parseInt(input.value);
    if (!isNaN(value) & !value <= 0) {
      value = value - 1;
    } else {
      value = 0;
    }

    input.value = value;
  }

  // var plusCounter = document.querySelector('.counter-action.minus');
  // var minusCounter = document.querySelector('.counter-action.plus');
  // var elements = document.querySelector('.counter-input');
  // var currentvalue;

  // plusCounter.addEventListener('click', function(event) {
  //   event.preventDefault();

  //   currentvalue = parseInt(elements.value) + 1;
  //   document.querySelector('.travel-time').value = currentvalue;
  // });

  // minusCounter.addEventListener('click', function(event) {
  //   event.preventDefault();

  //   currentvalue = parseInt(elements.value) - 1;
  //   document.querySelector('.travel-time').value = currentvalue;
  // });

})();