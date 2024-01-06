export interface LobbyInfo {
    LobbyName: string;
    LobbyDescription: string;
    LobbyTaskComplitionTime: number;
    LobbyDateOfStart: number;
    LobbyPrivate: string;
    LobbyPrizeFound: string;
    LobbyId?: string;
}

export interface LobbyTask {
    TaskTitle: string;
    TaskDescription: string;
    TaskInput: string;
    TaskOutput: string;
    TaskInitial: string;
    TaskId: number;
}

export interface LobbyUsers {
    UserEmail: string;
    UserName: string;
    UserPhoto: string;
    UserId?: string;
    UserStatus: string;
}

export type LobbyType = {
    LobbyInfo: LobbyInfo;
    LobbyTasks: LobbyTask[];
    LobbyUsers: LobbyUsers[];
};
