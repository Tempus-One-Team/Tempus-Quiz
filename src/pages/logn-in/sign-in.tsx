import Styles from './styles.module.scss';
import { Button, Form, Input, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    email: string;
    password: string;
};

const SignIn = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
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
