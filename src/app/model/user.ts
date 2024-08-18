export class User {
    id: number;
    firstname: String;
    lastname: String;
    phone: number;
    email: String;

    constructor(id: number,firstname: String,lastname: String,phone: number,email: String) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
}

// Explanation  
// loadUsers(): This method loads all users from the backend.
// save(): This method checks if the user.id is 0. If it is, it calls addUser(). Otherwise, it calls updateUser().
// addUser(): This method adds a new user to the backend and updates the local users array.
// clearUser(): This method resets the user object to a new user with default values.
// onEdit(user: User): This method sets the form fields with the selected user's data for editing.
// updateUser(): This method updates the existing user in the backend and updates the local users array.
// onDelete(id: number): This method deletes the user with the specified ID from the backend and removes them from the local users array.