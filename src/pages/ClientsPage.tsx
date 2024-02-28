import { SubHeading } from '../components/SubHeading'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { Texts } from '../components/Text'

export const ClientsPage = () => {
    return (
        <Page id='clients'>
            <Heading>
                Target Client Segments
            </Heading>
            <SubHeading>
                Mapping and Geospatial Analysis Firms
            </SubHeading>
            <Texts>
                InTerra enhances capabilities with satellite imagery and CGD,<br />
                providing advanced mapping, area analysis, and competitive intelligence services that are essential<br />
                for firms looking to lead in the new space era.
            </Texts>
            <SubHeading>
                Aviation and Aerospace Companies
            </SubHeading>
            <Texts>
                Leveraging our expertise, we deliver cutting-edge mapping technologies and data analytics crucial for<br />
                mission planning, navigational accuracy, and operational strategies,<br />
                facilitating seamless integration of space-tech innovations.
            </Texts>
            <SubHeading>
                Environmental and Sustainability Enterprises
            </SubHeading>
            <Texts>
                Our solutions support sustainable development and resource management<br />
                by offering detailed insights into agriculture for yield prediction, pest management, and resource conservation,<br />
                aiding in the preservation and efficient use of natural resources.
            </Texts>
            <SubHeading>
                Tourism and Hospitality Providers
            </SubHeading>
            <Texts>
                We transform visitor experiences through geospatial analytics and interactive mapping,<br />
                creating immersive explorations and enhancing destination management and conservation efforts.
            </Texts>
            <SubHeading>
                Urban Development and Infrastructure Planners and Engineers
            </SubHeading>
            <Texts>
                InTerra aids in smart city development, traffic flow analysis, and urban planning with precise data analytics,<br />
                contributing to more livable, efficiently managed urban environments.
            </Texts>
        </Page>
    )
}
