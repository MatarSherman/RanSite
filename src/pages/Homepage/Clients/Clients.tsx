import { SubHeading } from '../../../components/SubHeading/SubHeading'
import { Heading } from '../../../components/Heading/Heading'
import { Section } from '../../../components/Section/Section'
import { Texts } from '../../../components/Text/Text'
import './Clients.css'

const Client = (props: { text: string }) => {
    return (
        <div className='client'>
            <SubHeading className='clientName'>
                {props.text}
            </SubHeading>
        </div>
    )
}

export const Clients = () => {
    return (
        <Section id='clients'>
            <Heading style={{ textAlign: 'center', marginBottom: 'min(10vw, 1.5em)' }}>
                Target Client Segments
            </Heading>
            <div className='clientsRow firstRow'>
                <Client text='Urban Development and Infrastructure Planners and Engineers' />
                <Client text='Environmental and Sustainability Enterprises' />
            </div>
            <div className='clientsRow'>
                <Client text='Mapping and Geospatial Analysis Firms' />
                <Client text='Aviation and Aerospace Companies' />
                <Client text='Tourism and Hospitality Providers' />
            </div>




            {/* <Texts>
                InTerra enhances capabilities with satellite imagery and CGD,<br />
                providing advanced mapping, area analysis, and competitive intelligence services that are essential<br />
                for firms looking to lead in the new space era.
            </Texts> */}
            {/* <Texts>
                Leveraging our expertise, we deliver cutting-edge mapping technologies and data analytics crucial for<br />
                mission planning, navigational accuracy, and operational strategies,<br />
                facilitating seamless integration of space-tech innovations.
            </Texts> */}
            {/* <Texts>
                Our solutions support sustainable development and resource management<br />
                by offering detailed insights into agriculture for yield prediction, pest management, and resource conservation,<br />
                aiding in the preservation and efficient use of natural resources.
            </Texts> */}

            {/* <Texts>
                We transform visitor experiences through geospatial analytics and interactive mapping,<br />
                creating immersive explorations and enhancing destination management and conservation efforts.
            </Texts> */}
            {/* <Texts>
                InTerra aids in smart city development, traffic flow analysis, and urban planning with precise data analytics,<br />
                contributing to more livable, efficiently managed urban environments.
            </Texts> */}
        </Section>
    )
}
