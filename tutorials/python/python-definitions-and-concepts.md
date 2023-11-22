---
layout: post
title: "Python Definitions and Concepts"
sub-title: "A Beginner's Guide to Python Variables, Constants, Statements, and Expressions"
tags: ["python", "basics"]
category: "python-101"
permalink: /workspace/python-101/definitions-and-concepts
---

Now that you have set up your programming environment and taken your first step into the world of programming, it's time to dive deeper into the fundamental concepts of Python. Understanding variables, constants, statements, and expressions is crucial for any beginner learning Python programming. Variables and constants are like the building blocks for storing and manipulating data, while statements and expressions are essential for controlling the flow of a program. With a solid grasp of these fundamental concepts, you can start building more complex programs and write efficient code that brings your ideas to life.

## Variables and Identifiers in Python <hr>

When writing code in Python, it's common to need a way to store values. This is where variables come into play. Variables act as containers that hold information, such as numbers or text. To create a variable, you use an assignment statement that assigns a value to a variable name. For example, you can create a variable called "num_students" and assign it the value 30. By using the name "num_students" in your code, you can refer to the value 30 stored in that variable.

Identifiers, on the other hand, are like labels that you give to variables to refer to them by name. An identifier is not the variable itself, but rather a name that helps you refer to the variable. Identifiers are used to distinguish and access variables in your code. When naming variables and identifiers, it's important to follow specific rules and conventions to ensure clarity and readability.

### Naming Variables and Identifiers

When naming variables and identifiers in Python, it's crucial to adhere to a set of rules and conventions. By following these guidelines, <a href="https://peps.python.org/pep-0008/" target="_new">PEP-8</a>, you can prevent errors and make your code more readable. Additionally, adopting standard naming conventions used in the Python community helps create a consistent style and improves code comprehension. Consider the following naming rules:

- Variable names should only contain letters, numbers, and underscores.
- They should start with a letter or an underscore, but never with a number.
- Spaces are not allowed in variable names, but you can use underscores to separate words in variable names.
- Variable names should not include special characters such as "!, @, #, $, %," etc.
- Avoid using Python keywords and function names as variable names. For example, don't use the word "print" as a variable name.

Following these rules ensures that your code is error-free and more readable. However, there are also widely used naming conventions in the Python community:

- Use lowercase letters for variable names.
- Use underscores to separate words in variable names, rather than spaces.
- Use all caps for constant values, such as "PI" or "MAX_VALUE".
- Use CamelCase for class names.

By adhering to these naming conventions, you can make your code more readable and understandable, especially when collaborating with others. Let's look at some examples of good and bad variable names:

Good variable names:

{% highlight python %}
num_students = 30
student_name = 'John'
total_marks = 95.5
is_passed = True
{% endhighlight %}

In the examples above, the variable names are descriptive and meaningful, providing clear information about the data they hold.

Bad variable names:

{% highlight python %}
x = 30
a = 'John'
y = 95.5
z = True
{% endhighlight %}

In the examples above, the variable names are generic and not informative. They lack clarity and make it difficult to understand the purpose of the variables.

By using meaningful and descriptive variable names, such as "num_students" and "student_name," you provide context and improve the readability of your code. This becomes especially important when working with others, as they can quickly understand the purpose of each variable.

### Reserved Words in Python

Note that certain names in Python are reserved and cannot be used as variable names. These reserved words are keywords that have specific meanings and functionalities within the Python language. If you try to use these reserved words as variable names, you will encounter syntax errors.

You can obtain a complete list of reserved words by using the following code:
{% highlight python %}
>>> import keyword
>>> print(keyword.kwlist)
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
>>>
{% endhighlight %}

It is important to avoid using these reserved words as variable names to prevent conflicts and ensure the proper functioning of your code. Instead, choose meaningful and descriptive names that reflect the purpose of your variables.

### Constants in Python

Constants are values that remain unchanged during the execution of a program. Although Python doesn't have true constants, variables assigned values that never change can be treated as constants.

#### Built-in Constants

Python provides built-in constants like `True`, `False`, and `None`, which are used for Boolean operations. The `math` module in Python also provides additional useful mathematical constants such as pi, tau, and Euler's number.

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

#### User-Defined Constants

In various fields like physics, engineering, finance, and statistics, constants play a crucial role in calculations. In Python, you can define your own constants using uppercase letters to distinguish them from regular variables.

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

## Python Comments <hr>

Comments are invaluable for documenting and explaining your code. They provide insights into the purpose, functionality, and logic of your program. In Python, comments begin with the hash sign, `#`, character and continue until the end of the line. While the computer ignores comments during program execution, they greatly assist human readers in understanding and maintaining the code.

### Single-Line Comments

Single-line comments start with the `#` character and provide brief explanations or notes about the code. They are useful for adding context and enhancing code comprehension.

{% highlight python %}
# This is a single-line comment
x = 42  # This is an end-of-line comment
{% endhighlight %}

### Multi-Line Comments
Multi-line comments, created using triple quotes (''' or """), allow for longer explanations or documentation. They are useful for providing more extensive context and detailed information about the code.

{% highlight python %}
'''
This is a multi-line comment.
It can span multiple lines.
Useful for longer explanations or documentation.
'''
x = 42  # Assigns the value 42 to variable x
{% endhighlight %}

Strive to strike a balance when commenting—provide enough detail to aid understanding without over-explaining or repeating information unnecessarily.

## Python Statements and Expressions <hr>

Statements and expressions are fundamental concepts in Python programming. They play a crucial role in controlling the flow of a program and calculating values.

### Statements

A statement is a line of code that performs a specific action, such as assigning a value to a variable or printing a message. Statements control the flow of a program, enabling you to execute certain actions based on conditions or repetitions.

Here are a few examples of Python statements:

{% highlight python %}
# Assignment statement
x = 42

# Print statement
print('Hello, world!')

# Conditional statement
if x > 0:
    print('x is positive')
else:
    print('x is non-positive')
{% endhighlight %}

Statements are run sequentially. The computer does not look ahead.

### Expressions

An expression is a combination of values, variables, and operators that produces a result. Expressions can be as simple as a single value, like "42", or as complex as a mathematical formula, like "2 * (3 + 4)**2". They calculate values that can be used in your program. They can be used in various contexts, such as in the body of a loop or as a parameter to a function.

{% highlight python %}
# Arithmetic expression
result = 2 * (3 + 4)

# String concatenation expression
message = 'Hello, ' + 'world!'

# Function call expression
length = len('Python')
{% endhighlight %}

Statements guide the execution of the program, while expressions calculate values and produce results. Both statements and expressions are essential in Python programming, enabling you to control the flow of your program and perform calculations or operations on your data.

### Elements of Flow Statements

Flow control statements often start with a part called the condition and are always followed by a block of code called the clause.

#### Conditions

The Boolean expressions you've seen so far could all be considered conditions, which are the same thing as expressions; condition is just a more specific name in the context of flow control statements. Conditions always evaluate down to a Boolean value, `True` or `False`. A flow control statement decides what to do based on whether its condition is True or False, and almost every flow control statement uses a condition.

#### Blocks of Code (Clause)

Lines of Python code can be grouped together in blocks. You can tell when a block begins and ends from the indentation of the lines of code. Blocks begin when the indentation increases. Blocks can contain other blocks. Blocks end when the indentation decreases to zero or to a containing block's indentation.

### Control Flow Statements

Control flow statements allow you to control the execution of your program based on conditions or repetitions. Some commonly used control flow statements in Python include:

- If statement: Executes a block of code if a certain condition is true.
- Else statement: Executes a block of code if the condition in the if statement is false.
- Elif statement: Allows you to check multiple conditions sequentially.
- While loop: Repeats a block of code as long as a certain condition is true.
- For loop: Executes a block of code for each item in an iterable.
- Break statement: Terminates the loop prematurely.
- Continue statement: Skips the rest of the loop and goes to the next iteration.

Using control flow statements gives you the power to make decisions, iterate over collections, and create more dynamic and interactive programs.

Control Flow Statements will be discussed in detail in [Python Control Flow](/workspace/python-101/control-flow) of this tutorial series.

## Data Types in Python <hr>

Python is a dynamically typed language, which means that variables can hold values of different types. Understanding the different data types in Python is crucial for effectively working with variables and expressions. Some common data types in Python include:

- Numeric types: Integers (int), floating-point numbers (float), and complex numbers (complex).
- Boolean type: Represents the truth values True and False.
- Strings: Sequences of characters, enclosed in single quotes ('') or double quotes ("").
- Lists: Ordered collections of items, enclosed in square brackets ([]).
- Tuples: Similar to lists, but immutable (cannot be modified), enclosed in parentheses ().
- Dictionaries: Key-value pairs, enclosed in curly braces ({}) with each pair separated by a colon (:).

Data types will be described in detail in the next section of the series, "Understanding Python Data Structures" ([Numeric Data Types](/workspace/python-101/numbers), [Lists & Tuples Data Types](/workspace/python-101/lists-and-tuples), [String Data Types](/workspace/python-101/strings), and [Dictionary Data Types](/workspace/python-101/dictionaries),)

## Operators in Python <hr>

Operators are symbols or special keywords in Python that perform various operations on values or variables. Python provides a wide range of operators, including:

- Arithmetic operators: Perform basic mathematical operations such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
- Comparison operators: Compare two values and return a Boolean result, such as equal to (==), not equal to (!=), greater than (&gt;), less than (&lt;), etc.
- Logical operators: Combine Boolean values and return a Boolean result, such as "and", "or", and "not".
- Assignment operators: Assign values to variables, such as (=), (+=), (-=), etc.
- Membership operators: Test if a value is a member of a sequence, such as "in" and "not in".
- Identity operators: Compare the identity of two objects, such as 'is' and "is not".

Understanding and using operators allows you to perform calculations, make comparisons, and control the flow of your program effectively.

## Putting It All Together: A Practical Example <hr>

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

This is just one example of how Python can be used to solve real-world problems. You can find more programs that implement variables, constants, statements, and expressions in my <a href="https://github.com/joj-macho/Pythological-Playground" target="_new">Python Playground Repository</a> on GitHub.

## Summary <hr>

Variables, constants, statements, and expressions, and comments are fundamental concepts in Python that every programmer must understand. By using these concepts effectively, you can write better code and solve real-world problems. These definitions and concepts will equip you with the tools to write dynamic and engaging Python code, by mastering these concepts, you can breathe life into your programs, making them vibrant, expressive, and effective.

Next in the Python Programming 101 series is [Understanding Python Data Structures: Numeric Data Types](/workspace/python-101/numbers) where we'll dive into understanding the characteristics and functionalities of numeric data types in Python.