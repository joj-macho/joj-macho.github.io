---
layout: post
title: "Python File Handling"
sub-title: "Working with External Data in Python"
tags: ["python", "basics"]
category: "python"
permalink: /workspace/python/file-handling
---

File handling is a crucial aspect of programming, enabling interaction with external data sources. In Python, file handling allows you to read from and write to files, making it possible to store and retrieve information persistently. This tutorial will guide you through the essential concepts of file handling in Python, covering file modes, reading and writing files, and best practices.

* toc
{:toc}

## Working with Directory Paths

---

Before working with files and folders, understanding how to locate and specify their paths is essential.

A file is characterized by two essential properties: a **file name** and a **path**. The file name is the name of the file, while the path specifies its location on the computer. For instance, consider the file "anime_list.txt" located in the path "home/joj-macho/Documents/AnimeStuff/". The file extension, the part after the last period, indicates the file type. Folders, or directories, can contain files and other folders, creating a hierarchical structure. For example, "anime_list.txt" resides in the "AnimeStuff" folder, which is inside the "Documents" folder, which is inside the "joj-macho" folder, itself within the "home" folder.

A directory path is a string of characters used to uniquely identify a location in a directory structure. The path starts with a root directory, designated by a letter (such as `C:`) in Windows and a forward slash (`/`) in Unix-based systems. Pathnames appear differently depending on the operating system.

- Windows: Backslash (`\`)
- macOS and Unix: Forward slash (`/`)

To address cross-platform compatibility, Python provides standard library modules such as `os` and `pathlib`.

### The Operating System Module

The `os` module offers various methods for handling paths and directories.

{% highlight python %}
import os

# Get the current working directory
current_directory = os.getcwd()
print(current_directory)

# Change the current working directory
os.chdir('/path/to/new/directory')

# Join paths in a system-agnostic way
path = os.path.join('folder1', 'folder2', 'file.txt')

# Normalize a path
normalized_path = os.path.normpath('folder1/folder2/file.txt')
{% endhighlight %}

The `os.getcwd()` method returns the current working directory. This is the folder that contains the running program. It's crucial for understanding the context in which your code is executing. `The os.chdir()` method changes the current working directory to the specified path. This is useful when you need to perform operations in a different directory. The `os.path.join()` method joins the provided path components using the appropriate separator for the operating system. This ensures platform-independent manipulation of file and folder names. The `os.path.normpath()` method normalizes the path, converting it to the appropriate format for the operating system. This is useful for dealing with paths that may have inconsistent separators.

#### Absolute vs. Relative Paths

- **Absolute Path**: Full directory path from the drive to the current file or folder.
- **Relative Path**: Interpreted from the perspective of the current working directory.

{% highlight python %}
# Using relative paths
relative_path = os.path.join('folder1', 'folder2', 'file.txt')

# Using dot (.) and dot-dot (..) shortcuts
current_folder = os.path.abspath('.')
parent_folder = os.path.abspath('..')
{% endhighlight %}

Creating a path using `os.path.join()` with folder and file names creates a relative path. It's interpreted based on the current working directory. The `os.path.abspath()` method returns the absolute path of the specified location. Using `.` refers to the current working directory, and `..` refers to the parent directory.

If a file, folder, or user-defined module that you need to access is stored in the same folder as your code, you can simply refer to the item’s name in your code, without the need for a path or a "dot" shortcut.

### The `pathlib` Module

The `pathlib` module treats paths as objects rather than strings, providing a more convenient and platform-independent way to work with directories.

{% highlight python %}
from pathlib import Path

# Create a path
path = Path('folder1', 'folder2', 'file.txt')

# Platform-independent path representation
print(path)

# Output:
folder1/folder2/file.txt
{% endhighlight %}

The `pathlib` module simplifies path operations and is particularly useful for cross-platform programs. The `Path` class represents the path, and you can manipulate it using various methods.

#### Basic Text File Operations with Pathlib

The `pathlib` module provides convenient methods for basic text file interactions.

{% highlight python %}
from pathlib import Path

file_path = Path('hello.txt')
file_path.write_text('Hello, world!')
content = file_path.read_text()

print(content)

# Output: 
Hello, world!
{% endhighlight %}

In this example, `write_text()` creates a new text file or overwrites an existing one with the specified content ('Hello, world!'). The method returns the number of characters written (in this case, 13). Subsequently, `read_text()` reads and returns the contents of the file as a string.

These methods offer simplicity for basic file interactions. However, for more common operations, using the `open()` function and file objects is prevalent.

The `pathlib` module offers a variety of useful methods for working with paths and directories. The table below summarizes some of the more useful methods available through the `pathlib` module. For the full list, visit the documentation at [Python pathlib Documentation](https://docs.python.org/3/library/pathlib.xhtml){:target='_blank'}.

<style>
    table {
        border-collapse: collapse;
        max-width: 80%;
        margin: 20px auto;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        text-align: center;
    }
    
    caption {
    caption-side: top;
    color: #adb5bd;
    font-style: italic;
</style>

<table class="table table-dark table-responsive table-sm table-striped table-hover caption-top">
    <caption>Pathlib Methods and Descriptions</caption>
    <thead>
        <tr>
            <th scope="col">Method</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">
        <tr>
            <td><code>Path.parts</code></td>
            <td>Returns a tuple containing the components of the path.</td>
        </tr>
        <tr>
            <td><code>Path.parent</code></td>
            <td>Returns the parent directory of the path.</td>
        </tr>
        <tr>
            <td><code>Path.name</code></td>
            <td>Returns the last component of the path.</td>
        </tr>
        <tr>
            <td><code>Path.stem</code></td>
            <td>Returns the last component of the path without the suffix.</td>
        </tr>
        <tr>
            <td><code>Path.suffix</code></td>
            <td>Returns the file suffix of the last component of the path.</td>
        </tr>
        <tr>
            <td><code>Path.anchor</code></td>
            <td>Returns the anchor part of the path (e.g., the root).</td>
        </tr>
        <tr>
            <td><code>Path.exists()</code></td>
            <td>Checks whether the path points to an existing file or directory.</td>
        </tr>
        <tr>
            <td><code>Path.is_dir()</code></td>
            <td>Checks whether the path points to a directory.</td>
        </tr>
        <tr>
            <td><code>Path.is_file()</code></td>
            <td>Checks whether the path points to a regular file.</td>
        </tr>
        <tr>
            <td><code>Path.mkdir()</code></td>
            <td>Creates a new directory at the path.</td>
        </tr>
        <tr>
            <td><code>Path.rmdir()</code></td>
            <td>Removes the directory at the path.</td>
        </tr>
        <tr>
            <td><code>Path.rename(target)</code></td>
            <td>Renames the path to the specified target path.</td>
        </tr>
        <tr>
            <td><code>Path.unlink()</code></td>
            <td>Removes the file or symbolic link at the path.</td>
        </tr>
    </tbody>
</table>

Understanding these methods can greatly enhance your ability to manipulate paths and directories in a Python program.

## File Input/Output (I/O)

---

File Input/Output (I/O) is a fundamental aspect of programming, allowing interaction with external data sources through reading from and writing to files. In Python, the `open()` function plays a pivotal role in facilitating file I/O. It opens files and returns file objects, enabling various operations on the files.

### Opening and Closing Files

The `open()` function is the gateway to file I/O in Python. It takes a file name and a mode as arguments, returning a file object.

Modes for opening a file include:

- `'r'`: Read (default mode). Opens the file for reading.
- `'w'`: Write. Opens the file for writing. Creates a new file or truncates an existing file.
- `'a'`: Append. Opens the file for writing, appending to the end of the file if it exists.
- `'b'`: Binary mode. Reads or writes the file in binary mode (e.g., `'rb'` or `'wb'`).

{% highlight python %}
# Opening a file for reading
file = open('example.txt', 'r')
content = file.read()
print(content)
file.close()  # Always close the file after reading or writing

# Opening a file for writing
file = open('example.txt', 'w')
file.write('Hello, Python!')
file.close()

# Opening a file in binary mode
file = open('binary_data.bin', 'rb')
binary_content = file.read()
file.close()
{% endhighlight %}

### Reading from Files

Python provides various methods for reading from a file object:

- `read()`: Reads the entire file.
- `readline()`: Reads a single line from the file.
- `readlines()`: Reads all lines from the file and returns them as a list.

{% highlight python %}
# Reading the entire file
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)

# Reading a single line
with open('example.txt', 'r') as file:
    line = file.readline()
    print(line)

# Reading all lines into a list
with open('example.txt', 'r') as file:
    lines = file.readlines()
    print(lines)
{% endhighlight %}

### Writing to Files

Similarly, Python offers methods for writing to a file object:

- `write()`: Writes a string to the file.
- `writelines()`: Writes a list of strings to the file.

{% highlight python %}
# Writing to a file
with open('example.txt', 'w') as file:
    file.write('Hello, Python!')

# Writing multiple lines
with open('example.txt', 'w') as file:
    lines = ['Line 1\n', 'Line 2\n', 'Line 3\n']
    file.writelines(lines)
{% endhighlight %}

### Context Managers and the `with` Statement

The `with` statement simplifies file I/O by automatically handling the opening and closing of files. It ensures that resources are properly managed and that the file is closed even if an error occurs.

{% highlight python %}
# Using with statement for file I/O
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
# File is automatically closed outside the 'with' block
{% endhighlight %}

The `with` statement is recommended for file I/O as it promotes cleaner and more readable code.

## Handling Exceptions in File Handling

---

File operations can encounter various errors, such as file not found, insufficient permissions, or disk full. Properly handling these exceptions ensures that your program responds gracefully to unexpected situations.

### Using `try`, `except`, and `finally`

Python provides a mechanism to handle exceptions using `try`, `except`, and `finally` blocks. This allows you to catch and manage exceptions, and ensure that certain actions are taken, whether an exception occurs or not.

{% highlight python %}
try:
    file = open('nonexistent_file.txt', 'r')
    content = file.read()
    print(content)
except FileNotFoundError:
    print('File not found!')
finally:
    if 'file' in locals():
        file.close()
{% endhighlight %}

In this example, the code attempts to open and read a file that does not exist. The `except` block catches the `FileNotFoundError` exception, and the `finally` block ensures that the file is closed, whether an exception occurs or not.

## More File Operations

---

Building on the basics of file I/O, this section explores more advanced file operations and techniques.

### Working with Binary Files

While text files store data as human-readable text, binary files store data in a format that is not easily human-readable. Binary files can include images, audio, video, or any other format where the interpretation relies on specific applications.

{% highlight python %}
# Reading from a binary file
with open('binary_data.bin', 'rb') as file:
    binary_content = file.read()
    print(binary_content)

# Writing to a binary file
with open('new_binary_data.bin', 'wb') as file:
    data = b'\x48\x65\x6c\x6c\x6f\x2c\x20\x50\x79\x74\x68\x6f\x6e'
    file.write(data)
{% endhighlight %}

### Using the `shutil` Module for File and Directory Management

The `shutil` module provides a higher-level interface for file operations, including functions to copy, move, and delete files and directories.

{% highlight python %}
import shutil

# Copying a file
shutil.copy('source.txt', 'destination.txt')

# Moving a file
shutil.move('old_location.txt', 'new_location.txt')

# Deleting a file
os.remove('file_to_delete.txt')
{% endhighlight %}

The `shutil` module simplifies file and directory operations, offering a more convenient interface than low-level file handling.

### Leveraging Other Built-in Modules

Python's standard library includes various modules that can be leveraged for specific file-related tasks. For example:

- Using the `csv` module for reading and writing CSV files.
- Using the `json` module for working with JSON data.
- Using the `xml.etree.ElementTree` module for parsing XML files.

Each module comes with its set of functions and methods tailored to its specific file format.

## Serialization and Deserialization

---

Serialization is the process of converting complex data types, such as objects or data structures, into a format that can be easily stored or transmitted. Deserialization is the reverse process, where the serialized data is reconstructed back into its original form.

### The `pickle` Module

The `pickle` module in Python provides a way to serialize and deserialize objects. It is particularly useful for storing and retrieving complex data structures.

{% highlight python %}
import pickle

data = {'name': 'John', 'age': 30, 'city': 'New York'}

# Serializing the data
with open('data.pkl', 'wb') as file:
    pickle.dump(data, file)

# Deserializing the data
with open('data.pkl', 'rb') as file:
    loaded_data = pickle.load(file)

print(loaded_data)

# Output:
{'name': 'John', 'age': 30, 'city': 'New York'}
{% endhighlight %}

The `pickle` module allows the serialization of Python objects, including custom classes and instances.

### The `json` Module

The `json` module is widely used for working with JSON data, a lightweight data interchange format. It can serialize Python data structures into JSON format and deserialize JSON back into Python objects.

{% highlight python %}
import json

data = {'name': 'Alice', 'age': 25, 'city': 'Paris'}

# Serializing the data to JSON
json_data = json.dumps(data)

# Deserializing JSON back to a Python object
loaded_data = json.loads(json_data)

print(loaded_data)

# Output:
{'name': 'Alice', 'age': 25, 'city': 'Paris'}
{% endhighlight %}

The `json` module is suitable for interoperability with other programming languages and for storing configuration data.

### The `shelve` Module

The `shelve` module provides a simple interface for persistently storing Python objects. It acts as a persistent, dictionary-like object, allowing you to store and retrieve Python objects using keys.

{% highlight python %}
import shelve

# Writing to a shelf
with shelve.open('myshelf') as shelf:
    shelf['name'] = 'Bob'
    shelf['age'] = 28

# Reading from a shelf
with shelve.open('myshelf') as shelf:
    name = shelf['name']
    age = shelf['age']

print(name, age)

# Output:
Bob 28
{% endhighlight %}

The `shelve` module is useful for saving and loading application state or caching expensive computations.

## Working with Different File Formats

---

https://pythonnumericalmethods.berkeley.edu/notebooks/chapter11.04-JSON-Files.html

While the `print` function has served us well for displaying data on the screen, storing and sharing data with other programs or colleagues involves different file formats. Python offers robust support for handling various file formats, each presenting its own set of challenges and best practices.

### Reading and Writing TXT Files

Text files, often denoted by the `.txt` extension, consist solely of plain text. However, effective handling of text files requires an understanding of the specific format expected by both the programs you write and those that read your text files.

#### Reading from a txt File

Reading from a text file in Python involves opening the file, reading its contents, and processing the data as needed. The `open()` function is commonly used, allowing you to specify the file's path and the desired mode (read, write, etc).

{% highlight python %}
with open('data.txt', 'r') as file:
    content = file.read()
    print(content)
{% endhighlight %}

#### Writing to a txt File

When writing to a text file, you open the file in write mode ('w') and use methods like `write()` to add content. The `with` statement ensures proper file handling, automatically closing the file when the block is exited.

{% highlight python %}
with open('data.txt', 'w') as file:
    file.write('Hello, this is a sample text.')
{% endhighlight %}

### Reading and Writing CSV Files

Comma-Separated Values (CSV) is a popular format for tabular data. Python's built-in `csv` module simplifies working with CSV files. You can see the details in the [documentation](https://docs.python.org/3/library/csv.html){:target='_blank'}.

#### Reading from a CSV File

{% highlight python %}
import csv

# Reading from a CSV file
with open('data.csv', 'r') as file:
    csv_reader = csv.reader(file)
    for row in csv_reader:
        print(row)
{% endhighlight %}

#### Writing to a CSV File

{% highlight python %}
import csv

# Writing to a CSV file
data = [['Name', 'Surname', 'Age'],
        ['John', 'Doe', 25],
        ['Jane', 'Doe', 24]]
with open('output.csv', 'w', newline='') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(data)
{% endhighlight %}

Working with CSV files is common in data analysis, and Python's `csv` module provides a straightforward approach for handling tabular data in this format.

### Working with JSON Files

JSON (JavaScript Object Notation) is a popular data interchange format. The `json` module simplifies working with JSON data in Python.

#### Reading from a JSON File

{% highlight python %}
import json

# Reading from a JSON file
with open('data.json', 'r') as file:
    json_data = json.load(file)
    print(json_data)
{% endhighlight %}

#### Writing to a JSON File

{% highlight python %}
import json

# Writing to a JSON file
data = {'name': 'Alice', 'age': 25, 'city': 'Paris'}
with open('output.json', 'w') as file:
    json.dump(data, file)
{% endhighlight %}

### Working with XML Files

XML (eXtensible Markup Language) is another format used for storing and transporting data. The `xml.etree.ElementTree` module provides tools for working with XML in Python.

#### Reading from an XML File

{% highlight python %}
import xml.etree.ElementTree as ET

# Reading from an XML file
tree = ET.parse('data.xml')
root = tree.getroot()
for child in root:
    print(child.tag, child.attrib)
{% endhighlight %}

#### Writing to an XML File

{% highlight python %}
import xml.etree.ElementTree as ET

# Writing to an XML file
root = ET.Element('root')
child = ET.SubElement(root, 'child')
tree = ET.ElementTree(root)
tree.write('output.xml')
{% endhighlight %}

### Working with Pickle Files

Pickle is a Python-specific binary format for serializing and deserializing objects. It's particularly useful for storing complex data structures.

#### Reading from a Pickle File

{% highlight python %}
import pickle

with open('data.pkl', 'rb') as pickle_file:
    data = pickle.load(pickle_file)
    print(data)
{% endhighlight %}

#### Writing to a Pickle File

{% highlight python %}
import pickle

data = {'name': 'Alice', 'age': 25, 'city': 'London'}

with open('data.pkl', 'wb') as pickle_file:
    pickle.dump(data, pickle_file)
{% endhighlight %}


### Working with HDF5 Files

HDF5 (Hierarchical Data Format version 5) is a file format and set of tools for managing complex data. The `h5py` library is commonly used for working with HDF5 files in Python.

#### Reading from an HDF5 File

{% highlight python %}
import h5py

with h5py.File('data.h5', 'r') as h5_file:
    data = h5_file['dataset'][:]
    print(data)
{% endhighlight %}

#### Writing to an HDF5 File

{% highlight python %}
import h5py

data = [1, 2, 3, 4, 5]

with h5py.File('data.h5', 'w') as h5_file:
    h5_file.create_dataset('dataset', data=data)
{% endhighlight %}


## Best Practices and Tips

---

Efficient and secure file handling is crucial for robust Python applications. Consider the following best practices and tips when working with files:

### Use Context Managers (`with` Statement)

Always use the `with` statement when working with files. It ensures that the file is properly closed, even if an exception occurs.

{% highlight python %}
with open('example.txt', 'r') as file:
    content = file.read()
    # File is automatically closed outside the 'with' block
{% endhighlight %}

### Error Handling

Implement robust error handling to gracefully manage unexpected situations. Use `try`, `except`, and `finally` blocks to handle exceptions and ensure resource cleanup.

{% highlight python %}
try:
    file = open('example.txt', 'r')
except FileNotFoundError:
    print('File not found!')
finally:
    if 'file' in locals():
        file.close()
{% endhighlight %}

In this example, the `try` block attempts to open a file for reading. If the file is not found (`FileNotFoundError`), the `except` block is executed, printing an error message. The `finally` block ensures that the file is closed, whether an exception occurred or not.

### Use Relative Paths

When working with files, prefer using relative paths to make your code more portable. Absolute paths may not work across different systems, while relative paths are interpreted based on the current working directory.

{% highlight python %}
relative_path = os.path.join('folder1', 'folder2', 'file.txt')
{% endhighlight %}

In this example, `os.path.join()` is used to create a relative path that works on different operating systems. This ensures that the code is more flexible and can be easily moved to different directories.

### Plan for Exceptions

Consider potential exceptions that may occur during file operations, such as `FileNotFoundError` or `PermissionError`. Handling these exceptions explicitly in your code improves its robustness.

{% highlight python %}
try:
    with open('example.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    print('File not found!')
except PermissionError:
    print('Permission error!')
{% endhighlight %}

In this example, both `FileNotFoundError` and `PermissionError` are caught separately, allowing your program to respond appropriately to different error scenarios.

### Validate User Input for File Paths

If your program relies on user input for file paths, validate and sanitize the input to prevent potential security issues or errors. Ensure that the provided path is within the expected directory and meets your application's requirements.

{% highlight python %}
user_input = input('Enter file path: ')
if os.path.isfile(user_input):
    with open(user_input, 'r') as file:
        content = file.read()
else:
    print('Invalid file path!')
{% endhighlight %}

This snippet prompts the user for a file path, checks if the path is valid, and reads the file if it exists. Validating user input is crucial for preventing unintended consequences.

### Use `pathlib` for Path Manipulation

The `pathlib` module provides a powerful and expressive way to work with file paths. It offers an object-oriented interface for path manipulation and is preferred over string-based path operations.

{% highlight python %}
from pathlib import Path

path = Path('folder1', 'folder2', 'file.txt')
with path.open() as file:
    content = file.read()
{% endhighlight %}

In this example, a `Path` object is used to represent the file path. The `open()` method of the `Path` object is then used for file I/O, providing a more convenient and readable approach.

### Keep Sensitive Information Secure

When working with files that contain sensitive information, such as passwords or API keys, follow security best practices. Avoid hardcoding sensitive information directly into your code, and consider using environment variables or configuration files with restricted access.

{% highlight python %}
import os

api_key = os.environ.get('API_KEY')
if api_key:
    # Use the API key for authentication
    pass
else:
    print('API key not found!')
{% endhighlight %}

Storing sensitive information securely helps protect your application and user data from potential security threats.

### Check File Existence Before Opening

Before opening a file, check whether it exists to avoid unnecessary errors. This is especially important when working with user-provided paths or dynamically generated file names.

{% highlight python %}
file_path = 'example.txt'
if os.path.exists(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
else:
    print('File does not exist!')
{% endhighlight %}

By verifying file existence beforehand, your code can handle the absence of a file in a controlled manner.

## Practical Applications and Use Cases

---

Now that you've grasped the essential concepts of file handling in Python, let's explore practical applications and use cases where these skills are indispensable.

### Configuration File Management

Many applications rely on configuration files to store settings and parameters. With your newfound knowledge, you can efficiently read, modify, and write configuration files. Consider employing the `configparser` module, a part of the Python standard library, to streamline these operations.

{% highlight python %}
import configparser

# Reading from a configuration file
config = configparser.ConfigParser()
config.read('config.ini')
value = config.get('section', 'key')

# Modifying and writing to the configuration file
config.set('section', 'key', 'new_value')
with open('config.ini', 'w') as config_file:
    config.write(config_file)
{% endhighlight %}

### Log File Analysis

In the realm of data analysis, log files are treasure troves of information. Python's file handling capabilities allow you to parse and analyze log files efficiently. Leverage regular expressions (`re` module) or specialized parsing libraries like `loguru` to extract meaningful insights from log data.

{% highlight python %}
import re

# Parsing log file using regular expressions
with open('logfile.txt', 'r') as log_file:
    for line in log_file:
        match = re.search(r'(\d{2}/\d{2}/\d{4}) - (\w+)', line)
        if match:
            date, log_level = match.groups()
            print(f"Date: {date}, Log Level: {log_level}")
{% endhighlight %}

### Data Processing Pipelines

In data-centric applications, handling large datasets efficiently is critical. Python's file handling, combined with libraries like `pandas` and `numpy`, enables the creation of robust data processing pipelines. You can read data from various sources, perform transformations, and store the results back in files or databases.

{% highlight python %}
import pandas as pd

# Reading CSV file into a DataFrame
data = pd.read_csv('data.csv')

# Performing data transformations
transformed_data = data.apply(lambda x: x * 2)

# Writing the transformed data back to a CSV file
transformed_data.to_csv('transformed_data.csv', index=False)
{% endhighlight %}

### File Synchronization and Backup

Implementing file synchronization and backup functionalities is a common requirement. Python's `shutil` module, combined with file handling techniques, allows you to create scripts that synchronize, backup, or archive files based on specified criteria.

{% highlight python %}
import shutil

# Synchronizing files between two directories
shutil.copytree('source_directory', 'backup_directory')

# Archiving files into a zip file
shutil.make_archive('backup_archive', 'zip', 'backup_directory')
{% endhighlight %}

### Custom Data Serialization

In scenarios where standard data interchange formats are not suitable, you can implement custom data serialization using Python's file handling capabilities. This is particularly useful when dealing with application-specific data structures.

{% highlight python %}
import pickle

# Serializing and deserializing custom data structures
class CustomObject:
    def __init__(self, name, value):
        self.name = name
        self.value = value

obj = CustomObject('example', 42)

# Serializing the custom object
with open('custom_data.pkl', 'wb') as file:
    pickle.dump(obj, file)

# Deserializing the custom object
with open('custom_data.pkl', 'rb') as file:
    loaded_obj = pickle.load(file)

print(loaded_obj.name, loaded_obj.value)
{% endhighlight %}

### More Examples

Explore additional examples and comprehensive programs on my [GitHub page](https://github.com/joj-macho){:target='_blank'}. The repository contains various projects and programs showcasing different aspects of Python programming.

To explore a broader range of programs and projects, take a look at my [GitHub Repositories](https://github.com/joj-macho?tab=repositories){:target='_blank'}. There, you'll find a diverse collection of code, covering areas such as web development, data science, machine learning, and more.

For practical exercises and reinforcement of error handling concepts, check out the [Python Error Handling Exercises](https://github.com/joj-macho/Python-Exercise-Playground/blob/main/08_file_handling.ipynb){:target='_blank'}. These exercises are designed to provide hands-on practice, helping you solidify your understanding of error handling in Python.

Explore these practical applications to solidify your understanding and consider incorporating them into your projects. As you encounter diverse scenarios in your coding journey, the file handling skills you've acquired will prove to be an invaluable asset. For hands-on practice and reinforcement of these concepts, check out the [Python File Handling Exercises](https://github.com/joj-macho/Python-Exercise-Playground/blob/main/08_file_handling.ipynb){:target='_blank'}.

## Summary

---

Congratulations on completing the tutorial on Python file handling! You've acquired a fundamental skill for interacting with external data, enabling seamless reading from and writing to files. This proficiency enhances your capabilities for diverse data processing tasks, making Python an invaluable tool in your programming arsenal.  As you advance, consider exploring the next topic: [Object-Oriented Programming in Python](/workspace/python/python-oop) to delve into the principles and practices of object-oriented programming (OOP), including classes, objects, inheritance, and more.