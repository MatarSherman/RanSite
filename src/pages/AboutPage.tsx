import { SubHeading } from '../components/SubHeading'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { Texts } from '../components/Text'

export const AboutPage = () => {
    return (
        <Page id='about'>
            <Heading >
                About Us
            </Heading>
            <SubHeading>
                Our Mission
            </SubHeading>
            <Texts>
                At InTerra, we stand at the intersection of technology and Earth's well-being.
                With a focus on intelligence, terra-centric solutions, and innovation, we address critical challenges across various sectors,
                including agriculture, tourism, natural resource management, pollution detection, disaster response, and urban planning.
            </Texts>
            <SubHeading>
                What We Do
            </SubHeading>
            <Texts>
                InTerra leverages a synergy of satellite imagery, Artificial Intelligence (AI), and Crowdsourced Geospatial Data (CGD)
                to forge innovative solutions that confront Earth's most pressing challenges.
            </Texts>
            <Texts>
                Our approach transforms this data into actionable insights and tools that drive sustainability, efficiency, and innovation across all sectors.
                We're not just gathering information; we're creating a sustainable future through intelligent, terra-centric innovations.
            </Texts>
        </Page>
    )
}
