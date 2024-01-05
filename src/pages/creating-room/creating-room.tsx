import RoomInfo from './room-info/room-info';
import TasksInfo from './room-info/tasks-info';
import Styles from './style.module.scss';
import { Space } from 'antd';
import { sendNewLobby } from 'api/lobbyes/sendNewLobby';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { setButtons } from 'store/reducers/footer-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';
import { LobbyInfoInitialState } from 'utils/default-values/creating-room-states';
import checkForEmptyValues from 'utils/valudate/checkForEmpty';

export interface LobbyInfo {
    LobbyName: string;
    LobbyDescription: string;
    LobbyTaskComplitionTime: number;
    LobbyDateOfStart: number;
    LobbyPrivate: string;
    LobbyPrizeFound: string;
}

export interface LobbyTask {
    TaskTitle: string;
    TaskDescription: string;
    TaskInput: string;
    TaskOutput: string;
    TaskInitial: string;
    TaskId: number;
}

const CreatingRoom = () => {
    const [LobbyInfo, setLobbyInfo] = useState<LobbyInfo>(LobbyInfoInitialState);
    const [LobbyTasks, setLobbyTasks] = useState<LobbyTask[]>([]);
    const { UserName, UserEmail, UserPhoto } = useAppSelector((state) => state.user);
    const UserId = JSON.stringify(Cookies.get('userId'));
    const dispatch = useAppDispatch();
    const AdminUser = {
        UserName,
        UserPhoto,
        UserEmail,
        UserStatus: 'admin',
    };

    function addNewLobby() {
        const NewLobby = {
            LobbyInfo,
            LobbyTasks,
            LobbyUsers: { [UserId]: AdminUser },
        };

        if (checkForEmptyValues(LobbyInfo) && LobbyTasks.length > 0) {
            sendNewLobby(NewLobby);
        }
    }

    useEffect(() => {
        dispatch(setButtons([{ label: 'Создать комнату', onClick: () => addNewLobby() }]));
    }, []);

    return (
        <Space className={Styles.CreatingRoom}>
            <RoomInfo setLobbyInfo={setLobbyInfo}></RoomInfo>

            <TasksInfo setLobbyTasks={setLobbyTasks} LobbyTasks={LobbyTasks}></TasksInfo>
        </Space>
    );
};

export default CreatingRoom;
