/**
 *  Paradigma Funcional 
 * 
 *  impoi a diciplina de imutabilidade :
 * 
 *?  # Pilares :
 *   - Imutabilidade 
 *   - Função Puras 
 *   - Currying 
 *   - Composição de função 
 */

const arrayEl = [1, 3, 7, 6, 8]; // continua imutavel 

const dobrar = num => num * 2

const dobroEl = arrayEl.map(dobro);

console.log(arrayEl)
console.log(dobroEl)