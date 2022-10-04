/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let arr = string.split('')
    let newArr = []
    
    let checkingItem = arr[0]
    let counter = 0

    if(size) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === checkingItem && counter < size) {
                newArr.push(arr[i]) 
                counter++
            }

            if (arr[i] !== checkingItem) {
                newArr.push(arr[i])
                checkingItem = arr[i]
                counter = 1
            }
        }
    } else if (size === undefined) {newArr = arr.concat()}
  

    return newArr.join('')
}
