import { SubHeading } from '../../../components/SubHeading';
import { Heading } from '../../../components/Heading';
import { Page } from '../../../components/Page/Page';
import './Hero.css'
import { Texts } from '../../../components/Text';
import bg from '../../../assets/images/bg.jpg';

export const Hero = () => {
    return (
        <Page id='home' className='page'>
            <div className='page-text'>
                <Heading className='fitContentWidth' style={{ fontSize: 'clamp(4.3em, calc(3.5em + 2vw), 5em)', margin: 0, fontWeight: 600 }}>
                    InTerra
                </Heading>
                <SubHeading className='fitContentWidth' style={{ color: '#1D6B5F', fontSize: 'clamp(2em, 2em, 3em)', fontWeight: 500 }}>
                    Pioneering the Future of Earth Intelligence
                </SubHeading>
                <SubHeading className='fitContentWidth'>
                    Welcome to InTerra, Intelligence, Terra-Centric, Innovation,
                    where innovation meets Earth&#39;s challenges head-on.
                </SubHeading>
                <Texts>
                    As leaders in space tech, mapping, and geospatial analysis,
                    we harness cutting-edge technologies to offer solutions that make a real difference.
                </Texts>
                <Texts>
                    From agriculture to urban planning, our mission is to provide advanced insights and tools for a sustainable future.
                </Texts>
            </div>
            {/* <img src={bg}/> */}
        </Page>
    )
}