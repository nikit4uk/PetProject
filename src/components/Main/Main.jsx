import React, { Component } from "react";
import Slider from "react-slick";
import './main.css';
import MainSlide from '../../store/MainSlide';
import MarvelService from '../../services/marvel-service';

export default class Main extends Component {

    marvel = new MarvelService();

    state = {
        actorsOfDS: null,
        actorsOfSM: null,
        actorsOfET: null
    }

    componentDidMount() {
        this.updateActorsList('tt9419884');
        this.updateActorsList('tt10872600');
        this.updateActorsList('tt9032400');
    }

    updateActorsList(id) {
        this.marvel.getActors(id)
        .then((Actors) => {
            if (id === 'tt9419884'){
                this.setState({ 
                    actorsOfDS: Actors 
                })
            } else {
                if (id === 'tt10872600'){
                    this.setState({ 
                        actorsOfSM: Actors 
                    })
                } else{
                    this.setState({ 
                        actorsOfET: Actors 
                    })
                }
            }
        })
    }
    
    render() {
        const settings = {
        button: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };

        const { actorsOfDS, actorsOfSM, actorsOfET } = this.state;

        const renderSlide = (item, i) => {
            return (
                <div className="slide" key={`slide-${i}`}>
                    <div className="slide-wrap" style={{ backgroundImage: `url(${item.backImg})` }}>
                        <div className={item.left ? 'container left-side' : 'container'}>
                            <div className="info-wrap">
                                <h3 className="slide-title">{item.title}</h3>
                                <img className='titleImg' src={item.logo} alt="film-logo" />
                                <p className="slide-desc">{item.desc}</p>
                                <p className="slide-actors">{item.id === 1 && actorsOfDS}{item.id === 2 && actorsOfSM}{item.id === 3 && actorsOfET}</p>
                                <div className="slide-btns">
                                    <a className="btn btn-bg" href={item.btnLink}>{item.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        };

        return (
            <section className="main">
                <Slider {...settings}>
                    {MainSlide.map((item, i) => renderSlide(item, i))}
                </Slider>
            </section>
        );
    }
}