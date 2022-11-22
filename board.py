# numbers in the grid, 2d array, 0 as black 1-9 actual value,
# def move(self, row, column, value):
# function to check if the movement is valid
# if move = true: return True
# if not return False
# all cells are filled with 1-9 at the end, check for zero.
# solving the problem:
# __init, show, check value restriction, move,
# how to solve sudoku
# create the board for sudoku
SudokuRange = range(9)
class board:
    def __init__(self):
        self.making_board()

    def making_board(self):
        self.board = []
        for i in SudokuRange:
            self.board.append([0, 0, 0, 0, 0, 0, 0, 0, 0])

    def __str__(self):
        j = ""
        for x in SudokuRange:
            j = j + str(self.board[x]) + '\n'
        return j

    def make_move(self, row, column, value):
        self.board[row][column] = value

    def value_restriction(self, row1, column, value):  # return boolean
        row2 = range(3)
        col = range(3)
        for i in SudokuRange:
            if self.board[i][column] == value and i != row1:
                return False
            if self.board[row1][i] == value and i != column:
                return False
        row_offset = (row1 // 3) * 3
        column_offset = (column // 3) * 3
        for r in row2:
            for c in col:
                if (self.board[r + row_offset][c + column_offset] == value and (r + row_offset) != row1
                        and (c + column_offset) != column):
                    return False
        return True
    # from left to right and top to bottom, find the first occurence of zero and return the coordinates of zero 
    def getNextEmptySpace(self):
        for r in SudokuRange:
            for c in SudokuRange:
                if self.board[r][c] == 0: 
                    return r,c
    def isFilled(self):
        for r in SudokuRange:
            for c in SudokuRange:
                if self.board[r][c] == 0:
                    return False
        return True
    # assume every cell is filled in with non zero. Check if every cells obey the rule of sudoku. 
    def solved_correct(self):
        for r in SudokuRange:
            for c in SudokuRange: 
                if self.value_restriction(r,c,self.board[r][c]) == False:
                    return False
        return True
    def returnboard(self):
        return self.board
    def solution(self): 
        def rec():
            while self.isFilled() == False:
                Row, Column = self.getNextEmptySpace()
                for i in range(1,10):
                    if self.value_restriction(Row, Column, i) == True:
                        self.make_move(Row, Column, i)
                        success = rec()
                        if success == True:
                            return True
                        else:
                            self.make_move(Row, Column, 0)
                return False
            return True
        rec()
        if self.solved_correct() == True:
            return True
        else:
            return False

                        

    # check row, column, and the box for the restrictions
    # 0 = blank, 1-9 = some input
    # find corner, add 1 and add 2 to find the corners of the box

    # test
    # def make_move(self):
    #    ask1 = input("Row: ")
    #    ask2 = input("Column ")
    #    value = input("value")
    #    a1 = int(ask1)
    #    a2 = int (ask2)
    #    v1 = int (value)
    #    self.b[a1][a2] = v1


board_1 = board()
board_1.making_board()
# board_1.set_value(0,0,5)
board_1.make_move(1, 0, 6)
board_1.make_move(2, 0, 1)
board_1.make_move(0, 1, 3)
board_1.make_move(1, 1, 7)
board_1.make_move(2, 1, 9)
board_1.make_move(0, 2, 4)
board_1.make_move(1, 2, 2)
board_1.make_move(2, 2, 7)
board_1.solution()
print(board_1)
print(board_1.value_restriction(0, 0, 7))
print(board_1)