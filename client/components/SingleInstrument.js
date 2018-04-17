import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image } from 'semantic-ui-react';

const options = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 }
]
// 

export default class SingleInstrument extends React.Component {
    

    render() {
        const { instrument } = this.props;
        return (
            <div>
                <Link to={'/'}> <h2> Back to view </h2> </Link>  {/* link to previous page, history or something */}
                <Image src={instrument.imageUrl} />
                <div>Name: {instrument.name}</div>
                <div>Price: {instrument.price}</div>
                <div>Rating: {instrument.rating} </div>
                <div>Quantity:
                <Dropdown options={options}/>
                </div>
            </div>
        )
    }
}