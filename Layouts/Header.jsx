import { Navbar, Hero } from '../Sections/index';
import background from '../public/background-banner.jpg';

const Header = () => {
    return (
        <header className='border border-orange-500'>
            <div className=''>
                <Navbar />
                <Hero />
            </div>
        </header>
    );
};

export default Header;
