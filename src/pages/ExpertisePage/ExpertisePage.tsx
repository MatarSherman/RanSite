import { Button } from '../../components/Button/Button'
import { Section } from '../../components/Section/Section'
import { Expertise } from '../HomePage/Expertise/Expertise'
import './ExpertisePage.css'

export const ExpertisePage = () => {
    return (
        <div className="expertisePage">
            <Expertise isExpanded />
        </div>
    )
}