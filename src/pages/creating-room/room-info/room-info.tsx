import { LobbyInfo } from '../creating-room';
import Styles from '../style.module.scss';
import { Card, DatePicker, Form, Input, Select, TimePicker } from 'antd';
import { Dayjs } from 'dayjs';

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
                <Form.Item<LobbyInfo> name="LobbyName">
                    <Input
                        placeholder="Название комнаты"
                        onChange={(e) => changeInput({ LobbyName: e.target.value })}
                    ></Input>
                </Form.Item>
                <Form.Item<LobbyInfo> name="LobbyDescription">
                    <TextArea
                        placeholder="Описание комнаты"
                        autoSize={{ minRows: 5, maxRows: 10 }}
                        onChange={(e) => changeInput({ LobbyDescription: e.target.value })}
                    ></TextArea>
                </Form.Item>
                <Form.Item<LobbyInfo> name="LobbyTaskComplitionTime">
                    <TimePicker
                        style={{ width: '100%' }}
                        placeholder="Время выполнения всех задач"
                        onChange={(time) => changeInput({ LobbyTaskComplitionTime: time })}
                    />
                </Form.Item>
                <Form.Item<LobbyInfo> name="LobbyDateOfStart">
                    <DatePicker
                        style={{ width: '100%' }}
                        onChange={(time) => changeInput({ LobbyDateOfStart: time })}
                        placeholder="Дата старта"
                        showTime
                    />
                </Form.Item>
                <Form.Item<LobbyInfo> name="LobbyPrivate">
                    <Select
                        placeholder="Приватность комнаты"
                        options={[
                            { value: 'private', label: 'Приватная' },
                            { value: 'general', label: 'Доступная всем' },
                        ]}
                        onChange={(value) => changeInput({ LobbyPrivate: value })}
                    />
                </Form.Item>
                <Form.Item<LobbyInfo> name="LobbyPrizeFound">
                    <TextArea
                        placeholder="Призовой фонд"
                        autoSize={{ minRows: 3, maxRows: 6 }}
                        onChange={(e) => changeInput({ LobbyPrizeFound: e.target.value })}
                    ></TextArea>
                </Form.Item>
            </Form>
        </Card>
    );
};
export default RoomInfo;
