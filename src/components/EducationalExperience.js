export default function EducationalExperience(props) {
	return (
		<form>
			<label>
				School name:
				<input
					type="text"
					id="schoolName"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.schoolName}
				/>
			</label>
			<label>
				Title of study:
				<input
					type="text"
					id="studyTitle"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.studyTitle}
				/>
			</label>
			<fieldset>
				<legend>Date of study</legend>
				<label>
					Started:
					<input
						type="date"
						id="studyStartDate"
						onChange={props.onChange}
						disabled={props.disabled}
					/>
				</label>
				<label>
					Ended:
					<input
						type="date"
						id="studyEndDate"
						onChange={props.onChange}
						disabled={props.disabled}
					/>
				</label>
			</fieldset>
		</form>
	);
}
