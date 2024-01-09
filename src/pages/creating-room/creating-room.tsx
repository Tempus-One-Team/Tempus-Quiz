import RoomInfo from './room-info/room-info';
import TasksInfo from './room-info/tasks-info';
import Styles from './style.module.scss';
import { Space } from 'antd';
import { sendNewLobby } from 'api/lobby/send-new-lobby';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutesPath } from 'router/types';
import { setButtons } from 'store/reducers/footer-slice';
import { UserStates } from 'store/reducers/user-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';
import { LobbyInfo, LobbyTask } from 'types/lobbyTypes';
import { decryptData, encryptData } from 'utils/crypt-data/cripting-data';
import { LobbyInfoInitialState } from 'utils/default-values/creating-room-states';
import checkForEmptyValues from 'utils/valudate/checkForEmpty';

const CreatingRoom = () => {
    const [LobbyInfo, setLobbyInfo] = useState<LobbyInfo>(LobbyInfoInitialState);
    const [LobbyTasks, setLobbyTasks] = useState<LobbyTask[]>([]);
    const { UserName, UserEmail, UserPhoto } = useAppSelector((state) => state.user);
    const UserId = decryptData(Cookies.get('userId'));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const AdminUser = {
        UserName,
        UserPhoto,
        UserEmail,
        UserStatus: UserStates.admin,
    };

    const NewLobby = {
        LobbyInfo,
        LobbyTasks: LobbyTasks,
        LobbyUsers: { [UserId || '']: AdminUser },
    };

    useEffect(() => {
        async function addNewLobby() {
            if (checkForEmptyValues(LobbyInfo) && LobbyTasks.length > 0) {
                const NewLobbyId = await sendNewLobby(NewLobby);
                if (NewLobbyId) {
                    Cookies.set('selectLobby', encryptData(NewLobbyId));
                    navigate(AppRoutesPath.INVITATION_PAGE);
                }
            }
        }
        dispatch(setButtons([{ label: 'Создать комнату', onClick: () => addNewLobby() }]));
    }, [NewLobby]);

    return (
        <Space className={Styles.CreatingRoom}>
            <RoomInfo setLobbyInfo={setLobbyInfo}></RoomInfo>

            <TasksInfo setLobbyTasks={setLobbyTasks} LobbyTasks={LobbyTasks}></TasksInfo>
        </Space>
    );
};

export default CreatingRoom;
