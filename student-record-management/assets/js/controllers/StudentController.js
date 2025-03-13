class StudentController {
    constructor(storageService) {
        this.storageService = storageService;
        this.students = this.loadStudents();
    }

    loadStudents() {
        const studentsData = this.storageService.get('students');
        return studentsData ? JSON.parse(studentsData) : [];
    }

    addStudent(student) {
        this.students.push(student);
        this.saveStudents();
    }

    updateStudent(updatedStudent) {
        const index = this.students.findIndex(student => student.id === updatedStudent.id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
            this.saveStudents();
        }
    }

    deleteStudent(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
        this.saveStudents();
    }

    getStudent(studentId) {
        return this.students.find(student => student.id === studentId);
    }

    getAllStudents() {
        return this.students;
    }

    saveStudents() {
        this.storageService.set('students', JSON.stringify(this.students));
    }
}

export default StudentController;