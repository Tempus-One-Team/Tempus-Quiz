export const LobbyInfoInitialState = {
    LobbyName: '',
    LobbyDescription: '',
    LobbyTaskComplitionTime: 0,
    LobbyDateOfStart: 0,
    LobbyPrivate: '',
    LobbyPrizeFound: '',
};

const defaultUserCode = `const YouFunction = () => { return 'function is complete' }
YouFunction`;

export const LobbyTaskInitialState = {
    TaskTitle: '',
    TaskDescription: '',
    TaskInput: '',
    TaskOutput: '',
    TaskInitial: defaultUserCode,
    TaskId: 0,
};
