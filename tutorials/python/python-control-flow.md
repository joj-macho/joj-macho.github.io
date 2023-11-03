---
layout: post
title: "Python Control Flow"
sub-title: "Making Decisions and Repeating Actions"
tags: ["python", "basics", "loops"]
category: "python-101"
permalink: /workspace/python-101/control-flow
---

Until now, the examples and programs we've covered in this tutorial series executed statements sequentially. In both programming and everyday life, we frequently encounter situations where decisions are made based on specific conditions or where a sequence of statements needs to be executed repeatedly for different objects. In programming, the concept of control flow determines the order in which statements are executed within a code. Control flow consists of two primary structures: branching statements, also known as conditional statements, which alter the sequence of program statements, and looping structures, or iterating statements, which repeatedly execute a section of code until a termination condition is met.

## Understanding Branching Statements and Looping Structures

Branching statements in Python allow us to carry out specific blocks of instructions when certain conditions are satisfied. These blocks are identified by indentation, adhering to the off-side notation for coding. The commonly used branching statements are:

- if-else statement
- if-elif-else statement

On the other hand, looping structures facilitate the execution of code segments repeatedly until a specific condition is fulfilled. These looping statements include:

- for-loop
- while-loop

During branching or looping, when conditions are met, designated blocks of instructions are executed. In Python, these blocks are indicated by indentation, following the colon (:) symbol, which acts as a delimiter. It is essential to maintain consistent indentation to ensure correct code execution.

{% highlight markdown %}
Branching/Looping statement:
    Block for Branching/Looping statement
Continuation after the Branching/Looping
{% endhighlight %}

In this section, we will explore conditional statements and looping structures that allow us to create dynamic and efficient programs.

## Conditional Statements: Making Decisions in Python

Conditional statements allow our programs to make decisions based on specific conditions. They open the door to executing different actions depending on whether a condition evaluates to true or false. Python provides us with several conditional statements to work with.

### Flow Control and Blocks

In Python, flow control statements consist of a condition followed by a block of code, known as a clause. Conditions are expressions that evaluate to either true or false, directing the flow of execution. Blocks of code are defined by indentation and follow specific rules:

- Blocks begin when the indentation increases.
- Blocks can contain other blocks.
- Blocks end when the indentation decreases to zero or matches a containing block's indentation.

### Conditional if Statements

The if statement is one of the fundamental flow control statements. It executes a specific block of code if the condition associated with it evaluates to true. If the condition is false, the block is skipped. The structure of an if statement includes:

- The if keyword
- A condition (an expression that evaluates to true or false)
- A colon (:)
- An indented block of code (if clause)

The syntax for an if statement is as follows:

{% highlight markdown %}
if condition:
    # Code to execute if the condition is true
{% endhighlight %}

Let's explore the syntax and usage of if statements with an example:

{% highlight python %}
>>> name = 'Admin'
>>> if name == 'Admin':
        print('Hello, Admin.')
Hello, Admin.
{% endhighlight %}

The above code checks if the variable <code>name</code> is equal to 'Admin'. If the condition is true, the indented code block following the if statement is executed.

### Conditional if-else Statements

An if statement can be followed by an else statement, allowing us to specify an alternative action when the condition evaluates to false. The else clause is executed only if the if statement's condition is false. The structure of an if-else statement includes:

- The if keyword
- A condition
- A colon (:)
- An indented block of code (if clause)
- The else keyword
- A colon (:)
- An indented block of code (else clause)

The syntax for an if-else statement is as follows:

{% highlight markdown %}
if condition:
    # Code to execute if the condition is true
else:
    # Code to execute if the condition is false
{% endhighlight %}

The <code>condition</code> in the if statement is an expression that evaluates to either <code>True</code> or <code>False</code>. If the condition is true, the code block following the if statement is executed. Otherwise, if the condition is false, the code block following the else statement is executed.

Let's see an example of an if-else statement:

{% highlight python %}
>>> name = 'Jon'
>>> if name == 'Admin':
        print('Hello, Admin.')
    else:
        print('You are not the Admin. Who the hell are you?!')
You are not the Admin. Who the hell are you?!
{% endhighlight %}

In the above code, if the condition <code>name == 'Admin'</code> evaluates to true, the if clause is executed. Otherwise, the else clause is executed.

### Conditional if-elif-else Statements

For scenarios where we have multiple conditions to evaluate, we can use if-elif-else statements. The elif keyword is short for "else if" and allows us to test additional conditions. The structure of an if-elif-else statement includes:

- The if keyword
- A condition
- A colon (:)
- An indented block of code (if clause)
- The elif keyword
- A condition
- A colon (:)
- An indented block of code (elif clause)
- (Optional) Additional elif clauses
- (Optional) The else keyword
- A colon (:)
- An indented block of code (else clause)

The syntax for an if-elif-else statement is as follows:

{% highlight markdown %}
if condition_1:
    # Code to execute if condition_1 is true
elif condition_2:
    # Code to execute if condition_1 is false and condition_2 is true
elif condition_3:
    # Code to execute if condition_1 and condition_2 are false, and condition_3 is true
...
else:
    # Code to execute if all conditions are false
{% endhighlight %}

The conditions are evaluated in order, from top to bottom. The code block corresponding to the first condition that evaluates to true will be executed. If none of the conditions are true, the code block in the else statement (if present) will be executed.

Here's an example of an if-elif-else statement:

{% highlight python %}
>>> temperature = 20
>>> if temperature < 0:
        print('Brrr!')
    elif temperature < 10:
        print('Chilly')
    elif temperature < 20:
        print('Comfortable')
    elif temperature < 30:
        print('Warm')
    elif temperature < 40:
        print('Whew! Hot!')
    else:
        print('There is no light, only fire!')
# Output
There is no light, only fire!
{% endhighlight %}

In the above code, the temperature is evaluated against multiple conditions, and the corresponding block of code is executed based on the first condition that evaluates to true.

It is important to note the order of the elif statements. The conditions are evaluated in order, and the first true condition will trigger its corresponding block of code. Therefore, the order of the elif clauses matters.

### Testing Multiple Conditions

While if-elif-else chains are useful when we need only one condition to pass, there are situations where we want to check all conditions of interest. In such cases, we can use a series of simple if statements without elif or else blocks. This approach allows us to act on every condition that evaluates to true.
Here's an example to demonstrate testing multiple conditions:

{% highlight python %}
>>> value = 10
>>> if value > 5:
        print('Value is greater than 5')
    if value > 7:
        print('Value is greater than 7')
    if value > 9:
        print('Value is greater than 9')
# Output
Value is greater than 5
Value is greater than 7
Value is greater than 9
{% endhighlight %}

In the above example, each if statement is evaluated independently, and the corresponding block of code is executed if the condition is true.

### Nested if-elif-else Statements

Nested if statements occur when one if-elif-else structure is nested inside another. While nesting should be avoided when possible to improve code readability, it can be useful in certain scenarios. The level of nesting is determined by the indentation.

Here's an example of nested if-elif-else statements:

{% highlight python %}
>>> age = 15
>>> if age > 12:
        if age < 20:
            print("You are in the teenage years")
        else:
            print("You have crossed the teenage years")
    else:
        print("You will reach the teenage years soon")
# Output
You are in the teenage years
{% endhighlight %}

In the above example, the outer if statement checks if the age is greater than 12. If true, it enters the nested if statement to check if the age is less than 20. If both conditions are true, the corresponding block of code is executed.

It's important to note that nested if-elif-else statements can lead to code complexity and reduced readability. Whenever possible, it's advisable to use logical operators instead of deep nesting to improve code maintainability.

### Ternary Operator

The ternary operator provides a concise way to write conditional expressions in a single line of code. It allows us to make a decision and choose between two expressions based on a condition. The syntax for the ternary operator is as follows:

{% highlight markdown %}
expression_1 if condition else expression_2
{% endhighlight %}

The conditional expression should always evaluate to either true or false. If the condition evaluates to true, expression_1 is executed; otherwise, expression_2 is executed. The use of parentheses for the conditional expression is optional but can enhance readability.

Here's an example that demonstrates the ternary operator:

{% highlight python %}
>>> a = 10
>>> b = 5
>>> result = 'a is greater' if a > b else 'b is greater'
>>> print(result)
a is greater
{% endhighlight %}

In this example, we compare the values of variables <code>a</code> and <code>b</code>. If <code>a</code> is greater than <code>b</code>, the expression <code>'a is greater'</code> is assigned to the variable <code>result</code>. Otherwise, if <code>a</code> is not greater than <code>b</code>, the expression <code>'b is greater'</code> is assigned to <code>result</code>. The value of <code>result</code> is then printed, which in this case is <code>'a is greater'</code>.

The ternary operator can also be used to assign a variable to the result of the expression:

{% highlight python %}
>>> a = 10
>>> b = 5
>>> max_value = a if a > b else b
>>> print(max_value)
10
{% endhighlight %}

In this example, we use the ternary operator to assign the maximum value between <code>a</code> and <code>b</code> to the variable <code>max_value</code>. If <code>a</code> is greater than <code>b</code>, <code>a</code> is assigned to <code>max_value</code>; otherwise, if <code>a</code> is not greater than <code>b</code>, <code>b</code> is assigned to <code>max_value</code>. The value of <code>max_value</code> is then printed, which in this case is <code>10</code>.

Additionally, tuples can be used to implement a ternary operator:

{% highlight python %}
>>> condition = True
>>> result = (1, 2)[condition]
>>> print(result)
2
{% endhighlight %}

In this example, we use a tuple to implement the ternary operator. The tuple <code>(1, 2)</code> represents two possible values that can be assigned based on the condition. If the <code>condition</code> is true, the value at index 1 (which is <code>2</code>) is assigned to <code>result</code>; otherwise, if the <code>condition</code> is false, the value at index 0 (which is <code>1</code>) is assigned to <code>result</code>. The value of <code>result</code> is then printed, which in this case is <code>2</code>.

The ternary operator provides a compact and readable way to make decisions and assign values based on conditions, reducing the need for lengthy if-else statements. It is especially useful in situations where the decision-making logic is straightforward and can be expressed concisely.

## Loops: Repeating Actions

Loops are a fundamental aspect of programming that allows us to repeat actions and iterate over collections of data. In Python, there are two types of looping structures: the for loop and the while loop. In this section, we will explore these loops and understand their syntax, applications, and control flow.

### For Loop Statements

The for loop is used when we want to iterate over a sequence, such as a list, tuple, or string, or when we want to perform a specific action a predefined number of times. The structure of a for loop includes:

- The <code>for</code> keyword
- A variable to store each item in the sequence
- The <code>in</code> keyword
- A sequence to iterate over
- A colon (<code>:</code>)
- An indented block of code

Let's dive into an example of a for loop:

{% highlight python %}
>>> fruits = ['apple', 'banana', 'cherry']
>>> for fruit in fruits:
        print('Fruit:', fruit)
# Output
Fruit: apple
Fruit: banana
Fruit: cherry
{% endhighlight %}

In the above code, the for loop iterates over each item in the <code>fruits</code> list. The variable <code>fruit</code> stores each item, and the indented block of code is executed for each iteration.

The for loop is a powerful tool for iterating over collections and performing operations on each item. It simplifies the process of handling sequences and reduces the need for manual indexing.

### Iterating with range() and enumerate()

To perform a specific action a certain number of times, we can utilize the <code>range()</code> function in combination with a for loop. The <code>range()</code> function generates a sequence of numbers that can be used as an iterator. It takes up to three arguments: the start, stop, and step values.
Here's an example that prints the numbers from 1 to 10 using a for loop and <code>range()</code>:

{% highlight python %}
>>> for num in range(1, 11):
        print(num)
# Output
1
2
3
4
5
6
7
8
9
10
{% endhighlight %}

The <code>range(1, 11)</code> generates a sequence from 1 to 10 (inclusive) because the stop value is not included. The output of this code will be:

The <code>enumerate()</code> function is another useful tool when iterating over a sequence. It provides both the index and the value of each item in the sequence, allowing for more flexibility in handling the data.
Here's an example that demonstrates the usage of <code>enumerate()</code>:

{% highlight python %}
>>> fruits = ['apple', 'banana', 'cherry']
>>> for index, fruit in enumerate(fruits):
        print('Index:', index, 'Fruit:', fruit)

# Output
Index: 0 Fruit: apple
Index: 1 Fruit: banana
Index: 2 Fruit: cherry
{% endhighlight %}

In this code, the <code>enumerate()</code> function is used to iterate over the <code>fruits</code> list and provide both the index and the fruit name. The output of this code will be:

Using <code>enumerate()</code> allows us to access the index and value simultaneously, which can be useful in various scenarios.

### While Loop Statements

The while loop is used when we want to repeatedly execute a block of code as long as a given condition remains true. It's particularly useful when we don't know in advance how many times the loop should execute. The structure of a while loop includes:

- The <code>while</code> keyword
- A condition
- A colon (<code>:</code>)
- An indented block of code

Let's see an example of a while loop:

{% highlight python %}
>>> count = 0
>>> while count < 5:
        print('Count:', count)
        count += 1
# Output
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
{% endhighlight %}

In the above code, the while loop iterates as long as the condition <code>count &lt; 5</code> remains true. The block of code inside the loop is executed repeatedly, incrementing the value of <code>count</code> until the condition is false.

A while loop allows you to create a loop that executes a block of code repeatedly based on the evaluation of a condition. The condition is checked before each iteration, and if it is true, the code inside the loop is executed. This process continues until the condition becomes false.

The while loop provides a flexible way to repeat actions based on a condition. It's important to ensure that the condition eventually becomes false to prevent infinite loops.

Notice similarities with the if statement, we used the keyword <code>while</code> instead of the keyword <code>if</code>. The semantic difference is more important: in if statements, when the condition is met, it performs all the statements inside the body only once; whereas <code>while</code> repeats the execution of all the statements inside the body as long as the condition evaluates to True.
You can see that a while statement looks similar to an if statement. The difference is in how they behave. At the end of an if clause, the program execution continues after the if statement. But at the end of a while clause, the program execution jumps back to the start of the while statement. The while clause is often called the while loop or just the loop.
Let's look at an if statement and a while loop that use the same condition and take the same actions based on that condition. Here is the code with an if statement:

{% highlight python %}
>>> spam = 0
>>> if spam < 5:
        print('Hello, world.')
        spam = spam + 1
# Output
Hello, world.

>>> spam = 0
>>> while spam < 5:
        print('Hello, world.')
        spam = spam + 1
# Output
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
{% endhighlight %}

At first glance, these statements appear similar. Both the if statement and the while loop check the value of the variable <code>spam</code>, and if it's less than 5, they print the message "Hello, world." However, when you run these two code snippets, something very different happens in each case. <br>
For the if statement, the output is simply "Hello, world." printed once. After evaluating the condition and executing the statements within the body, the program continues with the subsequent code outside the if statement. <br>
On the other hand, for the while loop, the output is "Hello, world." repeated five times! The loop continues to execute as long as the condition <code>spam < 5</code> is true. The variable <code>spam</code> is incremented by one at the end of each loop iteration, and the loop stops when <code>spam < 5</code> becomes false.

Understanding the behavior of if statements and while loops is essential for writing effective code. While an if (see what I did there) statement is suitable for performing a set of actions once under specific conditions, a while loop enables the repeated execution of statements as long as a condition holds true. This distinction makes while loops a powerful tool for iterating and automating tasks.

### Controlling Loop Execution with Break and Continue Statements

Sometimes, we may need to modify the flow of a loop based on certain conditions. In such cases, we can use the <code>break</code> and <code>continue</code> statements.

The <code>break</code> statement is used to terminate the loop prematurely. When encountered, it immediately exits the loop, and the program execution continues with the statement following the loop.
Here's an example that demonstrates the usage of <code>break</code>:

{% highlight python %}
>>> fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
>>> for fruit in fruits:
        if fruit == 'date':
            break
        print('Fruit:', fruit)

# Output
Fruit: apple
Fruit: banana
Fruit: cherry
{% endhighlight %}

In this code, the loop iterates over the <code>fruits</code> list. When the condition <code>fruit == 'date'</code> is met, the <code>break</code> statement is executed, and the loop is terminated. The output of this code will be:

The <code>continue</code> statement, on the other hand, is used to skip the rest of the code inside the loop for the current iteration and move on to the next iteration.
Here's an example that demonstrates the usage of <code>continue</code>:

{% highlight python %}
>>> numbers = [1, 2, 3, 4, 5]
>>> for num in numbers:
        if num % 2 == 0:
            continue
        print('Number:', num)

# Output
Number: 1
Number: 3
Number: 5
{% endhighlight %}

In this code, the loop iterates over the <code>numbers</code> list. When encountering an even number (i.e., <code>num % 2 == 0</code>), the <code>continue</code> statement is executed, and the remaining code inside the loop for that iteration is skipped. The output of this code will be:

By using <code>break</code> and <code>continue</code>, we can have more control over the flow of the loop and skip or terminate the loop based on specific conditions.

### Avoiding Infinite Loops and Ensuring Loop Termination

Infinite loops are loops that do not have a termination condition or have a condition that never becomes false. They can cause a program to hang or consume excessive resources, leading to undesirable outcomes. It's crucial to avoid infinite loops and ensure that our loops eventually terminate. <br>
To prevent infinite loops, we should carefully design the loop's condition to become false at some point. It's essential to consider all possible scenarios and ensure that the loop terminates in each case.

Here's an example of a well-structured while loop with a termination condition:

{% highlight python %}
>>> x = 1
>>> while x <= 5:
        print(x)
        x += 1

# Output
1
2
3
4
5
{% endhighlight %}

In this example, the loop iterates as long as the value of <code>x</code> is less than or equal to 5. The value of <code>x</code> is incremented by 1 with each iteration, ensuring that the condition will eventually become false, terminating the loop.

If you find yourself trapped in an infinite loop while running a program, you can manually interrupt the execution. Pressing <code>Ctrl+C</code> (or <code>Cmd+C</code> on macOS) in the terminal will stop the program and allow you to regain control.

It's important to be cautious and thoroughly test your loops to ensure that they terminate under all circumstances. Reviewing the logic of your loop and verifying that the termination condition is correctly defined will help you avoid unintended infinite loops and ensure the proper execution of your program.

### Nested Loops: Iterating Within Iterations

Nested loops are loops that are placed inside another loop. They allow us to iterate within iterations, performing more complex operations or accessing nested data structures. Any type of loop can be nested under any other loop, such as a for loop inside a for loop, a for loop inside a while loop, or a while loop nested inside a for loop.
Nested loops are commonly used when we need to iterate over multiple dimensions or combinations of data. Here's an example of a nested loop:

{% highlight python %}
>>> for i in range(1, 4):
        print('i =', i)
        for j in range(4, 7):
            print('  j =', j)

# Output
i = 1
  j = 4
  j = 5
  j = 6
i = 2
  j = 4
  j = 5
  j = 6
i = 3
  j = 4
  j = 5
  j = 6
{% endhighlight %}

In this example, we have a for loop nested inside another for loop. The outer loop iterates over the numbers 1, 2, and 3, and for each iteration, the inner loop iterates over the numbers 4, 5, and 6. The output will be:

Nested loops allow us to perform operations on each combination of the outer and inner loop variables. They are commonly used in scenarios where we need to work with two or more dimensions of data or perform computations involving multiple levels of iteration. However, it's important to be cautious with nested loops, especially when dealing with large data sets or complex operations. Nesting too many loops or using inefficient algorithms can result in slower execution times and unnecessary computational overhead. It's always a good practice to analyze the complexity of nested loops and optimize the code if needed.

## Putting It All Together: Practical Examples of Control Flow

Now that we understand how if statements and while loops work, let's explore some practical examples of using control flow statements to solve programming problems and implement conditional and iterative logic in real-world scenarios.

### Solving Programming Problems Using Control Flow

Control flow statements play a crucial role in solving various programming problems. Whether it's determining the maximum value in a list, validating user input, or implementing algorithms, control flow allows us to make decisions and perform actions accordingly.

For example, let's consider the problem of finding the maximum value in a list. We can use a combination of if statements and a variable to keep track of the maximum value while iterating over the elements of the list.

{% highlight python %}
numbers = [5, 2, 8, 3, 1]
max_value = numbers[0]

for num in numbers:
    if num > max_value:
        max_value = num

print("The maximum value is:", max_value)

# Output
The maximum value is: 8
{% endhighlight %}

In this example, we initialize <code>max_value</code> with the first element of the list. Then, we iterate over the remaining elements of the list and update <code>max_value</code> if we encounter a larger number. Finally, we print the maximum value.

### Implementing Conditional and Iterative Logic in Real-World Scenarios

Control flow statements are not limited to solving programming problems; they are also widely used in real-world scenarios to implement conditional and iterative logic. For instance, consider an e-commerce application that calculates the total price of a customer's shopping cart based on discounts and promotions.

{% highlight python %}
cart_total = 600
discount = 0

if cart_total >= 1000:
    discount = 0.1
elif cart_total >= 500:
    discount = 0.05

final_price = cart_total - (cart_total * discount)
print("Final price after discount:", final_price)

# Output
Final price after discount: 570.0
{% endhighlight %}

In this example, we use if and elif statements to check the value of <code>cart_total</code> and determine the appropriate discount based on the total amount spent by the customer. The final price is then calculated by subtracting the discount from the cart total.

## Summary

Great job! You've navigated the world of Python flow control. You now know how to make decisions, create loops, and structure your code for various scenarios. Understanding control structures is a critical skill for developing sophisticated Python programs. With this knowledge, you're ready to move on to [Python Functions](/workspace/python-101/functions), the building blocks of code.
