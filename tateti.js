var turno = "X"
var board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
var gameFinish = false;
function clickCelda(numero) {

    if (!gameFinish) {
        if (board[numero - 1] === " ") {
            jugarTurno(numero)
        } else {
            alert("Movimiento invalido")
        }
    }


}
function jugarTurno(numero) {
    $("#" + numero).text(turno);
    board[numero - 1] = turno;
    verificarGanador()

    if (turno === "X") {
        turno = "O";
        $("#" + numero).css("background-color", "#dc685a");
    } else {
        turno = "X";
        $("#" + numero).css("background-color", "#ecaf4f");
    }
}
function verificarGanador() {
    verificarCon(0, 1, 2)
    verificarCon(3, 4, 5)
    verificarCon(6, 7, 8)


    verificarCon(0, 3, 6)
    verificarCon(1, 4, 7)
    verificarCon(2, 5, 8)

    verificarCon(0, 4, 8)
    verificarCon(2, 4, 6)
}

function verificarCon(pos1, pos2, pos3) {
    var result = board[pos1] + board[pos2] + board[pos3]
    if (result === "XXX" || result === "OOO") {
        $("#ganador").text("Ganador jugador:" + turno);
        gameFinish = true;
        return true
    }
    return false
}
function resetGame() {
    turno = "X"
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    gameFinish = false;
    $("#ganador").text("");
    for(var numero=0; numero<10; numero++){
        $("#"+ numero ).css("background-color", "#78bec5");
        $("#"+ numero).text('');
    }
}

