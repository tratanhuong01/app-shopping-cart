import Feature from "../components/Feature"
import Header from "../components/Header"
import Hero from "../components/Hero"
import { ItemWaveHero } from "../components/Hero/index";
import ItemPlans from "../components/ItemPlans";
import ButtonComponent from "../core/ButtonComponent";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Feature />
            <div className="our_menu">
                <ItemWaveHero isTop={true} />
                <div className="our_menu__left" style={{
                    backgroundImage: 'url(https://assets.website-files.com/5f8777f972356e39b046d89f/5f8b9bf439466a2e75c8dc5e_texture.png)'
                }}>
                    <div className="our_menu__left--content">
                        <div>Our menu</div>
                        <h2>Mix and match your <br /> meals to get a meal kit<br />you’ll love.</h2>
                        <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.</p>
                        <ButtonComponent type="button">
                            VIEW OUR MENU
                        </ButtonComponent>
                    </div>
                </div>
                <div className="our_menu__right">
                    <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f8b9b350d072e18a5c49996_image_1.jpg" alt="" />
                </div>
                <ItemWaveHero isTop={false} />
            </div>
            <div className="wrapper started">
                <div className="started__left">
                    <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f890629fdc8820b90a154c3_food-2.png" alt="" />
                </div>
                <div className="started__right">
                    <div>Started</div>
                    <h2>Meal plans made for your lifestyle</h2>
                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in, viverra quis.</p>
                    <ul>
                        <li>
                            <i className="bx bx-lemon"></i>
                            <span>Choose your meals</span>
                        </li>
                        <li>
                            <i className="bx bx-rocket"></i>
                            <span>We cook {'&'} deliver</span>
                        </li>
                        <li>
                            <i className="bx bx-droplet"></i>
                            <span>Heat {'&'} eat</span>
                        </li>
                        <li>
                            <i className="bx bx-heart"></i>
                            <span>Enjoy {'&'} Repeat</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wrapper">
                <div className="plans__wrapper">
                    <ItemPlans color="cyan" />
                    <ItemPlans color="green" />
                    <ItemPlans color="orange" />
                </div>
            </div>
        </>
    )
}

export default Home