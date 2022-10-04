/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

/*  после разбора домашки стало понятно почему нельзя так клонировать и использовать delete.
    Но кажется можно не тратить время на придумывание решение отличное от разобранного */
export const omit = (obj, ...fields) => {
    // const newObj = Object.assign({}, obj)

    // for (let field of fields) {
    //     if (newObj[field]) {
    //         delete newObj[field]
    //     }
    // }

    // return newObj

    const newObj = {}

    for (let key of Object.keys(obj)) {
        if (!fields.includes(key)) {
            newObj[key] = obj[key]
        }
    }

    return newObj


};
