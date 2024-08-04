


export interface UITitleProps {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
    title: string;
    className: string
}


const UITag = ({ tag, title, className }: UITitleProps) => {

    const Tag = tag; 

    return (
        
            <Tag tabIndex={0} className={className}>
                {title}
            </Tag>
        
    )
}

export default UITag;