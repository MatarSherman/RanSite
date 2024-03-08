import { SubHeading } from '../components/SubHeading'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page/Page'
import { Texts } from '../components/Text'

export const ServicesPage = () => {
    return (
        <Page id='services'>
            <Heading style={{ fontSize: 'clamp(2em, 2em,4em)', fontWeight: 600, textWrap: 'nowrap' }}>
                Our Services
            </Heading>
            <SubHeading>
                Consultation Services
            </SubHeading>
            <Texts>
                We provide strategic insights and guidance to leverage mapping, space tech, and CGD technologies,
                enhancing client capabilities and competitiveness.
            </Texts>
            <SubHeading>
                Turnkey Project Solutions
            </SubHeading>
            <Texts>
            From planning to execution, InTerra delivers comprehensive turnkey solutions,
            integrating advanced geospatial technologies for seamless project implementation.
            </Texts>
            <SubHeading>
            Customized Technology Solutions
            </SubHeading>
            <Texts>
            For unique challenges, we develop bespoke technology solutions,
            employing our space tech, mapping, and CGD expertise to meet specific project requirements.
            </Texts>
        </Page>
    )
}
