import './Section.css'

export const Section = (props: React.ComponentProps<'div'>) => (
    <div
        {...props}
        className={`section ${props.className}`}
    />
)

// clamp(10vh , calc(10vh - 5vw), 25vh)