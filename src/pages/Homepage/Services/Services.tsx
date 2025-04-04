import { SubHeading } from '../../../components/SubHeading/SubHeading.tsx'
import { Heading } from '../../../components/Heading/Heading.tsx'
import { Section } from '../../../components/Section/Section.tsx'
import { Texts } from '../../../components/Text/Text.tsx'
import './Services.css'

const Service = (props: { title: string, body: string }) => (
    <div className='service'>
        <SubHeading className='serviceTitle'>
            {props.title}
        </SubHeading>
        <Texts className='serviceBody'>
            {props.body}
        </Texts>
    </div>
)


export const Services = () => {
    return (
        <Section id='services' className='services'>
            <Heading className='servicesHeading'>
                Our Services
            </Heading>
            <div className='servicesInfo'>
                <Service
                    title='Consultation Services'
                    body='We provide strategic insights and guidance to leverage mapping, space tech, and CGD technologies, enhancing client capabilities and competitiveness.'
                />
                <Service
                    title='Turnkey Project Solutions'
                    body='From planning to execution, InTerra delivers comprehensive turnkey solutions, integrating advanced geospatial technologies for seamless project implementation.'
                />
                <Service
                    title='Customized Technology Solutions'
                    body='For unique challenges, we develop bespoke technology solutions, employing our space tech, mapping, and CGD expertise to meet specific project requirements.'
                />
            </div>
        </Section>
    )
}
