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

lst= [1,5,7,12,-3,1,65,-8,8,3,6,45,1,75,18,6,64,27, -2, -3,-45,-14,-6,-7,6,6,4,4,2,1,1]
def max(lst):
    current_max_number = lst[0]
    for i in range(1,len(lst)):
        if i > current_max_number:
            current_max_number = i
    return i 
print(i)

def max(lst):
    current_min_number = lst[0]
    for j in range(1,len(lst)):
        if j < current_min_number:
            current_min_number = i
    return i 
print(i)
above = []
def largerThan(lst, threshold):
    threshold = 0#value of the threshold
    for k in range(1, len(lst)):
        if k > threshold:
            above.append(k)
    return above
print(largerThan)
below = []
def smallerThan(lst, threshold):
    threshold = 0#value of the threshold
    for l in range(1, len(lst)):
        if l < threshold:
            below.append(l)
    return below
print(below)
def countOccerance(lst, n):
    count = 0
    for element in lst:
        if (element == n):
            count = count + 1
    return count
print("count occurence", countOccerance(lst,4))

def findDuplicate(lst):
    more_than_one =[]
    for i in lst:
        if (countOccerance(lst,i) > 1) and ((i in more_than_one) == False):
            more_than_one.append(i)
            
    return more_than_one
print(findDuplicate(lst))
factors = []
def print_factors(x):
   print("The factors of",x,"are:")
   for i in range(1, x + 1):
       if x % i == 0:
           print(i)

num = 320

print_factors(num)

def largerThan(lst,T_Hold):
    pass
def smallerThan(lst,T_Hold):
    pass
def countOccurance(lst, n):
    pass

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

def factorial(n):
    factoria = 1
    for i in range(1, n+1):
        factoria = factoria*i
    return "the factorial of " + str(n) + " is " + str(factoria)
print(factorial(5))
  
# def Fn():
#     F(n) = F(n-1) + 2*F(n-2) - F(n-3)
# i was not able to figure out this one, would we be able to discuss about this code a little bit in class?

def factorial(n):
    if n == 0:
        return 1
    return factorial(n-1) * n