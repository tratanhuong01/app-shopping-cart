import React from 'react'

const Started = () => {
    return (
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
    )
}

export default Started