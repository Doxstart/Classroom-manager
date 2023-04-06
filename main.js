///BONUS
// 1) rimozione dello studente
// 2) sito esteticamente gradevole
// 3) disposizione degli studenti non in lista ma affiancati a due a due
// 4) aggiunta della data di nascita dello studente
// 5) se è il compleanno dello studente il suo nome sarà scritto in modo evidenziato

const student1 = new Student('Simone', 'Maccarone');
const student2 = new Student('Luis Alberto', 'Castro');
const student3 = new Student('Davide', 'Consigliere');
const student4 = new Student('Francesco', 'Badile');

const classroom1 = new ClassRoom([student1, student2, student3, student4]);


function displayClassroom(classroom){
    const classroomStudents= classroom.students
    for (let i = 0; i < classroomStudents.length; i++) {
        const element = classroomStudents[i];
        const studentList = document.getElementById('student-list')
        const newLi = document.createElement('li')
        const text = document.createTextNode(element.toString())
        newLi.appendChild(text)
        studentList.appendChild(newLi)
    }
}

displayClassroom(classroom1)

// function shuffleTheClassroom(){

// }

// function addStudentToClassroom(){

// }

