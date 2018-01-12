import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

    content() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return [
                    <span key="{this.props.auth.data.id}">{this.props.auth.data.displayName}</span>
                ]
        }
    }

    image() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return [
                    <img className="profile-img" key="{this.props.auth.data.id}" src={this.props.auth.data.photos[0].value} alt="" />
                ]
        }
    }
    render() {
        return (
            <div>
                <div className="nav nav-mob">
                    <div className="nav-main" id="visibl">
                        <div className="logo">
                            <a href="" className="lone">
                                <img src="img/instagram.png" alt="" />
                            </a>
                            <a href="" className="ltwo">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="profile-icons">
                            <a href="">
                                <img src="img/explore.png" alt="" />
                            </a>
                            <a href="/logout" className="heart">
                                <img src="img/heart.png" alt="" />
                            </a>
                            <a href="">
                                <img src="img/profile.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="nav-main main-mob" id="hidden">
                        <span>Profile</span>
                    </div>
                </div>
                <div className="content-main">
                    <div className="header-main">
                        <div className="mobi-head">
                            {this.image()}
                            <div className="title" id="hidden">
                                <div className="ico">
                                    <div className="mobi">
                                        <span>{this.content()}</span>
                                        <span>
                                            <img src="img/verified.png" style={{ height: '20px' }} alt="" />
                                        </span>
                                    </div>
                                    <div className="mobi">
                                        <a href="">
                                            <span>
                                                Follow
                                    </span>
                                        </a>

                                        <a href="" id="sug">
                                            <div>
                                                <span>
                                                    <span className="glyphicon glyphicon-triangle-bottom"></span>
                                                </span>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="main-details">
                            <div className="title" id="visible">
                                <div className="ico">
                                    <span>{this.content()}</span>
                                    <span>
                                        <img src="img/verified.png" style={{ height: '20px' }} alt="" />
                                    </span>
                                    <a href="">
                                        <span style={{ background: '#fafafa', color: 'black', border: '.5px solid rgb(197, 191, 191)' }}>
                                            Edit Profile
                                </span>
                                    </a>
                                    <a href="" id="sug">
                                        <span>
                                            <img src="img/settings.png" style={{ height: '23px' }} alt="" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="stats edit" id="visible">
                                <ul>
                                    <li>
                                        <span>
                                            <span>1,431</span>posts
                                </span>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>586k</span>followers
                                </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>692</span>following
                                </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="about">
                                <span>Adobe We're kicking off the new year on a clean slate and embracing the art of simplifying. Share your
                            minimalistic work with #Adobe_LessIsMore. adobe.ly/2CRBUD6</span>
                            </div>
                            <div className="stats" id="hidden">
                                <ul>
                                    <li className="col">
                                        <span>1,431</span>
                                        <span>posts</span>
                                    </li>
                                    <li className="col">
                                        <span>586k</span>
                                        <span>followers</span>
                                    </li>
                                    <li className="col">
                                        <span>692</span>
                                        <span> following</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="" id="suggested"></div>
                    <div className="body-main">
                        <div className="row">
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                        </div>
                        <div className="row">
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                        </div>
                        <div className="row">
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3 col-xs-4"></div>
                            </a>
                        </div>
                        <div className="row">
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3  col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3  col-xs-4"></div>
                            </a>
                            <a data-fancybox="gallery" href="#open">
                                <div className="col-sm-3  col-xs-4"></div>
                            </a>
                        </div>


                        <div class="open" id="open" style={{ background: 'white', height: '66.88vh', width: '64.86vw' }}>
                            <div class="image-section"></div>
                            <div class="comments">
                                <div class="comment-head">
                                </div>
                                <div class="comments-content">
                                    <div class="content"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mob-icons" id="hid">
                    <img src="img/home.png" alt="" />
                    <img src="img/search.png" alt="" />
                    <img src="img/add.png" alt="" />
                    <img src="img/heart.png" alt="" />
                    <img src="img/profile.png" alt="" />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Profile);