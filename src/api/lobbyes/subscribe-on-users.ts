import { getDatabase, onValue, ref } from 'firebase/database';
import { LobbyUsers } from 'types/lobbyTypes';

export function subscribeOnUsers(
    QuezCode: string,
    callback: React.Dispatch<React.SetStateAction<LobbyUsers[] | undefined>>,
) {
    const db = getDatabase();
    const starCountRef = ref(db, 'quez/' + QuezCode + '/LobbyUsers');

    onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
            const transformedArray = Object.keys(snapshot.val()).map((userId) => ({
                ...snapshot.val()[userId],
                UserId: userId,
            }));
            callback(transformedArray);
        } else {
            callback(undefined);
        }
    });
}
