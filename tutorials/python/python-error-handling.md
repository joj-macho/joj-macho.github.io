---
layout: post
title: "Error Handling and Exception in Python"
sub-title: "Enhancing Code Resilience and Reliability"
tags: ["python", "basics"]
category: "python"
permalink: /workspace/python/error-handling
---

As you continue on your coding journey, errors are inevitable. Computers are less forgiving than humans when it comes to syntactic rules, and attempting illegal operations in Python can result in halting execution and displaying error messages — this process is known as raising an exception. This tutorial will guide you through the fundamentals of error handling in Python, empowering you to write code that is more resilient and user-friendly.

## Understanding Exceptions <hr>

An exception in Python occurs when an error disrupts the normal flow of program execution. When such an error is encountered, Python "raises an exception," producing an object that represents the error. If not promptly addressed, exceptions can terminate a program, displaying an error message. However, with proper error handling, developers gain the ability to catch and manage these exceptions, offering opportunities to fix issues, retry operations, provide helpful error messages, or suppress errors.

### Common Error Types

Understanding the types of errors encountered by the interpreter aids in debugging. The table below highlights common error types, and a more comprehensive list is available [here](https://docs.python.org/3/library/exceptions.xhtml).

| Error Type              | Description                                               |
|-------------------------|-----------------------------------------------------------|
| `NameError`             | Raised when a local or global name is not found.           |
| `ZeroDivisionError`     | Raised when division or modulo by zero is encountered.     |
| `TypeError`             | Raised when an operation or function is applied to an object of an inappropriate type. |
| ...                     | More error types can be found in the official documentation. |

Errors are part of the coding process, and traceback reports provide valuable information. The final line of a traceback includes the error type and a brief explanation. Googling this line often yields more understandable explanations than the official documentation.

## Python Exception Handling: The `try`, `except`, and `finally` Blocks <hr>

The core of Python's exception handling involves using `try`, `except`, and optionally `finally` blocks. These blocks allow developers to prevent programs from crashing abruptly, providing alerts and helpful messages.

Consider the example below, which handles the scenario of division by zero:

{% highlight python %}
try:
    # Code that may raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Code to handle the specific exception
    print("Cannot divide by zero!")
finally:
    # Code that will be executed no matter what
    print("Execution complete.")
{% endhighlight %}

In this example:

- The `try` block attempts the division operation that may raise a `ZeroDivisionError`.
- The `except` block catches and handles the specific exception (`ZeroDivisionError`) by printing a corresponding message.
- The `finally` block contains code that will be executed regardless of whether an exception occurred or not, providing a way to ensure cleanup or finalization.

### Catching Multiple Exceptions

You can catch multiple exceptions using a tuple in the `except` block. Here's an example:

{% highlight python %}
try:
    value = int("abc")
except (ValueError, TypeError):
    print("Invalid conversion.")
{% endhighlight %}

In this case, if either a `ValueError` or a `TypeError` occurs during the `int` conversion, the `except` block is executed, printing an "Invalid conversion" message.

Handling multiple exceptions can also be done with multiple `except` blocks, each handling a specific type of exception:

{% highlight python %}
try:
    # Code that may raise exceptions
    result = int("abc") / 0
except (ValueError, TypeError):
    print("Invalid conversion.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
{% endhighlight %}

### Raising Exceptions

Besides handling built-in exceptions, you can raise your exceptions using the `raise` statement. This is particularly useful for input validation, such as ensuring non-negativity:

{% highlight python %}
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative.")
    return age

try:
    user_age = validate_age(-5)
except ValueError as ve:
    print(f"Error: {ve}")
{% endhighlight %}

In this example, the `validate_age` function raises a `ValueError` if the provided age is negative, and the `except` block handles and prints the error message.

### Custom Exceptions

Creating custom exceptions allows you to define specific error conditions for your application. Here's an example:

{% highlight python %}
class CustomError(Exception):
    def __init__(self, message="A custom error occurred."):
        self.message = message
        super().__init__(self.message)

try:
    raise CustomError("This is a custom exception.")
except CustomError as ce:
    print(f"Custom Error: {ce}")
{% endhighlight %}

In this case, a custom exception `CustomError` is defined, and the `raise` statement is used to raise an instance of this exception. The `except` block then catches and prints information about the custom exception.

### The `else` Clause

The `else` clause is executed if the code in the `try` block doesn't raise any exceptions:

{% highlight python %}
try:
    value = int("42")
except ValueError:
    print("Invalid conversion.")
else:
    print(f"Conversion successful: {value}")
{% endhighlight %}

In this example, if the conversion from the string "42" to an integer succeeds without raising a `ValueError`, the `else` block is executed, printing a "Conversion successful" message. This clause provides an opportunity to execute code when no exceptions occur, enhancing the flexibility of exception handling.

### Exception Propagation

In Python, exceptions not caught in a function propagate up the call stack until they are caught by an appropriate `except` block. This mechanism allows errors to be handled at higher levels of the program, providing a centralized way to manage exceptional situations.

Consider the following example:

{% highlight python %}
def func_a():
    value = 10 / 0

def func_b():
    try:
        func_a()
    except ZeroDivisionError:
        print("Caught an exception in func_b.")

func_b()
{% endhighlight %}

In this example:

1. The `func_a` function contains a division by zero operation, which raises a `ZeroDivisionError`. However, this exception is not caught within `func_a`.

2. The `func_b` function calls `func_a` within a `try` block. Since `func_a` raises a `ZeroDivisionError`, the `except` block in `func_b` catches this exception, preventing it from propagating further.

3. As a result, the message "Caught an exception in func_b." is printed, indicating that the `ZeroDivisionError` raised in `func_a` was successfully caught and handled within the calling function `func_b`.

This example demonstrates how exceptions propagate up the call stack. If an exception is not caught at the immediate level where it occurs, the Python interpreter looks for an appropriate `except` block in the calling functions until it finds one or until the exception reaches the top-level of the program. If the exception reaches the top-level without being caught, the program terminates, and an error message is displayed.

## Best Practices <hr>

- **Specificity**: Catch specific exceptions rather than using a broad `except` block.
- **Logging**: Use the `logging` module to log exceptions for debugging.
- **Graceful Degradation**: Plan for graceful degradation in case of exceptions, providing a fallback or informative error message.

## Practical Examples <hr>

### Example 1: Handling File Not Found

{% highlight python %}
try:
    with open('nonexistent_file.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    print("File not found. Please check the file path.")
{% endhighlight %}

### Example 2: Database Connection

{% highlight python %}
import pymysql
from pymysql import MySQLError

try:
    # Attempting database connection
    connection = pymysql.connect(host='localhost', user='user', password='password', db='database')
except MySQLError as mysql_error:
    print(f"Database connection error: {mysql_error}")
finally:
    # Close the connection in the finally block to ensure cleanup
    if connection:
        connection.close()
{% endhighlight %}

### Summary <hr>

Congratulations! You've gained a solid understanding of error handling and exceptions in Python. This knowledge is crucial for writing reliable and maintainable code. As you advance, consider exploring the next topic: [bject-Oriented Programming in Python](/workspace/python/python-oop) to delve into the principles and practices of object-oriented programming (OOP), including classes, objects, inheritance, and more.