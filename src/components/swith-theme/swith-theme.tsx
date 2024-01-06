import { Switch } from 'antd';
import { toggleTheme } from 'store/reducers/theme-slice';
import { useAppDispatch, useAppSelector } from 'store/store-hooks';

const ThemeSwitch = () => {
    const dispatch = useAppDispatch();
    const darkTheme = useAppSelector((state) => state.theme.darkTheme);

    const handleToggleTheme = () => {
        localStorage.setItem('theme', JSON.stringify(!darkTheme));
        dispatch(toggleTheme(!darkTheme));
    };

    return (
        <Switch
            checkedChildren="Темная"
            unCheckedChildren="Светлая"
            checked={darkTheme}
            onChange={handleToggleTheme}
        />
    );
};

export default ThemeSwitch;
