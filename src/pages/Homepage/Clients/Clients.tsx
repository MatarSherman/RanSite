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
            <Heading className='clientsHeading' >
                Target Client Segments
            </Heading>
            <Texts className='clientsParagraph' >
                InTerra enhances capabilities with satellite imagery and CGD, providing
                advanced mapping, area analysis, and competitive intelligence services that
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
            <a href='/clients'><Button className='clientsButton' >
                Learn More
                <Chevron />
            </Button></a>


        </Section>
    )
}
