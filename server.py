
from flask import Flask, request
from board import Board

app = Flask(__name__)


@app.route("/solveGrid", methods=["POST"], strict_slashes=False)
def solveGrid():
    game_state = request.json["Gamestate"]
    s = Board()
    s.loadMatrix(game_state)
    s.solution()
    return {"payload": s.returnboard()}


if __name__ == "__main__":
    app.run(debug=True)
