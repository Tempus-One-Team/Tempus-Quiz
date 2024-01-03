import Styles from './navigation.module.scss';
import { Flex, Switch } from 'antd';
import Title from 'antd/es/typography/Title';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from 'router/types';

interface HeaderComponent {
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderComponent: FC<HeaderComponent> = ({ setIsDarkMode }) => {
    return (
        <div className={Styles.headerWrapper}>
            <Flex align="center" justify="space-between" style={{ height: 64 }}>
                <Title className={Styles.Title} level={2}>
                    Заголовок
                </Title>

                <ul className={Styles.Links}>
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

                <Switch
                    checkedChildren={'Светлая'}
                    unCheckedChildren={'Темная'}
                    defaultChecked
                    onChange={() => setIsDarkMode((previousValue) => !previousValue)}
                />
            </Flex>
        </div>
    );
};
export default HeaderComponent;
