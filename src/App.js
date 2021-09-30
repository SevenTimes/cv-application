import React from 'react';
import EducationalExperience from './components/EducationalExperience';
import GeneralInformation from './components/GeneralInformation';
import PracticalExperience from './components/PracticalExperience';
import Overview from './components/Overview';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			/* General info */
			name: '',
			email: '',
			phone: '',

			/* Education info */
			schoolName: '',
			studyTitle: '',
			studyStartDate: '',
			studyEndDate: '',

			/* Practical experience */
			companyName: '',
			positionTitle: '',
			mainTasks: '',

			/* Form */
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
				{!this.state.isFormSaved && (
					<section>
						<GeneralInformation
							onChange={this.handleChange}
							disabled={this.state.isFormSaved}
							placeholder={this.state}
						/>
						<EducationalExperience
							onChange={this.handleChange}
							disabled={this.state.isFormSaved}
							placeholder={this.state}
						/>
						<PracticalExperience
							onChange={this.handleChange}
							disabled={this.state.isFormSaved}
							placeholder={this.state}
						/>
					</section>
				)}
				{this.state.isFormSaved && (
					<section>
						<Overview data={this.state} />
					</section>
				)}
				<button onClick={this.handleButtonClick}>{this.state.btnText}</button>
			</div>
		);
	}
}

export default App;
