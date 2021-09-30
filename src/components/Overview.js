export default function Overview(props) {
	return (
		<div>
			<section>
				<h1>Personal information</h1>
				<p>Name: {props.data.name}</p>
				<p>Email: {props.data.name}</p>
				<p>Phone Number: {props.data.name}</p>
			</section>
			<section>
				<h1>Educational experience</h1>
				<p>School name: {props.data.schoolName}</p>
				<p>Title of study: {props.data.studyTitle}</p>
				<p>
					Date of study: {props.data.studyStartDate.slice(0, -3)} -{' '}
					{props.data.studyEndDate.slice(0, -3)}
				</p>
			</section>
			<section>
				<h1>Practical Experience</h1>
				<p>Company name: {props.data.companyName}</p>
				<p>Position title: {props.data.positionTitle}</p>
				<p>Main tasks: {props.data.mainTasks}</p>
			</section>
		</div>
	);
}
