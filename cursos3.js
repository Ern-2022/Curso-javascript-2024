const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspherry", "C++", "Python", "Java", "C#"]
// const getTodosCursos=()=>{
//     return cursos
// }
export default function getTodosCursos() {
    return cursos
}

function getCursos(i_curso) {
    return cursos[i_curso]
}

export { cursos, getCursos }
