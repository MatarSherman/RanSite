import { SubHeading } from "../../../components/SubHeading"
import { Texts } from "../../../components/Text"
import linkedin from '../../../assets/images/linkedin.png'

interface Props {
    name: string,
    role: string,
    link: string,
}
export const Card = ({ name, role, link }: Props) => {
    return (
        <div style={{ margin: '3em 0', padding: '1em 2em 2em 1em', boxShadow: '1px 1px 3px -1px black', width: '50em', maxWidth: '92%' }}>
            <SubHeading>{name}</SubHeading>
            <hr style={{ width: '8em', marginLeft: 0, border: 0, backgroundColor: '#1D6B5F', height: '3px' }} />
            <Texts>{role}</Texts>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <a href={link} target='_blank'>
                    <img src={linkedin} style={{ height: '2.5em' }} />
                </a>
            </div>
        </div>
    )
}