// Seleccion de Ejercicios ****** 

let seleccion = prompt('Ingrese un numero de ejercicio del 1 al 5', ' ');

if (seleccion == 1) {
     ejercicio1();
}
if (seleccion == 2){
    ejercicio2();
}
if (seleccion == 3) {
    ejercicio3();
}
if (seleccion == 4) {
    ejercicio4();
}
if (seleccion == 5) {
    ejercicio5();
}

// Funciones con los Ejercicios 

// Ejercicio 1

function ejercicio1(){
    let num = prompt('Por favor Ingresa un número del 1 al 100', ' ')
    for(i = 0; i <= num; i++) console.log(i);
}

// Ejercicio 2 
function ejercicio2(){
    let askColor = prompt('Diga cual es el color del caballo de Napoleon', ' ');
    let colorHorse = 'blanco';
    if 
    (askColor.toLocaleLowerCase() == colorHorse.toLocaleLowerCase()) {
        alert('Es correcto');
    }
    
    else {
        alert('Intenta de nuevo')
        return ejercicio2();
    }
}

    // Ejercicio 3 
function ejercicio3(){
    let notasMat = +prompt('Ingresa el promedio de notas Matematicas');
    let notasFisica = +prompt('Ingresa el promedio de notas Fisica')
    let notasCiencias = +prompt('Ingresa el promedio de notas de Ciencias',)
    let promedio = (notasMat + notasFisica + notasCiencias) / 3;
    alert(Math.round(promedio));
}    
    // Ejercicio 4 
    // se hacen dos arreglos, uno para cantidad y otro para los nombre de fruta que el usuario ingrese
    // se hace un forEach para cantidad y otro para frutas
    function ejercicio4(){
        let cant = [1,2,3];
        let frutas = [];
        cant.forEach(() => {
            let fruta = prompt('Ingresa tu fruta favorita', ' ');
            frutas.push(fruta);
        });
        frutas.forEach(f => {
            if (f !='manzana') {
                console.log(f);
            }
        });
    }
        // Ejercicio 5 
    function ejercicio5(){
        let name = prompt('Hola, cómo te llamas','');
        let vocales = ["a", "e", "i", "o", "u"];
        let name2 = name.split('');
        let vocalesNum = 0;
        let consonantes = 0;
        
        name2.forEach(letra => {
        vocales.includes(letra) ? vocalesNum++ :
            consonantes++;
        });
        console.log(`la cantidad de vocales son ${vocalesNum}`);
        console.log(`la cantidad de consonantes son ${consonantes}`);
    }