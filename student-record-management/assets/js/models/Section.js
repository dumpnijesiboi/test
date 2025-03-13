class Section {
    constructor(name, teacherId) {
        this.name = name;
        this.teacherId = teacherId;
    }

    getSectionName() {
        return this.name;
    }

    setSectionName(name) {
        this.name = name;
    }

    getTeacherId() {
        return this.teacherId;
    }

    setTeacherId(teacherId) {
        this.teacherId = teacherId;
    }

    static fromJSON(json) {
        const data = JSON.parse(json);
        return new Section(data.name, data.teacherId);
    }

    toJSON() {
        return JSON.stringify({
            name: this.name,
            teacherId: this.teacherId
        });
    }
}

export default Section;