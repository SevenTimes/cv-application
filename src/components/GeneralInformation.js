export default function GeneralInformation(props) {
	return (
		<form>
			<label>
				Name:
				<input
					type="text"
					id="name"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.name}
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					id="email"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.email}
				/>
			</label>
			<label>
				Phone number:
				<input
					type="tel"
					id="phone"
					onChange={props.onChange}
					disabled={props.disabled}
					placeholder={props.placeholder.phone}
				/>
			</label>
		</form>
	);
}
