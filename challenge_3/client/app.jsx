class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 0,
		};
		this.handleNextFields = this.handleNextFields.bind(this);
		this.handleCheckOut = this.handleCheckOut.bind(this);
		this.handleFinish = this.handleFinish.bind(this);
	}
	handleNextFields() {
		this.setState({ view: this.state.view + 1 });
	}
	handleCheckOut() {
		this.setState({ view: 1 });
	}
	handleFinish() {
		this.setState({ view: 0 });
	}
	render() {
		var views = [<F0 />, <F1 handleNextFields={this.handleNextFields} />, <F2 handleNextFields={this.handleNextFields} />, <F3 handleFinish={this.handleFinish} />];
		var toView = views[this.state.view];
		console.log(this.state.view);

		return (
			<div>
				<div>
					<CheckOut handleCheckOut={this.handleCheckOut} />
				</div>
				{toView}
			</div>
		);
	}
}
