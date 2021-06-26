import './Select.css';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Select(props){
    const [t, i18n] = useTranslation('common');
    let selectItems;

    if(props.data){
        selectItems = props.data.map((element) => 
            <option key={element}>{element}</option>
        )
    }

    return(
        <Form.Control value={-1} className='select' as='select' custom>
            <option key={-1} disabled value={-1}>{t('forms.select')}</option>
            {selectItems && selectItems}
        </Form.Control>
    )
}

export default Select;