import Styles from '../style.module.scss';
import { Card, Input } from 'antd';

const { TextArea } = Input;
const RoomRules = () => {
    return (
        <Card className={Styles.Card} title={'Правила комнаты'}>
            <Input placeholder="Название комнаты"></Input>
            <TextArea placeholder="Название комнаты"></TextArea>
        </Card>
    );
};
export default RoomRules;
