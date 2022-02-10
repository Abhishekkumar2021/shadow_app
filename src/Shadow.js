import React, { Component } from "react";
import "./Shadow.css";

class Shadow extends Component {
	static defaultProps = {
		width: 800,
		height: 400,
	};
	constructor(props) {
		super(props);
		this.state = {
			x: 10,
			y: 10,
			spread: 0,
			blur: 20,
			opacity: 0.1,
			isCopied: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		navigator.clipboard.writeText(
			`box-shadow : ${this.state.x}px ${this.state.y}px ${this.state.blur}px ${this.state.spread}px rgb(0,0,0,${this.state.opacity})`
		);
		this.setState({ isCopied: true });
	}
	handleChange(event) {
		if (event.target.name === "opacity") {
			this.setState({
				[event.target.name]: event.target.value / 100,
				isCopied: false,
			});
		} else {
			this.setState({
				[event.target.name]: event.target.value,
				isCopied: false,
			});
		}
	}
	render() {
		return (
			<div className='Shadow'>
				<nav>
					<h2 onClick={this.handleClick} title='copy to clipboard'>
						{this.state.isCopied
							? "Copied!"
							: `box-shadow : ${this.state.x - 50}px ${this.state.y - 50}px ${
									this.state.blur
							  }px ${this.state.spread}px rgb(0,0,0,${this.state.opacity})`}
					</h2>
				</nav>
				<div
					className='Shadow-box'
					style={{
						...this.props,
						boxShadow: `${this.state.x - 50}px ${this.state.y - 50}px ${
							this.state.blur
						}px ${this.state.spread}px rgb(0,0,0,${this.state.opacity})`,
					}}></div>
				<div className='Shadow-inputs'>
					<div className='input-box'>
						<span>X offset </span>
						<input
							type='range'
							name='x'
							value={this.state.x}
							onChange={this.handleChange}
						/>{" "}
					</div>
					<div className='input-box'>
						<span>Y offset </span>
						<input
							type='range'
							name='y'
							value={this.state.y}
							onChange={this.handleChange}
						/>{" "}
					</div>
					<div className='input-box'>
						<span>Blur effect </span>
						<input
							type='range'
							name='blur'
							value={this.state.blur}
							onChange={this.handleChange}
						/>{" "}
					</div>
					<div className='input-box'>
						<span>Spread effect</span>
						<input
							type='range'
							name='spread'
							value={this.state.spread}
							onChange={this.handleChange}
						/>{" "}
					</div>
					<div className='input-box'>
						<span>Opacity effect</span>
						<input
							type='range'
							name='opacity'
							value={100 * this.state.opacity}
							onChange={this.handleChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Shadow;
