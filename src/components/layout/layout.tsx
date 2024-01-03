import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FooterComponent from 'components/navigation/footer';
import HeaderComponent from 'components/navigation/header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutApp {
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutApp: FC<LayoutApp> = ({ setIsDarkMode }) => {
    return (
        <Layout>
            <HeaderComponent setIsDarkMode={setIsDarkMode} />
            <Content style={{ height: '84.7vh', padding: 50 }}>
                <Outlet />
            </Content>

            <FooterComponent />
        </Layout>
    );
};

export default LayoutApp;
