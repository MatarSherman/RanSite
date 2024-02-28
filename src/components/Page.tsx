export const Page = (props: React.ComponentProps<'div'>) => (
    <div 
    {...props} 
    style={{ 
        width: '100%', 
        minHeight: 'clamp(105vh, calc(140vh - 25vw), 130vh)', 
        padding: '13vh 3%', background: 'inherit', ...props.style }} 
    >

    </div>
)

// clamp(10vh , calc(10vh - 5vw), 25vh)