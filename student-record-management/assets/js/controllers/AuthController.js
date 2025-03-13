class AuthController {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    register(user) {
        if (this.isUserExists(user)) {
            alert('User already exists!');
            return false;
        }
        this.users.push(user);
        this.saveUsers();
        alert('Registration successful!');
        return true;
    }

    login(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            alert('Login successful!');
            return true;
        }
        alert('Invalid username or password!');
        return false;
    }

    isUserExists(user) {
        return this.users.some(u => u.username === user.username);
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}

export default AuthController;