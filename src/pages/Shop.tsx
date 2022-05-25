import ItemProduct from '../components/ItemProduct'
import useTitle from '../hooks/useTitle';
import WrapperPage from './WrapperPage'

const Shop = () => {
    //
    useTitle("Ship");
    const listProduct = [
        {
            id: 1,
            image: "https://assets.website-files.com/5f8e3d7830da5b5bc2d3fe53/5f8e4e539e39d4f721e71816_food_3.jpg",
            name: "Steak Peppercorn",
            price: '$12.99 USD',
            sale: '$ 15.99 USD',
            description: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus',
        },
        {
            id: 2,
            image: "https://assets.website-files.com/5f8e3d7830da5b5bc2d3fe53/5f8e4dee64543911ff1f04c6_food_2.jpg",
            name: "Take-Out Style",
            price: '$ 1.99 USD',
            description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim',
        },
        {
            id: 3,
            image: "https://assets.website-files.com/5f8e3d7830da5b5bc2d3fe53/5f8e4d0585639e6421cac2af_food_1.jpg",
            name: "Citrus-kkissed Orange",
            price: '$ 12.99 USD',
            sale: '$ 15.99 USD',
            description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
        }
    ];
    //
    return (
        <WrapperPage>
            <div className="shop-list wrapper">
                {[...listProduct, ...listProduct].map(product => <ItemProduct product={product} key={product.id} />)}
            </div>
        </WrapperPage>
    )
}

export default Shop