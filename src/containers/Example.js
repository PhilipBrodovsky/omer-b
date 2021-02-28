//
import { useState } from 'react';

import ExampleView from '../components/ExampleView';

function Example() {
	const [count, setCount] = useState(0);
	const add = () => setCount(count + 1);
	const minus = () => setCount(count - 1);

	return (
		<div>
			<ExampleView title={'count: ' + count} onClick={add} btnText="add" />
			<ExampleView title={'count: ' + count} onClick={add} btnText="add">
				<div>Hi im children prop</div>
			</ExampleView>
			<ExampleView title={'count2: ' + count} onClick={minus} btnText="minus" />
		</div>
	);
}

export default Example;
