import React,{Component} from 'react';

class ModalComponent extends Component {
    state = {
        name: '',
        email: '',
        address: '',
        phone: '',
        cartDetails: [],
        update: false
    }

    componentDidMount() {
        if (this.props.cartDetails) {
            this.setState({cartDetails: this.props.cartDetails})
        }
    }

    onChangeHandler = (value, type) => {
        this.setState({[type]:value})
    }

    saveChangeHandler = () => {
        this.setState({update:true})
    }

    render() {
        return(
            <div className="modal-box">
                <div className="modal-header">
                    <h5>CheckOut Page</h5>
                    <button type="button" className="close"><span aria-hidden="true" onClick={() => this.props.state(false)}>&times;</span></button>
                </div>
                <div className="modal-body">
                    <div className="address">
                        { !this.state.update ?
                        <section>
                            <input type="text" className="form-control" placeholder="Enter your name" onChange={(e) => this.onChangeHandler(e.target.value, 'name')}/>
                            <input type='email' className="form-control" placeholder="Enter your email" onChange={(e) => this.onChangeHandler(e.target.value, 'email')} />
                            <textarea className="form-control" placeholder="Enter your Address" onChange={(e) => this.onChangeHandler(e.target.value, 'address')}/>
                            <input type="tel" className="form-control" placeholder="Enter your phone no" onChange={(e) => this.onChangeHandler(e.target.value, 'phone')}/>
                        </section>
                        : <div>
                            <div>{this.state.name}</div>
                            <div>{this.state.address}</div>
                            <div>{this.state.phone}</div>
                        </div>
                        }
                    </div>
                    <div className="items-details">
                        {this.state.cartDetails.map((cartItem, index) => { return (
                            <div key={index} className="flex-cart">
                                <p>{Object.keys(cartItem)}</p><p >{Object.values(cartItem)}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => this.props.state(false)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.saveChangeHandler}>{this.state.update? 'Checkout' :'Save changes'}</button>
                </div>
            </div>
        )
    }
}
export default ModalComponent;