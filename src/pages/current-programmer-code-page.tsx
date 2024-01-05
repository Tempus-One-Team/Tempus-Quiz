import { Space, Typography } from 'antd';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

const { Title } = Typography;

const CurrentProgrammerCodePage = () => {
    return (
        <Space direction="horizontal">
            <Space direction="vertical">
                <Title>Задача 1</Title>
                <Title>Описание задачи</Title>
                <Title>Что принимает задача?</Title>
                <Title>Что возвращает задача?</Title>
            </Space>
            <Space>
                <Title> Код</Title>
                <LiveProvider code="const example = 'Hello World';">
                    <LiveEditor
                        style={{
                            tabSize: 5,
                            padding: '50px',
                            width: '400px !important',
                            height: '600px',
                            border: '1px solid black',
                            margin: '50px',
                        }}
                    />
                    <LiveError />
                    <Title level={3}>Результат:</Title>
                    <LivePreview />
                </LiveProvider>
            </Space>
        </Space>
    );
};

export default CurrentProgrammerCodePage;
