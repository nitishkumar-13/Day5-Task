// 1) Using for..in loop
for (let key in rd) {
  console.log(key, ":", rd[key]);
}

// 2) Using for loop
for (let i = 0; i < rd.education.length; i++) {
  console.log("education:", rd.education[i]);
}

//  4) Using for...of loop (for arrays)
for (let education of rd.education) {
  console.log("degree:", education.degree);
  console.log("yearOfPassing:", education.yearOfPassing);
}

// 5) Using forEach loop (for arrays)
rd.education.forEach((edu) => {
  console.log("Degree:", edu.degree);
});
