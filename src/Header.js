import './App.css';
// import logo from './logo.png';

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="" alt="your logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
