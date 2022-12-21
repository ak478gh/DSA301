let arr = [];
let top = -1;

function push(data) {
	arr[++top] = data;
}

function pop() {
	if (top == -1) {
		console.log('Empty Stack');
		return;
	}
	let ans = arr[top];
	top--;
	return ans;
}

function peek() {
	if (top == -1) {
		console.log('Empty Stack');
		return;
	}
	console.log(arr[top]);
}

/*
experimenting
push(5);
push(5);
push(51);
pop();
push(4);
pop();
peek();
console.log(arr);
*/