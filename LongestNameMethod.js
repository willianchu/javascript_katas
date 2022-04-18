const instructorWithLongestName = function(instructors) {
 
  return instructors.sort(function(a, b) {return b.name.length - a.name.length})[0];

};

const forEachIterator = function(instructors) {
  max_lenght = 0;
  instructor_index = null;
  instructors.forEach(function(instructor, index) {
    if (instructor.name.length > max_lenght) {
      max_lenght = instructor.name.length;
      instructor_index = index;
    }
  });
  return instructors[instructor_index];
};

const traditionalLoops = function(instructors) {
  var longest = {name: "", course: ""};
  for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longest.name.length) {
      longest = instructors[i];
    }
  }
  return longest;
}; 

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
