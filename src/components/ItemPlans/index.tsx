import ButtonComponent from "../../core/ButtonComponent"

type ItemPlansProps = {
    color: string
}

const ItemPlans = ({ color }: ItemPlansProps) => {
    return (
        <div className="plans__item">
            <div className="plans__item--image">
                <div className="img-wrap">
                    <img src="https://assets.website-files.com/5f8e3d7830da5b5bc2d3fe53/5f8e4b2066f6561a788c4eeb_plan_3.jpg" alt="" />
                </div>
                <div className="plans__item--sticky">12 meals</div>
            </div>
            <div className="plans__item--content">
                <div>
                    <span className={`text-${color}`}>$ 99.00 USD</span>
                    <span>per week</span>
                </div>
                <h2>Learn {`&`} Clean Dinner</h2>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper.</p>
                <ButtonComponent type="button" className={`bg-${color}`}>
                    Chooose Plan
                </ButtonComponent>
            </div>
        </div>
    )
}

export default ItemPlans