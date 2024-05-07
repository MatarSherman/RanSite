import { Texts } from '../../../components/Text/Text'
import { Heading } from '../../../components/Heading/Heading'
import { Page } from '../../../components/Page/Page'
import { SubHeading } from '../../../components/SubHeading/SubHeading'
import { TeamMember } from './TeamMember/TeamMember'
import './Team.css'

export const Team = () => {
    return (
        <Page id='team'>
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
                />
                <TeamMember
                    name='Amir Paz'
                    role='Technology Management Executive'
                    link='https://www.linkedin.com/in/amir-paz-71a32aa/'
                />
                <TeamMember
                    name='Dr. Matan Mor'
                    role='Geo Data Scientist & 3D Mapping Researcher'
                    link='https://www.linkedin.com/in/matan-mor-9939b9182/'
                />
            </div>
            <Heading id='contact' style={{ fontSize: '2em', fontWeight: 600 }}>
                Contact Us<br />
            </Heading>
            <SubHeading>Connect with InTerra</SubHeading>
            <p>
                For inquiries, collaborations, or more information on how we can assist your project or organization,<br />
                please contact us. [Insert contact form or email and phone number]
            </p>
        </Page>
    )
}
