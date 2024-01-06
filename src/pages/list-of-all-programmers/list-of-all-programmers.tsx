import Styles from './list-of-all-programmers.module.scss';
import { initialState } from './state';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow';
import { Col, Row } from 'antd';
import CardComponent from 'components/card/card';

const ListOfAllProgrammers = () => {
    const colSpanTest = {
        xs: 24,
        sm: 12,
        md: 8,
        lg: 6,
    };

    return (
        <Row gutter={[16, 16]} className={Styles['row-style']}>
            {initialState.map((item) => (
                <Col {...colSpanTest} key={item.id}>
                    <CardComponent item={item} />
                </Col>
            ))}
        </Row>
    );
};
export default ListOfAllProgrammers;
