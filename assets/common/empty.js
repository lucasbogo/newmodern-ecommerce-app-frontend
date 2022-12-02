/**
 * 
 * @param {*} value = valor indefinido, nulo, se o tipo de objeto estiver vazio e se o a string estiver vazia,
 * @returns retorn resultado: se está vazio ou não. é possível definir essa checkagem para: 
 * biginit, boolean, function, number, string, symbol e undefined
 */

const empty = value =>
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0);

    export default empty;