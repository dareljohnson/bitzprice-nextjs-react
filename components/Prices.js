import React, { Component } from 'react';

class Prices extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currency: 'USD'
		};
	}

	render() {
		let list = '';
		if (this.state.currency === 'USD') {
			list = (
				<li className="list-group-item">
					Bitcoin rate for {this.props.bpi.USD.description}
					: <span className="badge badge-primary">{this.props.bpi.USD.code}</span>
					&nbsp;{'\u0024'}
					<strong>{this.props.bpi.USD.rate_float.toFixed(2)}</strong>
				</li>
			);
		} else if (this.state.currency === 'GBP') {
			list = (
				<li className="list-group-item">
					Bitcoin rate for {this.props.bpi.GBP.description}
					: <span className="badge badge-primary">{this.props.bpi.GBP.code}</span>
					&nbsp;{'\u00A3'}
					<strong>{this.props.bpi.GBP.rate_float.toFixed(2)}</strong>
				</li>
			);
		} else if (this.state.currency === 'EUR') {
			list = (
				<li className="list-group-item">
					Bitcoin rate for {this.props.bpi.EUR.description}
					: <span className="badge badge-primary">{this.props.bpi.EUR.code}</span>
					&nbsp;{'\u20A0'}
					<strong>{this.props.bpi.EUR.rate_float.toFixed(2)}</strong>
				</li>
			);
		}

		return (
			<div>
				<ul className="list-group">{list}</ul>
				<br />
				<select onChange={(e) => this.setState({ currency: e.target.value })} className="form-control">
					<option value="USD">USD</option>
					<option value="GBP">GBP</option>
					<option value="EUR">EUR</option>
				</select>
			</div>
		);
	}
}

export default Prices;
