class Car:
    def __init__(self):
        self.speed = 0
        self.isMoving = False
        self.lightLevel = 2
        self.target = 5

    def setSpeed(self, newSpeed):
        self.speed = newSpeed
        if self.speed != 0:
            self.isMoving = True
        else: 
            self.isMoving = False

    def stopCar(self):
        if self.speed == 0: 
            pass
        else: 
            self.speed = 0
            self.isMoving = False 
    def gradual_stop(self):
        while self.speed != 0:
            if self.speed > 0:
                self.speed = self.speed -1
            elif self.speed < 0:  
                self.speed = self.speed + 1
        self.isMoving = False;  
    def tuneLightLevel(self,target):
        while self.lightLevel != self.target: 
            if self.lightLevel > self.target: 
                self.lightLevel = self.lightLevel-1
            else: 
                self.lightLevel = self.lightLevel+1
        
        
       
    def isBright(self):
        if self.lightLevel >= 10:
            return True
        else:
            return False
    def honk(self, n):
        n = 10 
        for n in range(n):
            print("honk")



    def __str__(self):
        return "speed: " + str(self.speed) + " isMoving: " + str(self.isMoving)


green_car = Car()

print(green_car)

green_car.setSpeed(5)
print(green_car)

green_car.setSpeed(0)
print(green_car)

for i in range(10):
    print("Hello")

for i in range(1,16): 
    if i % 3 == 0 and i % 2 == 0:   
        print(i,"divisible by 2 and 3")
    elif i % 3 == 0: 
        print(i,"divisible by 3")
    elif i % 2 == 0: 
        print(i,"divisible by 2")
# number = int(input("type in the number to check if it is prime!"))
# prime = False
# def isPrime (n):
#     if number > 1: 
#         for i in range(2, number):
#             if (number % i) == 0:
#                 prime = True
#                 break

# if prime == True:
#     print("this is not a prime number")
# else:
#     print("this is a prime number")


def isPrime (n): 
    if n > 1:
       for i in range(2, n):
           if (n % i) == 0:
               return False
       else:
           return True
    return False

print(isPrime(573))

lower = 0
upper = 500

print("Prime numbers between", lower, "and", upper, "are:")

def prime_range (lower, upper):
    prime = []
    for num in range(lower, upper + 1):
        if isPrime(num) == True:
            prime.append(num)
    return prime

print(prime_range (0, 500)) 

def f (id):
    if id == 0:
        return 1
    if id == 1:
        return 1
    if id > 1:
        return f(id-2) + f(id-1)
        
print(f(22))


# a.append
# a.pop
# en(a)

# numbers in the grid, 2d array, 0 as black 1-9 actual value, 
# def move(self, row, column, value): 
    # function to check if the movement is valid
    # if move = true: return True
    # if not return False
# all cells are filled with 1-9 at the end, check for zero. 
# solving the problem: 


  
    