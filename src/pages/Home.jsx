import { useNavigate } from 'react-router-dom'
import Construction from '../components/Construction';
export default function Home(){
 
    const navigate = useNavigate(); 

    const handleClickHome = () => {
        navigate('/');  // Navigate to About page using the navigate hook
    };

    const handleClickPillars = () => {
        navigate('/pillars');  // Navigate to About page using the navigate hook
    };

    const handleClickAbout = () => {
        navigate('/about');  // Navigate to About page using the navigate hook
    };

    const handleClickEboard = () => {
        navigate('/eboard'); // Navigate to About page using the navigate hook
    };

    const handleClickEvents = () => {
        navigate('/events'); // Navigate to About page using the navigate hook
    };

    const handleClickHistory = () => {
        navigate('/history'); // Navigate to About page using the navigate hook
    };

    return(
        <>
            <Construction/>
            <button onClick={handleClickHome}>Home</button>
            <button onClick={handleClickAbout}>About</button>
            <button onClick={handleClickPillars}>Pillars</button>
            <button onClick={handleClickEboard}>Eboard</button>
            <button onClick={handleClickEvents}>Events</button>
            <button onClick={handleClickHistory}>History</button>
            <h1>Home Page</h1>
        </>
    );

}