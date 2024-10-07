export default function getStudentsByLocation(studentList, city) {
  const stdByCity = studentList.filter((std) => std.location === city);
  return stdByCity;
}
