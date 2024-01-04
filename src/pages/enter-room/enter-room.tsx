import Styles from './style.module.scss';
import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';

const EnterRoom = () => {
    const [UserIsAuth, setUserIsAuth] = useState(false);

    return (
        <Space className={Styles.EnterSpace}>
            <Card title="Создать комнату" size="small">
                <div className={Styles.Card}>
                    <p>Проводи соревнования, получай уровень!</p>
                    {UserIsAuth ? <Button>Создать</Button> : <Button>Войти в аккаунт</Button>}
                </div>
            </Card>
            <Card title="Войти в комнату" size="small">
                <div className={Styles.Card}>
                    <p>Учавствуй в соревнованиях, побеждай!</p>
                    <Input placeholder="Код комнаты"></Input>
                    <Button>Войти в комнату</Button>
                </div>
            </Card>
        </Space>
    );
};

export default EnterRoom;
