import Styles from './styles.module.scss';
import { Button, Form, Input, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import loginAndReturnUser from 'api/autification/login-user';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AppRoutesPath } from 'router/types';
import { setUser } from 'store/reducers/user-slice';
import { useAppDispatch } from 'store/store-hooks';

type Inputs = {
    email: string;
    password: string;
};

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = async () => {
        const user = await loginAndReturnUser({ email, password });
        if (user?.UserId) {
            Cookies.set('userId', user.UserId);
            dispatch(
                setUser({
                    isLogin: true,
                    ...user,
                }),
            );
            navigate(AppRoutesPath.MAIN);
        }
    };

    return (
        <Space className={Styles.SignIn}>
            <Form autoComplete="off" onFinish={onSubmit}>
                <Title level={2}>Войти в аккаунт</Title>
                <Form.Item<Inputs> name="email">
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Почта"
                        type="email"
                        className={Styles.input}
                    />
                </Form.Item>
                <Form.Item<Inputs> name="password">
                    <Input
                        className={Styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder="Пароль"
                        type="password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button className={Styles.button} htmlType="submit" type="primary">
                        Войти в аккаунт
                    </Button>
                </Form.Item>

                <a href="https://tempus-one-ts.vercel.app/Register">Или зарегистрируйся</a>
            </Form>
        </Space>
    );
};

export default SignIn;
