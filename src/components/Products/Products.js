import React from 'react';

class Products extends React.Component{
    render(){
        return(
            <div className="product-section page-wrapper">
                <div className="row no-margin">
                    <div className="col-md-12 col-sm-12 no-padding">
                        <h1 className="text-center content-heading">Products Name</h1>
                    </div>
                </div>
                <div className="container">
                <section className="productsName">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="text-center  ">***Product About***</h2>
                        </div>
                    </div>

                <div className="row productsNameHeading">
                    <div className="col-sm-12 col-md-12">
                    <h3 className="text-center">We have developed multiple suites for automated or algorithmic trading which is currently running for National Stock Exchange of India and Bombay Stock Exchange.</h3>
                    </div>

                </div>
                </section>
                <section className="screenShots">
                    <div className="row ScreenShots">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="text-center text-uppercase">ScreenShots</h2>
                        </div>

                    </div>
                    
                </section>
                </div>
            </div>
        )
    }
}

export default Products;