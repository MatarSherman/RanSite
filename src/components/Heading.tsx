// background: linear - gradient(90deg, #041E19 - 12.12 %, #19AF96 57.61 %);
// -webkit - background - clip: text; /* for WebKit browsers like Chrome and Safari */
// color: transparent;
// display: inline - block;

export const Heading = (props: React.ComponentProps<'h1'>) => {
    return (
        <h1 {...props} style={{
            fontSize: '2.5em',
            color: '#37713F',
            fontWeight: 500,
            marginTop: 0,
            ...props.style
        }}>
        </h1>
    )
}