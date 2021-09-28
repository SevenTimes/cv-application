import React from 'react';
import Education from './components/Education';
import General from './components/General';
import PracticalExperience from './components/PracticalExperience';
import Overview from './components/Overview';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			phone: '',

			isFormSaved: false,
			btnText: 'Save info',
		};
	}

	handleButtonClick = () => {
		this.setState({
			isFormSaved: !this.state.isFormSaved,
		});

		if (!this.state.isFormSaved) {
			this.setState({ btnText: 'Edit info' });
		} else {
			this.setState({ btnText: 'Save info' });
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<section>
					<General
						onChange={this.handleChange}
						disabled={this.state.isFormSaved}
					/>
					<Education />
					<PracticalExperience />
					<button onClick={this.handleButtonClick}>{this.state.btnText}</button>
				</section>
				<section>
					<Overview data={this.state} />
				</section>
			</div>
		);
	}
}

export default App;
