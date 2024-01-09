import { DataSnapshot, getDatabase, onValue, ref } from 'firebase/database';
import { LobbyType } from 'types/lobbyTypes';

export async function getLobbyFromCode(QuezCode: string): Promise<LobbyType | null> {
    const db = getDatabase();
    try {
        const snapshot = await new Promise<DataSnapshot>((resolve, reject) => {
            const userRef = ref(db, 'quez/' + QuezCode);
            onValue(userRef, resolve, reject, {
                onlyOnce: true,
            });
        });
        if (snapshot.exists()) {
            const Quez = {
                ...snapshot.val(),
                ...{ LobbyInfo: { ...snapshot.val().LobbyInfo, LobbyId: snapshot.key } },
            };

            return Quez;
        } else {
            return null;
        }
    } catch {
        return null;
    }
}
