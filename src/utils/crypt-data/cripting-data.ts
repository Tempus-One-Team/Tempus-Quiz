import CryptoJS from 'crypto-js';

const myKey = 'T3mPUsK3y@$$';

export function encryptData(data: string | undefined) {
    if (data) {
        return CryptoJS.AES.encrypt(data, myKey).toString();
    } else {
        return '';
    }
}

export function decryptData(encryptedData: string | undefined) {
    if (encryptedData) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, myKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}
