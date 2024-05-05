class Cursos{
    static cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspherry", "C++", "Python", "Java", "C#"]
    
    constructor() { }

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addcurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=()=>{
        this.cursos=[]
    }
}

export default Cursos