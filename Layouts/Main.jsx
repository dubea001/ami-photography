import {
    About,
    ClientsReviews,
    ContactUs,
    Directions,
    Portfolio,
    WhyUs,
} from '../Sections/index';

const Main = () => {
    return (
        <main>
            <About />
            <Portfolio />
            <WhyUs />
            <ClientsReviews />
            <ContactUs />
            <Directions />
        </main>
    );
};

export default Main;
