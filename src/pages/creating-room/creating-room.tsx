import RoomInfo from './room-info/room-info';
import TasksInfo from './room-info/tasks-info';
import Styles from './style.module.scss';
import { Space } from 'antd';
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

export interface LobbyTask {
    TaskTitle?: string | undefined;
    TaskDescription?: string | undefined;
    TaskInput?: string | undefined;
    TaskOutput?: string | undefined;
    TaskInitial?: string | undefined;
}

const CreatingRoom = () => {
    const [LobbyInfo, setLobbyInfo] = useState<LobbyInfo | undefined>();
    const [LobbyTasks, setLobbyTasks] = useState<LobbyTask[] | undefined>([]);
    console.log(LobbyTasks);

    return (
        <Space className={Styles.CreatingRoom}>
            <RoomInfo setLobbyInfo={setLobbyInfo}></RoomInfo>

            <TasksInfo setLobbyTasks={setLobbyTasks} LobbyTasks={LobbyTasks}></TasksInfo>
        </Space>
    );
};

export default CreatingRoom;
