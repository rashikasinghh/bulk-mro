import React, {Component} from 'react';

class ItemComponent extends Component {
    state = {
        count: 0,
        selectedValue: []
    }

    countHandler = (productID, value) => {
        if (value === 'increase') {
            this.setState(prevValue => { return {count : prevValue.count + 1}})
            const selectedItem = {
                [productID] : this.state.count + 1
            };
        this.props.cart(selectedItem)
        }
        else {
            this.setState(prevValue => {return {count: prevValue.count - 1}})
            const selectedItem = {
                [productID] : this.state.count - 1
            };
        this.props.cart(selectedItem)
        }
        
    }
    render() {
        const {title, img , price} = this.props.data
    return (
        <div className="card">
        <img src={img} className="card-img-top" alt="" style={{height:'250px'}}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>
            {this.state.count === 0 ? 
            <button className="btn btn-primary" onClick={() => this.countHandler(title, 'increase')}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" fill="white"/></svg></button>
            :
            <div>
                <button className="btn btn-primary" onClick={() => this.countHandler(title,'decrease')}>-</button>
                <input value={this.state.count} style={{width:90, height:35, paddingLeft: 40}} disabled/>
                <button className="btn btn-primary" onClick={() => this.countHandler(title,'increase')}>+</button>
            </div>
            }
        </div>
        </div>
    )
    }
}

export default ItemComponent;