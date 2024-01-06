import { Spin, Typography } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutesPath } from 'router/types';
import { useAppSelector } from 'store/store-hooks';

const { Paragraph } = Typography;

const WaitingRoom = () => {
    const navigate = useNavigate();
    const gameStatus = useAppSelector((state) => state.game.gameStatus);
    useEffect(() => {
        if (gameStatus === 'active') navigate(AppRoutesPath.LIST_OF_ALL_PROGRAMMERS);
    }, [gameStatus]);

    return (
        <div
            style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Spin size="large" />
                <Paragraph
                    style={{
                        marginTop: '16px',
                        fontSize: '18px',
                        maxWidth: '500px',
                        textAlign: 'center',
                        fontWeight: '500',
                    }}
                >
                    Дождитесь всех участников либо пока администратор не начнет соревнование или не
                    закончит его...
                </Paragraph>
            </div>
        </div>
    );
};

export default WaitingRoom;
