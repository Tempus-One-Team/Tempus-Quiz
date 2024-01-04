/* eslint-disable no-console */
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default async function loginAndReturnUser(email: string, password: string) {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
