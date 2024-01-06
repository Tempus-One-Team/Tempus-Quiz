import { getDatabase, ref, set } from 'firebase/database';
import { UserType } from 'store/reducers/user-slice';

export async function sendInviteToLobby(
    LobbyId: string | undefined,
    User: UserType,
    UserId: string | undefined,
) {
    const db = getDatabase();
    const NewUser = { ...User, UserStatus: 'invited' };
    const userListRef = ref(db, 'quez/' + LobbyId + '/LobbyUsers/' + UserId);

    set(userListRef, NewUser);
}
