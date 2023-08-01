/**
 * Retrieves students respective ids
 * @param {students} The list of students.
 * @returns {} The student id
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id)
  }
  return [];
}
