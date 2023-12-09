---
layout: post
title: "Python Definitions and Concepts"
sub-title: "A Beginner's Guide to Python Variables, Constants, Statements, and Expressions"
tags: ["python", "basics"]
category: "python"
permalink: /workspace/python/definitions-and-concepts
---

Now that you have set up your programming environment and taken your first step into the world of programming, it's time to dive deeper into the fundamental concepts of Python. Understanding variables, constants, statements, and expressions is crucial for any beginner learning Python programming. These elements serve as the building blocks for storing and manipulating data, allowing you to control the flow of a program and write efficient code.

## Variables and Identifiers in Python

---

In Python, a variable is a reserved memory location used to store values. It acts as a reference or pointer to an object in memory, encapsulating both data and the functions operating on that data. Everything in Python is an object, with each object having an identity, type, and value. While an object's identity and type remain constant, its value can be changed.

When writing Python code, you commonly use variables to store values. To create a variable, you employ an assignment statement that assigns a value to a variable name. For instance, creating a variable named "x" and assigning it the value 42 allows you to refer to the stored value using the name "x."

Identifiers are labels assigned to variables to refer to them by name. They act as names for variables, aiding in distinguishing and accessing them in your code. Identifiers are essential for clarity and readability in your code.

Here's an example demonstrating the creation and use of variables:

{% highlight python %}
>>> x = 42
>>> print(x)
42
{% endhighlight %}

In this example, "x" is a variable assigned the value 42. The `print(x)` statement outputs the value stored in the variable.

Python provides the built-in `id()` function to view an object's identity (memory address). For example:

{% highlight python %}
>>> x = 42
>>> id(x)
139645154335304
{% endhighlight %}

The `id(x)` function returns a unique number representing the memory address of the object referenced by the variable "x".

Variables in Python are references, allowing multiple variables to point to the same object. This behavior is known as aliasing. For instance:

{% highlight python %}
>>> x = 42
>>> y = x
>>> id(x) == id(y)
True
{% endhighlight %}

In this example, both "x" and "y" reference the same object, as indicated by their identical identities.

### Assigning Variables

Assigning a value to a variable, known as binding in Python, is a fundamental concept. This process involves associating a variable name with a value, and it can be accomplished using various methods.

#### Using Expressions

Expressions can be directly assigned to variables. For example:

{% highlight python %}
>>> x = 4 + 2
>>> print(x)
6
{% endhighlight %}

In this example, the expression `4 + 2` is assigned to the variable "x," and the subsequent `print(x)` statement outputs the value of "x," which is 6.

#### Operator Overloading

Python supports operator overloading, allowing operators to work differently with different data types. For instance, the `+` operator can add numbers or concatenate strings:

{% highlight python %}
>>> first_name = 'John'
>>> last_name = 'Smith'
>>> full_name = first_name + ' ' + last_name
>>> print(full_name)
John Smith
{% endhighlight %}

Here, the `+` operator is used for string concatenation. The variable "full_name" is assigned the combined value of "first_name" and "last_name" with a space in between.

#### Using Functions

Functions, even those not covered yet, can be used in assignment statements. For instance, utilizing the built-in `len()` function:

{% highlight python %}
>>> text = 'Hello, World!'
>>> length = len(text)
>>> print(length)
13
{% endhighlight %}

In this example, the length of the string "Hello, World!" is assigned to the variable "length" using the `len()` function.

#### Chained Assignment and Internment

Chained assignment allows you to assign the same value to multiple variables in a single line:

{% highlight python %}
>>> a = b = c = 10
>>> print(a, b, c)
10 10 10
{% endhighlight %}

Here, the values are simultaneously assigned to variables "a," "b," and "c."

Internment is a memory optimization technique where Python reuses memory addresses for certain values. For example:

{% highlight python %}
>>> a = b = c = 10
>>> print(a, b, c)
10 10 10
{% endhighlight %}

{% highlight python %}
>>> x = 10
>>> y = 10
>>> z = 10
>>> print(id(x), id(y), id(z)) 
140249467557448 140249467557448 140249467557448
{% endhighlight %}

In this case, Python internally interns the integer value 10, assigning the same memory address to all three variables.

### Naming Variables

Readability is crucial in programming, and well-chosen variable names contribute significantly to code understanding. Adhering to a set of rules and conventions while naming variables in Python enhances both clarity and consistency across your codebase.

There are three main rules for naming variables:

 1. Variables can only contain letters, numbers, or underscores (_).
 2. The first character must be a letter or an underscore, not a number.
 3. The name cannot be a reserved keyword.

Additional Considerations

- Variables should avoid spaces, using underscores to separate words.
- Special characters like "!, @, #, $, %" are not allowed.
- Python keywords and function names should be avoided.

Adhering to these rules ensures error-free code. Beyond rules, adopting common naming conventions, as outlined in <a href="https://peps.python.org/pep-0008/" target="_blank">PEP-8</a>, further improves code readability:

- Use lowercase letters for variable names.
- Separate words in variable names with underscores.
- All caps can be used for constant values (e.g., "PI" or "MAX_VALUE").
- Class names should follow CamelCase.

Let's explore examples of good and bad variable names:

**Good Variable Names**:

{% highlight python %}
num_students = 30
student_name = 'John'
total_score = 100
user_age = 25
max_attempts = 3
{% endhighlight %}

In the examples above, the variable names are descriptive and meaningful, providing clear information about the data they hold.

**Bad Variable Names**:

{% highlight python %}
ts = 100  # Not descriptive
ua = 25  # Not clear
x = 3  # Lacks context
{% endhighlight %}

In the examples above, the variable names are generic and not informative. They lack clarity and make it difficult to understand the purpose of the variables.

By using meaningful and descriptive variable names, such as "num_students" and "student_name," you provide context and improve the readability of your code. This becomes especially important when working with others, as they can quickly understand the purpose of each variable.

#### Reserved Words in Python

Python reserves certain keywords for its internal operations, and these keywords cannot be used as variable names or identifiers in your code.

Below is a list of reserved keywords in Python:

{% highlight python %}
>>> import keyword
>>> print(keyword.kwlist)
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
>>>
{% endhighlight %}

Attempting to use any of these reserved words as variable names will result in a syntax error. For example:

{% highlight python %}
>>> import = 42
Traceback (most recent call last):
  File "/home/joj-macho/Documents/variables.py", line 1
    import = 42
           ^
SyntaxError: invalid syntax
{% endhighlight %}

While you don't need to memorize all keywords, Python will flag a SyntaxError if you inadvertently use one. Choose meaningful and descriptive variable names to avoid conflicts and ensure code functionality.

Beyond keywords, it's also advisable to avoid using names of Python's built-in functions like `print()` or `len()` as variable names. Although it's technically allowed, doing so can lead to confusion. For instance:

{% highlight python %}
>>> id = 42
>>> print(id)
42
{% endhighlight %}

Using built-in function names as variables may cause unexpected behavior, as demonstrated when attempting to use the `id()` function:

{% highlight python %}
>>> x = 4
>>> id(x)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not callable
{% endhighlight %}

Exercise caution when naming variables to prevent accidental clashes with reserved words or built-in functions. If necessary, appending an underscore or a meaningful descriptor after the underscore, such as `max_` or `class_`, can help avoid conflicts.

#### Constants in Python

Constants represent values that remain unchanged throughout a program's execution. Although Python doesn't enforce true constants, variables assigned values that should never change can be treated as such. To indicate a constant, it's a convention to use all-uppercase letters for the variable name, emphasizing that the value remains constant. Here's an example of defining constants:

{% highlight python %}
SPEED_OF_LIGHT = 299_792_458  # m/s
PLANCK_CONSTANT = 6.62607015 * 10**(-34)  # J·s
GRAVITATIONAL_CONSTANT = 9.81 # m/s^2
BOLTZMANN_CONSTANT = 1.380649 * 10**(-23) # J/K
INTEREST_RATE = 0.05
DOLLAR_SYMBOL = '$'
MEAN_VALUE = 10
STANDARD_DEVIATION = 2.5
{% endhighlight %}  

These constants play a crucial role in fields like physics, engineering, finance, and statistics, where maintaining fixed values is essential for accurate calculations. It's important to note that while using all caps is a convention for constants, Python does not restrict the modification of these variables. Therefore, it's the responsibility of the programmer to treat them as constants and avoid overwriting.

Python also provides built-in constants like `True`, `False`, and `None`, which are primarily used for Boolean operations. Additionally, the `math` module in Python offers several mathematical constants, such as `pi`, `tau`, infinity (`inf`), and NaN (`nan`):

{% highlight python %}
>>> import math
>>> print(math.pi)
3.141592653589793
>>> print(math.e)
2.718281828459045
>>> print(math.tau)
6.283185307179586
>>> print(math.inf)
inf
>>> print(math.nan)
nan
>>>
{% endhighlight %}

These constants from the `math` module are useful for various mathematical calculations.

## Python Comments and Docstrings

---

Python is renowned for its code readability, yet to enhance collaboration and self-reminder, you'll need comments and docstrings. Comments, initiated with `#`, annotate code for human understanding, while docstrings, triple-quoted strings at the beginning of modules, functions, classes, or methods, serve as documentation.

### Comments

Comments explain code, provide insights, and can be single-line, inline, or multi-line.

#### Single-Line Comments

Single-line comments start with the `#` character and provide brief explanations or notes about the code. They are useful for adding context and enhancing code comprehension.

{% highlight python %}
# This is a single-line comment
x = 42
{% endhighlight %}

Single-line comments summarize the following code.

{% highlight python %}
# Check if x is greater than 10
if x > 10:
    print('x is greater than 10')
{% endhighlight %}

#### Inline Comments

Inline comments are at the end of a statement, adding clarifications. Use sparingly and maintain a separation of at least two spaces.

{% highlight python %}
x = speed_of_light  # speed_of_light in m/s
{% endhighlight %}

#### Multi-Line Comments

Comments that span multiple lines are known as multiline comments or block comments. Python does not have an official syntax for multiline comments. One way to handle them is to treat them as a series of single-line comments beginning with hash marks, as follows:

{% highlight python %}
# This is a multiline comment.
# It spans multiple lines.
# Useful for longer explanations or documentation.
{% endhighlight %}

Alternatively, multi-line comments can be created using triple quotes (`'''` or `"""`) to allow for longer explanations or documentation. They are useful for providing more extensive context and detailed information about the code.

{% highlight python %}
'''
This is a multi-line comment.
It can span multiple lines.
Useful for longer explanations or documentation.
'''
{% endhighlight %}

Strive to strike a balance when commenting—provide enough detail to aid understanding without over-explaining or repeating information unnecessarily.

### Docstrings

Docstrings, triple-quoted strings at the beginning of entities, act as documentation.

{% highlight python %}
'''
This is a docstring.
It provides more extensive explanations.
'''
{% endhighlight %}

{% highlight python %}
def example_function():
    '''
    This is a docstring for the example_function.
    It can include details about parameters, return values, etc.
    '''
    print('Example function')
{% endhighlight %}

Access docstrings with the `__doc__` attribute:

{% highlight python %}
>>> print(example_function.__doc__)
    This is a docstring for the example_function.
    It can include details about parameters, return values, etc.
{% endhighlight %}

Follow <a href="https://www.python.org/dev/peps/pep-0257/" target="_blank">PEP-257</a> for docstring conventions in larger projects. Docstrings are crucial for understanding modules, classes, methods, and functions, and should be kept updated with code changes.

## Python Statements and Expressions

---

In Python, statements and expressions are fundamental components that make up the code. They play a crucial role in controlling the flow of a program and calculating values.

### Statements

A statement in Python is a complete unit of code that performs a specific action. Statements can include assignment statements, conditional statements, loop statements, and more. Unlike expressions, statements do not necessarily return a value.

#### Assignment Statements

Assignment statements are used to assign values to variables. The basic syntax is:

{% highlight python %}
variable = expression
{% endhighlight %}

Here's an example:

{% highlight python %}
x = 42
{% endhighlight %}

In this example, the value `42` is assigned to the variable `x`.

#### Conditional Statements

Conditional statements, such as the `if` statement, allow the program to make decisions based on certain conditions. The syntax is:

{% highlight python %}
if condition:
    # code to execute when the condition is True
else:
    # code to execute when the condition is False
{% endhighlight %}

Example:

{% highlight python %}
if x > 0:
    print('x is positive')
else:
    print('x is non-positive')
{% endhighlight %}

In this example, the program checks if the variable `x` is greater than 0. If the condition is true, it executes the first print statement; otherwise, it executes the second print statement.

#### Loop Statements

Loop statements, like `for` and `while` loops, allow the execution of a block of code multiple times. Here's an example using a `for` loop:

{% highlight python %}
fruits = ['apple', 'banana', 'orange']

for fruit in fruits:
    print(fruit)
{% endhighlight %}

This loop iterates over each element in the `fruits` list.

Statements are run sequentially. The computer does not look ahead.

### Expressions

An expression is a piece of code that produces a value. Unlike statements, expressions are often composed of variables, literals, and operators. Expressions can be part of statements but can also stand alone.

#### Arithmetic Expressions

Arithmetic expressions involve mathematical operations. Examples include addition, subtraction, multiplication, and division.

{% highlight python %}
result = 10 + 5 * 2
{% endhighlight %}

In this example, the expression `10 + 5 * 2` evaluates to `20`.

#### Comparison Expressions

Comparison expressions compare values and return a Boolean result. Examples include equality (`==`), inequality (`!=`), greater than (`>`), and less than (`<`).

{% highlight python %}
is_equal = (3 * 4) == (5 + 7)
{% endhighlight %}

Here, `is_equal` is `True` because the expressions on both sides are equal.

#### Logical Expressions

Logical expressions involve Boolean operators like `and`, `or`, and `not`. They combine multiple conditions.

{% highlight python %}
logical_result = (x > 0) and (y < 10)
{% endhighlight %}

In this example, `logical_result` is `True` if both conditions are satisfied.

### Elements of Flow Statements

Flow control statements in Python consist of conditions and code blocks, making them powerful tools for directing program execution.

#### Conditions

The Boolean expressions you've seen so far could all be considered conditions, which are the same thing as expressions; condition is just a more specific name in the context of flow control statements. Conditions always evaluate down to a Boolean value, `True` or `False`. A flow control statement decides what to do based on whether its condition is True or False, and almost every flow control statement uses a condition.

#### Blocks of Code (Clause)

Blocks of code are sections of Python code grouped together. Indentation determines the beginning and end of a block. An increase in indentation marks the start of a block, which may contain nested blocks. Blocks conclude when indentation returns to zero or the containing block's level.

#### Control Flow Statements

Control flow statements allow you to control the execution of your program based on conditions or repetitions. Common control flow statements in Python include:

- **If statement:** Executes a block of code if a specified condition is true.
- **Else statement:** Executes a block of code if the preceding if statement condition is false.
- **Elif statement:** Sequentially checks multiple conditions.
- **While loop:** Repeats a block of code as long as a given condition is true.
- **For loop:** Executes a block of code for each item in an iterable.
- **Break statement:** Prematurely terminates a loop.
- **Continue statement:** Skips the rest of the loop and advances to the next iteration.

Using control flow statements gives you the power to make decisions, iterate over collections, and create more dynamic and interactive programs.

Control Flow Statements are explored further in [Python Control Flow](/workspace/python/control-flow) later in this tutorial series.

## Data Types and Operators in Python

---

Python, a dynamically typed language, supports various data types crucial for working with variables and expressions. Key data types include:

- **Numeric types:** Integers (`int`), floating-point numbers (`float`), and complex numbers (`complex`).
- **Boolean type:** Represents truth values (`True` and `False`).
- **Strings:** Sequences of characters enclosed in single quotes (`''`) or double quotes (`""`).
- **Lists:** Ordered collections of items enclosed in square brackets (`[]`).
- **Tuples:** Similar to lists but immutable, enclosed in parentheses (`()`).
- **Dictionaries:** Key-value pairs enclosed in curly braces (`{}`).

Detailed explanations of data types are provided in subsequent sections of this series: [Numeric Data Types](/workspace/python/numbers), [Lists & Tuples Data Types](/workspace/python/lists-and-tuples), [String Data Types](/workspace/python/strings), and [Dictionary Data Types](/workspace/python/dictionaries).

Operators, symbols, or keywords in Python perform operations on values or variables. A variety of operators are available, including:

- **Arithmetic operators:** Perform basic mathematical operations (e.g., addition, subtraction, multiplication, division, modulus).
- **Comparison operators:** Compare values and yield Boolean results (e.g., equal to, not equal to, greater than, less than).
- **Logical operators:** Combine Boolean values (e.g., "and," "or," "not").
- **Assignment operators:** Assign values to variables (e.g., `=`, `+=`, `-=`).
- **Membership operators:** Test if a value is part of a sequence (e.g., "in," "not in").
- **Identity operators:** Compare the identity of two objects (`is`, `is not`).

Understanding and using operators allows you to perform calculations, make comparisons, and control the flow of your program effectively.

## Putting It All Together: A Practical Example

---

Imagine you are a data analyst working for a social media company, and you have been tasked with analyzing user engagement on the platform. To do this, you need to calculate the number of likes, comments, and shares for each post. You could use Python expressions to extract this data from the platform's database and store it in variables. You could also use comments to explain how you arrived at each value, making it easier for others to understand your code.

In this scenario, you'll calculate and analyze the user engagement metrics for a week's worth of social media posts

{% highlight python %}
# Constants (representing post data from a database)
# Let's assume you have data for a week's worth of posts
LIKES_PER_POST = [150, 120, 200, 85, 210, 180, 250]
COMMENTS_PER_POST = [45, 30, 60, 15, 75, 60, 90]
SHARES_PER_POST = [30, 20, 45, 10, 50, 40, 60]

# Calculate user engagement metrics for the entire week
total_likes = sum(LIKES_PER_POST)
total_comments = sum(COMMENTS_PER_POST)
total_shares = sum(SHARES_PER_POST)
total_engagement = total_likes + total_comments + total_shares

# Calculate the average engagement per post
total_posts = len(LIKES_PER_POST)
average_likes = total_likes / total_posts
average_comments = total_comments / total_posts
average_shares = total_shares / total_posts

# Output the results
print('User Engagement Metrics for the Week:')
print(f'Total Likes: {total_likes}')
print(f'Total Comments: {total_comments}')
print(f'Total Shares: {total_shares}')
print(f'Total Engagement: {total_engagement}')
print(f'Average Likes Per Post: {average_likes:.2f}')
print(f'Average Comments Per Post: {average_comments:.2f}')
print(f'Average Shares Per Post: {average_shares:.2f}')
{% endhighlight %}

In this the example above, we have lists of likes, comments, and shares for each post for an entire week. We calculate the total likes, comments, and shares for the week and then calculate the average engagement metrics per post. This provides a practical illustration of how Python can be used to analyze user engagement data on a social media platform. 

This is just one example of how Python can be used to solve real-world problems. You can find more programs that implement variables, constants, statements, and expressions in my <a href="https://github.com/joj-macho/Pythological-Playground" target="_blank">Python Playground Repository</a> on GitHub.

## Summary

---

Variables, constants, statements, and expressions, and comments are fundamental concepts in Python that every programmer must understand. By using these concepts effectively, you can write better code and solve real-world problems. These definitions and concepts will equip you with the tools to write dynamic and engaging Python code, by mastering these concepts, you can breathe life into your programs, making them vibrant, expressive, and effective.

Next in the Python Programming 101 series is [Understanding Python Data Structures: Numeric Data Types](/workspace/python/numbers) where we'll dive into understanding the characteristics and functionalities of numeric data types in Python.