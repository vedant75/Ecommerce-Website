import React, { Component } from 'react'
import "./Cards.css"
import {ImPriceTag} from 'react-icons/im'
import {MdEventAvailable} from 'react-icons/md'
import shoe from './img/shoe1.jpeg'

export default class Cards extends Component {
    render() {
        return (
            <div className="cards">
            <h1 class="heading-primary">Our Products</h1>
               <div className="card">
                    <img src={shoe} alt="House 1" className="card__img" />
                
                    <h5 className="card__name">Adidas Shoe</h5>
                    <div className="card__location">
                    
                    <p>USA</p>
                    </div>
                    <div className="card__rooms">
                    <MdEventAvailable/>
                    <p>5</p>
                    </div>
                    <div className="card__area">
                    
                    <p>325 m<sup>2</sup></p>
                    </div>
                    <div className="card__price">
                    < ImPriceTag/>
                    <p>$30</p>
                    </div>
                    <button className="card__btn">Add to Cart</button>
                </div>  
                <div className="card">
                    <img src={shoe} alt="House 1" className="card__img" />
                
                    <h5 className="card__name">Adidas Shoe</h5>
                    <div className="card__location">
                    
                    <p>USA</p>
                    </div>
                    <div className="card__rooms">
                    <MdEventAvailable/>
                    <p>5</p>
                    </div>
                    <div className="card__area">
                    
                    <p>Size (UK) 6 7 8 9 10</p>
                    </div>
                    <div className="card__price">
                    < ImPriceTag/>
                    <p>$30</p>
                    </div>
                    <button className="card__btn">Add to Cart</button>
                </div>  
                <div className="card">
                    <img src={shoe} alt="House 1" className="card__img" />
                
                    <h5 className="card__name">Adidas Shoe</h5>
                    <div className="card__location">
                    
                    <p>USA</p>
                    </div>
                    <div className="card__rooms">
                    <MdEventAvailable/>
                    <p>5</p>
                    </div>
                    <div className="card__area">
                    
                    <p>325 m<sup>2</sup></p>
                    </div>
                    <div className="card__price">
                    < ImPriceTag/>
                    <p>$30</p>
                    </div>
                    <button className="card__btn">Add to Cart</button>
                </div>  
                <div className="card">
                    <img src={shoe} alt="House 1" className="card__img" />
                
                    <h5 className="card__name">Adidas Shoe</h5>
                    <div className="card__location">
                    
                    <p>USA</p>
                    </div>
                    <div className="card__rooms">
                    <MdEventAvailable/>
                    <p>5</p>
                    </div>
                    <div className="card__area">
                    
                    <p>325 m<sup>2</sup></p>
                    </div>
                    <div className="card__price">
                    < ImPriceTag/>
                    <p>$30</p>
                    </div>
                    <button className="card__btn">Add to Cart</button>
                </div> 
                <div className="card">
                    <img src={shoe} alt="House 1" className="card__img" />
                
                    <h5 className="card__name">Adidas Shoe</h5>
                    <div className="card__location">
                    
                    <p>USA</p>
                    </div>
                    <div className="card__rooms">
                    <MdEventAvailable/>
                    <p>5</p>
                    </div>
                    <div className="card__area">
                    
                    <p>325 m<sup>2</sup></p>
                    </div>
                    <div className="card__price">
                    < ImPriceTag/>
                    <p>$30</p>
                    </div>
                    <button className="card__btn">Add to Cart</button>
                </div> 
                <div className="card">
                    <img src={shoe} alt="House 1" className="card__img" />
                
                    <h5 className="card__name">Adidas Shoe</h5>
                    <div className="card__location">
                    
                    <p>USA</p>
                    </div>
                    <div className="card__rooms">
                    <MdEventAvailable/>
                    <p>5</p>
                    </div>
                    <div className="card__area">
                    
                    <p>325 m<sup>2</sup></p>
                    </div>
                    <div className="card__price">
                    < ImPriceTag/>
                    <p>$30</p>
                    </div>
                    <button className="card__btn">Add to Cart</button>
                </div> 
            </div>
        )
    }
}
