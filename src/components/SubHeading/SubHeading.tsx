import './SubHeading.css'

export const SubHeading = (props: React.ComponentProps<'h1'>) => (
    <h1 {...props} className={`subHeading ${props.className}`} />
)


