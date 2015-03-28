(function() {

  var controls = document.querySelectorAll('.counter-action');
  var counters = document.querySelectorAll('.counter-input');

  for (var i = controls.length - 1; i >= 0; i--) {
    // console.log(controls[i]);

    var control = controls[i];
    // console.log(control);
    if (control.classList.contains('plus')) {

      control.addEventListener('click', onPlusClicked);

    } else if (control.classList.contains('minus')) {
      control.addEventListener('click', onMinusClicked);
    }
  };


  for (var i = counters.length - 1; i >= 0; i--) {
    var counter = counters[i];

    counter.addEventListener('change', onCounterChange);
  };



  function onCounterChange(event) {
    // console.log(this);
    // console.log(this.value);

    var value = parseInt(this.value);
    if (isNaN(value) || value < 0) {
      value = 0;
    }
    this.value = value;
    console.log(value);
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

    var input = this.parentNode.querySelector('input'),
        value = parseInt(input.value);
    if (!isNaN(value) && value > 0) {
      value = value - 1;
    } else {
      value = 0;
    }

    input.value = value;
  }

})();