export const SubHeading = (props: React.ComponentProps<'h1'>) => {
    return (
        <h1 {...props} style={{ fontSize: '1.5em', fontWeight: 400, ...props.style }}>
        </h1>
    )
}


