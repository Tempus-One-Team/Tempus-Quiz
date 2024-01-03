import { Button, Flex } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';

const FooterComponent = () => {
    return (
        <Footer>
            <Flex justify="space-between">
                <Title level={5}>Время | войти в аккаунт | создатели</Title>
                <Button>Кнопка действия</Button>
            </Flex>
        </Footer>
    );
};
export default FooterComponent;
