type HomeTitleTopProps = {
    type: string,
    title: string,
    description?: string,
    isMarinTop?: boolean
}

const HomeTitleTop = (props: HomeTitleTopProps) => {
    return (
        <div className="wrapper" style={props.isMarinTop ? { marginTop: '10rem' } : {}}>
            <div className="plans__top">
                <div>{props.type}</div>
                <h2>{props.title}</h2>
                {props.description && <p>{props.description}</p>}
            </div>
        </div>
    )
}

export default HomeTitleTop