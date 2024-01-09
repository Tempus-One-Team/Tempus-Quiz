import { getDatabase, push, ref, set } from 'firebase/database';
import { UserType } from 'store/reducers/user-slice';

export async function sendInviteToLobby(
    LobbyId: string | undefined,
    User: UserType,
    UserId?: string | undefined,
): Promise<string> {
    const db = getDatabase();
    const NewUser = { ...User, UserStatus: 'invited' };
    let userRefKey: string | null;

    if (UserId) {
        const userListRef = ref(db, 'quez/' + LobbyId + '/LobbyUsers/' + UserId);
        await set(userListRef, NewUser);
        userRefKey = UserId;
    } else {
        const userListRef = ref(db, 'quez/' + LobbyId + '/LobbyUsers/');
        const newUserRef = push(userListRef);
        await set(newUserRef, NewUser);
        userRefKey = newUserRef.key;
    }

    if (!userRefKey) {
        throw new Error('Failed to get user reference key');
    }

    return userRefKey;
}
