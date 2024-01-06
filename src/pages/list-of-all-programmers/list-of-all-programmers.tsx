import Styles from './list-of-all-programmers.module.scss';
import { initialState } from './state';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow';
import { Col, Row } from 'antd';
import { colSpan } from 'assets/colspan';
import CardComponent from 'components/card/card';

const ListOfAllProgrammers = () => {
    return (
        <Row gutter={[16, 16]} className={Styles['row-style']}>
            {initialState.map((item) => (
                <Col {...colSpan} key={item.id}>
                    <CardComponent item={item} />
                </Col>
            ))}
        </Row>
    );
};
export default ListOfAllProgrammers;
