/*
Read file :
*/
const fs = require('fs');

async function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const fields = {};

    lines.slice(1).forEach((line) => {
      if (line) {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);
    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
