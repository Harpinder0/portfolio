import React from 'react';
import './style.css'

const Card = () => {
    return (
        <section class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom">
                        <div class="services-block-three">
                            <a href="/">
                                <div class="padding-15px-bottom">
                                    <i class="fa fa-eercast"></i>
                                </div>
                                <h4>1</h4>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom">
                        <div class="services-block-three">
                            <a href="/">
                                <div class="padding-15px-bottom">
                                    <i class="fa fa-snowflake-o"></i>
                                </div>
                                <h4>2</h4>
                            </a>
                        </div>
                    </div>
                    <div class="services-block-three col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom">
                        <div class="services-block-three">
                            <a href="/">
                                <div class="padding-15px-bottom">
                                    <i class="fa fa-braille"></i>
                                </div>
                                <h4>3</h4>
                            </a>
                        </div>
                    </div>
                    <div class="services-block-three col-lg-4 col-md-6 sm-margin-30px-bottom xs-margin-20px-bottom">
                        <div class="services-block-three">
                            <a href="/">
                                <div class="padding-15px-bottom">
                                    <i class="fa fa-diamond"></i>
                                </div>
                                <h4>4</h4>
                            </a>
                        </div>
                    </div>
                    <div class="services-block-three col-lg-4 col-md-6 xs-margin-20px-bottom">
                        <div class="services-block-three">
                            <a href="/">
                                <div class="padding-15px-bottom">
                                    <i class="fa fa-object-ungroup"></i>
                                </div>
                                <h4>5</h4>
                            </a>
                        </div>
                    </div>
                    <div class="services-block-three col-lg-4 col-md-6">
                        <div class="services-block-three">
                            <a href="/">
                                <div class="padding-15px-bottom">
                                    <i class="fa fa-paper-plane-o"></i>
                                </div>
                                <h4>6</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card