import Styles from './popover-style.module.scss';
import { Avatar, Popover, Typography } from 'antd';
import Title from 'antd/es/typography/Title';

interface PopoverComponentProps {
    item: {
        src: string;
        name: string;
    };
    children: React.ReactNode;
}

const PopoverComponent: React.FC<PopoverComponentProps> = ({ item, children }) => (
    <Popover
        content={
            <div className={Styles['popover-style']}>
                <Avatar src={item.src} />
                <div className={Styles['card-info-style']}>
                    <Title level={5}>Имя:</Title>
                    <Typography>{item.name}</Typography>
                    <Title level={5}>Почта:</Title>
                    <Typography>examplegmail.com</Typography>
                </div>
            </div>
        }
    >
        {children}
    </Popover>
);

export default PopoverComponent;
