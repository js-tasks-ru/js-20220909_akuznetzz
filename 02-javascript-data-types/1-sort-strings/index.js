/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

/* Под комментариями в функции находится первый вариант решения до просмотра разбора домашки*/
export function sortStrings(arr, param = 'asc') {
    const compare = (a, b) => {
        // let result 
        
        // if (a.toLowerCase() === b.toLowerCase()) {
        //     result = a.localeCompare(b) * -1
        // } else {result = a.localeCompare(b)}
        
        // return result 

        return a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
    }

    const methods = {
        asc(a, b) {
        return compare(a, b);
        },

        desc(a, b) {
        return compare(a, b) * -1;
        },
    }

    // return arr.concat().sort(methods[param])

    return [...arr].sort(methods[param]);
}



