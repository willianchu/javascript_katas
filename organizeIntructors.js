const organizeInstructors = function(instructors) {
  let courses = [instructors[0].course]; // loads first index
  let answerObject = {}; // initiate pointer to answer;
  answerObject[courses[0]] = [instructors[0].name]; // initial course
  let find = ''; // if false FIND in index adds a new attribute
  for(let i = 1 ; i < instructors.length ; i++){
    find = false;
    for(let c = 0; c < courses.length ; c++){
      if(courses[c] == instructors[i].course){
        answerObject[courses[c]].push(instructors[i].name);
        find = true; // If course in the list just add instructor
        break;
      }
    }
    if(find == false){ //course not in the list create new attribute
      courses[i] = (instructors[i].course);
      answerObject[courses[i]] = [instructors[i].name];
    }
  }
  return answerObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));