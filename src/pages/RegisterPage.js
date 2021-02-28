//

import { useState } from 'react';

// {
//    email: '',
//    password: '',
//    userName: '',
// }

function RegisterPage() {
	const [form, setForm] = useState({});

	function onSubmit(event) {
		event.preventDefault();
		// send to server
		console.log('submit', form);
	}

	function onChange(event) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	console.log('form', form);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="userName">userName</label>
					<input onChange={onChange} id="userName" type="text" name="userName" type="text" />
				</div>
				<div>
					<label htmlFor="email">email</label>
					<input onChange={onChange} id="email" type="text" name="email" type="text" />
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input onChange={onChange} id="password" type="password" name="password" name="password" type="password" />
				</div>
				<button>Regiser</button>
			</form>
		</div>
	);
}

export default RegisterPage;
