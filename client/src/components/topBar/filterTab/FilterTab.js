import './FilterTab.css';
import { Button } from 'react-bootstrap'
function FilterTab(props) {
        
    return (
        <Button className='filter-tab' variant='flat' size='sm'>
            {props.text}
        </Button>
    );
}

export default FilterTab;
