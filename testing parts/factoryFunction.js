const test = (name, age) => {
	const sayVal = () => {
		console.log(name, age);
	};
	return { sayVal };
};

const a = test("abhinav", 25);

a.sayVal();
