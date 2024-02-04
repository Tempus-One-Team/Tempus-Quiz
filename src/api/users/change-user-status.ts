import { getDatabase, ref, set } from '@firebase/database';

export function changeUserStatus(
    UserId: string | undefined,
    LobbyId: string | undefined,
    status: string,
) {
    const db = getDatabase();
    const userListRef = ref(db, 'quez/' + LobbyId + '/LobbyUsers/' + UserId + '/UserStatus/');
    set(userListRef, status);
}
