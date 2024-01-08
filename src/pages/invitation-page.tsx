import { Space } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { getLobbyFromCode } from 'api/lobbyes/get-lobby-from-code';
import { subscribeOnUsers } from 'api/lobbyes/subscribe-on-users';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from 'router/types';
import { LobbyType, LobbyUsers } from 'types/lobbyTypes';
import { decryptData } from 'utils/crypt-data/cripting-data';

const InvitationPage = () => {
    const UserId = decryptData(Cookies.get('userId'));
    const [Lobby, setLobby] = useState<LobbyType>();
    const [LobbyUsersRender, setLobbyUsers] = useState<LobbyUsers[]>();

    useEffect(() => {
        async function getLobby() {
            const SelectLobbyCode = decryptData(Cookies.get('selectLobby'));
            if (SelectLobbyCode && UserId) {
                const Lobby = await getLobbyFromCode(SelectLobbyCode);
                if (Lobby?.LobbyUsers[UserId].UserStatus === 'admin') {
                    setLobby(Lobby);
                    if (Lobby?.LobbyInfo.LobbyId) {
                        subscribeOnUsers(Lobby?.LobbyInfo.LobbyId, setLobbyUsers);
                    }
                }
            }
        }

        getLobby();
    }, []);

    if (Lobby) {
        return (
            <Space>
                <Link to={AppRoutesPath.ABOUT_ROOM + '/' + Lobby.LobbyInfo.LobbyId}>
                    {Lobby.LobbyInfo.LobbyId}
                </Link>

                <Paragraph>{Lobby?.LobbyInfo?.LobbyName}</Paragraph>

                <div>
                    {LobbyUsersRender?.map((user) => <div key={user.UserId}>{user.UserName}</div>)}
                </div>
            </Space>
        );
    } else {
        return <div>Проверка на админа</div>;
    }
};

export default InvitationPage;
