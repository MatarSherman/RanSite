import { SubHeading } from '../../../components/SubHeading'
import { Heading } from '../../../components/Heading'
import { Page } from '../../../components/Page/Page'
import { Texts } from '../../../components/Text'
import expertise from '../../../assets/images/expertise.jpg';
import './Expertise.css'

export const Expertise = () => {
    return (
        <Page id='expertise' className='page'>
            <div className='page-text'>
                <Heading >
                    Our Expertise
                </Heading>
                <SubHeading >
                    Creating the Winning Earth Intelligence
                </SubHeading>
                <Texts>
                    At InTerra, we bring together a blend of advanced technologies and innovative methods<br />
                    to address complex challenges in geospatial intelligence.
                </Texts>
                {/* <Texts>
                    Our comprehensive approach ensures excellence in delivering solutions that are not only technologically advanced
                    but also precisely tailored to meet the unique needs of our clients.
                </Texts>
                <SubHeading >
                    Space Tech Advancements
                </SubHeading>
                <Texts>
                    In the vanguard of the New Space Era, InTerra utilizes small satellite technology,<br />
                    satellite constellation networks, advanced sensor technologies, and AI to revolutionize Earth observation and geospatial analysis.
                </Texts>
                <SubHeading >
                    Mapping and Geospatial Analysis
                </SubHeading>
                <Texts>
                    With our profound expertise in LiDAR mapping, drone-based surveying,
                    machine learning in GIS, satellite imagery analysis, and 3D indoor mapping,<br />
                    we redefine the boundaries of mapping and geospatial analysis.
                </Texts>
                <SubHeading >
                    Crowdsourced Geospatial Data
                </SubHeading>
                <Texts>
                    Crowdsourced Geospatial Data (CGD) is the process of collecting geospatial information, text, and images from the general public,<br />
                    all tied to specific geographic locations.
                </Texts>
                <Texts>
                    Using devices like smartphones and computers, individuals contribute data about their environment.
                    This practice supports the creation of geo-intelligent solutions and Geoint applications, tackling a wide array of Earth's challenges with enhanced situational awareness and decision-making.
                </Texts>
                <Texts >
                    InTerra champions the use of CGD for real-time data collection, community engagement,<br />
                    and enhanced geospatial analysis, empowering solutions with unparalleled accuracy and insight.
                </Texts> */}
            </div>
            {/* <div className='img-wrap'>
                <img src={expertise} />
            </div> */}
        </Page>
    )
}
