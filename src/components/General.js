export default function General(props) {
	return (
		<form>
			<input
				type="text"
				id="name"
				onChange={props.onChange}
				disabled={props.disabled}
			/>
			<input
				type="email"
				id="email"
				onChange={props.onChange}
				disabled={props.disabled}
			/>
			<input
				type="tel"
				id="phone"
				onChange={props.onChange}
				disabled={props.disabled}
			/>
		</form>
	);
}
