/* eslint-disable prefer-const */
interface MyObject {
    [index: string]: string;
}

export default function checkForEmptyValues(obj: MyObject) {
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
                return false;
            }
        }
    }
    return true;
}
