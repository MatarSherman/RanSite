import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button.tsx'
import { Chevron } from '../../components/Chevron.tsx'
import { Heading } from '../../components/Heading/Heading.tsx'
import { Section } from '../../components/Section/Section.tsx'
import { Texts } from '../../components/Text/Text.tsx'
import './ClientsPage.css'
import { SubHeading } from '../../components/SubHeading/SubHeading.tsx'

export const ClientsPage = () => {
    return (
        <div className="clientsPage">
            <Section>
                <Heading >
                    Target Client Segments
                </Heading>
                <SubHeading>
                    Urban Development and Infrastructure Planners and Engineers
                </SubHeading>
                <Texts>
                    InTerra enhances capabilities with satellite imagery and Crowdsourced Geospatial Data (CGD),<br />
                    providing advanced mapping, area analysis, and competitive intelligence services that are essential<br />
                    for firms looking to lead in the new space era.
                </Texts>
                <SubHeading>
                    Environmental and Sustainability Enterprises
                </SubHeading>
                <Texts>
                    Leveraging our expertise, we deliver cutting-edge mapping technologies and data analytics crucial for<br />
                    mission planning, navigational accuracy, and operational strategies,<br />
                    facilitating seamless integration of space-tech innovations.
                </Texts>
                <SubHeading>
                    Mapping and Geospatial Analysis Firms
                </SubHeading>
                <Texts>
                    Our solutions support sustainable development and resource management<br />
                    by offering detailed insights into agriculture for yield prediction, pest management, and resource conservation,<br />
                    aiding in the preservation and efficient use of natural resources.
                </Texts>
                <SubHeading>
                    Aviation and Aerospace Companies
                </SubHeading>
                <Texts>
                    We transform visitor experiences through geospatial analytics and interactive mapping,<br />
                    creating immersive explorations and enhancing destination management and conservation efforts.
                </Texts>
                <SubHeading>
                    Tourism and Hospitality Providers
                </SubHeading>
                <Texts>
                    InTerra aids in smart city development, traffic flow analysis, and urban planning with precise data analytics,<br />
                    contributing to more livable, efficiently managed urban environments.
                </Texts>
                <Link to={`/#clients`}>
                    <Button style={{ marginInlineStart: 'auto', marginBlock: '3em' }}> <Chevron style={{ transform: 'rotate(180deg)' }} /> Interra Home </Button>
                </Link>
            </Section>
        </div>
    )
}