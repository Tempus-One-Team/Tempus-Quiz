/* eslint-disable prefer-const */
interface MyObject {
    [key: string]: string | number | null | undefined;
}

export default function checkForEmptyValues(obj: MyObject | undefined): boolean {
    for (let key in obj) {
        if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
            return false;
        }
    }
    return true;
}
