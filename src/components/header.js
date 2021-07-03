import Navbar from '../components/navbar';

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-grid">
                <div className="header">
                    <h1 className="header-text">Matthew Morales</h1>
                </div>
                <div className="header-scroll-button">
                    <button onClick={props.onScroll}><i className="fas fa-chevron-down"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Header;