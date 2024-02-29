import { Texts } from '../components/Text'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page/Page'
import { SubHeading } from '../components/SubHeading'

export const TeamPage = () => {
    return (
        <Page id='team'>
            <Heading>
                Management Team
            </Heading>
            <Texts>
                With over 70 years of combined experience in remote sensing,<br />
                our team brings unparalleled expertise in geospatial, space-tech, and cyber-intelligence to lead InTerra towards a sustainable future.
            </Texts>
            <p style={{ marginTop: '3em' }}>
                <a
                    href={'https://www.linkedin.com/in/ran-sherman-a2827b145/'}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                        Ran Sherman
                    </span>
                    -Geospatial, Space-tech, and Cyber-Intelligence Expert
                </a>
            </p>
            <p style={{ margin: '1em 0' }}>
                <a
                    href={'https://www.linkedin.com/in/amir-paz-71a32aa/'}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                        Amir Paz
                    </span>
                    -Technology Management Executive
                </a>
            </p>
            <p style={{ marginBottom: '3em' }}>
                <a
                    href={'https://www.linkedin.com/in/matan-mor-9939b9182/'}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                        Dr. Matan Mor
                    </span>
                    -Geo Data Scientist & 3D Mapping Researcher
                </a>
            </p>
            <Heading style={{ fontSize: '2em', fontWeight: 600 }}>
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
