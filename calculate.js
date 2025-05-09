function obed(value) {
    document.getElementById("vava").value += value;
  }

  function clearDisplay() {
    document.getElementById("vava").value = '';
  }
  function calculate() {
    try {
      document.getElementById("vava").value = eval(document.getElementById("vava").value);
    } catch {
      document.getElementById("vava").value = "invalid number";
    }
  }
