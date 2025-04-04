import { Texts } from '../../../components/Text/Text.tsx'
import { Heading } from '../../../components/Heading/Heading.tsx'
import { Section } from '../../../components/Section/Section.tsx'
import { SubHeading } from '../../../components/SubHeading/SubHeading.tsx'
import { TeamMember } from './TeamMember/TeamMember.tsx'
import './Team.css'

export const Team = () => {
    return (
        <Section id='team'>
            <Heading>
                Leadership Team
            </Heading>
            <Texts>
                With over 70 years of combined experience in remote sensing,<br />
                our team brings unparalleled expertise in geospatial, space-tech, and cyber-intelligence to lead InTerra towards a sustainable future.
            </Texts>
            <div className='cards'>
                <TeamMember
                    name='Ran Sherman'
                    role='Geospatial, Space-tech, and Cyber-Intelligence Expert'
                    link='https://www.linkedin.com/in/ran-sherman-a2827b145/'
                    companyRole='Co-CEO'
                />
                <TeamMember
                    name='Amir Paz'
                    role='Technology Management Executive'
                    link='https://www.linkedin.com/in/amir-paz-71a32aa/'
                    companyRole='Co-CEO'
                />
                <TeamMember
                    name='Dr. Matan Mor'
                    role='Geo Data Scientist & 3D Mapping Researcher'
                    link='https://www.linkedin.com/in/matan-mor-9939b9182/'
                    companyRole='CTO'
                />
            </div>
            <Heading id='contact'>
                Contact Us
            </Heading>
            <SubHeading>Connect with InTerra</SubHeading>
            <Texts>
                For inquiries, collaborations, or more information on how we can assist your project or organization,<br />
                please contact us. Info@interra.website
            </Texts>
        </Section>
    )
}