import CryptoJS from 'crypto-js';

const myKey = 'T3mPUsK3y@$$';

export function encryptData(data: string) {
    return CryptoJS.AES.encrypt(data, myKey).toString();
}

export function decryptData(encryptedData: string) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, myKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
