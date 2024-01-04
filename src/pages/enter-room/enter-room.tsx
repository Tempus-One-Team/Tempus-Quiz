import Styles from './style.module.scss';
import { Button, Card, Input, Space } from 'antd';
import { useNavigate } from 'react-router';
import { AppRoutesPath } from 'router/types';
import { useAppSelector } from 'store/store-hooks';

const EnterRoom = () => {
    const UserIsLogin = useAppSelector((state) => state.user.isLogin);
    const navigate = useNavigate();

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
                    <Input placeholder="Код комнаты"></Input>
                    <Button onClick={() => navigate(AppRoutesPath.ABOUT_ROOM)}>
                        Войти в комнату
                    </Button>
                </div>
            </Card>
        </Space>
    );
};

export default EnterRoom;
