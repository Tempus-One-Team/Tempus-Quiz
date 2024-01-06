import Styles from './card-style.module.scss';
import { HeartTwoTone, SearchOutlined } from '@ant-design/icons';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-twilight';
import { Card } from 'antd';
import PopoverComponent from 'components/popover/popover';
import AceEditor from 'react-ace';
import { useAppSelector } from 'store/store-hooks';

interface CardComponentProps {
    item: {
        name: string;
        id: number;
        value?: string;
        src: string;
    };
}

const CardComponent: React.FC<CardComponentProps> = ({ item }) => {
    const userTheme = useAppSelector((state) => state.theme.userTheme);
    return (
        <Card
            title={item.name}
            bordered={false}
            className={Styles['card-style']}
            actions={[
                <HeartTwoTone key="edit" />,
                <PopoverComponent item={item}>
                    <SearchOutlined />
                </PopoverComponent>,
            ]}
        >
            <AceEditor
                readOnly
                value={item.value}
                theme={userTheme ? 'twilight' : 'tomorrow'}
                className={Styles['ace-editor-style']}
            />
        </Card>
    );
};

export default CardComponent;
