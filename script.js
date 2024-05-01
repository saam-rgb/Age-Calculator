let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
function calculateAge() {
  let birthDate = new Date(userInput.value);
  let result = document.getElementById("ans");

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  //display
  if (birthDate.length < 0) {
    ans.style.display = "none";
  } else {
    ans.style.display = "block";
  }

  //Month
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  //Days
  if (d2 > d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  result.innerHTML = ` You are <span id="years">${y3}</span>, <span id="months">${m3}</span> months and
<span id="days">${d3}</span> days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
