/**
 * A Course, Getters, and Setters.
 */
export default class ClassRoom {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * String name - course name.
   * Number length - length of the course (in months).
   * String students - students name.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * get name attribute.
   */
  get name() {
    return this._name;
  }

  /**
   * set name attribute.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * get length attribute.
   */
  get length() {
    return this._length;
  }

  /**
   * set length attribute.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * get students attribute.
   */
  get students() {
    return this._students;
  }

  /**
   * set students attribute.
   */
  set students(value) {
    if (!Array.isArray(value) !== !value.every((std) => typeof std === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
