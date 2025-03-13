class StorageService {
    constructor() {
        this.storageKey = 'studentRecords';
    }

    // Save student records to localStorage
    saveRecords(records) {
        localStorage.setItem(this.storageKey, JSON.stringify(records));
    }

    // Retrieve student records from localStorage
    getRecords() {
        const records = localStorage.getItem(this.storageKey);
        return records ? JSON.parse(records) : [];
    }

    // Clear all student records from localStorage
    clearRecords() {
        localStorage.removeItem(this.storageKey);
    }

    // Update a specific student record
    updateRecord(updatedRecord) {
        const records = this.getRecords();
        const index = records.findIndex(record => record.id === updatedRecord.id);
        if (index !== -1) {
            records[index] = updatedRecord;
            this.saveRecords(records);
        }
    }

    // Delete a specific student record
    deleteRecord(recordId) {
        const records = this.getRecords();
        const filteredRecords = records.filter(record => record.id !== recordId);
        this.saveRecords(filteredRecords);
    }
}

export default new StorageService();