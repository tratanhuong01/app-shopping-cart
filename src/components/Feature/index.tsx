
const Feature = () => {
    //
    //
    return (
        <div className='wrapper feature'>
            <ItemFeature icon='bx bx-lemon' title='Choose your meals'
                description='Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.' />
            <ItemFeature icon='bx bx-heart' title='Make it your own'
                description='Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.' />
            <ItemFeature icon='bx bx-leaf' title='Fresh and affordable'
                description='Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.' />
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