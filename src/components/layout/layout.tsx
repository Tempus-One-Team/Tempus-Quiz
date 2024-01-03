import Styles from './layout.module.scss';
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
            <div className="container">
                <HeaderComponent setIsDarkMode={setIsDarkMode} />
                <Content className={Styles.Content}>
                    <Outlet />
                </Content>
                <FooterComponent />
            </div>
        </Layout>
    );
};

export default LayoutApp;
