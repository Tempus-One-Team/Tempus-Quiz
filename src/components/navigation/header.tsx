import Styles from './navigation.module.scss';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import ThemeSwitch from 'components/swith-theme/swith-theme';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from 'router/types';
import { useAppSelector } from 'store/store-hooks';

const HeaderComponent = () => {
    const header = useAppSelector((state) => state.header.activeHeader);
    return (
        <div className={Styles.headerWrapper}>
            <Flex align="center" justify="space-between" style={{ height: 64 }}>
                <Title className={Styles.Title} level={2}>
                    Заголовок
                </Title>

                <ul className={Styles.Links}>
                    {header === 'standart' && (
                        <>
                            <li>
                                <Link to={AppRoutesPath.MAIN}>Home</Link>
                            </li>
                            <li>
                                <Link to={AppRoutesPath.LIST_OF_ALL_PROGRAMMERS}>
                                    List of Programmers
                                </Link>
                            </li>
                            <li>
                                <Link to={AppRoutesPath.TASK_DESCRIPTION}>Task Description</Link>
                            </li>
                        </>
                    )}
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

                <ThemeSwitch />
            </Flex>
        </div>
    );
};
export default HeaderComponent;
