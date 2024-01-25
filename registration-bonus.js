// To test this file, run the following command in your terminal (in the same folder as this file):
// node workshop5.js


class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {

    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {

        if ((!studentToRegister.name) || (!studentToRegister.email)) {
            console.log('Invalid name or email.');
            return false;
        }
        for (const student of this.students) {
            if (student.email === studentToRegister.email) {
                console.log(`The email address ${studentToRegister.email} is already registered!`);
                return false;
            }
        }

        /* We have not covered .find yet, but more advanced students may try to
        use it instead of the for...of loop demonstrated above, and that's fine:
        */
        // if (this.students.find(student => student.email === studentToRegister.email)) {
        //     console.log(`The email address ${studentToRegister.email} is already registered!`);
        //     return false;
        // }

        this.students.push(studentToRegister);
        console.log(`Registering ${studentToRegister.name} to the ${this.name} bootcamp.`);
        return true;
    }

    listStudents() {
        if (this.students.length === 0) {  // other ways to check for empty array are acceptable so long as they work
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false;
        }

        console.log(`The students registered in ${this.name} are:`);
        for (const student of this.students) {
            console.log(`Name: ${student.name}  Email: ${student.email}`);
        }

        // We have not covered foreach, but more advanced students may try to use it instead of a for...of loop:
        // this.students.forEach(student => {
        //     console.log(`Name: ${student.name}  Email: ${student.email}`);
        // })

        return true;
    }

    /* There are multiple ways to handle the bonus tasks.
       Below are a few possibilities.
    */

    // Bonus task 1 -- Console.log name and level of bootcamp
    getInfo() {
        console.log(`Bootcamp: ${this.name}\nLevel: ${this.level}`);
    }

    /* Bonus task 2 - remove student object from array by email */
    removeStudent(email) {

        /* Method 1 - doesn't use arrow functions but is more verbose */
        let idxToRemove = -1
        for (let i = 0; i < this.students.length; i++) {
            if (email === this.students[i].email) {
                idxToRemove = i;
            }
        }
        if (idxToRemove !== -1) {
            this.students.splice(idxToRemove, 1)
            console.log(`Removed student with email ${email} from the ${this.name} bootcamp.`);
            return true;
        }
        console.log(`No such student is registered in ${this.name}.`);
        return false;

        /* Method 2 - arrow function: */
        // if (!this.students.find(student => student.email === email)) {
        //     console.log(`No such student is registered in ${this.name}.`);
        //     return false;
        // }
        // this.students = this.students.filter(student => student.email != email);
        // console.log(`Removed the student with email ${email} from ${this.name}`);
        // return true;

    }

}


/* TASK 1: Create a test student */
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

/* TASK 2: Create a test bootcamp */
reactBootcamp = new Bootcamp('React', 'Advanced');
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


const runTest = (bootcamp, student) => {
    /* TASK 3 - registerStudent() */
    const attemptOne = bootcamp.registerStudent(testStudent);
    const attemptThree = bootcamp.registerStudent(testStudent);
    const attemptTwo = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    /* TASK 4 - listStudents() */
    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = []; // Reset students to empty array
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }

};

runTest(reactBootcamp, testStudent);

