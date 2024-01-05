import AppRoutes from './router/index';
import { ConfigProvider, theme } from 'antd';
import { THEME_STYLES } from 'shared/constants';
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
                              wireframe: THEME_STYLES.WIREFRAME,
                              colorPrimary: THEME_STYLES.COLOR,
                              colorInfo: THEME_STYLES.COLOR,
                              colorSuccess: THEME_STYLES.COLOR,
                              colorWarning: THEME_STYLES.COLOR,
                              colorError: THEME_STYLES.ERROR_COLOR,
                              colorTextBase: THEME_STYLES.TEXT_COLOR,
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
