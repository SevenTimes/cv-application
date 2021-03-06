export default function PracticalExperience(props) {
	return (
		<form>
			<label>
				Company name:
				<input
					type="text"
					id="companyName"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.companyName}
				/>
			</label>
			<label>
				Position title:
				<input
					type="text"
					id="positionTitle"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.positionTitle}
				/>
			</label>
			<label>
				Main tasks:
				<input
					type="text"
					id="mainTasks"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.mainTasks}
				/>
			</label>
		</form>
	);
}
