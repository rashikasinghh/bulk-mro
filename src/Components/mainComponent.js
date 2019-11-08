import React,{Component} from 'react';
import NavBar from './navBar';
import ModalComponent from './modalComponent';
import ItemComponent from './itemsComponent';
import hammer from '../images/hammer.jpg';
import bucket from '../images/bucket.jpg';
import bulb from '../images/bulb.jpg';
import tubelight from '../images/tubelight.jpg';

class MainComponent extends Component {
    state = {
        visible: false,
        searchValue: '',
        cartValue: []
    }

    cartHandler = (values) => {
        let flag = false;
        let dataToUpdate = {}
        if (this.state.cartValue.length) {
            this.state.cartValue.forEach((value, index) => {
                Object.keys(value).forEach(key => {
                    if (key === Object.keys(values)[0]) {
                        flag = true;
                        dataToUpdate.index = index 
                        dataToUpdate.key = key
                    }
                }) 
            })
            if (flag) {
                this.state.cartValue[dataToUpdate.index][dataToUpdate.key] = values[dataToUpdate.key];
            } else {
                this.state.cartValue.push(values)
            }
        } else this.state.cartValue.push(values)
        this.setState({cartValue: this.state.cartValue})
    }

    checkoutHandler = (value) => {
        this.setState({visible: value})
    }

    inputHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }
    render() {
        const items = [
            {id: '1', img: hammer, title: 'Hammer', price: '10$'}, 
            {id: '2', img: bulb, title: 'Bulb', price: '2.5$'}, 
            {id: '3', img: tubelight, title: 'TubeLight', price: '12.7$'}, 
            {id: '4', img: bucket, title: 'Bucket', price: '18$'}
        ];

        const lowercasedFilter = this.state.searchValue.toLowerCase();
        const filteredData = items.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        return(
            <div className="container mt-5">
                <NavBar count={this.state.cartValue} checkout={(value) => this.checkoutHandler(value)} value={this.inputHandler}/>
                <div className="card-deck mt-5">
                {filteredData.map((item, index) => (
                    <ItemComponent data={item} key={item.id} cart={(value) => this.cartHandler(value)}/>
                ))
                }
                </div>
                {this.state.visible ? 
                <ModalComponent visible={this.state.visible} cartDetails={this.state.cartValue} state={(value) => this.checkoutHandler(value)}/> : null}
            </div>
        )
    }
}
export default MainComponent;