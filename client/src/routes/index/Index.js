import './Index.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function Index(props){

    const [t, i18n] = useTranslation('common');

    return (
        <Row className='index flex-grow-1'>
            <div className='col d-flex flex-column justify-content-center align-items-center'>
                <h5>
                    {t('index.title')}
                </h5>
                <i class="bi bi-emoji-expressionless-fill"></i>
                <p>
                    {t('index.subtitle')} 
                </p>
            </div>
        </Row>
    )
}

export default Index;