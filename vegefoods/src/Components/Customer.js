import React from 'react'

const Customer = () => {
  return (
    <div className="container review mt-5">
            <h1 className="text-center">Customer Review</h1>
            <p className="text-center">Discover what our valued customers have to say about their VegeFoods experience</p>

            <div className="row mt-3">
                <div className="col-lg-4 mt-4 position-relative">
                    <div className="card py-5 px-5 rounded-0">
                        <i className="fa fa-quote-left position-absolute" aria-hidden="true" style={{ top: "-12px",fontSize: "2rem" }}></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quos ipsam ab earum cum sed provident neque dolor, beatae molestias.</p>
                    <div className="profile d-flex">
                        <div className="image" style={{ width:"60px",height:"60px" }}>
                            <img src="./images/user1.jpg" alt="" className="w-100 h-100 rounded-circle"/>
                        </div>
                        <div className="content ms-3">
                        <h5>Client Name</h5>
                        <em>Profession</em>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mt-4 position-relative">
                    <div className="card py-5 px-5 rounded-0">
                        <i className="fa fa-quote-left position-absolute" aria-hidden="true" style={{ top: "-12px",fontSize: "2rem" }}></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quos ipsam ab earum cum sed provident neque dolor, beatae molestias.</p>
                    <div className="profile d-flex">
                        <div className="image" style={{ width:"60px",height:"60px" }}>
                            <img src="./images/user2.jpg" alt="" className="w-100 h-100 rounded-circle"/>
                        </div>
                        <div className="content ms-3">
                        <h5>Client Name</h5>
                        <em>Profession</em>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mt-4 position-relative">
                    <div className="card py-5 px-5 rounded-0">
                        <i className="fa fa-quote-left position-absolute" aria-hidden="true" style={{ top: "-12px",fontSize: "2rem" }}></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quos ipsam ab earum cum sed provident neque dolor, beatae molestias.</p>
                    <div className="profile d-flex">
                        <div className="image" style={{ width:"60px",height:"60px" }}>
                            <img src="./images/user3.jpg" alt="" className="w-100 h-100 rounded-circle"/>
                        </div>
                        <div className="content ms-3">
                        <h5>Client Name</h5>
                        <em>Profession</em>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Customer