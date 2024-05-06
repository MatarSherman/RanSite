import { SubHeading } from '../../../components/SubHeading'
import { Heading } from '../../../components/Heading'
import { Page } from '../../../components/Page/Page'
import { Texts } from '../../../components/Text'
import './Services.css'

const Service = (props: { title: string, body: string }) => (
    <div className='service'>
        <SubHeading className='serviceTitle'>
            {props.title}
        </SubHeading>
        <Texts style={{ width: 'fit-content', fontSize: '1.2em' }}>
            {props.body}
        </Texts>
    </div>
)


export const Services = () => {
    return (
        <Page id='services' style={{ minHeight: '53vh' }}>
            <Heading style={{ textAlign: 'center' }}>
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
        </Page>
    )
}
