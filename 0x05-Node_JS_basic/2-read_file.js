const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.trim().split('\n').slice(1);
    const fields = {};

    students.forEach((student) => {
      const [firstname,,, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);
    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
