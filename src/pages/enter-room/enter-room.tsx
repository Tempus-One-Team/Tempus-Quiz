import Styles from './style.module.scss';
import { Button, Card, Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutesPath } from 'router/types';
import { setButtons } from 'store/reducers/footer-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

const EnterRoom = () => {
    const UserIsLogin = useAppSelector((state) => state.user.isLogin);
    const [InputCode, setInputCode] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setButtons([]));
    }, []);

    return (
        <Space className={Styles.EnterSpace}>
            <Card title="Создать комнату" size="small">
                <div className={Styles.Card}>
                    <p>Проводи соревнования, получай уровень!</p>
                    {UserIsLogin ? (
                        <Button onClick={() => navigate(AppRoutesPath.CREATING_ROOM_PAGE)}>
                            Создать
                        </Button>
                    ) : (
                        <Button onClick={() => navigate(AppRoutesPath.SIGN_IN_PAGE)}>
                            Войти в аккаунт
                        </Button>
                    )}
                </div>
            </Card>
            <Card title="Войти в комнату" size="small">
                <div className={Styles.Card}>
                    <p>Учавствуй в соревнованиях, побеждай!</p>
                    <Input
                        placeholder="Код комнаты"
                        onChange={(e) => setInputCode(e.target.value)}
                    ></Input>
                    <Button onClick={() => navigate(AppRoutesPath.ABOUT_ROOM + '/' + InputCode)}>
                        Войти в комнату
                    </Button>
                </div>
            </Card>
        </Space>
    );
};

export default EnterRoom;
