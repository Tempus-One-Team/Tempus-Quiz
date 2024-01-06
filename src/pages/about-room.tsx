import Paragraph from 'antd/es/typography/Paragraph';
import { sendInviteToLobby } from 'api/lobbyes/send-invite-to-lobby';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AppRoutesPath } from 'router/types';
import { setButtons } from 'store/reducers/footer-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

const AboutRoom = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const UserId = Cookies.get('userId');
    const User = useAppSelector((state) => state.user);
    const navigate = useNavigate();

    // отобразить описание комнаты, участников, приз, и с права форму с полями имя почта и фото
    // попробуй сам сделать запрос на сервер, как пример возьми get-lobby-from-code
    // если комнаты по такому id не будет то просто выводи что такой комнаты нет
    // кнопку я добавил сам

    useEffect(() => {
        dispatch(
            setButtons([
                {
                    label: 'Присоедениться',
                    onClick: () => {
                        if (id) {
                            sendInviteToLobby(id, User, 'LOLID'); // тут вообще будет другой айди но так как щас я на акке админа пусть будет так
                            Cookies.set('selectLobby', id);
                            navigate(AppRoutesPath.WAITING_ROOM);
                        }
                    },

                    // здесь поменять потом на id который будет если команда найдена
                    // а User и UserId нужно взять из полей которые ты напишешь с правой стороны, userID можно сделать что бы само находилось значение уникальное, либо напиши мне и я сделаю чтоб это сделал сам сервер
                },
            ]),
        );
    }, []); // в зависимости добавь инпуты формы с права

    return <Paragraph>About Room {id}</Paragraph>;
};

export default AboutRoom;
