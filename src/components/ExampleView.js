//

import './ExampleView.css';

function ExampleView(props) {
	return (
		<div>
			<div className="card">
				<h3>{props.title}</h3>
				<div>
					<button onClick={props.onClick}>{props.btnText}</button>
				</div>
				<div>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default ExampleView;
