/* eslint-disable no-console */
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { DataSnapshot, getDatabase, onValue, ref } from 'firebase/database';

interface UserType {
    UserEmail: string;
    UserName: string;
    UserPhoto: string;
    UserId: string | null;
}

export default async function loginAndReturnUser(data: {
    email: string;
    password: string;
}): Promise<UserType | null> {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        return getUser(userCredential.user.uid);
    } catch (error) {
        console.error(error);
        return null;
        throw error;
    }
}

async function getUser(UserId: string): Promise<UserType | null> {
    const db = getDatabase();

    try {
        const snapshot = await new Promise<DataSnapshot>((resolve, reject) => {
            const userRef = ref(db, 'users/' + UserId);
            onValue(userRef, resolve, reject, {
                onlyOnce: true,
            });
        });

        if (snapshot.exists()) {
            const User: UserType = {
                UserEmail: snapshot.val().email,
                UserName: snapshot.val().name,
                UserPhoto: snapshot.val().photo,
                UserId: snapshot.key,
            };
            return User;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}
