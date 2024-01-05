import Styles from './current-programmer-code-page.module.scss';
import { Button, Space, Typography } from 'antd';
import { useState } from 'react';
import AceEditor from 'react-ace';

const { Title } = Typography;

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const executeCode = () => {
        try {
            const result = eval(code);
            setResult(result);
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <Space className={Styles.content}>
            <Space direction="vertical">
                <Title>Задача 1</Title>
                <Title level={4}>Описание задачи</Title>
                <Title level={4}>Что принимает задача?</Title>
                <Title level={4}>Что возвращает задача?</Title>
            </Space>
            <Space direction="vertical">
                <AceEditor
                    mode="javascript"
                    onChange={handleCodeChange}
                    value={code}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />

                <Button type="primary" onClick={executeCode}>
                    Execute Code
                </Button>
                <Space>
                    <Title level={5}>Result:</Title>
                    <Title level={5}>{result}</Title>
                </Space>
            </Space>
        </Space>
    );
};

export default CodeEditor;
