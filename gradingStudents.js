

function gradingStudents(grades) {
  let newGrades = [];
  for(let i = 0; i < grades.length; i++) {
    newGrades[i] = roundingRules(grades[i]);
  }
  return newGrades;
}

function roundingRules(grade) {
  if (grade < 38) { return grade; }
  let lastDigit = grade % 10;
  lastDigit = lastDigit <= 5 ? lastDigit : lastDigit - 5;
  let sum2Round = 5 - lastDigit >= 3 ? 0 : 5 - lastDigit;
  return grade + sum2Round;
}
