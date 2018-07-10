import React, { Component } from 'react';
import { Carousel, Col } from 'antd';

import tv from '../../data/assets/img/tv.jpg';
import logo from '../../data/assets/img/pole_logo_red.png';
import './index.scss';

export default class MainPage extends Component {
    render() {
        return (
            <div className="mainContainer">
                <Carousel className="firstSection flex-column flex-center font-30" autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                {/* <div className="firstSection flex-column flex-center font-30">
                    <div>75,000 certified health and fitness professionals. 35 million lives moved.</div>
                    <div className="button t-pad-20">Button</div>
                </div> */}
                <Col className="secondSection">
                    <div className="title">What is alpha glove</div>
                    <Col className="" md={{ span: 12 }}>
                        <img className="img-contain" src={tv} />
                    </Col>
                    <Col className="aboutProduct" md={{ span: 12 }}>
                    KudosCoin is a decentralized cryptocurrency always available, worldwide and built on blockchain technology. KudosCoin is an open source, peer-to-peer, community driven cryptocurrency that allow people to store and invest their wealth. KudosCoin was created to make online payments easy to do, at a low cost, and Introducing the KudosCoin (KUDOS); a unique digital asset that powers KudosEx, a Blockchain Asset Trading Platform fueling the future of blockchain innovation
    
                    The KudosCoin (KUDOS) implements the proof-of-stake mechanism, except the stage of initial distribution, when it was mixed PoW and PoS coin. This means that the KudosCoin holders can earn additional coins by simply holding KudosCoins. Money makes money, just so does the PoS mining that allows you to earn coins without the use of mining farms and special equipment. The profitability of the PoS mining does not depend on the workload of the network. With the achievement of maximum to the final release of the coin, Proof-of-Stake will increase the money supply in relation to demand and the development of the project. This type of investment is similar to a bank deposit on which the interest is charged. There are the funds in your owner's wallet and not the third person, no one else can take them away.
                    </Col>
                </Col>
                <Col xs={{ span: 24 }} className="thirdSection" style={{background:"#eeeff3"}}>
                    <div className="title tb-pad-30">Features</div>
                    <Col xs={{ span: 16, offset: 4 }} className="font-tertiary lr-pad-50 is-text-center">
                        Next generation of Blockchain Asset KUDOS is an open-source and its design is public, nobody
                        owns or controls KudosCoin and everyone can take part.
                    </Col>
                    <Col xs={{ span: 22, offset: 1 }} style={{ background: "" }}>
                        <Col md={{ span: 8 }} style={{ background: "#eeeff3" }} className="is-text-center pad-50">
                            <div className="icon">
                                <img src={logo} />   
                            </div>
                            <div className="subTitle tb-pad-20">Features</div>
                            <div className="description font-tertiary">No need to wait 10 minutes. Send KUDOS instantly and have it confirmed as spendable within few minutes.</div>
                        </Col>
                        <Col md={{ span: 8 }} style={{ background: "green" }}></Col>
                        <Col md={{ span: 8 }} style={{ background: "green" }}></Col>
                    </Col>
                </Col>
            </div>
        );
    }
}
