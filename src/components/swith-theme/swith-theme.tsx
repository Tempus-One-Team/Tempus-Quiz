import { Switch } from 'antd';
import { toggleTheme } from 'store/reducers/theme-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

const ThemeSwitch = () => {
    const dispatch = useAppDispatch();
    const userTheme = useAppSelector((state) => state.theme.userTheme);

    const handleToggleTheme = () => {
        localStorage.setItem('theme', JSON.stringify(!userTheme));
        dispatch(toggleTheme(!userTheme));
    };

    return (
        <Switch
            checkedChildren="Темная"
            unCheckedChildren="Светлая"
            checked={userTheme}
            onChange={handleToggleTheme}
        />
    );
};

export default ThemeSwitch;
