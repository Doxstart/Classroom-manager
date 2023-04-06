class ClassRoom{

    constructor(students = []){
        this.students = students
    }

    addStudent(student){
        
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

    // removeStudent(student){


    // }

    // shuffleStudents(){


        
    // }

}