// create the interface

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create the new interface variables
const student1: Student = {
    firstName: 'Ali',
    lastName: 'Smith',
    age: 20,
    location: 'sumail',
}
// create the new interface varibels
const student2: Student = {
    firstName: 'Esra',
    lastName: 'Smith',
    age: 20,
    location: 'sumail',
}
const studentsList: Student[] = [student1, student2];
// Render a table
const table = document.createElement('table');
studentsList.forEach(student=> {
    // get the row
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    // change the content in the row
    cell1.innerText = student.firstName;
    cell2.innerText = student.location;

});
document.body.appendChild(table);