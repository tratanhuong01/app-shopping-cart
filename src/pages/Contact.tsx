import { ItemWaveHero } from "../components/Hero"
import Slider from "../components/Slider"
import ButtonComponent from "../core/ButtonComponent"
import InputComponent from "../core/InputComponent"
import WrapperPage from "./WrapperPage"

const Contact = () => {
    return (
        <WrapperPage>
            <div className="contact">
                <ItemWaveHero isTop={true} />
                <div className="contact__form">
                    <h2 className="contact__form--title">
                        Contact Us
                    </h2>
                    <p className="contact__form--description">Feel free to reach out with any questions or comments below.</p>
                    <div>
                        <InputComponent type="text" placeholder="First Name *" />
                        <InputComponent type="text" placeholder="Last Name *" />
                    </div>
                    <div>
                        <InputComponent type="text" placeholder="Phone" />
                        <InputComponent type="text" placeholder="Email Address *" />
                    </div>
                    <div>
                        <textarea placeholder="Enter your message *"></textarea>
                    </div>
                    <ButtonComponent type="submit">
                        SUBMIT
                    </ButtonComponent>
                </div>
                <ItemWaveHero isTop={false} />
            </div>
            <Slider role={{
                sc1024: 3,
                sc640: 2
            }} length={3} className="plans__wrapper contact__footer">
                <ItemContact icon="bx bxs-envelope" title="Email" textActive="info@huongit.vn"
                    textCurrent="Vivamus elementum semper nisi. Aenean vulputate eleifend tellus." />
                <ItemContact icon="bx bx-phone" title="Phone" textActive="+1 800-123-4567"
                    textCurrent="blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas necus." />
                <ItemContact icon="bx bx-location-plus" title="Location"
                    textCurrent="5678  Seltice Way Coeur D Alene, ID 12345" />
            </Slider>
        </WrapperPage>
    )
}

type ItemContactProps = {
    icon: string,
    title: string,
    textActive?: string,
    textCurrent: string
}

const ItemContact = (props: ItemContactProps) => {
    return (
        <div className="contact__footer--item">
            <span className={props.icon}></span>
            <h2>{props.title}</h2>
            <p><span>{props.textActive}</span> {props.textCurrent}</p>
        </div>
    )
}

export default Contact