//Consigna del desafio complementario: Crea un algoritmo utilizando objetos y array

class Alumnos {
    constructor(){
        this.nombre = [];
    }
    agregarAlumnos(){
        let cantidad = 0
        while(cantidad < 3){
            this.nombre.push(prompt('Ingrese el nombre del alumno'))
            cantidad ++
        }
    }
}
const ejemplo1 = new Alumnos()

ejemplo1.agregarAlumnos()

const buscador= ()=>{
    let alumnoBuscar = prompt('Ingrese el nombre del alumno a buscar')
    if (ejemplo1.nombre.includes(alumnoBuscar)){
        console.log('El alumno buscado se encuentra en la lista');
    }else if(prompt('No se encuentra el alumno. Desea agregarlo:') === 'si'){
        ejemplo1.nombre.push(alumnoBuscar)
    }
}

buscador()

console.log(ejemplo1);
