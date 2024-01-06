import { AppRoutesPath } from './types';
import LayoutApp from 'components/layout/layout';
import AboutRoom from 'pages/about-room';
import CreatingRoomPage from 'pages/creating-room/creating-room';
import CurrentProgrammerCodePage from 'pages/current-programmer-code-page/current-programmer-code-page';
import EnterRoom from 'pages/enter-room/enter-room';
import InvitationPage from 'pages/invitation-page';
import ListOfAllProgrammers from 'pages/list-of-all-programmers';
import SignIn from 'pages/sign-in/sign-in';
import TaskDescription from 'pages/task-description';
import TaskPageWithRules from 'pages/task-page-with-rules';
import WaitingRoom from 'pages/waiting-room';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={AppRoutesPath.MAIN} element={<LayoutApp />}>
                <Route index element={<EnterRoom />} />
                <Route
                    path={AppRoutesPath.LIST_OF_ALL_PROGRAMMERS}
                    element={<ListOfAllProgrammers />}
                />
                <Route path={AppRoutesPath.TASK_DESCRIPTION} element={<TaskDescription />} />
                <Route path={AppRoutesPath.TASK_PAGE_WITH_RULES} element={<TaskPageWithRules />} />
                <Route path={AppRoutesPath.WAITING_ROOM} element={<WaitingRoom />} />
                <Route path={AppRoutesPath.INVITATION_PAGE} element={<InvitationPage />} />
                <Route
                    path={AppRoutesPath.CURRENT_PROGRAMMER_CODE_PAGE}
                    element={<CurrentProgrammerCodePage />}
                />
                <Route path={AppRoutesPath.CREATING_ROOM_PAGE} element={<CreatingRoomPage />} />
                <Route path={AppRoutesPath.SIGN_IN_PAGE} element={<SignIn />} />
                <Route path={AppRoutesPath.ABOUT_ROOM + '/:id'} element={<AboutRoom />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
