import { getDatabase, push, ref, set } from 'firebase/database';
import { LobbyInfo, LobbyTask } from 'pages/creating-room/creating-room';

export async function sendNewLobby(NewLobby: {
    LobbyInfo: LobbyInfo;
    LobbyTasks: LobbyTask[];
    LobbyUsers: {
        [x: string]: {
            UserName: string | null;
            UserPhoto: string | null;
            UserEmail: string | null;
            UserStatus: string;
        };
    };
}): Promise<string | null> {
    const db = getDatabase();
    const postListRef = ref(db, 'quez/');
    const newPostRef = push(postListRef);

    return set(newPostRef, NewLobby)
        .then(() => {
            return newPostRef.key;
        })
        .catch(() => {
            return null;
        });
}
