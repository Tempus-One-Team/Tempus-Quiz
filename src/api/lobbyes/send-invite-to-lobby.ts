import { getDatabase, push, ref, set } from 'firebase/database';
import { UserType } from 'store/reducers/user-slice';

export async function sendInviteToLobby(
    LobbyId: string | undefined,
    User: UserType,
    UserId?: string | undefined,
) {
    const db = getDatabase();
    const NewUser = { ...User, UserStatus: 'invited' };
    if (UserId) {
        const userListRef = ref(db, 'quez/' + LobbyId + '/LobbyUsers/' + UserId);
        set(userListRef, NewUser);
    } else {
        const userListRef = ref(db, 'quez/' + LobbyId + '/LobbyUsers/');
        const newUserRef = push(userListRef);
        set(newUserRef, NewUser);
    }
}
