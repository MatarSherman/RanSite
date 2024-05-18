import { SubHeading } from '../../../components/SubHeading/SubHeading.tsx';
import { Heading } from '../../../components/Heading/Heading.tsx';
import { Section } from '../../../components/Section/Section.tsx';
import './Hero.css'
import { Texts } from '../../../components/Text/Text.tsx';
import bg from '../../../assets/images/bg.jpg';

export const Hero = () => {
    return (
        <Section id='hero' className='heroSection'>
            <div className='hero-text'>
                <Heading className='heroHeading'>
                    InTerra
                </Heading>
                <SubHeading style={{ marginTop: 0, color: '#1D6B5F', fontWeight: 500, marginBottom: '0.25em' }}>
                    Pioneering the Future of Earth Intelligence
                </SubHeading>
                <Texts className='heroBody'>
                    Welcome to InTerra, Intelligence, Terra-Centric, Innovation,
                    where innovation meets Earth&#39;s challenges head-on.
                </Texts>
                <Texts className='heroBody'>
                    As leaders in space tech, mapping, and geospatial analysis,
                    we harness cutting-edge technologies to offer solutions that make a real difference.
                    <br />
                    From agriculture to urban planning, our mission is to provide advanced insights and tools for a sustainable future.
                </Texts>
            </div>
            {/* <img src={bg}/> */}
        </Section>
    )
}