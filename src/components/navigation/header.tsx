import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from 'router/types';

interface HeaderComponent {
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderComponent: FC<HeaderComponent> = ({ setIsDarkMode }) => {
    return (
        <div style={{ paddingLeft: 50, paddingRight: 50, borderBottom: '1px solid #333' }}>
            <Flex align="center" justify="space-between" style={{ height: 64 }}>
                <Title style={{ margin: 0 }} level={2}>
                    Заголовок
                </Title>

                <ul style={{ display: 'flex', gap: 40 }}>
                    <li>
                        <Link to={AppRoutesPath.MAIN}>Home</Link>
                    </li>
                    <li>
                        <Link to={AppRoutesPath.LIST_OF_ALL_PROGRAMMERS}>List of Programmers</Link>
                    </li>
                    <li>
                        <Link to={AppRoutesPath.TASK_DESCRIPTION}>Task Description</Link>
                    </li>
                    <li>
                        <Link to={AppRoutesPath.TASK_PAGE_WITH_RULES}>Task Page with Rules</Link>
                    </li>
                    <li>
                        <Link to={AppRoutesPath.WAITING_ROOM}>Waiting Room</Link>
                    </li>
                    <li>
                        <Link to={AppRoutesPath.INVITATION_PAGE}>Invitation Page</Link>
                    </li>
                    <li>
                        <Link to={AppRoutesPath.CURRENT_PROGRAMMER_CODE_PAGE}>
                            Current Programmer Code Page
                        </Link>
                    </li>
                </ul>
                <Button onClick={() => setIsDarkMode((previousValue) => !previousValue)}>
                    Изменить тему
                </Button>
            </Flex>
        </div>
    );
};
export default HeaderComponent;
