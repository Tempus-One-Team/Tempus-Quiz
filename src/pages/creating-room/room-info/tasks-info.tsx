import { LobbyTask } from '../creating-room';
import Styles from '../style.module.scss';
import { Button, Card, Form, Input, Space } from 'antd';
import { useState } from 'react';
import checkForEmptyValues from 'utils/valudate/checkForEmpty';

const { TextArea } = Input;

interface TasksInfo {
    setLobbyTasks: React.Dispatch<React.SetStateAction<LobbyTask[] | undefined>>;
    LobbyTasks: LobbyTask[] | undefined;
}

const defaultUserCode = `const YouFunction = () => { return 'function is complete' }
YouFunction`;

const TasksInfo = (props: TasksInfo) => {
    const { setLobbyTasks, LobbyTasks } = props;
    const [NewTask, setNewTask] = useState<LobbyTask>();

    const changeInput = (UpdateValue: { [key: string]: string }) => {
        setNewTask((prev) => ({
            ...prev,
            ...UpdateValue,
        }));
    };
    const AddNewTask = () => {
        if (checkForEmptyValues(NewTask)) {
            setLobbyTasks([...LobbyTasks, NewTask]);
        }
    };

    return (
        <Card className={Styles.Card} title={'Задачи'}>
            <Form className={Styles.Form} autoComplete="off" onFinish={AddNewTask}>
                <Form.Item<LobbyTask> name="TaskTitle">
                    <Input
                        placeholder="Название задачи"
                        onChange={(e) => changeInput({ TaskTitle: e.target.value })}
                    ></Input>
                </Form.Item>
                <Form.Item<LobbyTask> name="TaskDescription">
                    <TextArea
                        placeholder="Описание задачи"
                        autoSize={{ minRows: 5, maxRows: 10 }}
                        onChange={(e) => changeInput({ TaskDescription: e.target.value })}
                    ></TextArea>
                </Form.Item>
                <Form.Item<LobbyTask> name="TaskInput">
                    <Input
                        placeholder="Вход функции"
                        onChange={(e) => changeInput({ TaskInput: e.target.value })}
                    ></Input>
                </Form.Item>
                <Form.Item<LobbyTask> name="TaskOutput">
                    <Input
                        placeholder="Вывод функции"
                        onChange={(e) => changeInput({ TaskOutput: e.target.value })}
                    ></Input>
                </Form.Item>
                <Form.Item<LobbyTask> name="TaskInitial">
                    <TextArea
                        placeholder="Начало функции"
                        autoSize={{ minRows: 3, maxRows: 6 }}
                        defaultValue={defaultUserCode}
                        onChange={(e) => changeInput({ TaskInitial: e.target.value })}
                    ></TextArea>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Добавить задачу
                    </Button>
                </Form.Item>
            </Form>
            <Space>
                {LobbyTasks?.map((task) => <div key={task.TaskInput}>{task.TaskTitle}</div>)}
            </Space>
        </Card>
    );
};

export default TasksInfo;
