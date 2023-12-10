---
layout: post
title: "Numeric Data Types"
sub-title: "Understanding Python Data Structures: A Guide, Examples and Best Practices"
tags: ["python", "basics", "numbers"]
category: "python"
permalink: /workspace/python/numbers
---

Numbers are the backbone of programming, facilitating various tasks such as keeping score in games, representing data in visualizations, or handling financial calculations in web applications. Python, being a versatile language, provides several ways to handle numeric data. This tutorial will explore numeric data types in Python and provide practical examples and use cases for each data type. This tutorial will also discuss the potential limitations and challenges associated with numeric data types and provide best practices for handling type errors and exceptions.

## Integers (int)

---

Integers are whole numbers, including the negatives, without any decimal points. They are ideal for representing counts, quantities, or any discrete values in Python. Internally, Python represents integers using either 4 or 8 bytes of computer memory, allowing for a specific range of values to be stored efficiently.

To declare an integer variable in Python, use the following syntax: `variable_name = integer_value`. Here's an example illustrating integer initialization:

{% highlight python %}
>>> x = 42
>>> y = -1
>>> z = 0
>>> print(type(x), type(y), type(z))
<class 'int'> <class 'int'> <class 'int'>
{% endhighlight %}

### Arithmetic Operations with Integers

Integers support various arithmetic operations, including addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`). These operations can be performed on integer variables, resulting in integer values.

{% highlight python %}
>>> 2 + 3
5
>>> 3 - 2
1
>>> 2 * 3
6
>>> 3 / 2
1.5
{% endhighlight %}

Exponents, represented by `**`, are used for raising integers to a specific power:

{% highlight python %}
>>> 2 ** 3
8
>>> 2 ** 4
16
{% endhighlight %}

Python provides two types of division for integers: regular division (`/`) and floor division (`//`). Regular division yields a floating-point result, while floor division returns the largest integer less than or equal to the regular division result.

{% highlight python %}
>>> 7 / 3
2.3333333333333335
>>> 7 // 3
2
{% endhighlight %}

The modulo operator (`%`) calculates the remainder of the division between two integers, and it finds utility in various tasks, such as checking for even or odd numbers or cycling through value sequences.

{% highlight python %}
>>> 7 % 2
1
>>> 148 % 2
0
>>> 15 % 7
1
{% endhighlight %}

When 7 is divided by 2, the remainder is 1, therefore, the number 7 is odd. When 148 is divided by 2, there is no remainder (even number). 

Mathematical expressions in Python use familiar rules of precedence table below. Expressions bounded by parentheses are always performed first, and operations within the same precedence level are evaluated left to right.

Mathematical expressions in Python follow a set of precedence rules, and operations within the same precedence level are evaluated from left to right. Expressions enclosed in parentheses are always performed first. Below is a table illustrating the precedence of various mathematical operations:

<table class="table table-dark table-responsive table-sm table-striped table-hover caption-top">
    <caption>Table: Mathematical Operator Precedence in Python</caption>
    <thead>
        <tr>
            <th scope="col">Precedence</th>
            <th scope="col">Operator</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">
        <tr>
            <th scope="row">1</th>
            <td><code>( )</code></td>
            <td>Grouping with Parentheses</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td><code>**</code></td>
            <td>Exponentiation </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td><code>-x, +x</code></td>
            <td>Negation (Unary)</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td><code>*, /, //, %</code></td>
            <td>Multiplication, Division, Floor Division, Modulus</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td><code>+, -</code></td>
            <td>Addition, Subtraction</td>
        </tr>
    </tbody>
</table>

Here's an example of precedence in action:

{% highlight python %}
>>> (2 + 3) * (4 - 1)
15
>>> 4 ** 2 + (9 - 5) / 4 * 5
21.0
{% endhighlight %}

- `(2 + 3) * (4 - 1)`: The expression inside the parentheses is evaluated first, resulting in `5 * 3`, which equals 15.
- `4 ** 2 + (9 - 5) / 4 * 5`: Following the precedence, the expression starts with the exponentiation operation, `4 ** 2`, which equals `16`. Then, the subtraction inside the parentheses `(9 - 5)` is calculated, resulting in `4`. After that, division is performed on the result of the subtraction, `4 / 4`, yielding `1.0`. Finally, the multiplication by `5` is carried out, resulting in `5.0`. The last step involves adding the initial exponentiation result `16` to the final multiplication result `5.0`, which gives the overall answer of `21.0`.

In Python, spacing in expressions does not affect evaluation but enhances readability, helping developers quickly discern the operations' priority.

### Integer-Specific Methods

Python's `int` type comes with several methods that allow you to perform various operations and retrieve information about integers. Here are some common methods:

#### `int.bit_length()`

Returns the number of bits required to represent the integer in binary, excluding the sign and leading zeros.

{% highlight python %}
>>> number = 42
>>> number.bit_length()
6
{% endhighlight %}

#### `int.to_bytes(length, byteorder, signed=False)`

Returns an array of bytes representing an integer. The length parameter specifies the number of bytes in the resulting array, and byteorder specifies the byte order.

{% highlight python %}
>>> number = 42
>>> byte_array = number.to_bytes(2, byteorder='big')
>>> byte_array
b'\x00*'
{% endhighlight %}

### `int.from_bytes(bytes, byteorder, signed=False)`

Creates an integer from a given array of bytes. The byteorder parameter specifies the byte order.

{% highlight python %}
>>> byte_array = b'\x00*'
>>> new_number = int.from_bytes(byte_array, byteorder='big')
>>> new_number
42
{% endhighlight %}

### `int.conjugate()`

Returns the complex conjugate of the integer. This method is useful when dealing with complex numbers.

{% highlight python %}
>>> number = 42
>>> complex_number = complex(number, 3)
>>> complex_number
(42+3j)
>>> complex_number.conjugate()
(42-3j)
{% endhighlight %}

These are just a few examples of the methods available for integers in Python. Depending on your needs, you may find other methods provided by the `int` type in the Python documentation.

Integers are versatile and commonly used for various purposes, such as counting occurrences, representing indices in data structures, or measuring quantities in discrete units.

## Floating-Point Numbers (float)

---

Floating-point numbers, commonly referred to as floats, are another essential numeric data type in Python. Unlike integers, floats can represent both whole numbers and fractions, including numbers with decimal points. Floats are used when more precision is required, and they are particularly suitable for tasks involving scientific calculations, financial modeling, and graphical representations.

Creating a floating-point variable in Python is straightforward. You can use the following syntax: `variable_name = float_value`. Here's an example:

{% highlight python %}
pi = 3.14159
radius = 2.5
{% endhighlight %}

### Arithmetic Operations with Floating-Point Numbers

Floating-point numbers support standard arithmetic operations, similar to integers. These operations include addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`). Additionally, floating-point numbers allow for exponentiation (`**`) and modulus (`%`) operations.

{% highlight python %}
>>> 0.1 + 0.1
0.2
>>> 0.2 - 0.1
0.1
>>> 2 * 0.1
0.2
>>> 0.3 / 0.1
2.9999999999999996
{% endhighlight %}

With floats, you get 15 to 17 digits of precision. However, small rounding errors may occur due to the universal CPU need to store digits in the binary number system, making floats not always perfectly accurate. For example, the following addition results in an extra "2.9999999999999996" due to Python's handling of floating-point division.

#### Precision Challenges

One challenge with floating-point numbers is precision. Due to the way computers represent real numbers in binary, certain values cannot be precisely represented, leading to unexpected results in calculations. Precision and rounding issues can arise when working with floats, as computers have finite memory to represent these numbers. For instance:

{% highlight python %}
>>> 0.1 + 0.2
0.30000000000000004
>>> 3 * 0.1
0.30000000000000004
{% endhighlight %}

This occurs because Python aims to represent the result as precisely as possible, which can be challenging given how computers internally store numbers.

##### Avoiding Precision Issues

Floating-point numbers have limited precision, and arithmetic operations may result in rounding errors. Consider using the `decimal` module for more precise decimal arithmetic, especially in financial or critical applications.

{% highlight python %}
>>> from decimal import Decimal
>>> 
>>> x = Decimal('0.1')
>>> y = Decimal('0.2')
>>> sum_result = x + y
>>> sum_result
Decimal('0.3')
{% endhighlight %}

The `decimal` module provides the `Decimal` type, offering higher precision. In this example, adding "0.1" and "0.2" results in the accurate value of "0.3". Using the `decimal` module is particularly crucial when precision is essential, such as in financial calculations.

For more information on floating-point accuracy, you can refer to the official Python documentation <a href="https://docs.python.org/3/tutorial/floatingpoint.html?highlight=floating%20point%20numbers" target="_blank">here</a>. Additionally, details about the decimal module can be found <a href="https://docs.python.org/3/library/decimal.html?highlight=floating%20point%20numbers" target="_blank">here</a>.

### Floating-Point-Specific Methods and Functions

Python provides useful functions and methods specifically designed for working with floating-point numbers. These can assist in rounding, formatting, and other operations. Here are a few examples:

#### `float.as_integer_ratio()`

Returns a pair of integers whose ratio is equal to the original floating-point number. This is useful for obtaining a rational representation of a floating-point value.

{% highlight python %}
>>> my_float = 3.75
>>> ratio = my_float.as_integer_ratio()
>>> ratio
(15, 4)
{% endhighlight %}

`as_integer_ratio()` is used to obtain a pair of integers representing the ratio of the original floating-point number (3.75). The result (15, 4) indicates that the ratio is 15:4, which is equivalent to 3.75.

#### `float.is_integer()`

Checks if the floating-point number represents an integer. Returns `True` if the number is an integer, otherwise `False`.

{% highlight python %}
>>> integer_check = 5.0
>>> result = integer_check.is_integer()
>>> result
True
{% endhighlight %}

The `is_integer()` method checks if the floating-point number (5.0 in this case) represents an integer. Since it does, the result is `True`.

#### `float.hex()`

Returns a string representation of the hexadecimal value of the floating-point number. This can be useful for serialization and unique identification.

{% highlight python %}
>>> hex_representation = 3.14159.hex()
>>> hex_representation
'0x1.921f9f01b866ep+1'
{% endhighlight %}

The `hex()` method converts the floating-point number (3.14159) to its hexadecimal representation. The result is a string that uniquely identifies the floating-point value.

#### `float.fromhex(s)`

Converts a string representing a hexadecimal floating-point number back to its float equivalent.

{% highlight python %}
>>> hex_string = '0x1.921f9f01b866ep+1'
>>> converted_float = float.fromhex(hex_string)
>>> converted_float
3.14159
{% endhighlight %}

Using `fromhex()`, the hexadecimal string ('0x1.921f9f01b866ep+1') is converted back to its float equivalent (3.14159).

#### `round()`

Rounds a floating-point number to the nearest integer or to a specified number of decimal places.

{% highlight python %}
>>> rounded_value = round(3.14159)
>>> rounded_value
3

>>> precise_rounding = round(3.14159, 2)
>>> precise_rounding
3.14
{% endhighlight %}

The `round()` function is applied to round 3.14159 to the nearest integer (resulting in 3) and to two decimal places (resulting in 3.14).

#### `abs()`

Returns the absolute value of a floating-point number.

{% highlight python %}
>>> absolute_value = abs(-5.678)
>>> absolute_value
5.678
{% endhighlight %}

The `abs()` function calculates the absolute value, ensuring that the result is always non-negative (5.678 in this case).

Understanding the characteristics and functionalities of floating-point numbers is essential for accurate and reliable numerical computations in Python.

These methods and functions enhance the capabilities of working with floating-point numbers in Python, providing functionalities for representation, identification, and validation. Understanding these tools is crucial for precise and reliable handling of real numbers in various applications.

Floating-point numbers are a powerful tool for handling a wide range of calculations, from complex mathematical modeling to representing real-world quantities accurately.

## Complex Numbers

---

In addition to integers and floating-point numbers, Python also supports complex numbers, which are used to represent quantities involving both real and imaginary parts. Complex numbers are often encountered in mathematics, physics, engineering, and signal processing.

In Python, complex numbers are expressed as `a + bj`, where `a` is the real part, `b` is the imaginary part, and `j` represents the imaginary unit.

Creating a complex variable is straightforward. You can use the following syntax: `variable_name = complex(real_part, imaginary_part)`. Here's an example:

{% highlight python %}
>>> z = complex(2, 3)
>>> z
(2+3j)
{% endhighlight %}

Python also recognizes complex numbers when they are created with the imaginary unit `j` and typically surrounds them in parentheses when printing. Here's an example:

{% highlight python %}
>>> z = 2 + 3j
>>> z
(2+3j)
{% endhighlight %}

### Arithmetic Operations with Complex Numbers

Complex numbers support standard arithmetic operations, similar to integers and floats. These operations include addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`). Additionally, complex numbers allow for exponentiation (`**`) and modulus (`%`) operations.

{% highlight python %}
>>> z = complex(2, 3)
>>> w = 1 + 2j
>>> z + w
(3+5j)
>>> z - w
(1+1j)
>>> z * w
(-4+7j)
>>> z / w
(1.6-0.2j)
>>> z ** 2
(-5+12j)
{% endhighlight %}

Additionally, complex numbers have specific operations such as calculating the complex conjugate and finding the absolute value.

### Complex-Specific Functions and Methods

Python provides functions and methods specifically designed for working with complex numbers, allowing you to manipulate both their real and imaginary parts, find the conjugate, calculate the absolute value, and more. These functionalities are accessible by importing the `cmath` module. Here are some common ones:

#### `real` and `imag`

The `real` attribute returns the real part of the complex number, while the `imag` attribute returns the imaginary part.

{% highlight python %}
>>> z = complex(2, 3)
>>> z.real
2.0
>>> z.imag
3.0
{% endhighlight %}

#### `conjugate`

Returns the complex conjugate of a complex number.

{% highlight python %}
>>> z = complex(2, 3)
>>> z.conjugate()
(2-3j)
{% endhighlight %}

The `conjugate()` method flips the sign of the imaginary part.

#### `cmath.phase()`

Returns the phase (angle) of a complex number in radians.

{% highlight python %}
>>> import cmath
>>> z = complex(2, 3)
>>> cmath.phase(z)
0.982793723247329
{% endhighlight %}

The `phase()` function calculates the angle formed by the complex number in the complex plane.

#### `cmath.polar()`

Returns the polar coordinates (r, phi) of a complex number, where `r` is the magnitude and `phi` is the phase angle in radians.

{% highlight python %}
>>> import cmath
>>> z = complex(2, 3)
>>> cmath.polar(z)
(3.605551275463989, 0.982793723247329)
{% endhighlight %}

The `polar()` function provides the magnitude and angle of the complex number in polar form.

#### `cmath.rect()`

Converts polar coordinates (magnitude, phase) to a complex number.

{% highlight python %}
>>> import cmath
>>> z = complex(2, 3)
>>> cmath.rect(3.605551275463989, 0.982793723247329)
(2+3j)
{% endhighlight %}

The `rect()` function creates a complex number from its polar coordinates.

Other available functions include trigonometric functions, square root, and exponential functions:

#### `abs()`

Calculates the absolute value (magnitude) of a complex number.

{% highlight python %}
>>> import cmath
>>> z = complex(2, 3)
>>> abs(z)
3.605551275463989
{% endhighlight %}

#### `sqrt()`

Calculates the square root of a complex number.

{% highlight python %}
>>> import cmath
>>> z = complex(2, 3)
>>> cmath.sqrt(z)
(1.6741492280355401+0.8959774761298381j)
{% endhighlight %}

#### `exp()`

Calculates the exponential of a complex number.

{% highlight python %}
>>> import cmath
>>> z = complex(2, 3)
>>> cmath.exp(z) 
(-7.315110094901103+1.0427436562359045j)
{% endhighlight %}

#### Trigonometric Functions

{% highlight python %}
>>> import cmath
>>> z = complex(2, 3)
>>> 
>>> cmath.sin(z)
(9.15449914691143-4.168906959966565j)
>>> cmath.cos(z)
(-4.189625690968807-9.109227893755337j)
>>> cmath.atan(z)
(1.4099210495965755+0.22907268296853878j)
{% endhighlight %}

By using these complex-specific functions and methods, you can perform various calculations and manipulations on complex numbers.

## Working with Numeric Data in Python

---

### Type Casting

In Python, you can convert between different numeric data types using implicit or explicit type conversion. Implicit type conversion occurs automatically when Python converts a value from one type to another without any explicit instructions. Explicit type conversion, also known as type casting, involves manually converting a value from one type to another using specific functions or methods.

Here are a few examples of converting between different numeric types:

{% highlight python %}
>>> # Implicit type conversion
>>> x = 5
>>> y = 2.5
>>> x + y # int + float = float
7.5
>>> 
>>> # Type casting to float
>>> integer_value = 42
>>> float(integer_value)
42.0
>>> 
>>> # Type casting to integer
>>> float_number = 3.14
>>> int(float_number)
3
>>> 
>>> # Type casting to complex
>>> real_part = 2
>>> imaginary_part = 3
>>> complex(real_part, imaginary_part)
(2+3j)
{% endhighlight %}

### Working with Long Numbers

Python allows you to enhance the readability of long numbers using underscores and provides a convenient way to commify large numbers.

#### Underscores in Numbers

When working with long numbers, you can enhance their readability by grouping digits using underscores. Python allows you to use underscores as visual separators in numbers without affecting their values. Let's see this feature below:

{% highlight python %}
>>> speed_of_light = 299_792_458
>>> print(speed_of_light)
299792458
{% endhighlight %}

In the example above, we defined the variable `speed_of_light` with underscores to group the digits. When we print the value, Python ignores the underscores and displays only the digits. This feature works for both integers and floats. Regardless of whether you group digits in threes or not, the value remains unchanged. For Python, "1000", "1_000", and "10_00" are all equivalent.

#### Commifying Numbers

In addition to using underscores to improve the readability of long numbers, you can further enhance their legibility by adding commas. This practice, often referred to as "commifying" numbers, makes large numerical values easier to interpret at a glance. <br>
Python provides a straightforward way to add commas to numbers without altering their values. You can use the f-string formatting or the locale module, depending on your needs. Let's look at an example:

{% highlight python %}
>>> population = 7_900_000_000
>>> formatted_population = f'{population:,}'
>>> print(formatted_population)
7,900,000,000
{% endhighlight %}

### Handling Type Errors and Exceptions

When working with numeric data types, it's important to handle type errors and exceptions that may occur. Common type errors include attempting incompatible operations between different types or passing incorrect data types as arguments to functions or methods.
To handle type errors and exceptions effectively, consider the following best practices:

- Use proper type checking techniques to validate input data.
- Handle type-related exceptions using try-except blocks.
- Use appropriate type conversion methods to ensure compatibility between data types.
- Follow consistent coding conventions to minimize type-related issues.

By applying these best practices, you can prevent and address type-related errors, ensuring your numeric data operations run smoothly and accurately.

Understanding the concepts of type conversion, type checking, and handling type errors is essential for robust programming and accurate numeric calculations in Python.

### Considerations and Challenges

Working with numeric data types offers several advantages in programming:

- **Efficient Computations:** Numeric data types enable fast and efficient calculations, making them ideal for complex mathematical operations and simulations.
- **Precision and Accuracy:** Numeric data types provide different levels of precision, allowing you to handle decimal values and perform calculations with high accuracy.
- **Interoperability:** Numeric data types are widely used and compatible with various libraries and frameworks, facilitating seamless integration into different programming environments.

However, it's essential to consider some considerations and challenges when working with numeric data types:

- **Precision Limitations:** Floating-point numbers have inherent limitations in representing certain decimal values precisely, leading to rounding errors or unexpected results.
- **Type Conversion:** When working with different numeric data types, type conversion may be necessary to ensure compatibility and avoid errors. It's important to handle type conversions properly.
- **Overflow and Underflow:** Numeric data types have finite ranges, and calculations exceeding those ranges can result in overflow (values too large) or underflow (values too small) issues.

By being aware of these considerations and following best practices, you can effectively leverage the benefits of numeric data types while mitigating potential challenges.

## Practical Applications and Use Cases

---

Numbers have widespread applications in programming, whether it's keeping score in games, visualizing data, storing information in web applications, or tackling numerous other tasks. Python represents numbers as decimals, but source code also allows the usage of hexadecimal, octal, or binary notations. This flexibility proves especially useful when working in domains where specific number systems like hexadecimal are prevalent. By leveraging these alternative notations, programmers can seamlessly work with numbers without the need for constant translation between different representations.

### Real-World Scenarios Where Numeric Data Types Are Used

Numeric data types play a crucial role in a wide range of domains and real-world scenarios. Let's explore some examples of how numeric data types are utilized in different fields:

- **Finance:** Numeric data types are used to perform financial calculations, such as interest rate calculations, investment analysis, and currency conversions.
- **Engineering:** Numeric data types are essential for engineering calculations, such as structural analysis, electrical circuit simulations, and signal processing.
- **Physics:** Numeric data types are employed in scientific simulations, modeling physical phenomena, and solving complex mathematical equations.
- **Data Analysis:** Numeric data types are utilized in statistical analysis, data visualization, and machine learning algorithms to process and analyze large datasets.

### Examples Showcasing the Usage of Numeric Data Types

Let's dive into some code snippets that illustrate how numeric data types are applied in practice:

{% highlight python %}
# Example 1: Financial Calculations
principal = 1000
rate = 0.05
time = 2
# Calculate simple interest: principal * rate * time
interest = principal * rate * time

# Example 2: Engineering Calculation
voltage = 12.5
current = 2.8
# Calculate power: voltage * current
power = voltage * current

# Example 3: Physics Simulation
mass = 5
acceleration = 9.8
# Calculate force using Newton's second law: mass * acceleration
force = mass * acceleration

# Example 4: Data Analysis
data = [1.5, 2.7, 3.9, 4.2, 5.6]
# Calculate average: sum(data) / len(data)
average = sum(data) / len(data)
{% endhighlight %}

These examples demonstrate how numeric data types are used to solve specific problems in different domains. Numeric data types give you the power to perform calculations, manipulate data, and obtain meaningful insights.

### More Examples

Feel free to browse my <a href="https://github.com/joj-macho" target="_blank">GitHub page</a> for more comprehensive programs:

- **BMI Calculator Program** <a href="https://github.com/joj-macho/Pythological-Playground/tree/main/bmi-calculator" target="_blank">Link to Program</a>
    - This is a simple program to calculate Body Mass Index (BMI) based on the provided height and weight using a formula.
    - This program uses integers and floats and demonstrates how they can be converted vice versa.

- **Unit Converter Program:** <a href="https://github.com/joj-macho/Pythological-Playground/tree/main/converter" target="_blank">Link to Program</a>
    - Converts lengths, masses, or temperatures based on user input using a formula.
    - This program demonstrates how you can use different types of numbers run calculations.

- **Number Guessing Game:** <a href="https://github.com/joj-macho/Pythological-Playground/tree/main/pico-fermi-bagels" target="_blank">Link to Program</a>
    - A number guessing game, Bagels, which generates a random secret number and challenges the player to guess it within a limited number of attempts.
    - Demonstrates using integer numbers and random numbers from the `random()` module.

You can find more programs that handle numerical data types on my <a href="https://github.com/joj-macho/Math-Science-Playground" target="_blank">Math & Science Playground</a> and <a href="https://github.com/joj-macho/Computational-Programming-Playground" target="_blank">Computational Programming Playground</a> repositories. These repositories contain a collection of Python programs covering a wide array of mathematical and scientific concepts, including topics in numerical methods, linear algebra, differential equations, and more. So, numbers are right.

## Summary

---

Great job! You've covered Python's numeric types thoroughly, exploring integers, floats, and complex numbers. You now understand how to perform various operations, handle precision challenges, and convert between types. These skills lay a solid foundation for working with numbers in Python. Ready for more? Check out [Understanding Python Data Structures: Lists & Tuples Data Types](/workspace/python/lists-and-tuples) for the next step in your Python journey.