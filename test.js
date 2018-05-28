const assert = require("assert");
const expect = require("chai").expect;

const sudoku = require("./index.js");

const validateSudoku = require("./index.js");

describe("Sudoku", () => {
	it("should throw for board with invalid size", () => {
		const board = [
			[1,2,3],
			[3,2,1],
			[1,2,3]
		];

		try {
			validateSudoku(board);
		} catch(e) {
			expect(e).to.be.an("error");
			return;
		}

		assert.fail("invalid size");
	});

	it("should return true for board with correct solution", () => {
		const board = [
			[5, 3, 4, 6, 7, 8, 9, 1, 2],
			[6, 7, 2, 1, 9, 5, 3, 4, 8],
			[1, 9, 8, 3, 4, 2, 5, 6, 7],
			[8, 5, 9, 7, 6, 1, 4, 2, 3],
			[4, 2, 6, 8, 5, 3, 7, 9, 1],
			[7, 1, 3, 9, 2, 4, 8, 5, 6],
			[9, 6, 1, 5, 3, 7, 2, 8, 4],
			[2, 8, 7, 4, 1, 9, 6, 3, 5],
			[3, 4, 5, 2, 8, 6, 1, 7, 9]
		];

		const result = validateSudoku(board);

		expect(result).to.be.equal(true);
	});

	it("should return false for bord with incorrect solution", () => {
		const board = [
			[5, 3, 4, 6, 7, 8, 9, 1, 2],
			[6, 7, 2, 1, 9, 0, 3, 4, 8],
			[1, 0, 0, 3, 4, 2, 5, 6, 0],
			[8, 5, 9, 7, 6, 1, 0, 2, 0],
			[4, 2, 6, 8, 5, 3, 7, 9, 1],
			[7, 1, 3, 9, 2, 4, 8, 5, 6],
			[9, 0, 1, 5, 3, 7, 2, 1, 4],
			[2, 8, 7, 4, 1, 9, 6, 3, 5],
			[3, 0, 0, 4, 8, 1, 1, 7, 9]
		];

		const result = validateSudoku(board);

		expect(result).to.be.equal(false);
	});
});