import { Link, Outlet } from 'react-router-dom';
import { AppRoutesPath } from 'router/types';

const LayoutApp = () => {
    return (
        <>
            <header>
                <h1>Layout</h1>
                <nav>
                    <ul>
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
                        <li>
                            <Link to={AppRoutesPath.TASK_PAGE_WITH_RULES}>
                                Task Page with Rules
                            </Link>
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
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default LayoutApp;
