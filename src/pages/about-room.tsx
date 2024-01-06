import Paragraph from 'antd/es/typography/Paragraph';
import { useParams } from 'react-router';

const AboutRoom = () => {
    const { id } = useParams();

    return <Paragraph>About Room {id}</Paragraph>;
};

export default AboutRoom;
