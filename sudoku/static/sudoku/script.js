var letters = "ABCDEFGHI".split("");
var numbers = "123456789".split("");

function clearPuzzle() {
  for (l = 0; l < 9; l++) {
    for (n = 0; n < 9; n++) {
      document.getElementById(letters[l] + numbers[n]).value = "";
    }
  }
}

function fillPuzzle() {
  var arto = `Arto Inkala
800000000
003600000
070090200
050007000
000045700
000100030
001000068
008500010
090000400`;
arto = arto.split("\n");
  for (r = 1; r < 10; r++) {
    var line = arto[r].split("");
    for (c = 0; c < 9; c++) {
      // If the number isn't a zero
      if (line[c] != "0") {
        var square = letters[c] + numbers[r-1];
        document.getElementById(square).value = line[c];
      }
    }
  }
}

/*
function fillPuzzle() {
  clearPuzzle();
  document.getElementById("A1").value = "8";
  document.getElementById("C2").value = "3";
  document.getElementById("D2").value = "6";
  document.getElementById("B3").value = "7";
  document.getElementById("E3").value = "9";
  document.getElementById("G3").value = "2";
  document.getElementById("B4").value = "5";
  document.getElementById("F4").value = "7";
  document.getElementById("E5").value = "4";
  document.getElementById("F5").value = "5";
  document.getElementById("G5").value = "7";
  document.getElementById("D6").value = "1";
  document.getElementById("H6").value = "3";
  document.getElementById("C7").value = "1";
  document.getElementById("H7").value = "6";
  document.getElementById("I7").value = "8";
  document.getElementById("C8").value = "8";
  document.getElementById("D8").value = "5";
  document.getElementById("H8").value = "1";
  document.getElementById("B9").value = "9";
  document.getElementById("G9").value = "4";
}
*/
