import { LobbyInfo } from '../creating-room';
import Styles from '../style.module.scss';
import { Card, DatePicker, Form, Input, Select, TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

const { TextArea } = Input;

interface RoomInfo {
    setLobbyInfo: React.Dispatch<React.SetStateAction<LobbyInfo | undefined>>;
}
const RoomInfo = (props: RoomInfo) => {
    const { setLobbyInfo } = props;

    const changeInput = (UpdateValue: { [key: string]: string | Dayjs | null | undefined }) => {
        setLobbyInfo((prev) => ({
            ...prev,
            ...UpdateValue,
        }));
    };

    return (
        <Card className={Styles.Card} title={'Правила комнаты'}>
            <Form className={Styles.Form}>
                <Input
                    placeholder="Название комнаты"
                    onChange={(e) => changeInput({ LobbyName: e.target.value })}
                ></Input>
                <TextArea
                    placeholder="Описание комнаты"
                    autoSize={{ minRows: 5, maxRows: 10 }}
                    onChange={(e) => changeInput({ LobbyDescription: e.target.value })}
                ></TextArea>
                <TimePicker
                    placeholder="Время выполнения всех задач"
                    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                    onChange={(time) => changeInput({ LobbyTaskComplitionTime: time })}
                />
                <DatePicker
                    onChange={(time) => changeInput({ LobbyDateOfStart: time })}
                    placeholder="Дата старта"
                    showTime
                />
                <Select
                    placeholder="Приватность комнаты"
                    options={[
                        { value: 'private', label: 'Приватная' },
                        { value: 'general', label: 'Доступная всем' },
                    ]}
                    onChange={(value) => changeInput({ LobbyPrivate: value })}
                />
                <TextArea
                    placeholder="Призовой фонд"
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    onChange={(e) => changeInput({ LobbyPrizeFound: e.target.value })}
                ></TextArea>
            </Form>
        </Card>
    );
};
export default RoomInfo;
