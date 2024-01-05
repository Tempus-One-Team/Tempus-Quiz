import Styles from './navigation.module.scss';
import { Button } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import { FooterButton } from 'store/reducers/footer-slice';
import { useAppSelector } from 'store/store-hooks';

const FooterComponent = () => {
    const buttons = useAppSelector((state) => state.footer.buttons);

    const handleButtonClick = (button: FooterButton) => {
        button.onClick();
    };

    return (
        <Footer className={Styles.footerWrapper}>
            <Title level={5}>Время | войти в аккаунт | создатели</Title>
            {buttons.map((button, index) => (
                <Button key={index} onClick={() => handleButtonClick(button)} type="primary">
                    {button.label}
                </Button>
            ))}
        </Footer>
    );
};
export default FooterComponent;
