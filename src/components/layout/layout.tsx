import Styles from './layout.module.scss';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FooterComponent from 'components/navigation/footer';
import HeaderComponent from 'components/navigation/header';
import { Outlet } from 'react-router-dom';

const LayoutApp = () => {
    return (
        <Layout>
            <div className="container">
                <HeaderComponent />
                <Content className={Styles.Content}>
                    <Outlet />
                </Content>
                <FooterComponent />
            </div>
        </Layout>
    );
};

export default LayoutApp;
