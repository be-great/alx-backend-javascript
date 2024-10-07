export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((std) => std.location === city)
    .map((std) => {
      // find the object first that share the same id then decide
      const objfind = newGrades.find((grade) => grade.studentId === std.id);
      return {
        ...std,
        grade: objfind ? objfind.grade : 'N/A',
      };
    });
}
