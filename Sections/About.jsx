import { assets } from '@/Assets/assets';
import Image from 'next/image';

const About = () => {
    return (
        <section className='border border-red-900'>
            <h2 className='font-bold'>About Me</h2>
            <div className='flex'>
                <div className=''>
                    <Image
                        src={assets.AboutImage}
                        alt='about me image'
                        width={400}
                        height={800}
                        className='border border-red-500'
                    />
                </div>
                <div className=''>
                    <p>
                        AMI PHOTOGRAPHY STUDIO is a professional photography and
                        multimedia company driven by the desire to deliver great
                        value and service to it's client. Our approach to
                        delivering our mandate is tailored to meet and exceed
                        the specific needs and expectations of our clients by
                        providing them with global industry standard products
                        and services. We understand the direct and indirect
                        impact of the images we create on the way our clients
                        and their brands are perceived, and as such, we drive to
                        go extra.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
