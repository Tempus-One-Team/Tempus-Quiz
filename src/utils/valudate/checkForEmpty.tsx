import { UserType } from 'store/reducers/user-slice';
import { LobbyInfo, LobbyTask } from 'types/lobbyTypes';

export default function checkForEmptyValues(obj: LobbyInfo | LobbyTask | UserType) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
                return false;
            }
        }
    }
    return true;
}
