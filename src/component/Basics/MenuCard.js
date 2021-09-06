import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData)
    return (
        <>
<section className="main-card--cointainer">
            {
                menuData.map((curElem) => {
                    return (
                        <>
                            <div className="card-container" key={curElem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">1</span>
                                        <span className="card-author subtle" style={{ color: "red" }}>{curElem.category}</span>
                                        <h2 className="card-title">{curElem.name}</h2>
                                        <span className="card-description subtle">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non? Blanditiis consequatur cum ipsam sit quos, deleniti atque rem pariatur laborum labore magnam quae.
                                        </span>
                                        {/* <div className="card-read">Read</div> */}
                                    </div>
                                    <img src={curElem.image} alt="images" className="card-media"/>
                                    {/* <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80" alt="images" className="card-media"/> */}
                                    {/* <span className="card-tag subtle">Order now</span> */}
                                </div>
                            </div>
                        </>
                    )
                })

            }
</section>
        </>
    )
}

export default MenuCard
