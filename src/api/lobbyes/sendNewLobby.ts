import { getDatabase, push, ref, set } from 'firebase/database';
import { LobbyInfo, LobbyTask } from 'pages/creating-room/creating-room';

export function sendNewLobby(NewLobby: {
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
}) {
    const db = getDatabase();
    const postListRef = ref(db, 'quez/');
    const newPostRef = push(postListRef);

    set(newPostRef, NewLobby);
}
