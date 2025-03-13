export function searchStudents(students, query) {
    return students.filter(student => 
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.id.toString().includes(query)
    );
}

export function filterStudentsByGrade(students, minGrade) {
    return students.filter(student => student.grades.some(grade => grade >= minGrade));
}

export function sortStudentsByName(students) {
    return students.sort((a, b) => a.name.localeCompare(b.name));
}

export function generateStudentReport(students) {
    return students.map(student => ({
        id: student.id,
        name: student.name,
        averageGrade: student.grades.reduce((a, b) => a + b, 0) / student.grades.length,
        attendance: student.attendance
    }));
}