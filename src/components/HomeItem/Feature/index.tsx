import Slider from "../../Slider"

const Feature = () => {
    //
    const featureList = [
        {
            id: 0,
            icon: 'bx bx-lemon',
            title: 'Choose your meals',
            description: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.'
        },
        {
            id: 1,
            icon: 'bx bx-heart',
            title: 'Make it your own',
            description: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.'
        },
        {
            id: 2,
            icon: 'bx bx-leaf',
            title: 'Fresh and affordable',
            description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.'
        }
    ]
    //
    return (
        <div className='wrapper feature'>
            <Slider role={{
                sc1024: 3,
                sc640: 2,
            }} length={featureList.length}>
                {featureList.map(feature => <ItemFeature key={feature.id} icon={feature.icon}
                    title={feature.title} description={feature.description} />)}
            </Slider>
        </div>
    )
}

type ItemFeatureProps = {
    icon: string,
    title: string,
    description: string
}

const ItemFeature = (props: ItemFeatureProps) => {
    return (
        <div className='feature__item'>
            <i className={props.icon}></i>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Feature