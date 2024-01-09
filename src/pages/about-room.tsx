import { Space } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { sendInviteToLobby } from 'api/lobbyes/send-invite-to-lobby';
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
    const { LobbyId } = useParams();
    const dispatch = useAppDispatch();
    const UserId = decryptData(Cookies.get('userId'));
    const User = useAppSelector((state) => state.user);
    const [ActiveUser, setActiveUser] = useState<UserType>(User);
    const navigate = useNavigate();

    // отобразить описание комнаты, участников, приз, и с права форму с полями имя почта и фото
    // попробуй сам сделать запрос на сервер, как пример возьми get-lobby-from-code
    // если комнаты по такому id не будет то просто выводи что такой комнаты нет
    // если что то не поймешь то пиши мне

    useEffect(() => {
        function sendWithLogin() {
            const NewUserId = sendInviteToLobby(LobbyId, ActiveUser); // здесь поменять потом на LobbyId который будет если команда найдена
            Cookies.set('selectLobby', encryptData(LobbyId));
            Cookies.set('userId', encryptData(NewUserId));
            dispatch(
                setUser({
                    isLogin: true,
                    UserName: ActiveUser.UserName,
                    UserEmail: ActiveUser.UserEmail,
                    UserPhoto: ActiveUser.UserPhoto,
                }),
            );
        }

        dispatch(
            setButtons([
                {
                    label: 'Присоединиться',
                    onClick: () => {
                        if (LobbyId) {
                            if (User.isLogin) {
                                // здесь еще нужна проверка на админа, если этот пользователь админ этой комнаты то редирект на invitation-page
                                sendInviteToLobby(LobbyId, User, UserId); // здесь поменять потом на id который будет если команда найдена
                                Cookies.set('selectLobby', encryptData(LobbyId));
                                navigate(AppRoutesPath.WAITING_ROOM);
                            } else {
                                if (checkForEmptyValues(ActiveUser)) {
                                    sendWithLogin();
                                    navigate(AppRoutesPath.WAITING_ROOM);
                                }
                            }
                        }
                    },
                },
            ]),
        );
    }, [ActiveUser]);

    return (
        <Paragraph>
            About Room {LobbyId}
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
