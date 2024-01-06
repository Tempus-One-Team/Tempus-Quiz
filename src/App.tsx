import AppRoutes from './router/index';
import { ConfigProvider, theme } from 'antd';
import { THEME_STYLES } from 'shared/constants';
import { useAppSelector } from 'store/store-hooks';

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
    const darkTheme = useAppSelector((state) => state.theme.darkTheme);
    return (
        <ConfigProvider
            theme={{
                algorithm: darkTheme ? darkAlgorithm : defaultAlgorithm,
                ...(!darkTheme
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
