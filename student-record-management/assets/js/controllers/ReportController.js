class ReportController {
    constructor(storageService) {
        this.storageService = storageService;
    }

    generateStudentReport(studentId) {
        const student = this.storageService.getStudentById(studentId);
        if (!student) {
            console.error('Student not found');
            return null;
        }

        const report = {
            name: student.name,
            id: student.id,
            grades: student.grades,
            attendance: student.attendance,
            averageGrade: this.calculateAverageGrade(student.grades),
            attendancePercentage: this.calculateAttendancePercentage(student.attendance)
        };

        return report;
    }

    calculateAverageGrade(grades) {
        const total = grades.reduce((sum, grade) => sum + grade, 0);
        return total / grades.length || 0;
    }

    calculateAttendancePercentage(attendance) {
        const totalClasses = attendance.length;
        const attendedClasses = attendance.filter(record => record).length;
        return (attendedClasses / totalClasses) * 100 || 0;
    }

    generateReportForAllStudents() {
        const students = this.storageService.getAllStudents();
        return students.map(student => this.generateStudentReport(student.id));
    }
}

export default ReportController;