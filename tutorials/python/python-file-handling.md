---
layout: post
title: "Python File Handling"
sub-title: "Working with External Data in Python"
tags: ["python", "basics"]
category: "python"
permalink: /workspace/python/file-handling
---

File handling is a crucial aspect of programming, enabling the interaction with external data sources. In Python, file handling allows you to read from and write to files, making it possible to store and retrieve information persistently. This tutorial will guide you through the essential concepts of file handling in Python, covering file modes, reading and writing files, and best practices.

## File Input/Output (I/O) <hr>

Before delving into reading from or writing to a file, it's crucial to prepare the file and inform Python about our intended actions.

File Input/Output (I/O) is the process of interacting with external data sources by reading from and writing to files. In Python, the `open()` function plays a pivotal role in facilitating file I/O. It opens files and returns file objects, allowing us to perform operations on the files.

### Understanding File Properties

A file is characterized by two essential properties: a file name and a path. The file name is the name of the file, while the path specifies its location on the computer. For instance, consider the file "anime_list.txt" located in the path "home/joj-macho/Documents/AnimeStuff/
". The file extension, the part after the last period, indicates the file type. Folders, or directories, can contain files and other folders, creating a hierarchical structure. For example, "anime_list.txt" resides in the "AnimeStuff" folder, which is inside the "Documents" folder, which is inside the "joj-macho" folder, itself within the "home" folder.

On Windows, paths use backslashes (\) as separators, while macOS and Linux use forward slashes (/). To ensure cross-platform compatibility, the `Path()` function in the `pathlib` module helps handle different path separators.

{% highlight python %}
>>> from pathlib import Path
>>> Path('One', 'Two', 'Three')
PosixPath('One/Two/Three')
{% endhighlight %}

The output, in this case, would be `PosixPath('One/Two/Three')`, showcasing the path using the appropriate separator based on the operating system. POSIX is a set of standards for Unix-like operating systems such as Linux.

### Basic Text File Operations with `pathlib`

The pathlib module provides useful methods for basic text file interactions:

{% highlight python %}
from pathlib import Path

file_path = Path('hello.txt')
file_path.write_text('Hello, world!')
content = file_path.read_text()

print(content)
{% endhighlight %}

In this example, `write_text()` creates a new text file or overwrites an existing one with the specified content ('Hello, world!'). The method returns the number of characters written (in this case, 13). Subsequently, `read_text()` reads and returns the contents of the file as a string.

These methods offer simplicity for basic file interactions. However, for more common operations, using the `open()` function and file objects is prevalent.

Performing file I/O in Python involves three fundamental steps:

- Call the `open()` function to obtain a File object.
- Call the `read()` or `write()` method on the File object.
- Close the file by calling the `close()` method on the File object.

## Opening and Closing Files <hr>

In Python, the `open()` function is used to open files. It takes two parameters: the file name and the mode. The mode determines whether the file will be opened for reading, writing, or both. The most common modes are:

- 'r': Read (default mode). Opens the file for reading.
- 'w': Write. Opens the file for writing. Creates a new file or truncates an existing file to zero length.
- 'a': Append. Opens the file for writing. Creates a new file or appends to an existing file.
- 'b': Binary mode. Appended to other modes, like 'rb' or 'wb', to handle binary data.
- 'x': Exclusive creation. Opens the file for exclusive creation. If the file already exists, the operation fails.

Here's an example of opening and closing a file in read mode:

{% highlight python %}
# Opening a file in read mode
file_path = 'example.txt'
file = open(file_path, 'r')

# Your code for reading from the file goes here

# Closing the file
file.close()
{% endhighlight %}

It's crucial to close files after processing to free up system resources.

## Reading from Files <hr>

Once a file is open, you can read its contents using various methods:

- **`read()`**: The `read()` method reads the entire file content as a string.

{% highlight python %}
file = open('example.txt', 'r')
content = file.read()
print(content)
file.close()
{% endhighlight %}

- **`readline()`**: The `readline()` method reads a single line from the file.

{% highlight python %}
file = open('example.txt', 'r')
line = file.readline()
print(line)
file.close()
{% endhighlight %}

- **`readlines()`**: The `readlines()` method reads all lines of the file and returns them as a list.

{% highlight python %}
file = open('example.txt', 'r')
lines = file.readlines()
print(lines)
file.close()
{% endhighlight %}

## Writing to Files <hr>

To write to a file, open it in write mode ('w'). If the file does not exist, Python will create it. If the file already exists, opening it in write mode will erase the previous content.

- **`write()`**: The `write()` method writes a string to the file.

{% highlight python %}
file = open('example.txt', 'w')
file.write('Hello, World!')
file.close()
{% endhighlight %}

- **`writelines()`**: The `writelines()` method writes a list of strings to the file.

{% highlight python %}
lines = ['Line 1\n', 'Line 2\n', 'Line 3\n']
file = open('example.txt', 'w')
file.writelines(lines)
file.close()
{% endhighlight %}

#### Appending to Files

To append data to an existing file, open it in append mode ('a'). If the file does not exist, Python will create it.

{% highlight python %}
file = open('example.txt', 'a')
file.write('Appending to the file')
file.close()
{% endhighlight %}

## Best Practices <hr>

### Using with Statement

Python provides the `with` statement, which simplifies file handling. It automatically takes care of opening and closing the file.

- Reading with `with`:

{% highlight python %}
file_path = 'example.txt'
with open(file_path, 'r') as file:
    content = file.read()
    print(content)
# File is automatically closed outside the 'with' block
{% endhighlight %}

- Writing/Appending with `with`

{% highlight python %}
file_path = 'example.txt'
with open(file_path, 'w') as file:
    file.write('Hello, World!')
# File is automatically closed outside the 'with' block
{% endhighlight %}

### Handle Exceptions

Before performing file operations, check if the file exists to avoid errors.

{% highlight python %}
import os

file_path = 'example.txt'
if os.path.exists(file_path):
    # Perform file operations
else:
    print('File does not exist.')
{% endhighlight %}

Wrap file operations in try-except blocks to handle exceptions gracefully.

{% highlight python %}
try:
    with open('example.txt', 'r') as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print('File not found.')
except Exception as e:
    print(f'An error occurred: {e}')
{% endhighlight %}

## Summary

Congratulations on completing the tutorial on Python file handling. You've gained a crucial skill for interacting with external data, enabling you to read from and write to files seamlessly. This proficiency enhances your capabilities for diverse data processing tasks, making Python an invaluable tool in your programming arsenal. To further elevate your Python expertise, the next step involves [Error Handling and Exception in Python](/workspace/python/python-error-handling) where you will learn to fortify your code against unforeseen challenges and ensure robust program execution.
