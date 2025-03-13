class Teacher {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.sections = [];
    }

    addSection(section) {
        this.sections.push(section);
    }

    updateSection(oldSection, newSection) {
        const index = this.sections.indexOf(oldSection);
        if (index > -1) {
            this.sections[index] = newSection;
        }
    }

    deleteSection(section) {
        const index = this.sections.indexOf(section);
        if (index > -1) {
            this.sections.splice(index, 1);
        }
    }

    getSections() {
        return this.sections;
    }
}

export default Teacher;