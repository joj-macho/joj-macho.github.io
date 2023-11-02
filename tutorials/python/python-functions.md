---
layout: post
title: "Python Functions"
sub-title: "Organizing Code with Python Functions and Modules"
tags: "python basics functions"
category: "python-101"
permalink: /workspace/python-101/functions
---

In programming, functions play a crucial role in making our code more organized, efficient, and reusable. Functions are named blocks of code that perform specific tasks. They allow us to encapsulate functionality and call it whenever needed, reducing code duplication and improving code readability. In this tutorial, we will explore the concept of functions in Python and learn how to write reusable code using functions.


## Functions as Equations <hr>

In the scientific context, equations are essential for representing various phenomena and establishing connections between variables. Similarly, functions in programming act as equations, enabling us to define relationships between inputs and outputs.

#### Declaring and Syntax: Defining the Equation

When scientists seek to express a relationship mathematically, they begin by defining an equation. Variables are assigned, mathematical operations are specified, and the relationship between inputs and outputs is articulated. In programming, functions can be seen as equations, where the function name is declared, parameters (variables) are defined, and the code is written to determine how inputs are processed to produce desired outputs.

#### Parameters and Arguments: Input Values in the Equation

In equations, variables act as placeholders for input values, allowing scientists to substitute different values to observe corresponding outcomes. Similarly, functions in programming utilize parameters to accept input values. When calling a function, we provide arguments that correspond to the parameters. These arguments serve as input values, which the function processes based on its internal logic.

#### Returning Values from Functions: Output of the Equation

Just as equations yield results, functions in programming can generate outputs or return values. After performing calculations or transformations on input data, a function produces a result. This result can be further utilized within the program or serve as a solution to a specific problem, analogous to how an equation's output provides valuable information in the scientific realm.

By treating functions as equations, we can adopt a scientific mindset in our code development process. Each function represents a distinct relationship or transformation, allowing us to input different values and observe the corresponding outputs.


## Function Declaration and Syntax <hr>

In Python, functions are defined using the `def` keyword, followed by the function name and a set of parentheses `()`. Parameters can be specified within the parentheses, and functions can return values if necessary. Employing functions enables us to break down intricate tasks into manageable units, fostering code modularity and maintainability.
When creating a function, we utilize the `def` keyword followed by the function name and a set of parentheses. The parentheses can hold parameters (optional) that allow us to pass information to the function. The function body consists of indented code that specifies the tasks to be performed. Functions can also return values, providing the result of their computations to the program.
The syntax for defining a function is as follows:

{% highlight python %}
def function_name(parameters):
    # Function body
    # Perform specific tasks
    # Return values if necessary
{% endhighlight %}

Here's an example:

{% highlight python %}
def hello():
    print("Hello!")

hello()
{% endhighlight %}

In this example, we define a function named `hello()` that simply prints "Hello!". When we call the function using `hello()`, it executes the code inside the function's body, resulting in the output "Hello!".

In general, functions appear in a program from three different sources:

- From Python itself – Numerous functions (like `print()`) are an integral part of Python and are always available without any additional effort; we call these functions built-in functions.
- From Python's preinstalled modules – A lot of functions, very useful ones, but used significantly less often than built-in ones, are available in a number of modules installed together with Python; using these functions requires some additional steps to make them fully accessible.
- Directly from our code – We can write our own functions, place them inside the code, and use them freely. These functions are known as user-defined functions.

In a function, notice that:

- It always starts with the keyword `def` (for "define").
- After `def`, the name of the function is written (the rules for naming functions are exactly the same as for naming variables).
- Next to the function name, a pair of parentheses `()` is placed. Inside the parentheses, input parameters are written (optional). It is possible to have a function with no input parameters. If more than one parameter is passed, they are separated by a comma.
- The line ends with a colon, which is always required.
- The body of the function consists of one or more statements. All those statements inside the body of the function are indented. Any statement that is not indented will not be part of the function.
- At last, there is an optional return statement.

When a function is called, Python remembers the place where it happened and jumps into the invoked function. The body of the function is then executed, and once reaching the end of the function, Python returns to the place directly after the point of invocation. It is important not to call a function that is not known at the moment of invocation because Python reads the code from top to bottom. It will not look ahead to find a function to put in the right place.

Example

{% highlight python %}
def first_function():
    print("My first function")
    print("Start...")

first_function()
print("End...")
{% endhighlight %}

Here, the driver code consists of a single line, `first_function()`, which is written below the function definition. It means to call the function or invoke it. It executes what is inside the function definition.

Observe that the error we are getting is `NameError: name 'first_function' is not defined`. It means we have not defined the function before calling it.

It is advisable to avoid having the same function and variable name.

{% highlight python %}
first_function = 1
first_function()
def first_function():
    print("My first function")
{% endhighlight %}

Observe that we have assigned a value to a variable named `first_function`, which causes Python to forget its previous role of being a function. When we assigned `first_function = 1`, it is treated as a variable, so the function named `first_function()` becomes unavailable. Apart from that, while calling a function name, there is always a pair of parentheses to invoke a function.

We are free to mix our code with functions. It means it is not necessary to put all our functions at the top of the source file. But one thing to remember is to define the function before calling it. Example:

{% highlight python %}
def main_function():
    print("Start...")
    first_function()
    print("End...")

def first_function():
    print("My first function")

main_function()

# Output
Start...
My first function
End...
{% endhighlight %}

In this example, we define a `main_function()` that calls `first_function()` to execute some code. Both functions are defined before they are used, allowing the code to execute without errors. The output will be:

### Parameters and Arguments: Customizing the Input

In Python, functions can accept parameters as placeholders for input values. By providing arguments when calling a function, we can customize the input for each function call. This allows functions to handle different data and perform specific actions based on the provided values.

#### Understanding Parameters and Arguments

Let's consider a simple example:

{% highlight python %}
def hello(name):
    print("Hello, " + name + "!")

hello("Alice")
hello("Bob")
{% endhighlight %}

In this example, we define a function named `hello()` with a parameter `name`. The function takes the provided `name` argument and incorporates it into the greeting message. By calling the function with different arguments, such as "Alice" and "Bob", we can customize the output and address different individuals.

The variable `name` in the function definition of `hello()` is an example of a parameter, which represents a piece of information the function needs to do its job. The value 'Alice' in the function call `hello("Alice")` is an example of an argument. An argument is a piece of information that’s passed from a function call to a function. When we call the function, we place the value we want the function to work with in parentheses. In this case, the argument 'Alice' was passed to the function `hello()`, and the value was assigned to the parameter `name`.

#### Passing Arguments

Because a function definition can have multiple parameters, a function call may need multiple arguments. You can pass arguments to your functions in a number of ways. Let's look at positional arguments, keyword arguments, and default values.

##### Positional Arguments

When you call a function, Python matches each argument in the function call with a parameter in the function definition based on their order. Values matched up this way are called positional arguments.

To see how this works, let's consider an example where we define a function to display information about your login data:

{% highlight python %}
def login_data(username, password):
    print("Username:", username)
    print("Password:", password)

login_data('Alice', 'alice123')
login_data('Bob', 'bobypass')
{% endhighlight %}

In this example, we define a function named `login_data()` that takes two parameters: `username` and `password`. When we call the function `login_data()`, we provide a username and a password as arguments, in that order. For example, in the function call `login_data('Alice', 'alice123')`, the argument 'Alice' is assigned to the parameter `username`, and the argument 'alice123' is assigned to the parameter `password`. In the function body, these two parameters are used to display information about the login data being described.

##### Keyword Arguments

A keyword argument is a name-value pair that you pass to a function. You directly associate the name and the value within the argument, which allows you to pass arguments in any order.

Let's rewrite the login_data() example using keyword arguments:

{% highlight python %}
def login_data(username, password):
    print("Username:", username)
    print("Password:", password)

login_data(username='Alice', password='alice123')
login_data(password='bobypass', username='Bob')
{% endhighlight %}

In this case, the order of the arguments doesn't matter because Python knows which parameter each argument should be matched with. Using keyword arguments can make your function calls more readable and less prone to errors, especially when dealing with functions that have multiple parameters.

##### Default Values

When writing a function, you can define default values for parameters. If an argument for a parameter is not provided in the function call, Python uses the parameter's default value. This allows you to make certain arguments optional.

Let's update the login_data() example to include default values for the parameters:

{% highlight python %}
def login_data(username='guest', password='guest123'):
    print("Username:", username)
    print("Password:", password)

login_data()
login_data(username='Alice')
login_data(password='bobypass')
{% endhighlight %}

In this example, the `login_data()` function has default values assigned to the parameters `username` and `password`. If no arguments are provided when calling the function, it will use the default values. However, you can still customize the input by providing different arguments. For instance, the function call `login_data(username='Alice')` overrides the default value for `username` with 'Alice'.

When using default values, it's important to note that any parameters with default values should be listed after the parameters without default values in the function definition. This allows Python to correctly interpret positional arguments.

##### Avoiding Argument Errors

When calling a function, it's crucial to provide the correct number of arguments and match them to the corresponding parameters in the function definition. Python helps us by raising errors when there are unmatched arguments.

For example, if we try to call the `login_data()` function without providing the required arguments, Python will raise a `TypeError`:

{% highlight python %}
login_data()
# Output
{% endhighlight %}

The error message will indicate that the function is missing the required positional arguments: 'username' and 'password'.<br>To avoid argument errors, make sure to provide the correct number of arguments and ensure they match the parameters defined in the function.

#### Passing an Arbitrary Number of Arguments

Sometimes you won't know beforehand how many arguments a function needs to accept. In such cases, you can define a function with a variable number of arguments using `*args` and `**kwargs` notation.

##### `*args` - Arbitrary Positional Arguments

The `*args` parameter allows a function to accept an arbitrary number of positional arguments. It collects the arguments into a tuple, which can then be accessed within the function.

Here's an example of a function that takes in an arbitrary number of numbers and calculates their average:

{% highlight python %}
def calculate_average(*args):
    total = sum(args)
    average = total / len(args)
    return average

result = calculate_average(2, 4, 6, 8)
print(result)

# Output
{% endhighlight %}

In this example, the `calculate_average()` function accepts any number of arguments and stores them in the `args` tuple. The function calculates the sum of the arguments and divides it by the number of arguments to find the average. Finally, the average is returned and printed.

##### `**kwargs` - Arbitrary Keyword Arguments

The `**kwargs` parameter allows a function to accept an arbitrary number of keyword arguments. It collects the arguments into a dictionary, which can then be accessed within the function.

Here's an example of a function that takes in arbitrary keyword arguments representing key-value pairs:

{% highlight python %}
def display_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

display_info(name='Alice', age=25, city='London')

# Output
{% endhighlight %}

In this example, the `display_info()` function accepts any number of keyword arguments and stores them in the `kwargs` dictionary. The function iterates over the dictionary and prints each key-value pair.

### Returning Values from Functions: Communicating Results

In Python, functions not only perform actions but can also produce results. This is achieved by using the `return` keyword. When a `return` statement is encountered inside a function, it causes the immediate termination of the function's execution and returns a value to the point of invocation. If a function is not intended to produce a result, the `return` statement is not mandatory, as it will be executed implicitly at the end of the function.

The `return` statement in Python allows functions to explicitly specify a value to be returned. It consists of the `return` keyword followed by the value or expression that the function should return. The return value can be any valid Python object or expression.

Here's an example that demonstrates the use of the `return` statement:

Let’s look at a function that takes a first and last name, and returns a neatly formatted full name:

{% highlight python %}
def add_numbers(a, b):
    sum = a + b
    return sum

result = add_numbers(3, 5)
print(result)

# Output
{% endhighlight %}

In this example, the `add_numbers()` function takes two parameters, `a` and `b`, and returns their sum using the `return` statement. When the function is called with arguments `3` and `5`, the return value is assigned to the variable `result` and then printed, which outputs `8`.

#### Utilizing Returned Values

When a function returns a value, it can be assigned to a variable or used directly in expressions. By capturing the return value, we can utilize it further within our program. Here's an updated example of a function that takes a first and last name, and returns a neatly formatted full name:

{% highlight python %}
def get_formatted_name(first_name, last_name):
    full_name = f"{first_name} {last_name}"
    return full_name.title()

musician = get_formatted_name('Alice', 'Smith')
print(musician)
{% endhighlight %}

In this example, the `get_formatted_name()` function concatenates the `first_name` and `last_name`, adds a space between them, and assigns the result to `full_name`. The `return` statement is used to communicate the formatted full name as the return value. When the function is called with the arguments `'Alice'` and `'Smith'`, the return value is assigned to the variable `musician` and then printed, resulting in the output: `Alice Smith`.

By returning values from functions, we can encapsulate complex operations and calculations, making our code more modular and reusable.

#### The None Value: Representing Absence of Value

In Python, the `None` value represents the absence of a value. It is a special constant and the only value of the `NoneType` data type. The `None` value can be useful when we need to store something that won't be confused for a real value in a variable.
One common use of `None` is as the return value of functions that don't explicitly return anything, such as the `print()` function. Although `print()` displays text on the screen, it doesn't need to return anything, so it returns `None`.

Here's an example demonstrating the use of `None` as the return value of a function:

{% highlight python %}
def greet(name):
    print(f"Hello, {name}!")

result = greet("Alice")
print(result)
{% endhighlight %}

In this example, the `greet()` function prints a greeting message to the console but doesn't return a value. When the function is called with the argument `"Alice"`, it prints `Hello, Alice!`. However, when we assign the return value of `greet("Alice")` to the variable `result` and print it, we get `None`.

Behind the scenes, Python adds a `return None` statement to the end of any function definition without an explicit `return` statement. This ensures that all function calls have a return value.

#### Making an Argument Optional with Default Values

Sometimes it's useful to make an argument optional, allowing users of the function to choose whether or not to provide that argument. Python allows us to do this by using default values for function parameters.

Here's an example that demonstrates how to make an argument optional using default values:

{% highlight python %}
def get_formatted_name(first_name, last_name, middle_name=''):
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title()

musician1 = get_formatted_name('Alice', 'Smith')
musician2 = get_formatted_name('Bob', 'Johnson', 'Lee')

print(musician1)
print(musician2)


# Output
{% endhighlight %}

In this example, the `get_formatted_name()` function accepts three parameters: `first_name`, `last_name`, and `middle_name`. The `middle_name` parameter is assigned an empty string as its default value, making it optional.

Inside the function, an `if` statement checks whether a middle name was provided. If a middle name is present, the full name is formatted as `'first_name middle_name last_name'`. Otherwise, the full name is formatted as `'first_name last_name'`. The `title()` method is used to capitalize the names properly.

When the function is called with different arguments, it behaves accordingly. In the first function call, only the first name and last name are provided, resulting in `'Alice Smith'`. In the second function call, all three names are provided, resulting in `'Bob Lee Johnson'`.

By making arguments optional, functions become more flexible and can handle a wider range of use cases while still allowing for simple function calls.

### Organizing Code with Modules

In addition to using functions to separate blocks of code, Python provides modules as a way to organize code even further. Modules are separate files ending in `.py` that contain code that can be imported and used in other programs. By storing related functions in modules, you can create reusable code, hide implementation details, and focus on higher-level program logic. In this article, we'll explore the benefits of using modules and how to create, import, and use them effectively.

#### Introduction to Modules: Enhancing Code Organization and Reusability

Modules play a crucial role in organizing code and promoting code reusability. By separating functions into individual modules, you can easily manage and maintain your codebase. Here are some benefits of using modules:

- **Code Organization**: Modules allow you to group related functions together, making it easier to locate and manage code.
- **Code Reusability**: Functions stored in modules can be reused in multiple programs, saving time and effort.
- **Encapsulation**: Modules hide implementation details and provide a clean interface to other programs, making code easier to understand and use.
- **Collaboration**: Modules can be shared with other programmers, enabling collaborative development.

#### Creating and Importing Modules: Making Code Available

To create a module, you need to create a separate file with a `.py` extension that contains the code you want to import. Let's create an example module called `pizza.py` that defines a function `make_pizza()`:

{% highlight python %}
def make_pizza(size, *toppings):
    """Summarize the pizza we are about to make."""
    print(f"\nMaking a {size}-inch pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")
{% endhighlight %}

Now, let's create another file called `making_pizzas.py` in the same directory as `pizza.py` to demonstrate how to import and use the module:

{% highlight python %}
import pizza

pizza.make_pizza(16, 'pepperoni')
pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')

# Output
{% endhighlight %}

In this example, we import the `pizza` module using the `import` statement. The `import` statement tells Python to open the `pizza.py` file and make all the functions defined in it available in the current program. We can then call the `make_pizza()` function using the dot notation (`pizza.make_pizza()`).

#### Exploring the Structure of a Module: Accessing Functions and Attributes

Once a module is imported, we can access its functions and attributes. Let's examine the structure of the `pizza` module and how to access its functions:

{% highlight python %}
import pizza

dir(pizza)
{% endhighlight %}

The `dir()` function allows us to explore the contents of a module. It returns a list of all functions, classes, and attributes defined in the module. Running `dir(pizza)` will show us all the available functions and attributes in the `pizza` module.
We can access a specific function or attribute in the module using the dot notation. For example, to access the `make_pizza()` function, we use `pizza.make_pizza()`.

#### Using the Main Module and Conditional Execution: Running Code selectively

In Python, the special variable `__name__` is automatically set to `'__main__'` for the module that is executed as the main program. This allows us to distinguish between a module being imported by another program and the module being run directly.

By utilizing the `__name__` variable, we can include code in the module that will only run when the module is executed as the main program. This is useful when we want certain code to run only when the module is run directly and not when it's imported.

Let's modify the `pizza.py` module to include a conditional block:

{% highlight python %}
def make_pizza(size, *toppings):
    """Summarize the pizza we are about to make."""
    print(f"\nMaking a {size}-inch pizza with the following toppings:")
    for topping in toppings:
        print(f"- {topping}")

if __name__ == "__main__":
    make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
{% endhighlight %}

In this example, the `make_pizza()` function remains the same. However, we add a conditional block that checks if the `__name__` variable is set to `'__main__'`. If it is, it means the module is being run directly, so we call the `make_pizza()` function with some specific arguments.

When running the `pizza.py` module directly, the code inside the conditional block will execute. However, if the module is imported into another program, the conditional block will not run. This allows us to selectively execute code based on whether the module is run directly or imported.

#### Importing Specific Functions

You can also import specific functions from a module. This approach allows you to selectively import only the functions you need. Here's the general syntax for importing specific functions:
<pre>`from module_name import function_name`</pre>

If you have multiple functions to import, you can separate their names with commas:

{% highlight python %}
from module_name import function_0, function_1, function_2
{% endhighlight %}

For example, if we want to import just the `make_pizza()` function from the `pizza` module, we can use the following code:

{% highlight python %}
from pizza import make_pizza
make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
{% endhighlight %}

With this syntax, you don't need to use the dot notation when calling the function. Since we've explicitly imported the `make_pizza()` function in the import statement, we can call it by name (`make_pizza()`) when using the function.

#### Using `as` to Give a Module an Alias

Sometimes, you may want to provide an alias for a function to avoid conflicts with existing names or to create a shorter name. You can use the `as` keyword to assign an alias to a function during the import process. Here's an example:

{% highlight python %}
from pizza import make_pizza as mp
mp(16, 'pepperoni')
mp(12, 'mushrooms', 'green peppers', 'extra cheese')
{% endhighlight %}

In this case, the import statement renames the `make_pizza()` function to `mp()` in the current program file. By using `mp()`, we can call the function instead of `make_pizza()`. This avoids confusion if there are other functions with similar names in the program file. The general syntax for providing an alias is:
<pre>`from module_name import function_name as fn`</pre>

You can also assign an alias to a module name. Giving a module a short alias allows you to call its functions more quickly. Here's an example:

{% highlight python %}
import pizza as p
p.make_pizza(16, 'pepperoni')
p.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
{% endhighlight %}

In this case, the `pizza` module is imported with the alias `p`. All the functions in the module retain their original names, but we can use the shorter `p.make_pizza()` syntax to call the functions. This allows us to focus on the descriptive function names rather than the module name. The general syntax for aliasing a module is:

{% highlight python %}
import module_name as mn
{% endhighlight %}

#### Importing All Functions in a Module

If you want to import every function in a module, you can use the asterisk (`*`) operator. However, it's generally not recommended to use this approach with larger modules that you didn't write. Using `*` can lead to unexpected results if the module has function names that conflict with existing names in your project. To import all functions from a module, you can use the following syntax:

{% highlight python %}
from pizza import *
make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
{% endhighlight %}

The `*` in the import statement copies every function from the `pizza` module into the current program file. You can then call each function by name without using the dot notation. However, it's best practice to import the specific functions you need or import the entire module and use the dot notation. This approach ensures clear and readable code. It's important to be aware of the potential conflicts that may arise when using the `*` operator.
<pre>`from module_name import *`</pre>

### Future Topics: Exploring More Python Modules

In future blog articles, we'll explore more Python modules, including an overview of commonly used modules in the Python Standard Library and an introduction to third-party modules. Stay tuned for these exciting topics that will further enhance your Python skills and expand the capabilities of your programs!

In addition to the basics of organizing code with modules, there are several other aspects of Python modules that we haven't covered in this article. To delve deeper into the world of modules and expand your Python skills, consider exploring the following topics in future blog articles:

#### Overview of commonly used modules in the Python Standard Library

The Python Standard Library provides a vast collection of modules that offer a wide range of functionality. In a separate article, we'll provide an overview of some commonly used modules and demonstrate their capabilities. This will include exploring modules such as `math`, `datetime`, and `random`, which offer powerful features for mathematical computations, date and time manipulation, and generating random values.

#### Third-Party Modules: Expanding Python's Capabilities

While the Python Standard Library is extensive, there are countless third-party modules available that can further enhance the capabilities of Python. In another blog article, we'll introduce the concept of third-party modules and guide you through the process of installing them. We'll also explore popular third-party modules like `requests`, `BeautifulSoup`, and `numpy`, showcasing their unique functionalities and demonstrating how they can be utilized in your Python code.

By covering these additional topics, you'll gain a deeper understanding of modules in Python and how they can be leveraged to create more robust and feature-rich applications. Stay tuned for the upcoming articles where we'll delve into these exciting topics!

In the meantime, if you have any specific questions or topics you'd like to explore further, feel free to let us know. Happy coding!


### Summary

Well done! You've grasped the concept of Python functions. Functions are the building blocks of code, allowing you to break complex tasks into manageable pieces. You've learned how to create, call, and pass data to functions. This skill is vital for writing organized and reusable code. Your journey into Python continues with [Python File Handling](/workspace/python-101/file-handling), working with external data.