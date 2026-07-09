

const Landing = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Welcome to Astro!</h1>
			<p>You have clicked the button {count} times.</p>
			<button onClick={() => setCount(count + 1)}>
				Click me!
			</button>
		</div>
	);
};

export default Landing;

function useState(arg0: number): [any, any] {
    throw new Error("Function not implemented.");
}
