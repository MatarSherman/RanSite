interface Props {
    section: string,
}

export const Tab = (props: Props & React.ComponentProps<'a'>) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    const onClick = (event: any) => {
        event.stopPropagation();
        props.onClick?.(event);
        scrollTo(props.section)
    }

    return (
        <a
            {...props}
            // onClick={onClick}
            href={props.section}
            style={{ textDecoration: 'none', color: 'unset', cursor: 'pointer', ...props.style }}
        >{

            }
        </a>
    )
}