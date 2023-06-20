"""Tic tac toe class to implement the game mechanics"""

INPUTS = ['X', 'O']

class TicTacToe:
    def __init__(self):
        self.tics = [' ' for _ in range(9)]
        self.game_active = True
        self.active_player = 0

    def player_input(self):
        """requests input from the player 0 or 1"""
        invalid_input = True
        while invalid_input:
            coordinates = input(f"Player {self.active_player + 1} provide the coordinates of the next move \n Provide X and Y separated by a space(x y)")
            x_coordinate = int(coordinates.split(" ")[0])
            y_coordinate = int(coordinates.split(" ")[1])
            if x_coordinate in range(1,4) and y_coordinate in range(1,4):
                invalid_input = False 
        # the position corresponds to the (X - 1) + (Y-1) multiplied by 3 
        position = x_coordinate-1 + (y_coordinate-1) *3
        self.active_player = 1 if self.active_player == 0 else 0
        self.tics[position] = INPUTS[self.active_player]

    def display_board(self):
        """displays the current status of the board"""
        board = f"""{self.tics[0]} | {self.tics[1]} | {self.tics[2]}\n
----------\n
{self.tics[3]} | {self.tics[4]} | {self.tics[5]}\n
----------\n
{self.tics[6]} | {self.tics[7]} | {self.tics[8]}"""
        print(board)
            
    def game_done(self):
        """returns true if the game should end"""
        
        #check vertical equal
        for i in range(3):
            if (self.tics[i] != ' ' 
            and self.tics[i] == self.tics[i+3] 
            and self.tics[i] == self.tics[i+6]):
                self.announce_winner(self.tics[i])
                return True

        #check horizontal
        for i in range(0,3,9):
            if (self.tics[i] != ' ' 
            and self.tics[i] == self.tics[i+1] 
            and self.tics[i] == self.tics[i+2]):
                self.announce_winner(self.tics[i])
                return True

        #check diagonal
        for i in [0,2]:
            n = 6 if i==2 else 8
            if (self.tics[i] != ' '
            and self.tics[i] == self.tics[4]
            and self.tics[i] == self.tics[n]):
                self.announce_winner(self.tics[i])
                return True

        if ' ' not in self.tics:
            print("The game is a draw!")
            return True

    def announce_winner(self, symbol):
        winner = INPUTS.index(symbol)
        print(f"the winner is player {winner}")


