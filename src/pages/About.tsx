import { ItemWaveHero } from '../components/Hero'
import useTitle from '../hooks/useTitle'
import WrapperPage from './WrapperPage'

const About = () => {
    //
    useTitle("About")
    //
    return (
        <WrapperPage>
            <div className="about__top">
                <ItemWaveHero isTop={true} />
                <div className='content'>
                    <h2>About</h2>
                    <p>Eating optimally has never been this convenient, simple and tasteful.</p>
                </div>
                <ItemWaveHero isTop={false} />
            </div>
            <div className="about__image">
                <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f890629f0327d729bbc4af3_food-1.png" alt="" />
            </div>
            <div className="about__description">
                <h2>Our Story</h2>
                <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
                    tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                    Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
            </div>
            <div className="about__list">
                <div className="about__list--image">
                    <div className="img-wrap">
                        <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f93804feefd7d447a90c432_about_1.jpg" alt="" />
                    </div>
                </div>
                <div className="about__list--image">
                    <div className="img-wrap">
                        <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f93804f078242c9bb48340b_about_2.jpg" alt="" />
                    </div>
                </div>
                <div className="about__list--image">
                    <div className="img-wrap">
                        <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f93804fc21a7fef16d0b577_about_3.jpg" alt="" />
                    </div>
                </div>
                <div className="about__list--image">
                    <div className="img-wrap">
                        <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f93804fe7d13bda75dc37ab_about_4.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="about__description">
                <h2>We love cooking</h2>
                <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean massa. Cum sociis natoque penatibus</p>
                <p>Donec pede justo, fringilla vel, aliquet nec Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Cum sociis natoque penatibus</p>
            </div>
        </WrapperPage>
    )
}

export default About