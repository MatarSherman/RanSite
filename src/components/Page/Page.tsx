import './Page.css'

export const Page = (props: React.ComponentProps<'div'>) => (
    <div
        {...props}
        className={`pageClass ${props.className}`}
    >

    </div>
)

// clamp(10vh , calc(10vh - 5vw), 25vh)