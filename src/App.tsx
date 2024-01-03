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
                ...(!userTheme
                    ? {
                          token: {
                              wireframe: false,
                              colorPrimary: '#722ed1',
                              colorInfo: '#722ed1',
                              colorSuccess: '#722ed1',
                              colorWarning: '#722ed1',
                              colorError: '#f5222d',
                              colorTextBase: '#000000',
                          },
                      }
                    : {}),
            }}
        >
            <AppRoutes />
        </ConfigProvider>
    );
}

export default App;
