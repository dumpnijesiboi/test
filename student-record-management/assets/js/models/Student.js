class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.grades = [];
        this.attendance = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    updateGrade(index, newGrade) {
        if (index >= 0 && index < this.grades.length) {
            this.grades[index] = newGrade;
        }
    }

    deleteGrade(index) {
        if (index >= 0 && index < this.grades.length) {
            this.grades.splice(index, 1);
        }
    }

    addAttendance(record) {
        this.attendance.push(record);
    }

    updateAttendance(index, newRecord) {
        if (index >= 0 && index < this.attendance.length) {
            this.attendance[index] = newRecord;
        }
    }

    deleteAttendance(index) {
        if (index >= 0 && index < this.attendance.length) {
            this.attendance.splice(index, 1);
        }
    }

    getStudentInfo() {
        return {
            name: this.name,
            id: this.id,
            grades: this.grades,
            attendance: this.attendance
        };
    }
}

export default Student;