import './Button.css'

export const Button = (props: React.ComponentProps<'button'>) => {
    return (
        <button {...props} className={`button ${props.className}`}>
            {props.children ?? 'Learn More'}
        </button>
    )
}

