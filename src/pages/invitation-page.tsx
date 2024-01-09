import { Space } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { getLobbyFromCode } from 'api/lobby/get-lobby-from-code';
import { changeUserStatus } from 'api/users/change-user-status';
import { subscribeOnUsers } from 'api/users/subscribe-on-users';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from 'router/types';
import { UserStates } from 'store/reducers/user-slice';
import { LobbyType, LobbyUsers } from 'types/lobbyTypes';
import { decryptData } from 'utils/crypt-data/cripting-data';

const InvitationPage = () => {
    const userId = decryptData(Cookies.get('userId'));
    const [Lobby, setLobby] = useState<LobbyType>();
    const [LobbyUsersRender, setLobbyUsers] = useState<LobbyUsers[]>();

    useEffect(() => {
        async function getLobby() {
            const selectedLobbyCode = decryptData(Cookies.get('selectLobby'));
            if (selectedLobbyCode && userId) {
                const Lobby = await getLobbyFromCode(selectedLobbyCode);
                if (Lobby?.LobbyUsers[userId].UserStatus === UserStates.admin) {
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
                    {LobbyUsersRender?.map((user) => (
                        <div key={user.UserId}>
                            {user.UserName}
                            {user.UserStatus === UserStates.invited && (
                                <div>
                                    <button
                                        onClick={() =>
                                            changeUserStatus(
                                                user.UserId,
                                                Lobby.LobbyInfo.LobbyId,
                                                UserStates.accepted,
                                            )
                                        }
                                    >
                                        accept
                                    </button>
                                    <button
                                        onClick={() =>
                                            changeUserStatus(
                                                user.UserId,
                                                Lobby.LobbyInfo.LobbyId,
                                                UserStates.banned,
                                            )
                                        }
                                    >
                                        reject
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    {/*отдельный компонент*/}
                </div>
            </Space>
        );
    } else {
        return <div>Проверка на админа</div>;
    }
};

export default InvitationPage;
