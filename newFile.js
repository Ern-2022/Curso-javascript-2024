btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado();
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSling);
        } else {
            alert("Selecio o curso");
        }

    }
    finally {
    }
});
