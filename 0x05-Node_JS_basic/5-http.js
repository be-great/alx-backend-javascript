const fs = require('fs');

const fetchStudentData = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const groupByField = {};
    const totalStudents = lines.slice(1).length;

    lines.slice(1).forEach((line) => {
      const studentInfo = line.split(',');
      const field = studentInfo.pop();
      if (!groupByField[field]) {
        groupByField[field] = [];
      }
      groupByField[field].push(studentInfo[0]); // Assuming the first column is the name.
    });

    const report = [`Number of students: ${totalStudents}`];
    for (const [field, students] of Object.entries(groupByField)) {
      report.push(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    }

    resolve(report.join('\n'));
  });
});

module.exports = fetchStudentData; // Export the function for use in other files
