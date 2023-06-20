# main class to run the game 

from tictactoe import TicTacToe



def main():
    tictactoe = TicTacToe()
    tictactoe.display_board()
    active_player = 0
    while(tictactoe.game_active):
        tictactoe.player_input()
        tictactoe.display_board()
        if tictactoe.game_done():
            break



if __name__ == "__main__":
    main() 