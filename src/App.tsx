import AppRoutes from './router/index';
import { ConfigProvider, theme } from 'antd';
import { useState } from 'react';

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Перенести в слайс
    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
            }}
        >
            <AppRoutes setIsDarkMode={setIsDarkMode} />
        </ConfigProvider>
    );
}

export default App;
