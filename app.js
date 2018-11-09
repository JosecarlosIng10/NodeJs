const modulo = require('./Geometria/moduleCirculo');


const geometria = require('./Geometria')
console.log('El area del circulo es: '+modulo.areaCirculo(1));


console.log('El perimetro del circulo es: '+modulo.perimetroCirculo(1));

console.log(geometria.area.areaCirculo(1), geometria.perimetro.perimetroCirculo(1))