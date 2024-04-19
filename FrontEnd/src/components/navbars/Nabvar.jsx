import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/EscudoPeque.svg';
import { userDetails } from "../../shared/hooks";

const NavbLogo = () => {
    return(
        <div className="nav-logo-container">
            <img 
                className="nav-logo"
                width="100%"
                height="100%"
                src={logo}
                alt="Escudo Kinal"
            />
        </div>
    );
}

const navButton = ({ text, onClick }) => {
    return(
        <button className="nav-button" onClick={onClick}>
            {text}
        </button>
    );
}

export const Navbar = () => {
    const { isLogged, logout } = userDetails();

    const navigate = useNavigate();

    const handleNavigatetoAuthPage = () => {
        navigate('/auth');
    };

    const navigateToSettingsPage = () => {
        navigate('/settings');
    }

    const handleNavigateToChannelsPage = () => {
        navigate('/channels');
    }

    const handleLogOut = () => {
        logout();
    };

    return(
        <div className="navbar-container">
            <NavbLogo />
            <div className="nav-buttons-container">
                <navButton text="Browse" onClick={handleNavigateToChannelsPage} />
                
                {
                    !isLogged ? (
                        <navButton text="Login" onClick={handleNavigateToChannelsPage} />
                    ) : (
                        <div>
                            <navButton text="My Acount" onClick={navigateToSettingsPage} />
                            <navButton text="Logout" onClick={handleLogOut} />
                        </div>
                    )
                }
            </div>
        </div>
    );

}