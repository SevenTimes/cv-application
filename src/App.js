import React, { useState, useEffect } from 'react';
import EducationalExperience from './components/EducationalExperience';
import GeneralInformation from './components/GeneralInformation';
import PracticalExperience from './components/PracticalExperience';
import Overview from './components/Overview';
import './styles/App.css';

function App() {
	const [generalInfo, setGeneralInfo] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const [educationInfo, setEducationInfo] = useState({
		schoolName: '',
		studyTitle: '',
		studyStartDate: '',
		studyEndDate: '',
	});
	const [practiceInfo, setPracticeInfo] = useState({
		companyName: '',
		positionTitle: '',
		mainTasks: '',
	});
	const [isFormSaved, setIsFormSaved] = useState(false);
	const [btnText, setBtnText] = useState('Save info');

	function handleButtonClick() {
		setIsFormSaved(!isFormSaved);
	}

	useEffect(() => {
		if (!isFormSaved) {
			setBtnText('Edit info');
		} else {
			setBtnText('Save info');
		}
	}, [isFormSaved]);

	const overview = (
		<section className="overview">
			<Overview
				general={generalInfo}
				education={educationInfo}
				practice={practiceInfo}
			/>
		</section>
	);

	const form = (
		<section className="editInfo">
			<GeneralInformation
				onChange={(e) =>
					setGeneralInfo((info) => ({ ...info, [e.target.id]: e.target.value }))
				}
				disabled={isFormSaved}
				placeholder={generalInfo}
			/>
			<EducationalExperience
				onChange={(e) =>
					setEducationInfo((info) => ({
						...info,
						[e.target.id]: e.target.value,
					}))
				}
				disabled={isFormSaved}
				placeholder={educationInfo}
			/>
			<PracticalExperience
				onChange={(e) =>
					setPracticeInfo((info) => ({
						...info,
						[e.target.id]: e.target.value,
					}))
				}
				disabled={isFormSaved}
				placeholder={practiceInfo}
			/>
		</section>
	);

	return (
		<div className="app">
			<h1>Basic CV Application</h1>
			{isFormSaved ? overview : form}
			<button onClick={handleButtonClick}>{btnText}</button>
		</div>
	);
}

export default App;
