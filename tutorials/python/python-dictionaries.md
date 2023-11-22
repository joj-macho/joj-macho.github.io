---
layout: post
title: "Dictionary Data Types"
sub-title: "Understanding Python Data Structures: A Guide, Examples and Best Practices"
tags: ["python", "basics", "dict"]
category: "python-101"
permalink: /workspace/python-101/dictionaries
---

Welcome to another chapter in our tutorial series on Python data structures. In this tutorial, we will delve into the dictionary data type, a powerful tool for storing and manipulating data. Dictionaries play a vital role in Python programming, offering a versatile way to map unique keys to corresponding values, enabling efficient data access and modification.

## Understanding Python Dictionaries - Yet Another Library Analogy <hr>

Imagine you have a library, but instead of organizing books based on their physical order on shelves, you decide to create a special system using index cards. Each index card represents a unique topic or category, containing information about the books related to that topic. Just like in a traditional library, the index cards serve as keys, while the book information represents the values. This system allows you to quickly locate books related to a specific topic without searching through every shelf.

In Python, dictionaries resemble this index card catalog. The keys serve as the index cards, representing unique topics, while the values represent the associated data. Much like how you efficiently retrieve books by referring to the index cards, you can access and manipulate data in dictionaries using their keys.

### Why Use Dictionaries?

By utilizing dictionaries, you can create a powerful organizational structure for your data, enabling fast and efficient lookup based on unique identifiers. It's akin to having a personal knowledge management system that grants you rapid access to information without the need to search through every piece of data.

#### Fast Lookup

Dictionaries offer rapid access to data elements based on their keys. This allows for efficient retrieval and modification of values without the need for complex searching algorithms. Like having a well-organized catalog that allows you to quickly find the books you need by referring to the index cards.

#### Versatility

Dictionaries can store data of various types, including numbers, strings, lists, or even other dictionaries. This versatility enables you to create complex data structures that accurately represent real-world relationships. Much like being able to store not only books but also various types of media and additional information associated with each topic in our hypothetical library.

#### Dynamic Nature

Dictionaries are mutable, meaning you can modify them by adding, updating, or removing key-value pairs. This flexibility allows you to adapt and change the contents of dictionaries as your program evolves. Just like being able to add or remove books from the catalog or update the information on the index cards as needed.

#### More Properties of Dictionaries

To better understand dictionaries, let's explore their essential properties:

- **Non-Sequential**: Dictionaries are non-sequential, meaning the order of key-value pairs is not guaranteed. Unlike lists or tuples that rely on indexing, dictionaries use unique keys to access their corresponding values.
- **Key-Value Mapping**: Dictionaries establish a one-to-one correspondence between keys and values. Each key in a dictionary is associated with a specific value, forming a mapping relationship. Much like how each index card representing a topic is connected to the corresponding book information.
- **Uniqueness of Keys**: Every key in a dictionary must be unique. Duplicate keys are not allowed, as they would lead to ambiguity in accessing the corresponding values. Like ensuring that each index card represents a distinct topic, preventing confusion when searching for specific books.

## Creating and Initializing Dictionaries <hr>

To create a dictionary in Python, you enclose key-value pairs within curly brackets `{}`. Each key-value pair consists of a key, followed by a colon, and then the associated value. Individual key-value pairs are separated by commas. Here's a general syntax of creating a dictionary:

{% highlight markdown %}
dictionary_name = {key_1: value_1, key_2: value_2, ..., key_n: value_n}
{% endhighlight %}

An empty dictionary can be created by simply using a pair of curly brackets `{}`:

{% highlight python %}
>>> empty_dict = {}
>>> print(empty_dict)
{}
{% endhighlight %}

This creates an empty dictionary named `empty_dict`.

Here's an example of a non-empty dictionary:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
{% endhighlight %}

In this example, we create a dictionary named `book_details` with two key-value pairs. The keys are unique identifiers (ISBN numbers), and the values represent the corresponding book titles.

### Using Integer Keys 

Dictionaries in Python can use integer values as keys, similar to how lists use integers for indexes. The keys don't have to start at 0 and can be any integer. Here's an example:

{% highlight python %}
>>> book_reviews = {12345: 'Great book!', 42: 'Must-read'}
>>> print(book_reviews)
{12345: 'Great book!', 42: 'Must-read'}
{% endhighlight %}

In this case, we use integer keys (`12345` and `42`) to represent book review identifiers, and the values are the corresponding reviews.

### Creating a Dictionary with `dict()`

The `dict()` function can also be used to create a dictionary. You can pass different parameters to `dict()` to create dictionaries in various ways.

You can pass a pair of curly brackets to `dict()` with key-value pairs separated by commas:

{% highlight python %}
>>> book_genres = dict({'Sci-Fi': 'Dune', 'Mystery': 'Sherlock Holmes'})
>>> print(book_genres)
{'Sci-Fi': 'Dune', 'Mystery': 'Sherlock Holmes'}
{% endhighlight %}

This creates a dictionary named `book_genres` with the specified key-value pairs.

### Using a List of Tuples

You can pass a list of tuples to `dict()`, where each tuple contains a key-value pair separated by a comma:

{% highlight python %}
>>> book_genres = dict([('Sci-Fi', 'Dune'), ('Mystery', 'Sherlock Holmes')])
>>> print(book_genres)
{'Sci-Fi': 'Dune', 'Mystery': 'Sherlock Holmes'}
{% endhighlight %}

In this example, the `dict()` function creates a dictionary named `book_genres` with the specified key-value pairs.

#### Using the `fromkeys()` Method

The `fromkeys()` method allows you to create a default dictionary where each key is associated with a default value:

{% highlight python %}
>>> book_ratings = {}.fromkeys(('ISBN123', 'ISBN456', 'ISBN789'), 5.0)
>>> print(book_ratings)
{'ISBN123': 5.0, 'ISBN456': 5.0, 'ISBN789': 5.0}
{% endhighlight %}

In this example, the `fromkeys()` method creates a dictionary named `book_ratings` with keys `'ISBN123'`, `'ISBN456'`, and `'ISBN789'`, and the default value `5.0`.

#### Creating a Dictionary with `zip()`

You can also pass a list of key-value pairs to `dict()` using the `zip()` function:

{% highlight python %}
>>> book_genres = dict(zip(['ISBN123', 'ISBN456', 'ISBN789'], ['Sci-Fi', 'Mystery', 'Fantasy']))
>>> print(book_genres)
{'ISBN123': 'Sci-Fi', 'ISBN456': 'Mystery', 'ISBN789': 'Fantasy'}
{% endhighlight %}

In this example, the `zip()` function combines the ISBN numbers `['ISBN123', 'ISBN456', 'ISBN789']` and the corresponding genres `['Sci-Fi', 'Mystery', 'Fantasy']`. The `dict()` function creates a dictionary named `book_genres` from those pairs.

### Creating Dictionaries using Comprehension Syntax

In addition to the methods discussed above, Python provides a concise way to create dictionaries called "dictionary comprehension." Dictionary comprehension allows you to create dictionaries using a compact syntax, similar to list comprehension. It allows you to transform and filter data while constructing dictionaries efficiently. 

Here's the general syntax of dictionary comprehension:

{% highlight markdown %}
{key_expression: value_expression for item in iterable}
{% endhighlight %}

Let's look at an example to understand how dictionary comprehension works:

{% highlight python %}
>>> books = ['Python Programming', 'Data Science 101', 'Machine Learning Basics']
>>> book_lengths = {book: len(book) for book in books}
>>> print(book_lengths)
{'Python Programming': 18, 'Data Science 101': 16, 'Machine Learning Basics': 23}
{% endhighlight %}

In this example, we have a list of books. Using dictionary comprehension, we create a dictionary `book_lengths` where the book titles are the keys, and the values are the lengths of the corresponding book titles.

The dictionary comprehension consists of the following parts:

- `book: len(book)`: This is the key-value expression that defines how each key-value pair is created. In this case, the book title is the key, and `len(book)` gives the length of the book title.
- `for book in books`: This is the iteration part, where we iterate over each book in the `books` list.

Dictionary comprehension provides a concise way to create dictionaries based on existing data or specific patterns. It can also include conditions using the `if` statement to filter the items before adding them to the dictionary.
Here's an example that demonstrates dictionary comprehension with a condition:

{% highlight python %}
>>> books = ['Python Programming', 'Data Science 101', 'Machine Learning Basics']
>>> book_lengths = {book: len(book) for book in books if len(book) > 15}
>>> print(book_lengths)
{'Python Programming': 18, 'Machine Learning Basics': 23}
{% endhighlight %}

In this example, we only include the books in the dictionary if their lengths are greater than 15 characters. The `if` statement acts as a filter to control which items are added to the dictionary.

## Accessing and Modifying Values <hr>

In Python dictionaries, accessing and modifying values is a common operation and is essential for working with data efficiently. By using keys to access values, adding or updating key-value pairs, and utilizing the various methods available, you can effectively manipulate and retrieve data from dictionaries. This section explains how to access dictionary values using keys, and how to add or update key-value pairs.

### Accessing Dictionary Values

To access the value associated with a key in a dictionary, you can use the key within square brackets. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> print(book_details['ISBN123'])
Python Programming
>>> 
>>> print('The book title is:', book_details['ISBN456'])
The book title is: Data Science 101
{% endhighlight %}

By providing the key, Python returns the corresponding value from the dictionary. It's similar to using the ISBN number to quickly find the corresponding book title in a library.

### Adding and Updating Key-Value Pairs

Dictionaries are mutable, which means you can add, update, or remove key-value pairs.

#### Adding a Key-Value Pair

To add a new key-value pair to a dictionary, you can simply assign a value to a new key:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_details['ISBN789'] = 'Machine Learning Basics'
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101', 'ISBN789': 'Machine Learning Basics'}
{% endhighlight %}

In this example, we add a new key `'ISBN789'` with the corresponding value `'Machine Learning Basics'` to the `book_details` dictionary.

#### Updating a Value

To update the value of an existing key, you can reassign a new value to that key:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_details['ISBN456'] = 'Advanced Data Science'
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Advanced Data Science'}
{% endhighlight %}

In this case, we update the value of the key `'ISBN456'` to `'Advanced Data Science'`. Now, when we access the value for that key, we get the updated value.

#### Accessing with the `keys()`, `values()`, and `items()` Methods

Python dictionaries provide three methods to access their keys, values, or both: `keys()`, `values()`, and `items()`.

The `keys()` method returns a list-like object containing all the keys in the dictionary. You can use it in a for loop or convert it to a list. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> keys = book_details.keys()
>>> for key in keys:
        print(key)
ISBN123
ISBN456
{% endhighlight %}

In this example, the `keys()` method is used to obtain a view object containing the keys from the `book_details` dictionary. The keys are then iterated over and printed.

The `values()` method returns a list-like object containing all the values in the dictionary. Similar to `keys()`, you can iterate over the values or convert them to a list. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> values = book_details.values()
>>> for value in values:
        print(value)
Python Programming
Data Science 101
{% endhighlight %}

In this example, the `values()` method is used to obtain a view object containing the values from the `book_details` dictionary. The values are then iterated over and printed.

The `items()` method returns a list-like object containing tuples of key-value pairs. Each tuple represents a key-value pair in the dictionary. You can use it to iterate over both keys and values or convert it to a list. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> items = book_details.items()
>>> for key, value in items:
        print(key, value)
ISBN123 Python Programming
ISBN456 Data Science 101
{% endhighlight %}>

In this example, the `items()` method is used to obtain a view object containing the key-value pairs from the `book_details` dictionary. The tuples are then unpacked into separate variables (`key` and `value`) and printed.

#### Accessing with get()

The `get()` method allows you to retrieve the value associated with a key in a dictionary. It takes two arguments: the key to retrieve and a fallback value to return if the key doesn't exist. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_title = book_details.get('ISBN123', 'Title not found')
>>> print(book_title)
Python Programming
>>> 
>>> book_title = book_details.get('ISBN789', 'Title not found')
>>> print(book_title)
Title not found
{% endhighlight %}

In this example, the `get()` method retrieves the value associated with the key `'ISBN123'`. If the key exists, it returns the corresponding value. Otherwise, it returns the fallback value `'Title not found'`.

### Membership in Dictionary

You can use the `in` and `not in` operators to check whether a certain key or value exists in a dictionary. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> if 'ISBN123' in book_details:
        print('ISBN123 exists in book_details')
ISBN123 exists in book_details
>>> 
>>> if 'Data Science 101' not in book_details.values():
        print('Data Science 101 is not in book_details')
    else:
        print('Data Science 101 is in book_details')
Data Science 101 is in book_details
{% endhighlight %}

In this example, we check if the key `'ISBN123'` exists in the `book_details` dictionary using the `in` operator. Similarly, we check if the value `'Data Science 101'` is not present in the dictionary using the `not in` operator.

## Dictionary Methods and Functions <hr>

Python dictionaries provide a variety of useful methods that allow you to manipulate, add, remove, and check elements in dictionaries. In this section, we'll explore some of the commonly used dictionary methods. As discussed earlier in the section on "Accessing with the `keys()`, `values()`, and `items()` Methods," we have already covered the `keys()`, `values()`, `items()`, and `get()` methods for accessing dictionary elements. Now, let's delve into some additional dictionary methods.

### Updating values with the `update()` Method

The `update()` method allows you to update a dictionary with the key-value pairs from another dictionary. It takes another dictionary as a parameter and merges its key-value pairs into the original dictionary. If a key already exists in the original dictionary, its value will be updated. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> additional_books = {'ISBN789': 'Machine Learning Basics', 'ISBN101': 'Web Development'}
>>> book_details.update(additional_books)
>>> print(book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101', 'ISBN789': 'Machine Learning Basics', 'ISBN101': 'Web Development'}
{% endhighlight %}

In this example, the `update()` method merges the `additional_books` dictionary into the `book_details` dictionary, adding the new key-value pairs.

### Sorting values with the `sorted()` Function

The `sorted()` function can be used to sort the keys of a dictionary in ascending order. It returns a new list containing the sorted keys. Here's an example:

{% highlight python %}
>>> book_reviews = {'ISBN789': 'Informative', 'ISBN456': 'Must-read', 'ISBN123': 'Great book!'}
>>> sorted_keys = sorted(book_reviews)
>>> for key in sorted_keys:
        print(key, book_reviews[key])

ISBN123 Great book!
ISBN456 Must-read
ISBN789 Informative
{% endhighlight %}

In this example, the `sorted()` function is used to obtain a sorted list of keys from the `book_reviews` dictionary. The keys are then iterated over in the sorted order, and the corresponding values are accessed and printed.

### Retrieving values with the `setdefault()` Method

The `setdefault()` method allows you to retrieve the value associated with a key in a dictionary. If the key exists, it returns the corresponding value. If the key doesn't exist, it sets the key with a default value and returns the default value. Here's an example using book-related data:

{% highlight python %}
>>> book_ratings = {'ISBN123': 4.5, 'ISBN789': 3.8}
>>> rating = book_ratings.setdefault('ISBN456', 4.0)
>>> print(rating)
4.0
>>> print(book_ratings)
{'ISBN123': 4.5, 'ISBN789': 3.8, 'ISBN456': 4.0}
{% endhighlight %}

In this example, the `setdefault()` method is used to retrieve the rating for the key `'ISBN456'`. Since this key doesn't exist in the `book_ratings` dictionary, the method sets the key with a default value of 4.0 and returns the default value. The dictionary is then updated with the new key-value pair.

### Removing values with the `del` Statement, `pop()` Method, and `popitems()` Method

The `del` statement can be used to delete a specific key-value pair from a dictionary. Here's an example using book-related data:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> del book_details['ISBN456']
>>> print(book_details)
{'ISBN123': 'Python Programming'}
{% endhighlight %}

In this example, the `del` statement removes the key-value pair with the key `'ISBN456'` from the `book_details` dictionary.

The `pop()` method can be used to remove a specific key-value pair from a dictionary and also retrieve the corresponding value. Here's an example:

{% highlight python %}
>>> book_reviews = {'ISBN123': 'Great book!', 'ISBN456': 'Must-read'}
>>> review = book_reviews.pop('ISBN123')
>>> print(review)
Great book!
>>> print(book_reviews)
{'ISBN456': 'Must-read'}
{% endhighlight %}

In this example, the `pop()` method removes the key-value pair with the key `'ISBN123'` from the `book_reviews` dictionary and returns the corresponding value. The dictionary is then updated without the removed key-value pair.

The `popitem()` method removes and returns an arbitrary key-value pair from the dictionary as a tuple. This method is useful when you want to remove and process items from the dictionary in an arbitrary order. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> key, value = book_details.popitem()
>>> print(key, value)
ISBN456 Data Science 1
>>> print(book_details)
{'ISBN123': 'Python Programming'}
{% endhighlight %}

In this example, the `popitem()` method is used to remove an arbitrary key-value pair from the `book_details` dictionary. The removed key-value pair is returned as a tuple, which is then unpacked into separate variables (`key` and `value`). The dictionary is updated without the removed key-value pair.

### Clearing the Dictionary with the `clear()` Method

The `clear()` method allows you to remove all key-value pairs from a dictionary, effectively clearing it. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> book_details.clear()
>>> print(book_details)
{}
{% endhighlight %}

In this example, the `clear()` method removes all key-value pairs from the `book_details` dictionary, resulting in an empty dictionary.

### Copying Dictionaries with the `copy()` Method

The `copy()` method creates a shallow copy of the dictionary. It returns a new dictionary with the same key-value pairs. Here's an example:

{% highlight python %}
>>> book_details = {'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
>>> new_book_details = book_details.copy()
>>> print(new_book_details)
{'ISBN123': 'Python Programming', 'ISBN456': 'Data Science 101'}
{% endhighlight %}

In this example, the `copy()` method is used to create a new dictionary `new_book_details` that is a shallow copy of the `book_details` dictionary.

## Benefits and Considerations when Working with Dictionaries <hr>

When working with dictionaries, it's essential to consider the following factors based on the specific requirements of your application. Proper utilization of dictionaries can significantly enhance the efficiency and organization of your data.

### Benefits of using Dictionaries

- **Efficient Retrieval**: Dictionaries provide fast retrieval of values based on unique keys, making them suitable for applications requiring quick access to data.
- **Flexible Key-Value Structure**: Dictionaries allow for the storage of heterogeneous data types as values, making them versatile for representing complex relationships.
- **Dynamic Nature**: Dictionaries are mutable, enabling easy addition, modification, and removal of key-value pairs, making them adaptable to changing data requirements.
- **Convenient Methods**: Python provides a range of built-in methods and operations that simplify common dictionary operations, such as accessing, updating, and iterating over key-value pairs.

### Considerations

- **Unordered Collection**: Dictionaries are unordered, meaning they do not guarantee any specific order of the key-value pairs. If order preservation is essential, consider using an alternative data structure, such as an ordered dictionary.
- **Memory Overhead**: Dictionaries consume more memory compared to other data structures due to their internal hash table implementation. If memory usage is a concern for large-scale applications, alternative data structures may be more appropriate.
- **Key Immutability**: Dictionary keys must be immutable objects (strings, numbers, or tuples) since they are used as hash values. Mutable objects like lists cannot be used as keys.
- **Iteration Order** (Python 3.7+): Starting from Python 3.7, the insertion order of keys is preserved in dictionaries, making them ordered by default. However, relying on this order before Python 3.7 may lead to unexpected behavior.

## Practical Applications and Use Cases <hr>

Dictionaries are versatile data structures that find applications in various real-world scenarios. Here are some practical use cases where dictionaries are commonly employed:

### Data Representation and Organization

Dictionaries are ideal for representing and organizing data that has a key-value structure. They are often used to store and retrieve information based on unique identifiers or keys. For example:

- Storing information about books, where ISBN numbers serve as keys and book titles serve as values.

{% highlight python %}
# Dictionary for book information
book_info = {
    '978-3-16-148410-0': 'The Python Odyssey',
    '978-1-25-176104-0': 'Data Science Unleashed',
    '978-0-13-213080-6': 'Algorithms in a Nutshell'
}

# Accessing book title by ISBN
isbn_to_find = '978-1-25-176104-0'
print(f"Title for {isbn_to_find}: {book_info.get(isbn_to_find, 'Not Found')}")

# Output:
Title for 978-1-25-176104-0: Data Science Unleashed
{% endhighlight %}

- Managing user profiles in a web application, where user IDs are keys and user information (name, email, etc.) are values.

{% highlight python %}
# Dictionary for user profiles
user_profiles = {
    'user123': {'name': 'John Doe', 'email': 'john@example.com'},
    'user456': {'name': 'Alice Smith', 'email': 'alice@example.com'}
}

# Accessing user information by user ID
user_id_to_find = 'user123'
print(f"User info for {user_id_to_find}: {user_profiles.get(user_id_to_find, 'User Not Found')}")

# Output
User info for user123: {'name': 'John Doe', 'email': 'john@example.com'}
{% endhighlight %}

### Data Aggregation and Grouping

Dictionaries are useful for aggregating and grouping data based on specific criteria. They allow you to collect and organize related data elements efficiently. Some examples include:

- Grouping student grades by subject, where the subject name is the key and the list of grades is the value.

{% highlight python %}
# Dictionary for student grades by subject
grades_by_subject = {
    'Math': [85, 90, 92],
    'History': [78, 80, 75],
    'English': [88, 85, 90]
}

# Accessing grades by subject
subject_to_find = 'Math'
print(f"Grades for {subject_to_find}: {grades_by_subject.get(subject_to_find, 'Subject Not Found')}")

# Output
Grades for Math: [85, 90, 92]
{% endhighlight %}

- Aggregating sales data by region, where the region serves as the key and the sales figures are stored as values.

{% highlight python %}
# Dictionary for sales data by region
sales_by_region = {
    'North': 150000,
    'South': 120000,
    'West': 180000
}

# Accessing sales figures by region
region_to_find = 'North'
print(f"Sales for {region_to_find} region: ${sales_by_region.get(region_to_find, 'Region Not Found')}")

# Output
Sales for North region: $150000
{% endhighlight %}


### Counting and Frequency Analysis

Dictionaries are commonly employed for counting occurrences and performing frequency analysis on datasets. They provide an efficient way to tally and keep track of counts. Use cases include:

- Counting the frequency of words in a text document, where each word is a key and the count is the value.

{% highlight python %}
# Dictionary for word frequency in a text document
text = "Python is powerful. Python is versatile. Python is fun!"
word_frequency = {}

# Counting word frequency
for word in text.split():
    word_frequency[word] = word_frequency.get(word, 0) + 1

print("Word frequency:", word_frequency)

# Output
Word frequency: {'Python': 3, 'is': 3, 'powerful.': 1, 'versatile.': 1, 'fun!': 1}
{% endhighlight %}

- Analyzing the occurrence of specific events in a log file, where the events are stored as keys and their frequencies are the corresponding values.

{% highlight python %}
# Dictionary for event occurrences in a log file
log_events = {
    'Error': 5,
    'Warning': 10,
    'Info': 20
}

# Accessing event occurrences
event_to_find = 'Error'
print(f"Occurrences of {event_to_find}: {log_events.get(event_to_find, 0)}")

# Output
Occurrences of Error: 5
{% endhighlight %}


### Configuration Management

Dictionaries are often used for managing configurations and settings in software applications. They allow you to store and retrieve configuration parameters based on keys. Examples include:

- Storing application settings such as database credentials, API keys, and feature flags.

{% highlight python %}
# Dictionary for application settings
app_settings = {
    'db_credentials': {'username': 'admin', 'password': 'secret'},
    'api_keys': {'weather': 'API_KEY_WEATHER', 'maps': 'API_KEY_MAPS'},
    'feature_flags': {'new_feature': True, 'experimental_feature': False}
}

# Accessing application settings
setting_to_find = 'db_credentials'
print(f"{setting_to_find}: {app_settings.get(setting_to_find, 'Setting Not Found')}")

# Output
db_credentials: {'username': 'admin', 'password': 'secret'}
{% endhighlight %}

- Managing system configurations like network settings, file paths, and application-specific configurations.

{% highlight python %}
# Dictionary for system configurations
system_config = {
    'network_settings': {'hostname': 'my_machine', 'port': 8080},
    'file_paths': {'data': '/path/to/data', 'logs': '/path/to/logs'},
    'app_specific_config': {'max_connections': 100, 'debug_mode': True}
}

# Accessing system configurations
config_to_find = 'file_paths'
print(f"{config_to_find}: {system_config.get(config_to_find, 'Config Not Found')}")

# Output
file_paths: {'data': '/path/to/data', 'logs': '/path/to/logs'}
{% endhighlight %}

### More Examples

Feel free to browse my <a href="https://github.com/joj-macho" target="_new">GitHub page</a> for more comprehensive programs:

- <a href="https://github.com/Pythological-Playground/address-book" target="_new">Address Book Management</a>: A practical example using dictionaries to manage an address book with features like creating, updating, deleting, and searching contacts.

- <a href="https://github.com/joj-macho/Pythological-Playground/tree/main/dice-roll" target="_new">Dice Rolling Simulator</a>: This program utilizes dictionaries to store and use ASCII representations of each possible dice face and simulates rolling a dice or multiple dice and displays the corresponding ASCII characters of the rolled die.

Discover additional programs that handle dictionary data types in my <a href="https://github.com/joj-macho/Pythological-Playground" target="_new">Python Playground</a> repository. For a broader range of programs, you can explore my <a href="https://github.com/joj-macho?tab=repositories" target="_new">GitHub Repositories</a>.

## Summary <hr>

Congratulations! You've completed the tutorial on Python dictionaries. Dictionaries are essential for organizing data efficiently, and you've gained a deep understanding of their functionality. With this knowledge, you can tackle more complex data structures and address a wide range of real-world problems.

Next, you will learn how to autonomously program what actions a program can take based on specific results obtained during calculations with [Python Control Flow](/workspace/python-101/control-flow)