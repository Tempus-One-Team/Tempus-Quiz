import { getDatabase, onValue, ref } from 'firebase/database';
import { LobbyUsers } from 'types/lobbyTypes';

export function subscribeOnUser(
    LobbyId: string | undefined,
    UserId: string | undefined,
    callback: React.Dispatch<React.SetStateAction<LobbyUsers | undefined>>,
) {
    const db = getDatabase();
    const starCountRef = ref(db, 'quez/' + LobbyId + '/LobbyUsers/' + UserId);

    onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val());
        } else {
            callback(undefined);
        }
    });
}
