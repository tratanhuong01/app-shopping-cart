import ButtonComponent from "../../core/ButtonComponent";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero__small hero__image top__left active" style={{
                backgroundImage: `url(https://assets.website-files.com/5f8777f972356e39b046d89f/5f890629d3bcf7f61684affb_food-3.png)`
            }}></div>
            <div className="hero__big hero__image bottom__left active" style={{
                backgroundImage: `url(https://assets.website-files.com/5f8777f972356e39b046d89f/5f890629fdc8820b90a154c3_food-2.png)`
            }}></div>
            <div className="hero__big hero__image top__right active" style={{
                backgroundImage: `url(https://assets.website-files.com/5f8777f972356e39b046d89f/5f890629f0327d729bbc4af3_food-1.png)`
            }}></div>
            <ItemWaveHero isTop={true} />
            <ItemWaveHero isTop={false} />
            <div className="hero__content">
                <div>
                    <h1 className="">
                        Healthy food<br />
                        for busy people
                    </h1>
                    <p>Imagine devouring delicious, healthy meals daily without so much as lifting a pot.</p>
                    <div>
                        <ButtonComponent type="button">
                            HOW IT WORKS
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

type PropsItemWaveHero = {
    isTop: boolean
};

export const ItemWaveHero = ({ isTop }: PropsItemWaveHero) => {
    return (
        <div className={`hero__wave ${isTop ? 'top' : 'bottom'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 36">
                <path d="M-15,127.772c58.311,4.2,116.622,8.4,174.933,2.721s116.623-21.23,174.933-18.9S451.487,134.124,509.8,141.542s116.628,2.049,174.933-3.147,116.6-10.218,174.933-10.149,116.7,5.231,174.933,3.08,116.344-11.615,174.933-15.683,117.66-2.738,174.933.639,112.749,8.8,174.933,13.4,131.076,8.359,174.933,4.095,62.679-16.557,170.667-6v19.583H-15"
                    transform="translate(1905 147.355) rotate(180)" fill="#fff" />
            </svg>
        </div>
    )
}

export default Hero