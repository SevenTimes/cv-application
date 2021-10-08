export default function Overview(props) {
	return (
		<div>
			<section>
				<h2>Personal information</h2>
				<p>Name: {props.general.name}</p>
				<p>Email: {props.general.email}</p>
				<p>Phone Number: {props.general.phone}</p>
			</section>
			<section>
				<h2>Educational experience</h2>
				<p>School name: {props.education.schoolName}</p>
				<p>Title of study: {props.education.studyTitle}</p>
				<p>
					Date of study: {props.education.studyStartDate.slice(0, -3)} -{' '}
					{props.education.studyEndDate.slice(0, -3)}
				</p>
			</section>
			<section>
				<h2>Practical Experience</h2>
				<p>Company name: {props.practice.companyName}</p>
				<p>Position title: {props.practice.positionTitle}</p>
				<p>Main tasks: {props.practice.mainTasks}</p>
			</section>
		</div>
	);
}
