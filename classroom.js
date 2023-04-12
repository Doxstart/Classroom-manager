class ClassRoom{

    constructor(students = []){
        this.students = students
    }

    addStudent(student){
        this.students.push(student);
    }

    addStudentName(student){
        const input = document.getElementById('input-nome');
        if (input.value !== '') {
            const newName= input.value;
            student.push(newName);
            displayClassroom(classroom1);
            input.value = '';
        }
    }
    
    addStudentSurname(student){
        const input = document.getElementById('input-cognome');
        if (input.value !== '') {
            const newSurname= input.value;
            student.push(newSurname);
            displayClassroom(classroom1);
            input.value = '';
        }
    }

    removeStudent(student){
        const index = this.students.indexOf(student);
        if (index >= 0) {
            this.students.splice(index, 1);
        }
    }

    shuffleStudents(){
        const tempArray = [];
        while (this.students.length > 0) {
            const randomNumber = Math.random() * this.students.length;
            const randomIndex = Math.floor(randomNumber);
            const arrayOfDeleted = this.students.splice(randomIndex, 1);
            const randomStudent = arrayOfDeleted[0];
            tempArray.push(randomStudent);
        }
        this.students = tempArray;
    }
}