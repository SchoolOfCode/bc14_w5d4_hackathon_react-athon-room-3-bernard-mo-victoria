import React from 'react';
import './List.css';

// buttons
export default function List(props) {
	return (
		<ul>
			{props.todos.map((todo, index) => (
				<li key={index}>
					{todo}
					<button
						onClick={() => {
							props.toIncreasePriority(index);
						}}>
						{'↑'}
					</button>
					<button
						onClick={() => {
							props.toDecreasePriority(index);
						}}>
						{'↓'}
					</button>
					<button
						onClick={() => {
							props.toRemoveItem(index);
						}}>
						{'Delete'}
					</button>
				</li>
			))}
		</ul>
	);
}
