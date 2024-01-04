/* eslint-disable no-console */
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default async function loginAndReturnUser(data: { email: string; password: string }) {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
