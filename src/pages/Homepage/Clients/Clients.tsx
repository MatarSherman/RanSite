import { SubHeading } from '../../../components/SubHeading/SubHeading'
import { Heading } from '../../../components/Heading/Heading'
import { Section } from '../../../components/Section/Section'
import { Texts } from '../../../components/Text/Text'
import './Clients.css'
import { Button } from '../../../components/Button/Button'
import { Chevron } from '../../../components/Chevron'

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
            <Heading style={{ textAlign: 'center', marginBottom: '0.75em'}}>
                Target Client Segments
            </Heading>
            <Texts style={{textAlign: 'center', marginInline: 'auto', marginBottom: 'min(10vw, 1.5em)' }}>
                InTerra enhances capabilities with satellite imagery and CGD, providing <br />
                advanced mapping, area analysis, and competitive intelligence services that <br />
                are essential for firms looking to lead in the new space era.
            </Texts>
            <div className='clientsRow firstRow'>
                <Client text='Urban Development and Infrastructure Planners and Engineers' />
                <Client text='Environmental and Sustainability Enterprises' />
            </div>
            <div className='clientsRow'>
                <Client text='Mapping and Geospatial Analysis Firms' />
                <Client text='Aviation and Aerospace Companies' />
                <Client text='Tourism and Hospitality Providers' />
            </div>
            <a href='/clients'><Button style={{ margin: '2em auto 0' }}>
                Learn More
                <Chevron />
            </Button></a>


        </Section>
    )
}
