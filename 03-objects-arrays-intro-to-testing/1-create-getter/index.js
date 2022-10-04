/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    return function (obj) {
        const arr = path.split('.')

        let result = obj[arr[0]]

        if (result) {
            for (let i = 1; i < arr.length; i++) {
                result = result[arr[i]]
            }
        }
        return result
    }
}
