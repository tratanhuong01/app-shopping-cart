
import Hero from "../components/Hero"
import { ItemWaveHero } from "../components/Hero/index";
import Slider from "../components/Slider";

import ButtonComponent from "../core/ButtonComponent";
import ItemPlans from "../components/HomeItem/ItemPlans";
import Feature from "../components/HomeItem/Feature";
import ItemTestimonials from "../components/HomeItem/ItemTestimonials";
import Started from "../components/HomeItem/Started";
import OurMenu from "../components/HomeItem/OurMenu";
import WrapperPage from "./WrapperPage";
import HomeTitleTop from "../components/HomeItem/HomeTitleTop";
import ItemProduct from "../components/ItemProduct";

const Home = () => {
    //
    const listPlan = [
        {
            id: 1,
            color: "cyan"
        },
        {
            id: 2,
            color: "green"
        },
        {
            id: 3,
            color: "orange"
        },
        {
            id: 4,
            color: "cyan"
        },
        {
            id: 5,
            color: "green"
        },
        {
            id: 6,
            color: "orange"
        }
    ];
    const listTestimonials = [
        {
            id: 1,
            avatar: "https://assets.website-files.com/5f8777f972356e39b046d89f/5f8bb455c32c3f248564345f_image_testimonial_1.jpg",
            name: "Camilla Holt",
            description: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus"
        },
        {
            id: 2,
            avatar: "https://assets.website-files.com/5f8777f972356e39b046d89f/5f8bb455140225531e3747c7_image_testimonial_2.jpg",
            name: "Tracey Morris",
            description: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper"
        },
        {
            id: 3,
            avatar: "https://assets.website-files.com/5f8777f972356e39b046d89f/5f8bb4555b34168e3400356b_image_testimonial_3.jpg",
            name: "Miriam Davis",
            description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
        },
        {
            id: 4,
            avatar: "https://assets.website-files.com/5f8777f972356e39b046d89f/5f8bb4554e5fceb02cb3dd10_image_testimonial_4.jpg",
            name: "Daniel Blake",
            description: "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis"
        }
    ];
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
            <Hero />
            <Feature />
            <Started />
            <OurMenu />
            <HomeTitleTop type="Plans" title="Chef meal plans"
                description="Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui." />
            <Slider role={{
                sc1024: 3,
                sc640: 2,
            }} length={listPlan.length}>
                {listPlan.map(plan => <ItemPlans color={plan.color} key={plan.id} />)}
            </Slider>
            <HomeTitleTop type="Testimonials" title="Feel good stories from our clients" isMarinTop />
            <br />
            <Slider role={{
                sc1024: 4,
                sc768: 3,
                sc640: 2,
            }} length={listTestimonials.length}>
                {listTestimonials.map(data => <ItemTestimonials data={data} key={data.id} />)}
            </Slider>
            <div className="banner" style={{ marginBottom: '10rem' }}>
                <ItemWaveHero isTop={true} />
                <div className='near__footer--container'>
                    <h2>Autopilot your diet,<br /> and start <span>feeling amazing.</span></h2>
                    <div className="button">
                        <ButtonComponent type="button">
                            HOW IT WORKS
                        </ButtonComponent>
                    </div>
                </div>
                <ItemWaveHero isTop={false} />
            </div>
            <HomeTitleTop type="Menu" title="Explore our menu"
                description="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque." />
            <Slider role={{
                sc1024: 3,
                sc640: 2,
            }} length={listProduct.length}>
                {listProduct.map(product => <ItemProduct key={product.id} product={product} />)}
            </Slider>
            <div className="wrapper">
                <div className="banner__bottom">
                    <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f8ce06eda2bfa7fdf59017d_banner.png" alt="" />
                    <div className="banner__bottom--container">
                        <div>
                            Join now
                        </div>
                        <h2>Nutritionally designed meals you’ll crave</h2>
                        <ButtonComponent type="button">
                            GET STARTED
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </WrapperPage>
    )
}

export default Home