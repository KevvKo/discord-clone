import './Index.css';
import { Row } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function Index(props){

    const [t, i18n] = useTranslation('common');

    return (
        <Row className='index flex-grow-1'>
            <div className='col d-flex flex-column justify-content-center align-items-center'>
                <h5>
                    {t('index.title')}
                </h5>
                <i className="bi bi-emoji-expressionless-fill"></i>
                <p>
                    {t('index.subtitle')} 
                </p>
            </div>
        </Row>
    )
}

export default Index;