import RoomInfo from './room-info/room-info';
import Styles from './style.module.scss';
import { Card, Space } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

export interface LobbyInfo {
    LobbyName?: string | undefined;
    LobbyDescription?: string | undefined;
    LobbyTaskComplitionTime?: Dayjs | null;
    LobbyDateOfStart?: Dayjs | null;
    LobbyPrivate?: string | undefined;
    LobbyPrizeFound?: string | undefined;
}

const CreatingRoom = () => {
    const [LobbyInfo, setLobbyInfo] = useState<LobbyInfo | undefined>();
    console.log(LobbyInfo);

    return (
        <Space className={Styles.CreatingRoom}>
            <RoomInfo setLobbyInfo={setLobbyInfo}></RoomInfo>

            <Card className={Styles.Card} title={'Задачи'}></Card>
        </Space>
    );
};

export default CreatingRoom;
