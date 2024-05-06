import './Text.css'

export const Texts = (props: React.ComponentProps<'h1'>) => {
    return (
        <p {...props} className={`mainText ${props.className}`} style={{...props.style}}>
        </p>
    )
}