function notas (nota1, nota2, nota3, nota4, nota5, nota6){
    const suma = nota1+nota2+nota3+nota4+nota5+nota6;
    return suma
}

function promedio(){
    const promedionotas= sumanotas/6;
    return promedionotas
}


const sumanotas = notas(6, 8, 9, 2, 5, 10);
console.log("la suma de notas es:",sumanotas)

const promediofinal = promedio()
console.log("El promedio final es:", promediofinal)