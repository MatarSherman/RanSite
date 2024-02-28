export const Texts = (props: React.ComponentProps<'h1'>) => {
    return (
        <p {...props} className={`${props.className} mainText`} style={{fontWeight: 300, fontSize: '1.5em'}}>
        </p>
    )
}