---
layout: post
title: "Setting Up Your Python Programming Environment"
sub-title: "A Step-by-Step Guide to Configuring Your Coding Workspace"
tags: "python basics tutorial"
category: "python-101"
permalink: /workspace/python-101/setting-up
---

When starting with programming, one of the first things you need to do is set up your programming environment. This involves installing the necessary tools and software to write and run your code. In this section, I'll walk you through how to install Python and set it up on both Linux and Windows operating systems. I'll also provide tips on running Python code in a terminal session.

## The Easiest Way to Run Python <hr>

If you are new to programming, I recommend using Thonny IDE, which comes bundled with the latest version of Python. Thonny is a beginner-friendly IDE with features like code highlighting, autocomplete, and a simple interface. Here's how you can get started:

- Download <a href="https://thonny.org/" target="_new">Thonny IDE</a>.
- Run the installer to install <strong>Thonny</strong> on your computer.
- Create a new file by clicking on <strong>File</strong> &gt; <strong>New</strong>. Save the file with a `.py` extension, for example, `hello.py`, `example.py`, etc. You can give any name to the file, but it should end with <strong>.py</strong>.
- Write your Python code in the file and save it.
- Run the code by clicking on <strong>Run</strong> &gt; <strong>Run current script</strong>, or simply press <strong>F5</strong>.

## Install Python Separately <hr>

If you prefer not to use Thonny, here's how you can install Python on your computer:

- Go to the official Python website at <a href="https://python.org/downloads/" target="_new">python.org/downloads/</a>.
- Download the appropriate version of Python for your operating system.
- Run the installer and follow the instructions to install Python.
- Once Python is installed, you can create a new Python file in any text editor or IDE, write your code, and run it.

Python has evolved over time to become a versatile and powerful language. The latest version of Python is 3.11, but everything in this post should work on Python 3.6 or later. Python is available on Windows, macOS, and Linux, but the installation process may differ slightly depending on your operating system.

## Setting up Python for Linux <hr>

If you're a Linux user, you're in luck as Python comes pre-installed on most Linux systems. To check which version of Python is currently installed on your computer, open a terminal window and type "python3". You should see something like this:

{% highlight markdown %}
 $ python3
 Python 3.10.6 (main, Jan 03 2023, 11:10:38) [GCC 11.3.0] on linux
 Type "help", "copyright", "credits" or "license" for more information.
 >>> 
{% endhighlight %}


The output indicates that Python 3.10.6 is currently the default version of Python installed on this computer.

### Running Python in a Terminal Session

To run Python code in a terminal session, follow these steps:

- Open a terminal or command prompt on your system.
- Enter the command `python3` to start the Python interpreter.
- Once Python is running, you can enter Python code directly into the terminal.
- For example, you can enter the following line: `print('Hello Python')`.
- Press Enter, and the message "Hello Python" will be displayed in the terminal.
- To exit the Python interpreter, you can press `CTRL-D` or enter the command `exit()`.


### Checking Your Version of Python

- Open a terminal window (e.g., by running the Terminal application on Linux).
- Enter the command `python3` (with a lowercase 'p') to start the Python interpreter.
- The output will indicate the version of Python installed on your system.
- You should also see a Python prompt (`>>>`) where you can enter Python commands.


## Setting up Python for Windows <hr>

If you're a Windows user, setting up Python is a bit different, as it doesn't come pre-installed on the system. But don't worry, the process is simple and straightforward.

#### Step 1: Check if Python is Already Installed

Before downloading Python, check if it's already installed on your system:

- Go to the Start menu and enter "command".
- Click on the Command Prompt app that appears.
- In the terminal window, type `python` (in lowercase) and press Enter.
- If you see a Python prompt (`>>>`), Python is already installed.
- If you get an error message or if the Microsoft Store opens, Python is not installed, and you should proceed to the next step.

#### Step 2: Download and Install Python

If Python is not installed or you have an older version, follow these steps to download and install the latest version:

- Go to the official Python website: <a href="https://python.org" target="_new">python.org</a>.
- Hover over the "Downloads" link and click on the button for the latest version of Python.
- The correct installer for your system should start downloading automatically.
- Once the download is complete, run the installer.
- Make sure to select the "Add Python to PATH" option during the installation process. This makes it easier to configure your system correctly.

#### Step 3: Run Python in a Terminal Session

To run Python in a terminal session on Windows, follow these steps:

- Open a new command window by going to the Start menu and entering "command".
- Click on the Command Prompt app that appears.
- In the terminal window, type `python` and press Enter to start the Python interpreter.
- You should see a message indicating the version of Python installed.
- You can now enter Python commands at the prompt (`>>>`).
- For example, you can type `print('Hello Windows!')` and press Enter to print the message "Hello Windows!" to the console.
- To exit the Python interpreter, type `exit()` or press `CTRL-Z` followed by `ENTER`.


#### Step 4: Check Your Python Version

To check the version of Python installed on your system, follow these steps:

- Open a command window.
- Type `python --version` and press Enter.
- The output should display the version number.
- To exit the Python interpreter, type `exit()` or press `CTRL-Z` followed by `ENTER`.

If Python is installed correctly, you should see the version number displayed. Congratulations, you're now ready to start coding in Python!

If you encounter any error messages, it's possible that Python is not installed correctly or that it's not in your system's PATH. In this case, you may need to reinstall Python or modify your system's PATH variable to include the directory where Python is installed.

## Choosing the Best Python Text Editor or IDE <hr>

Choosing the right tool can make all the difference in your work. While it's true that you don't technically need to install an editor or integrated development environment (IDE) for Python, doing so can be a game-changer for your productivity and workflow.

### Text Editor vs. IDE: What's the Difference?

Before diving into my recommendations, let's first clarify the difference between a text editor and an IDE. A text editor is a basic application that allows you to write and edit plain text files, including code. It's like a digital notebook for your code. On the other hand, an IDE is a more comprehensive application that includes additional features like syntax highlighting, code completion, and debugging tools. Think of an IDE as a Swiss Army Knife for programming.

### Choosing an Editor or IDE for Python

There are many options available for Python editing. Python's website has a comprehensive list of editors, including popular options like <a href="https://www.sublimetext.com/" target="_new">Sublime Text</a>, <a href="https://atom.io/" target="_new">Atom</a>, and <a href="https://code.visualstudio.com" target="_new">Visual Studio Code</a>, as well as several IDEs such as <a href="https://www.jetbrains.com/pycharm/" target="_new">PyCharm</a>, <a href="https://www.spyder-ide.org/" target="_new">Spyder</a>, and <a href="https://docs.python.org/3/library/idle.html" target="_new">IDLE</a>.

At the end of the day, the editor or IDE you choose should depend on your personal preference and workflow. However, if you're just starting with Python, I recommend a beginner-friendly option that's easy to use and offers a range of features to support your growth as a programmer.

### My Top Pick: Visual Studio Code

After testing various editors and IDEs, I recommend Visual Studio Code (VS Code) as the best tool for Python programming. Here's why:

- VS Code is a powerful, professional-quality text editor that's free and open-source.
- It supports most programming languages, including Python.
- It's highly customizable, with a range of extensions and themes available to tailor it to your needs.
- It offers a range of features like debugging tools, code completion, and version control integration.
- It has a large and active community of developers, with regular updates and support available.

If you're sold on using VS Code, the next step is to install it.

### Installing VS Code

Installing VS Code is easy. Simply head over to the <a href="https://code.visualstudio.com" target="_new">official website</a> and click the Download for Windows button. Follow the prompts to install it on your computer. If you're using Ubuntu Linux, you can install VS Code directly from the Ubuntu Software Center.

Once it's installed, you can launch the app from your system and start coding.

## Running a Python Program <hr>

### Setting up Your Project Folder

Once you have installed Python and a text editor or IDE, the next step is to create a project folder to store your Python files. This folder will contain all the files related to your project, including your Python scripts, data files, and configuration files.

To create a project folder, choose a location on your computer where you want to store your project. Create a new folder and give it a name that describes your project.

### Writing Your First Python Program

Once you have set up your programming environment and created your project folder, it's time to write your first Python program. Here's a simple "Hello World" program to get you started:

{% highlight python %}
 print("Hello Python!")
{% endhighlight %}

Open your text editor or IDE and create a new file. Save the file as `hello.py` in your project folder. The extension `.py` tells your text editor that your file is written in Python.

### Running Your Python Program

To run your program in your text editor or IDE, you can simply select <em>Run > Run Without Debugging</em> or press <em>CTRL-F5</em>. Your program's output will be displayed in the console.

### Running Python Programs from a Terminal

Sometimes, it's useful to run your Python program from a terminal. This is especially handy if you want to run an existing program without opening it for editing. Below are step-by-step instructions for running your program from a terminal, depending on your operating system.

Follow these steps to run your Python program from a terminal:

- Open a terminal window.
- Use the `cd` command to navigate to the directory where your project is saved.
- Enter `python3 your_program_name.py` in the terminal and press Enter.
- Your program will run, and the output will be displayed in the terminal window.
              
It's that simple!

## Troubleshooting Common Programming Errors <hr>

If your program isn't running, don't worry! Here are some common errors and how to fix them:

- <strong>Syntax errors</strong>: Syntax errors occur when you don't use the correct syntax for Python. Common syntax errors include missing or extra quotation marks, parentheses, and semicolons. To fix these errors, carefully check your code to ensure that you have used the correct syntax.
- <strong>Naming errors</strong>: Naming errors occur when the names of variables and functions in your code don't match what you've used in your terminal or IDE. To fix these errors, check that you are using the correct names in your code and terminal/IDE.
- <strong>Indentation errors</strong>: Python relies on correct indentation, so indentation errors are a common issue. To fix these errors, make sure your code is indented correctly.
- <strong>Module not found errors</strong>: If you're using libraries or modules in your code, it's important to ensure that you have installed them correctly. Module not found errors occur when necessary libraries or modules are missing. To fix these errors, check that you have installed any necessary libraries or modules.
- <strong>File not found errors</strong>: File not found errors occur when you are running your program from the wrong directory or the file doesn't exist in that directory. To fix these errors, ensure that you are running your program from the correct directory and that the file exists in that directory.

By following these tips and tricks, you'll be able to troubleshoot and fix common programming errors with ease.

## Online Resources, Tutorials, and Courses <hr>

For beginners looking to dive deeper into Python programming, there are several online resources, tutorials, and courses available. Here are a few recommendations:

- <a href="https://www.python.org/" target="_new">Python.org</a>: The official website of Python offers extensive documentation, tutorials, and guides for learners of all levels. It's a great starting point to understand the language and its features.
- <a href="https://www.codecademy.com/learn/learn-python" target="_new">Codecademy</a>: Codecademy offers interactive Python courses that cater to beginners. Their hands-on approach allows you to practice writing code right in your browser.
- <a href="https://www.coursera.org/" target="_new">Coursera</a>: Coursera hosts a variety of Python courses from universities and institutions worldwide. "Python for Everybody" by the University of Michigan and "Programming for Everybody" by the University of Washington are highly recommended.
- <a href="https://www.edx.org/" target="_new">edX</a>: edX provides Python programming courses from renowned universities, including "Introduction to Python for Data Science" by Microsoft and "Introduction to Computer Science and Programming Using Python" by MIT.


## Summary <hr>

You've successfully taken your first step into the world of programming by setting up your development environment. This guide has walked you through installing Python on Linux and Windows and executing Python code in a terminal. Your environment is now configured correctly, and you're well-prepared to start writing and running Python code. As you continue your journey, you'll find that having a working programming environment is the foundation upon which you'll build your coding skills.

In the next section, [Python Definitions and Concepts](/workspace/python-101/definitions-and-concepts), you'll delve into Python's fundamental structure, covering variables, data types, and syntax. This knowledge will serve as the cornerstone for more advanced Python concepts.

