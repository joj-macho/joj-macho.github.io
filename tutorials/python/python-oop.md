---
layout: post
title: "Object-Oriented Programming in Python"
sub-title: "Introduction to Python's Class-Based Paradigm"
tags: ["python", "basics"]
category: "python"
permalink: /workspace/python/python-oop
---

Object-Oriented Programming (OOP) is a paradigm that enables developers to model real-world entities and their interactions. In Python, OOP is a powerful tool for organizing and structuring code. This tutorial will introduce you to the core concepts of OOP in Python and guide you through creating and using classes and objects.

Object-Oriented Programming (OOP) is a programming paradigm that uses objects—instances of classes—to structure code. Python is an object-oriented language, and understanding OOP principles is essential for writing efficient and modular code.

### Classes and Objects

In OOP, a class is a blueprint for creating objects. Objects have attributes (characteristics) and methods (functions) associated with them. Let's create a simple class to understand the concept:

{% highlight python %}
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")

# Creating an instance of the Car class
my_car = Car("Toyota", "Camry", 2022)

# Accessing attributes and calling methods
print(my_car.make)  # Output: Toyota
my_car.display_info()  # Output: 2022 Toyota Camry
{% endhighlight %}

- The `Car` class has attributes (`make`, `model`, `year`) and a method (`display_info`).
- The `__init__` method is a special method called the constructor, which initializes the object's attributes.
- `self` refers to the instance of the class. It allows you to access the instance's attributes and methods.

### Inheritance

Inheritance is a mechanism in OOP that allows a class (subclass/derived class) to inherit attributes and methods from another class (superclass/base class). It promotes code reusability. Let's illustrate inheritance:

{% highlight python %}
class ElectricCar(Car):
    def __init__(self, make, model, year, battery_capacity):
        # Calling the constructor of the superclass
        super().__init__(make, model, year)
        self.battery_capacity = battery_capacity

    def display_battery_info(self):
        print(f"Battery Capacity: {self.battery_capacity} kWh")

# Creating an instance of the ElectricCar class
my_electric_car = ElectricCar("Tesla", "Model S", 2022, 100)

# Inherited attributes and methods
my_electric_car.display_info()  # Output: 2022 Tesla Model S
my_electric_car.display_battery_info()  # Output: Battery Capacity: 100 kWh
{% endhighlight %}


- The `ElectricCar` class inherits from the `Car` class, gaining access to its attributes and methods.
- The `super()` function is used to call a method from the superclass.

### Encapsulation

Encapsulation involves bundling the data (attributes) and methods that operate on the data within a single unit (a class). It helps in hiding the implementation details. Let's see an example:

{% highlight python %}
class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder
        self.__balance = balance  # Private attribute

    def get_balance(self):
        return self.__balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited ${amount}. New balance: ${self.__balance}")
        else:
            print("Invalid deposit amount.")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.__balance}")
        else:
            print("Invalid withdrawal amount or insufficient funds.")

# Creating an instance of the BankAccount class
my_account = BankAccount("John Doe", 1000)

# Accessing public methods
print(my_account.get_balance())  # Output: 1000
my_account.deposit(500)  # Output: Deposited $500. New balance: $1500
my_account.withdraw(200)  # Output: Withdrew $200. New balance: $1300
{% endhighlight %}

- The `__balance` attribute is private, accessible only within the class.
- External access to private attributes is provided through public methods (`get_balance`, `deposit`, `withdraw`).

### Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common base class. It enables flexibility in code. Let's demonstrate polymorphism with a simple example:

{% highlight python %}
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius**2

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side**2

# Function demonstrating polymorphism
def print_area(shape):
    print(f"Area: {shape.area()}")

# Creating instances of Circle and Square
my_circle = Circle(5)
my_square = Square(4)

# Calling the print_area function with different objects
print_area(my_circle)  # Output: Area: 78.5
print_area(my_square)  # Output: Area: 16
{% endhighlight %}

- The `Shape` class defines a common interface with a method `area`.
- The `Circle` and `Square` classes inherit from `Shape` and provide their implementations of `area`.
- The `print_area` function demonstrates polymorphism by accepting different shapes.


## Practical Applications and Use Cases <hr>

Object-Oriented Programming (OOP) is a versatile paradigm with practical applications across various domains. Here are some common use cases where OOP principles shine:

### Software Design and Architecture

OOP provides a powerful framework for designing software systems. By organizing code into classes and objects, developers can model real-world entities, relationships, and behaviors. This facilitates a more intuitive and scalable software architecture.

**Example:**

{% highlight python %}
class Customer:
    def __init__(self, name, email):
        self.name = name
        self.email = email

class Order:
    def __init__(self, order_id, products, customer):
        self.order_id = order_id
        self.products = products
        self.customer = customer
{% endhighlight %}

### Graphical User Interface (GUI) Development

Building graphical applications often involves creating interactive elements with various behaviors. OOP is well-suited for GUI development, allowing developers to represent GUI components as objects with associated methods.

**Example:**

{% highlight python %}
import tkinter as tk

class GUIApplication:
    def __init__(self, master):
        self.master = master
        master.title("OOP GUI Example")

        self.label = tk.Label(master, text="Hello, OOP!")
        self.label.pack()

        self.button = tk.Button(master, text="Click me", command=self.handle_click)
        self.button.pack()

    def handle_click(self):
        self.label.config(text="Button clicked!")

root = tk.Tk()
app = GUIApplication(root)
root.mainloop()
{% endhighlight %}

### Game Development

In game development, OOP is widely used to model game entities, behaviors, and interactions. Game objects can be represented as classes, allowing for a clean and organized code structure.

**Example:**

{% highlight python %}
class Player:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def take_damage(self, damage):
        self.health -= damage
        if self.health <= 0:
            print(f"{self.name} has been defeated!")

class Enemy:
    def __init__(self, name, damage):
        self.name = name
        self.damage = damage

    def attack(self, player):
        print(f"{self.name} attacks {player.name} for {self.damage} damage.")
        player.take_damage(self.damage)
{% endhighlight %}

### Database Interaction

When working with databases, OOP principles can be applied to create models for database entities. Each entity (such as a table in a relational database) can be represented as a class, simplifying data manipulation and retrieval.

**Example:**

{% highlight python %}
import sqlite3

class Employee:
    def __init__(self, employee_id, name, position):
        self.employee_id = employee_id
        self.name = name
        self.position = position

# Connecting to a SQLite database
conn = sqlite3.connect("company.db")
cursor = conn.cursor()

# Creating a table for employees
cursor.execute('''
    CREATE TABLE IF NOT EXISTS employees (
        employee_id INTEGER PRIMARY KEY,
        name TEXT,
        position TEXT
    )
''')

# Inserting an employee record
new_employee = Employee(employee_id=1, name="John Doe", position="Software Engineer")
cursor.execute('''
    INSERT INTO employees (employee_id, name, position)
    VALUES (?, ?, ?)
''', (new_employee.employee_id, new_employee.name, new_employee.position))

# Committing changes and closing the connection
conn.commit()
conn.close()
{% endhighlight %}

### Simulation and Modeling

OOP is valuable in simulation and modeling scenarios, where entities, their attributes, and interactions need to be simulated. Classes can represent different elements in the simulation, making the code more expressive and maintainable.

**Example:**

{% highlight python %}
class Particle:
    def __init__(self, mass, velocity):
        self.mass = mass
        self.velocity = velocity

    def collide(self, other_particle):
        # Code to handle particle collision
        pass

# Simulating a particle system
particle1 = Particle(mass=2, velocity=10)
particle2 = Particle(mass=3, velocity=-8)

# Handling a collision between particles
particle1.collide(particle2)
{% endhighlight %}

These practical applications demonstrate the versatility of OOP in solving complex problems and organizing code in a way that aligns with real-world entities and interactions. As you delve into OOP, consider applying these principles in various domains to enhance code readability, maintainability, and scalability.

### More Examples
Advanced Python programming concepts like object-oriented programming (OOP) and modularization are showcased in programs like [bank manager](https://github.com/Pythological-Playground/bank-manager) (OOP) and [python-scripts](https://github.com/Pythological-Playground/) (modularization).

## Summary <hr>

Congratulations! You've delved into the world of Object-Oriented Programming in Python, gaining the skills to design scalable and organized code. Understanding concepts such as classes, inheritance, encapsulation, and polymorphism equips you to build robust and modular applications.

As you progress in your Python journey, the next step involves exploring [Python Decorators](/workspace/python/decorators) to add powerful functionality to your functions in an elegant and reusable way. Decorators are a key feature in Python, providing a concise syntax for enhancing the behavior of functions. Dive into the world of decorators to take your Python coding to the next level!