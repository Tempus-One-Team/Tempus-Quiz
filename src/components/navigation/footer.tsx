import Styles from './navigation.module.scss';
import { Button } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';

const FooterComponent = () => {
    return (
        <Footer className={Styles.footerWrapper}>
            <Title level={5}>Время | войти в аккаунт | создатели</Title>
            <Button type="primary ">Кнопка действия</Button>
        </Footer>
    );
};
export default FooterComponent;
