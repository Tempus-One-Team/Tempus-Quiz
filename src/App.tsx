import AppRoutes from './router/index';
import { ConfigProvider, theme } from 'antd';
import { useAppSelector } from 'store/store-hooks';

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
    const userTheme = useAppSelector((state) => state.theme.userTheme);
    return (
        <ConfigProvider
            theme={{
                algorithm: userTheme ? darkAlgorithm : defaultAlgorithm,
            }}
        >
            <AppRoutes />
        </ConfigProvider>
    );
}

export default App;
