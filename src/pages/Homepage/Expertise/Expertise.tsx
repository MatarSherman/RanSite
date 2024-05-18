import { SubHeading } from '../../../components/SubHeading/SubHeading'
import { Heading } from '../../../components/Heading/Heading'
import { Section } from '../../../components/Section/Section'
import { Texts } from '../../../components/Text/Text'
// import expertise from '../../../assets/images/expertise.jpg';
import './Expertise.css'
import { Button } from '../../../components/Button/Button';
import { Chevron } from '../../../components/Chevron'
import { Link } from 'react-router-dom'

const anchorId = 'expertiseAnchor'

export const Expertise = (props: { isExpanded?: boolean }) => {
    return (
        <Section id='expertise'>
            <div id={anchorId} className='anchor' />
            <Heading >
                Our Expertise
            </Heading>
            <SubHeading >
                Creating the Winning Earth Intelligence
            </SubHeading>
            {
                props.isExpanded ? null :
                    <Texts>
                        At InTerra, we bring together a blend of advanced technologies and innovative methods
                        to address complex challenges in geospatial intelligence.
                    </Texts>
            }
            {
                props.isExpanded ? null : <a href='/expertise'><Button style={{ marginTop: '1.25em' }}>
                    Learn More
                    <Chevron />
                </Button></a>
            }
            {
                !props.isExpanded ? null : <>
                    <Texts>
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
                    </Texts>
                    <Link to={`/#expertise`}>
                        <Button style={{ marginInlineStart: 'auto', marginBlock: '3em' }}> <Chevron style={{ transform: 'rotate(180deg)' }} /> Interra Home </Button>
                    </Link>
                </>
            }

            {/* <div className='img-wrap'>
                <img src={expertise} />
            </div> */}
        </Section>
    )
}
