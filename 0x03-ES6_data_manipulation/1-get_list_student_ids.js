export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) return [];
  const studentIds = studentsList.map((std) => std.id);
  return studentIds;
}
