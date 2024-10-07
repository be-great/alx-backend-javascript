export default function getStudentIdsSum(studentList) {
  const stdSum = studentList.reduce((start, std) => start + std.id, 0);
  return stdSum;
}
