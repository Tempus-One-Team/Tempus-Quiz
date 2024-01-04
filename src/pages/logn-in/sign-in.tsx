import Styles from './styles.module.scss';
import { Space } from 'antd';
import Title from 'antd/es/typography/Title';
import loginAndReturnUser from 'api/autification/login-user';
import Cookies from 'js-cookie';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setUserAuth } from 'store/reducers/user-slice';
import { useAppDispatch } from 'store/store-hooks';

type Inputs = {
    email: string;
    password: string;
};

const SignIn = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const user = await loginAndReturnUser(data);
        if (user) {
            Cookies.set('userId', user.uid);
            dispatch(setUserAuth({ isLogin: true }));
        }
    };

    return (
        <Space className={Styles.SignIn}>
            <form name="basic" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Title level={2}>Войти в аккаунт</Title>
                <input
                    {...register('email', { required: 'email is required' })}
                    name="email"
                    placeholder="Почта"
                    type="email"
                />
                <input
                    {...register('password', {
                        required: 'password is required',
                        minLength: 8,
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    })}
                    name="password"
                    placeholder="Пароль"
                    type="password"
                />
                <button className={Styles.button} type="submit">
                    Войти в аккаунт
                </button>
            </form>
        </Space>
    );
};

export default SignIn;
