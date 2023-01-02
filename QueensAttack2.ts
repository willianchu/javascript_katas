'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n (size of the chessboard)
 *  2. INTEGER k (number of obstacles)
 *  3. INTEGER r_q (row of queen)
 *  4. INTEGER c_q (column of queen)
 *  5. 2D_INTEGER_ARRAY obstacles (positions of obstacles)
 */

function queensAttack(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
    // Write your code here
    let max_queen_moves: number = 0;
    max_queen_moves += sameLineMoves(n, r_q, c_q, obstacles);
    max_queen_moves += sameColumnMoves(n, r_q, c_q, obstacles);
    max_queen_moves += diagonalMoves(n, r_q, c_q, obstacles);
  return max_queen_moves;
}
function sameLineMoves(n: number, r_q: number, c_q: number, obstacles: number[][]): number {
    let maxLeftLimit: number = 1;
    let maxRightLimit: number = n;
    for(let i: number = 0; i < obstacles.length; i++) {
      if(obstacles[i][0] === r_q) {
        if(obstacles[i][1] < c_q && obstacles[i][1] > maxLeftLimit) {
            maxLeftLimit = obstacles[i][1];
        }
        if(obstacles[i][1] > c_q && obstacles[i][1] < maxRightLimit) {
            maxRightLimit = obstacles[i][1];
        }
      }
    }
    return (c_q - maxLeftLimit) + (maxRightLimit - c_q);
}
function sameColumnMoves(n: number, r_q: number, c_q: number, obstacles: number[][]): number {
    let maxUpLimit: number = 1;
    let maxDownLimit: number = n;
    for(let i: number = 0; i < obstacles.length; i++) {
      if(obstacles[i][1] === c_q) {
        if(obstacles[i][0] < r_q && obstacles[i][0] > maxUpLimit) {
            maxUpLimit = obstacles[i][0];
        }
        if(obstacles[i][0] > r_q && obstacles[i][0] < maxDownLimit) {
            maxDownLimit = obstacles[i][0];
        }
      }
    }
    return (r_q - maxUpLimit) + (maxDownLimit - r_q);
}


function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const k: number = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const r_q: number = parseInt(secondMultipleInput[0], 10);

    const c_q: number = parseInt(secondMultipleInput[1], 10);

    let obstacles: number[][] = Array(k);

    for (let i: number = 0; i < k; i++) {
        obstacles[i] = readLine().replace(/\s+$/g, '').split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    const result: number = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + '\n');

    ws.end();
}
