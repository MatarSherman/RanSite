// background: linear - gradient(90deg, #041E19 - 12.12 %, #19AF96 57.61 %);
// -webkit - background - clip: text; /* for WebKit browsers like Chrome and Safari */
// color: transparent;
// display: inline - block;
import './Heading.css'

export const Heading = (props: React.ComponentProps<'h1'>) => {
    return (
        <h1 {...props} className={`heading ${props.className}`}>
        </h1>
    )
}