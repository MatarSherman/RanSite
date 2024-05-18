import { SubHeading } from "../../../../components/SubHeading/SubHeading.tsx"
import { Texts } from "../../../../components/Text/Text.tsx"
import linkedin from '../../../../assets/images/linkedin.png'
import './TeamMember.css'

interface Props {
    name: string,
    role: string,
    link: string,
}

const fontSize = 'clamp(1.25em, 7.5vw, 1.5em)'

export const TeamMember = ({ name, role, link }: Props) => {
    return (
        <div className="teamMember" style={{ backgroundColor: 'white', padding: '0.1em calc(0.75em + 1vw) 0.5em 1em', boxShadow: '1px 1px 3px -1px black', width: '50em' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1em' }}>
                <SubHeading style={{ textWrap: 'nowrap', marginBottom: '0.8em', fontSize: 'clamp(1.25em, 7.5vw, 1.5em)' }}>{name}</SubHeading>
                <div>
                    <a href={link} target='_blank'>
                        <img src={linkedin} style={{ height: 'max(1.5em, calc(1em + 1vw))' }} />
                    </a>
                </div>
            </div>
            <hr style={{ width: '8em', marginLeft: 0, border: 0, backgroundColor: '#1D6B5F', height: '4px' }} />
            <Texts style={{ fontSize: 'calc(clamp(1.25em, 7.5vw, 1.5em) * 0.75)' }}>{role}</Texts>
        </div>
    )
}