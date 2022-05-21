import ButtonComponent from '../../../core/ButtonComponent'
import { ItemWaveHero } from '../../Hero'

const OurMenu = () => {
    return (
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
    )
}

export default OurMenu