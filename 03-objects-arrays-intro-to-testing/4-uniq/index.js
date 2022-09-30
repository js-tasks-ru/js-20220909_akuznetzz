/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(array) {
    let newArr = []

    function sort(arr) {
        if (arr.length > 0) {
            newArr.push(arr[0])
            arr = arr.filter(item => item !== arr[0])
            sort(arr)
        }
    }


    if (array === undefined) {return newArr} 

    sort(array)

    return newArr
}
