import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    // const changeRoute = (path: string): void => {
    //     navigate(path);
    // };

    return (
        <header>
            <Link to={`/home`}>Home</Link>&nbsp;
            <Link to={`/contacts`}>Contacts</Link>&nbsp;
            <Link to={`/hooks`}>Hooks</Link>

            {/* <div>
                <button onClick={() => changeRoute('/home')}>Go to Home</button>
                <button onClick={() => changeRoute('/contacts')}>Go to Contacts</button>
                <button onClick={() => changeRoute('/hooks')}>Go to Hooks</button>
            </div> */}
        </header>
    );
};

export default Header;