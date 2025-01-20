import { useNavigate } from 'react-router-dom'
import Construction from '../components/Construction';

export default function About(){
 
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
            <h1>About Page</h1>
            <p>As an organization, we strive to foster a supportive atmosphere of brotherhood among the black masculine identifying community on campus. 
                We are concerned with political, social, and cultural issues regarding black men on the campus of Occidental College and beyond, and we promote 
                greater awareness and understanding of these issues through all appropriate means, including publications, meetings, seminars, and active 
                engagement with the community.</p>
        </>
    );

}