import Paragraph from 'antd/es/typography/Paragraph';
import { subscribeOnUser } from 'api/users/subscribe-on-user';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutesPath } from 'router/types';
import { UserStates } from 'store/reducers/user-slice';
import { LobbyUsers } from 'types/lobbyTypes';
import { decryptData } from 'utils/crypt-data/cripting-data';

const WaitingRoom = () => {
    const [selectedUser, setSelectedUser] = useState<LobbyUsers | undefined>();
    const userId = decryptData(Cookies.get('userId'));
    const selectLobbyId = decryptData(Cookies.get('selectLobby'));
    const navigate = useNavigate();

    useEffect(() => {
        subscribeOnUser(selectLobbyId, userId, setSelectedUser);
    }, []);

    useEffect(() => {
        if (selectedUser?.UserStatus === UserStates.accepted) {
            navigate(AppRoutesPath.CURRENT_PROGRAMMER_CODE_PAGE);
        } else if (selectedUser?.UserStatus === UserStates.banned) {
            navigate(AppRoutesPath.MAIN);
            Cookies.remove('selectLobby');
        }
    }, [selectedUser]);

    return (
        <>
            <Paragraph>WaitingRoom</Paragraph>
        </>
    );
};

export default WaitingRoom;
