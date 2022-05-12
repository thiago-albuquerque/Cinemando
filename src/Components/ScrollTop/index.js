import './scrollTop.css';
import { IoMdRocket } from 'react-icons/io';

export default function ScrollTop(){
    function scrollTop(){
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       }) 
    }

    return(
        <span className='scrollContainer'>
            <button onClick={scrollTop}>
                <IoMdRocket id='iconRocket'/>
            </button>
        </span>
    )
}