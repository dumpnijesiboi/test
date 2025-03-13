class TeacherController {
    constructor(storageService) {
        this.storageService = storageService;
        this.teachers = this.loadTeachers();
    }

    loadTeachers() {
        const teachersData = this.storageService.get('teachers');
        return teachersData ? JSON.parse(teachersData) : [];
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
        this.saveTeachers();
    }

    updateTeacher(updatedTeacher) {
        const index = this.teachers.findIndex(teacher => teacher.id === updatedTeacher.id);
        if (index !== -1) {
            this.teachers[index] = updatedTeacher;
            this.saveTeachers();
        }
    }

    deleteTeacher(teacherId) {
        this.teachers = this.teachers.filter(teacher => teacher.id !== teacherId);
        this.saveTeachers();
    }

    getTeacher(teacherId) {
        return this.teachers.find(teacher => teacher.id === teacherId);
    }

    saveTeachers() {
        this.storageService.set('teachers', JSON.stringify(this.teachers));
    }

    searchTeachers(query) {
        return this.teachers.filter(teacher => teacher.name.toLowerCase().includes(query.toLowerCase()));
    }
}

export default TeacherController;