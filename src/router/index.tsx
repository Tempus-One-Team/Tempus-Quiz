import { Routes, Route } from 'react-router-dom';
import { AppRoutesPath } from './types';
import LayoutApp from 'components/layout';
import CurrentProgrammerCodePage from '../pages/current-programmer-code-page';
import EnterRoom from '../pages/enter-room';
import InvitationPage from '../pages/invitation-page';
import ListOfAllProgrammers from '../pages/list-of-all-programmers';
import TaskDescription from '../pages/task-description';
import TaskPageWithRules from '../pages/task-page-with-rules';
import WaitingRoom from '../pages/waiting-room';

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
            </Route>
        </Routes>
    );
};

export default AppRoutes;