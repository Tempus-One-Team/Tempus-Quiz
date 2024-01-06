/* eslint-disable @typescript-eslint/no-explicit-any */
import Styles from './current-programmer-code-page.module.scss';
import 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-twilight';
import { Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { setButtons } from 'store/reducers/footer-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

const { Title } = Typography;

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const dispatch = useAppDispatch();
  
    useEffect(() => {
        dispatch(setButtons([{ label: 'Проверить код', onClick: () => executeCode() }]));
    }, []);

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
    };

    const executeCode = (): void => {
        try {
            const test = new Function(code);
            console.log(code);
            console.log(test);
            const result = test();
            console.log(result);

            setResult(result);
        } catch (error: any) {
            setResult(`Error: ${error.message}`);
        }
    };

    const darkTheme = useAppSelector((state) => state.theme.darkTheme);

    return (
        <Space className={Styles.content}>
            <Space direction="vertical">
                <Title>Задача 1</Title>
                <Title level={4}>Описание задачи</Title>
                <Title level={4}>Что принимает задача?</Title>
                <Title level={4}>Что возвращает задача?</Title>
            </Space>
            <Space direction="vertical" className={Styles.container}>
                <AceEditor
                    placeholder="Placeholder Text"
                    mode="javascript"
                    theme={darkTheme ? 'twilight' : 'tomorrow'}
                    name="blah2"
                    onChange={handleCodeChange}
                    fontSize={18}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={code}
                    className={Styles.aceEditor}
                />

                <Space className={Styles.stretchableDiv}>
                    <ResizableBox
                        width={500}
                        height={100}
                        minConstraints={[500, 100]}
                        maxConstraints={[500, 150]}
                    >
                        <Title level={5}>Result:</Title>
                        <Title level={5}>{`${JSON.stringify(result)}`}</Title>
                    </ResizableBox>
                </Space>
            </Space>
        </Space>
    );
};

export default CodeEditor;
