let html = '';
let board = [];

for (let i = 0; i < 10; i++) {
    board[i] = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
}

function creat_data() {
    for (let i = 0; i < 10; i++) {
        html += "<tr>";
        for (let j = 0; j < 10; j++) {
            html += "<td onclick='tick_action(this.id)' id='" + i + j + "'>" + board[i][j] + "</td>";
        }
        html += "</tr>";
    }
    document.getElementById('table_body').innerHTML = html;
}

creat_data();

function tick_action(clicked_id) {

    let positionX = clicked_id[0];
    let positionY = clicked_id[1];
    let countX = 2;
    let countO = 2;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j] === 'X') {
                countX = countX + 1;
            }
            if (board[i][j] === 'O') {
                countO = countO + 1;
            }
        }
    }
    if (countO >= countX) {
        board[positionX][positionY] = 'X';

    } else {
        board[positionX][positionY] = 'O';
    }
    html = '';
    creat_data();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if ((board[i][j] === "X" && board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3]) ||
                (board[i][j] === "X" && board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j] && board[i][j] === board[i + 3][j]) ||
                (board[i][j] === "X" && board[i][j] === board[i + 1][j-1] && board[i][j] === board[i + 2][j-2] && board[i][j] === board[i + 3][j-3]) ||
                (board[i][j] === "X" && board[i][j] === board[i + 1][j + 1] && board[i][j] === board[i + 2][j + 2] && board[i][j] === board[i + 3][j + 3])) {
                alert('Tro choi ket thuc. X thang');
                break;
            }
            if ((board[i][j] === "O" && board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3]) ||
                (board[i][j] === "O" && board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j] && board[i][j] === board[i + 3][j]) ||
                (board[i][j] === "O" && board[i][j] === board[i + 1][j-1] && board[i][j] === board[i + 2][j-2] && board[i][j] === board[i + 3][j-3]) ||
                (board[i][j] === "O" && board[i][j] === board[i + 1][j + 1] && board[i][j] === board[i + 2][j + 2] && board[i][j] === board[i + 3][j + 3])) {
                alert('Tro choi ket thuc. O thang');
                break;
            }
        }
    }
}