import { Space } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { sendInviteToLobby } from 'api/lobby/send-invite-to-lobby';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from 'router/types';
import { setButtons } from 'store/reducers/footer-slice';
import { UserType, setUser } from 'store/reducers/user-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';
import { decryptData, encryptData } from 'utils/crypt-data/cripting-data';
import checkForEmptyValues from 'utils/valudate/checkForEmpty';

const AboutRoom = () => {
    const { lobbyId } = useParams();
    const dispatch = useAppDispatch();
    const userId = decryptData(Cookies.get('userId'));
    const User = useAppSelector((state) => state.user);
    const [activeUser, setActiveUser] = useState<UserType>(User);
    const navigate = useNavigate();

    // отобразить описание комнаты, участников, приз, и с права форму с полями имя почта и фото
    // попробуй сам сделать запрос на сервер, как пример возьми get-lobby-from-code
    // если комнаты по такому id не будет то просто выводи что такой комнаты нет
    // если что то не поймешь то пиши мне

    useEffect(() => {
        async function sendWithLogin() {
            const newUserId = await sendInviteToLobby(lobbyId, activeUser); // здесь поменять потом на LobbyId который будет если команда найдена
            Cookies.set('selectLobby', encryptData(lobbyId));
            Cookies.set('userId', encryptData(newUserId));
            dispatch(
                setUser({
                    isLogin: true,
                    UserName: activeUser.UserName,
                    UserEmail: activeUser.UserEmail,
                    UserPhoto: activeUser.UserPhoto,
                }),
            );
        }

        dispatch(
            setButtons([
                {
                    label: 'Присоединиться',
                    onClick: () => {
                        if (lobbyId) {
                            if (User.isLogin) {
                                // здесь еще нужна проверка на админа, если этот пользователь админ этой комнаты то редирект на invitation-page
                                sendInviteToLobby(lobbyId, User, userId); // здесь поменять потом на id который будет если команда найдена
                                Cookies.set('selectLobby', encryptData(lobbyId));
                                navigate(AppRoutesPath.WAITING_ROOM);
                            } else {
                                if (checkForEmptyValues(activeUser)) {
                                    sendWithLogin();
                                    navigate(AppRoutesPath.WAITING_ROOM);
                                }
                            }
                        }
                    },
                },
            ]),
        );
    }, [activeUser]);

    return (
        <Paragraph>
            About Room {lobbyId}
            {!User.isLogin && (
                <Space>
                    <input
                        type="text"
                        onChange={(e) =>
                            setActiveUser((prev) => ({ ...prev, UserName: e.target.value }))
                        }
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) =>
                            setActiveUser((prev) => ({ ...prev, UserEmail: e.target.value }))
                        }
                    />
                    <input
                        type="text"
                        placeholder="photo"
                        onChange={
                            (e) => setActiveUser((prev) => ({ ...prev, UserPhoto: e.target.value })) // здесь используй hendler-image-upload для картинки
                        }
                    />
                    или войди с Tempus ID
                    <Link to={AppRoutesPath.SIGN_IN_PAGE}>ссылка</Link>
                </Space>
            )}
        </Paragraph>
    );
};

export default AboutRoom;
