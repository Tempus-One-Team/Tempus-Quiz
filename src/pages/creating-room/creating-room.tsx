import RoomRules from './room-rules/room-rules';
import Styles from './style.module.scss';
import { Card, Space } from 'antd';

const CreatingRoom = () => {
    return (
        <Space className={Styles.CreatingRoom}>
            <RoomRules></RoomRules>

            <Card className={Styles.Card} title={'Задачи'}></Card>
        </Space>
    );
};

export default CreatingRoom;
