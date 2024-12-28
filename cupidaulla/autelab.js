class Form {
    constructor(fields) {
        this.fields = fields;
    }

    getFormData() {
        return {
            fields: this.fields
        };
    }
}

// Usage
const form = new Form(['name', 'email', 'password']);
const formData = form.getFormData();

console.log(formData);
// Output: { fields: ['name', 'email', 'password'] }
