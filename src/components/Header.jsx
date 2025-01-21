import { useNavigate } from 'react-router-dom'

export default function Header(){
    const navigate = useNavigate(); 

    const handleClickHome = () => {
        navigate('/');  // Navigate to Home page using the navigate hook
    };

    const handleClickAbout = () => {
        navigate('/about');  // Navigate to About page using the navigate hook
    };

    const handleClickPillars = () => {
        navigate('/pillars');  // Navigate to Pillars page using the navigate hook
    };

    const handleClickEboard = () => {
        navigate('/eboard'); // Navigate to Eboard page using the navigate hook
    };

    const handleClickEvents = () => {
        navigate('/events'); // Navigate to Events page using the navigate hook
    };

    const handleClickHistory = () => {
        navigate('/history'); // Navigate to History page using the navigate hook
    };

    return(
        <header>
            <nav>
                <ul>
                    <li><button onClick={handleClickHome}>Home</button></li>
                    <li><button onClick={handleClickAbout}>About</button></li>
                    <li><button onClick={handleClickPillars}>Pillars</button></li>
                    <li><button onClick={handleClickEboard}>Eboard</button></li>
                    <li><button onClick={handleClickEvents}>Events</button></li>
                    <li><button onClick={handleClickHistory}>History</button></li>
                </ul>
            </nav>
        </header>
    );
}