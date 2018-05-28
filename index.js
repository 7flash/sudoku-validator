const isValidSequence = (values) => {
	const ascSequence = values.slice().sort((a, b) => a - b);

	for(let i = 0; i < ascSequence.length; i++) {
		if(ascSequence[i] !== i + 1) {
			return false;
		}
	}

	return true;
};

const transform = (board) => {
	return board.map((_, index) => {
		return board.map((row) => {
			return row[index];
		});
	});
};

const box = (board, x, y) => {
	let boxSize = Math.sqrt(board.length);

	let startX = x * boxSize;
	let endX = startX + boxSize;

	let startY = y * boxSize;
	let endY = startY + boxSize;

	let box = [];
	for(let i = startX; i < endX; i++) {
		for(let j = startY; j < endY; j++) {
			box.push(board[i][j]);
		}
	}

	return box;
}

const boxes = (board) => {
	let boxesLength = Math.sqrt(board.length);
	let boxes = [];

	for(let x = 0; x < boxesLength; x++) {
		for(let y = 0; y < boxesLength; y++) {
			boxes.push(box(board, x, y));
		}
	}

	return boxes;
}

const validateRows = (board) => {
	return board.every(isValidSequence);
}

const validateColumns = (board) => {
	return transform(board).every(isValidSequence);
}

const validateBoxes = (board) => {
	return boxes(board).every(isValidSequence);
}

module.exports = (board) => {
	if(!Number.isInteger(Math.sqrt(board.length)))
		throw new Error("Invalid size");

	return validateRows(board)
		&& validateColumns(board)
		&& validateBoxes(board);
}