---
layout: post
title: "Python Functions"
sub-title: "Organizing Code with Python Functions and Modules"
tags: ["python", "basics", "functions"]
category: "python-101"
permalink: /workspace/python-101/functions
---

In programming, functions play a crucial role in making our code more organized, efficient, and reusable. These named blocks of code serve as mini-programs, enabling the division of code into smaller, manageable units. This tutorial delves into the concept of functions in Python, illustrating how they contribute to creating modular and reusable code.

## Functions as Equations <hr>

In the scientific context, equations are essential for representing various phenomena and establishing connections between variables. Similarly, functions in programming act as equations, enabling us to define relationships between inputs and outputs.

#### Declaring and Syntax: Defining the Equation

When expressing a relationship mathematically, you often define an equation by assigning variables, specifying mathematical operations, and articulating the relationship between inputs and outputs. In programming, functions mirror this concept, where the function name is declared, parameters (variables) are defined, and code is written to process inputs and produce desired outputs.

#### Parameters and Arguments: Input Values in the Equation

Just as variables act as placeholders for input values in equations, functions in programming use parameters to accept input values. When calling a function, arguments are provided, serving as input values processed by the function's internal logic.

#### Returning Values from Functions: Output of the Equation

Just as equations yield results, functions in programming can generate outputs or return values. After performing calculations or transformations on input data, a function produces a result. This result can be further utilized within the program or serve as a solution to a specific problem, analogous to how an equation's output provides valuable information in the scientific realm.

By treating functions as equations, a scientific mindset can be adopted in code development, with each function representing a distinct relationship or transformation.

## Function Declaration and Syntax <hr>

In Python, functions are defined using the `def` keyword, followed by the function name and a set of parentheses `()`. This section outlines the syntax and provides examples to illustrate the process.

Function Declaration Syntax:

{% highlight python %}
def function_name(parameters):
    # Function body
    # Perform specific tasks
    # Return values if necessary
{% endhighlight %}

Here's an example of a simple function:

{% highlight python %}
# Defining a function
def hello():
    print('Hello!')

# Calling the function
hello()

# Output:
Hello!
{% endhighlight %}

In this example, we define a function named `hello()` that simply prints "Hello!". When we call the function using `hello()`, it executes the code inside the function's body, resulting in the output "Hello!".

#### Key Aspects of a Function

In a function, notice that:

- It starts with the keyword `def`.
- The function name follows the same rules as variable names (see [Python Definitions and Concepts](/workspace/python-101/definitions-and-concepts)).
- Parameters, if any, are specified within parentheses, separated by commas.
- A colon (`:`) at the end of the line is always required.
- The function body consists of indented statements.
- An optional return statement can be used to return values.

#### Function Execution Flow

When a function is called, Python follows a specific flow: it jumps into the invoked function, executes its body, and then returns to the point after the invocation. It's crucial to have functions defined before calling them because Python reads code from top to bottom. Let's explore this with examples.

{% highlight python %}
def my_function():
    print('Hello!')
    print('This is my function.')

my_function()
print('Bye!')

# Output
Hello!
This is my function.
Bye!
{% endhighlight %}

In this example, the function `my_function()` is defined and then called. When called, it executes the body of the function, i.e. prints "Hello!" and "This is my function.". After the function execution, Python moves to the next line, printing "Bye!". The flow is linear, starting from the top.

If the function call (`my_function()`) were placed before the function definition, Python would raise an error, specifically a `NameError: name 'my_function' is not defined`. This is because at the time of the function call, Python hasn't encountered the function definition yet. To avoid such errors, it's important to define functions before calling them.

**Caution: Avoiding Function-Variable Conflicts**: It is advisable to avoid having the same function and variable name. Here's why:

{% highlight python %}
def my_function():
    print('This is my function')

my_function = 1
my_function()

# Output
TypeError: 'int' object is not callable
{% endhighlight %}

Observe that a function named `my_function` is defined, but then its name is assigned the value `1`. When attempting to call `my_function()`, Python raises a `TypeError` because the function name now refers to an integer, not a callable function. This can be resolved by using distinct names for functions and variables to prevent confusion and errors.

**Functions' Placement in Code**: Functions don't need to be placed at the top of the source file. Ensure functions are defined before calling them.

{% highlight python %}
def main_function():
    print('This is the main function')
    first_function()
    print('Bye')

def my_function():
    print('This is my function')

main_function()

# Output
This is the main function
This is my function
Bye
{% endhighlight %}

In this example, `main_function()` calls `my_function()`, and both functions are defined before use, allowing error-free execution.

#### Sources of Functions

Functions in a program can come from three different sources:

- **From Python itself**: Numerous functions, like `print()` or `len()`, are integral parts of Python and are always available as built-in functions.
- **From Python's pre-installed modules**: Many useful functions, though used less often, are available in modules installed with Python. Using these functions requires additional steps.
- **Directly from our code**: We can write our functions, known as user-defined functions, freely within our code.


## Parameters and Arguments <hr>

Functions are powerful tools for performing tasks and operations. To make these functions flexible and adaptable, we use parameters and arguments to control their behavior and input.

A function's parameters are defined within the parentheses of the `def` statement. These parameters act as placeholders for the values the function will work with. When we call a function, we provide actual values, known as arguments, which customize the function's input for that specific invocation.

Consider the following example:

{% highlight python %}
def hello(name):
    print(f'Hello, {name}!')

hello('Alice')
hello('Bob')

# Output
Hello, Alice!
Hello, Bob!
{% endhighlight %}

In this case, the function `hello()` has a parameter `name`, and we customize its behavior by providing different arguments ('Alice' and 'Bob') during function calls.

It's essential to distinguish between parameters and arguments. Parameters are the variables listed in the function definition, while arguments are the values passed to the function during a call. In the example above, `name` is a parameter, and 'Alice' and 'Bob' are arguments.

### Types of Arguments

Python supports various ways of passing arguments to functions, including positional arguments, keyword arguments, and default values.

#### Positional Arguments

When you call a function, Python matches each argument based on their order in the function call. These are called positional arguments.

Here's an example:

{% highlight python %}
def login_data(username, password):
    print(f'Username: {username}')
    print(f'Password: {password}')

login_data('Alice', 'alice123')
print()
login_data('Bob', 'boby1990')

# Output
Username: Alice
Password: alice123

Username: Bob
Password: boby1990
{% endhighlight %}

In this example, we define a function named `login_data()` that takes two parameters: `username` and `password`. When we call the function `login_data()`, we provide a username and a password as arguments, in that order. For example, in the function call `login_data('Alice', 'alice123')`, the argument 'Alice' is assigned to the parameter `username`, and the argument 'alice123' is assigned to the parameter `password`. In the function body, these two parameters are used to display information about the login data being described.

#### Keyword Arguments

Keyword arguments allow passing arguments in any order by associating names with values.

Example:

{% highlight python %}
def login_data(username, password):
    print(f'Username: {username}')
    print(f'Password: {password}')

login_data(username='Alice', password='alice123')
login_data(password='boby1990', username='Bob')
{% endhighlight %}

In this case, the order of the arguments doesn't matter because Python knows which parameter each argument should be matched with. Using keyword arguments can make your function calls more readable and less prone to errors, especially when dealing with functions that have multiple parameters.

#### Default Arguments

Default values for parameters make certain arguments optional. They provide a way to reduce complexity by assigning a default value if an argument is not provided.

We specify a default argument in the def statement, following the parameter name and an equal (`=`) sign. Here's an example:

{% highlight python %}
def login_data(username='guest', password='guest123'):
    print(f'Username: {username}')
    print(f'Password: {password}')

login_data()
login_data(username='Alice')
login_data(password='boby1990')
{% endhighlight %}

In this example, the `login_data()` function has default values assigned to the parameters `username` and `password`. If no arguments are provided, default values are used. However, arguments can still override these defaults.

**Note**: When using default values, parameters without defaults should precede those with defaults in the function definition.

When calling a function, it's crucial to provide the correct number of arguments and match them to the corresponding parameters. Python raises errors when there are unmatched arguments.

Example:

{% highlight python %}
def hello(name, greeting='Hello'):
    print(f'{greeting}, {name}!')

hello('Alice')
hello(''Bob, 'Hi')

# Output
Hello, Alice!
Hi, Bob!
{% endhighlight %}

The `hello()` function can be called with one or two arguments. If the number of arguments doesn't match the function definition, Python raises a `TypeError`.

##### Making an Argument Optional with Default Values

Default values for function parameters enable the creation of optional arguments. Users can choose whether or not to provide these arguments, enhancing the flexibility of function calls. Here's an example:

{% highlight python %}
def hello(first_name, last_name, middle_name=''):
    if middle_name:
        name = f'Hello, {first_name} {middle_name} {last_name}!'
    else:
        name = f'Hello, {first_name} {last_name}!'

    return name

person_1 = hello('Alice', 'Lee')
person_2 = hello('Bob', 'Junior', 'Marley')

print(person_1)
print(person_2)

# Output
Hello, Alice Lee!
Hello, Bob Junior Marley!
{% endhighlight %}

In this example, the `hello()` function has an optional `middle_name` parameter with an empty string as its default value. This allows users to decide whether to include a middle name in the full name greeting.

### Passing an Arbitrary Number of Arguments

For situations where the number of arguments is unknown, Python allows defining functions with a variable number of arguments using `*args` and `**kwargs`.

#### Arbitrary Positional Arguments - `*args`

The `*args` notation allows the function to accept any number of positional arguments, collecting them into a tuple.

Here's an example of a function that takes in an arbitrary number of numbers and calculates their average:

{% highlight python %}
def calculate_average(*args):
    total = sum(args)
    average = total / len(args)
    return average

print(calculate_average(1, 2, 3))
print(calculate_average(2, 4, 6, 8))

# Output
2.0
5.0
{% endhighlight %}

In this example, the `calculate_average()` function accepts any number of arguments and stores them in the `args` tuple.

#### Arbitrary Keyword Arguments - `**kwargs`

The `**kwargs` notation allows the function to accept any number of keyword arguments, collecting them into a dictionary.

Here's an example of a function that takes in arbitrary keyword arguments representing key-value pairs:

{% highlight python %}
def display_info(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}: {value}')

display_info(name='Alice', age=25, city='London')

# Output

name: Alice
age: 25
city: London
{% endhighlight %}

In this example, the `display_info()` function accepts any number of keyword arguments and stores them in the `kwargs` dictionary. The function iterates over the dictionary and prints each key-value pair.

## Returning Values from Functions <hr>

In Python, functions not only execute actions but can also produce results through the use of the `return` keyword. When a `return` statement is encountered, it immediately terminates the function's execution and sends a value back to the point of invocation. While not mandatory, a function not intended to produce a result will implicitly return `None` at the end.

### The `return` Statement

The `return` statement allows functions to explicitly specify a value to be returned. It consists of the `return` keyword followed by the value or expression that the function should return. This return value can be any valid Python object or expression.

Here's an example:

{% highlight python %}
def add_numbers(a, b):
    sum_nums = a + b
    return sum_nums

result = add_numbers(3, 5)
print(result)

# Output
8
{% endhighlight %}

In this example, the `add_numbers()` function returns the sum of two parameters using the `return` statement.

Returned values can be assigned to variables or used directly in expressions, allowing for further utilization within the program. This enhances code modularity and reusability. In the above `add_numbers()` function, the function returns the sum of the two parameters, `a` and `b`, which is then assigned to the variable `result` and printed.

### The `None` Value

In Python, `None` represents the absence of a value. It is the return value of functions that don't explicitly return anything. Functions like `print()` return `None`, signifying no specific output. The `None` value is a special constant and the only value of the `NoneType` data type.

Example:

{% highlight python %}
def hello(name):
    print(f'Hello, {name}!')

result = hello('Alice')
print(result)

# Output
Hello, Alice!
None
{% endhighlight %}

In this example, the `hello()` function prints a greeting but returns `None`. Python automatically adds a `return None` statement to functions without an explicit return.

## Variable Scope

In programming, variable scope refers to the region of the code where a variable is defined, and its visibility or accessibility from different parts of the program. Understanding variable scope is crucial for writing reliable and maintainable code, as it determines where a variable can be accessed or modified.

### Levels of Scoping in Python

Python follows the LEGB rule for variable scoping, which stands for Local, Enclosing Function, Global, and Built-ins. These levels are searched in order to resolve the reference to a variable. Here's a brief overview:

- **Local (L)**: Variables defined within a function are considered local. They are only accessible within the function and cease to exist after the function execution.
- **Enclosing Function (E)**: This refers to the scope of an enclosing function if a function is nested within another function. The inner function has access to its variables as well as those of the outer function.
- **Global (G)**: Variables defined at the top level of a script or module are global. They are accessible throughout the entire module or script.
- **Built-ins (B)**: This is the outermost scope and includes Python's built-in names like `print`, `len`, and `str`. These names are always accessible from anywhere in the code.

Here are examples of various scopes:

**Local** Variable:

{% highlight python %}
def example_function():
    x = 10  # Local variable
    print(x)

example_function()
print(x)

# Output
10
NameError: name 'x' is not defined
{% endhighlight %}

**Global** Variable:

{% highlight python %}
global_variable = 20  # Global variable

def another_function():
    print(global_variable)

another_function()  

# Output
20
{% endhighlight %}

Changing Global Variable from Within a Function:

{% highlight python %}
global_variable = 20  # Global variable

def modify_global():
    global global_variable
    global_variable = 30

modify_global()
print(global_variable) 

# Output
30
{% endhighlight %}

**Enclosing Function** Scope:

{% highlight python %}
def outer_function():
    outer_variable = 'I am from outer'

    def inner_function():
        print(outer_variable)

    inner_function()

outer_function()  

# Output
I am from outer
{% endhighlight %}

**Nonlocal** Keyword:

{% highlight python %}
def outer_function():
    x = 10

    def inner_function():
        nonlocal x
        x = 20

    inner_function()
    print(x)

outer_function()

# Output
20
{% endhighlight %}

In the last example, the `nonlocal` keyword is used to indicate that the variable `x` being modified is in the enclosing scope, not a local variable in the inner function. This is particularly useful when dealing with nested functions and you want to modify a variable in an enclosing (but non-global) scope.

## Documenting Functions <hr>

In Python, documenting functions is a good practice to enhance code readability and provide valuable information about the purpose and usage of a function. This is commonly done using a docstring, which is a string literal placed as the first statement in a function.

### Using Docstrings

A docstring is delimited by three single or double quotes (''' or """) and is placed immediately after the function definition. It serves as a concise yet informative description of what the function does, what parameters it expects, and what it returns.

Example:

{% highlight python %}
def hello(name):
    '''Print a greeting to the user by name.'''
    print(f'Hello, {name}!')
{% endhighlight %}

In this example, the docstring for the `hello()` function provides a clear description: "Print a greeting to the user by name." This documentation is valuable for anyone reading or using the code, as it offers insights into the function's purpose.

### Accessing Docstrings

Python provides a built-in function called `help()` that can be used to access the docstring of a function interactively. Simply pass the function name as an argument to `help()`.

Here's an example for accessing the above `hello()` function:

{% highlight python %}
>>> help(hello)
Help on function hello in module __main__:

hello(name)
    Print a greeting to the user by name.
{% endhighlight %}

Executing `help(greet)` in an interactive Python environment would display the docstring for the `hello()` function.

### Writing Comprehensive Docstrings

For more complex functions or functions with multiple parameters, it's beneficial to provide detailed information in the docstring. Include explanations of each parameter, their data types, and any default values. Additionally, specify the type of value the function returns.

Example:

{% highlight python %}
def calculate_average(*numbers):
    '''
    Calculate the average of a list of numbers.

    Parameters:
    * numbers (float): A variable number of numerical values.

    Returns:
    float: The average of the input numbers.
    '''
    total = sum_nums(numbers)
    average = total / len(numbers)
    return average
{% endhighlight %}

In this example, the docstring for the `calculate_average()` function not only describes its purpose but also details the expected parameter and return types.

By consistently documenting functions using docstrings, developers can create more maintainable and understandable code, facilitating collaboration and reducing the learning curve for others who interact with the codebase.

### Third-Party Modules: Expanding Python's Capabilities

While the Python Standard Library is extensive, there are countless third-party modules available that can further enhance the capabilities of Python. In another blog article, we'll introduce the concept of third-party modules and guide you through the process of installing them. We'll also explore popular third-party modules like `requests`, `BeautifulSoup`, and `numpy`, showcasing their unique functionalities and demonstrating how they can be utilized in your Python code.

By covering these additional topics, you'll gain a deeper understanding of modules in Python and how they can be leveraged to create more robust and feature-rich applications. Stay tuned for the upcoming articles where we'll delve into these exciting topics!

In the meantime, if you have any specific questions or topics you'd like to explore further, feel free to let us know. Happy coding!


## Practical Applications and Use Cases <hr>

Understanding Python functions is essential for writing flexible and maintainable code. Here are practical applications and use cases for mastering Python functions:

- **Code Reusability and Modularity**: When building large-scale applications, you often need to encapsulate functionality within functions. Functions enable you to encapsulate a block of code that performs a specific task. This promotes code reuse and modularity, making it easier to maintain and update your codebase.

{% highlight python %}
def calculate_discount(price):
    discount_rate = 0.1  # Local variable
    discounted_price = price - (price * discount_rate)
    return discounted_price

print(calculate_discount(100))
{% endhighlight %}

Variable scoping allows you to create local variables within functions, preventing unintended interference with other parts of the program.

- **Data Processing and Analysis**: Functions are crucial for processing and analyzing data. You can create functions to encapsulate algorithms, making data manipulation more readable and manageable.

{% highlight python %}
def average(numbers):
    '''Calculate the average of a list of numbers.'''
    return sum(numbers) / len(numbers)

data = [10, 15, 20, 25, 30]
print(average(data))
{% endhighlight %}

- **Web Development: Backend Logic**: In web development, functions handle backend logic, processing user requests, interacting with databases, and generating dynamic content.

{% highlight python %}
def get_user_data(user_id):
    '''Retrieve user data from the database.'''
    # Database query logic here
    return user_data

user_id = 123
user_info = get_user_data(user_id)
{% endhighlight %}

- **Automation Scripts**: Functions are the building blocks of automation scripts. They allow you to structure your code to perform specific tasks, making automation more efficient.

{% highlight python %}
def backup_files(source_folder, destination):
    '''Copy files from source to destination for backup.'''
    # Copy files logic here

source_folder = "/path/to/data"
backup_location = "/path/to/backup"
backup_files(source_folder, backup_location)
{% endhighlight %}

- **Machine Learning and Data Science**: Functions play a vital role in machine learning pipelines and data science workflows. They encapsulate data preprocessing steps, model training, and evaluation.

{% highlight python %}
def train_model(training_data):
    '''Train a machine learning model.'''
    # Model training logic here
    return trained_model

data = load_data('dataset.csv')
model = train_model(data)
{% endhighlight %}

- **GUI Applications: Event Handling**: In graphical user interface (GUI) applications, functions handle events like button clicks or menu selections. They provide the logic for what should happen in response to user actions.

{% highlight python %}
def button_click_handler():
    '''Handle button click event.'''
    # Button click logic here

create_button('Click me', on_click=button_click_handler)
{% endhighlight %}

- **Game Development: Game Logic**: Functions are employed to define game logic, such as character movement, collision detection, and scoring. They contribute to organizing complex game systems.

{% highlight python %}
def check_collision(player, obstacles):
    '''Check for collisions between the player and obstacles.'''
    # Collision detection logic here
    return collided

player_position = (x, y)
obstacles = load_obstacles()
if check_collision(player_position, obstacles):
    game_over()
{% endhighlight %}

### More Examples

Feel free to browse my <a href="https://github.com/joj-macho" target="_new">GitHub page</a> for more comprehensive programs.

Discover more programs that use functions in my <a href="https://github.com/joj-macho/Pythological-Playground" target="_new">Python Playground</a> repository. For a broader range of programs, you can explore my <a href="https://github.com/joj-macho?tab=repositories" target="_new">GitHub Repositories</a>.

## Summary <hr>

Well done! You now have a solid understanding of Python functions, the fundamental units of code organization. Functions allow you to decompose intricate tasks into more manageable components. You've gained proficiency in creating, invoking, and passing data to functions, a crucial skill for crafting well-structured and reusable code. As you progress in your Python journey, the next step involves exploring [Python File Handling](/workspace/python-101/file-handling) to engage with external data seamlessly.