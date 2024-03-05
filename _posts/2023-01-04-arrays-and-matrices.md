---
layout: post
title: "Arrays and Matrices with NumPy"
tags: ["python", "basics", "NumPy"]
category: "computational-python"
---

Modern engineering and scientific computations often involve collections of numbers, especially when dealing with complex mathematical and scientific problems. While Python provides data structures like lists and tuples for storing collections of items, these structures may not be optimal for numerical calculations. Enter **NumPy**, a Python library designed to handle numerical arrays efficiently. The cornerstone of NumPy is the `ndarray` class, facilitating the creation and manipulation of numerical arrays, which are fundamental in various scientific and engineering fields.

* toc
{:toc}

## Getting Started with NumPy

---

In traditional list-based Python code, operations are often performed in loops, iterating over each element repeatedly. However, in scientific computing, homogeneous, fixed-length containers are crucial for efficient operations. NumPy addresses this need by providing homogeneous, fixed-length numerical arrays, enabling faster and more memory-efficient operations and often eliminating the need for explicit loops.

NumPy offers:

- A powerful N-dimensional array object.
- Sophisticated (broadcasting) functions.
- Tools for integrating C/C++ and Fortran code.
- Useful linear algebra, Fourier transform, and random number capabilities.

To begin using NumPy, you need to import it into your Python environment. The convention is to import NumPy and rename it as `np` for brevity:

{% highlight python %}
import numpy as np
{% endhighlight %}

Throughout this tutorial, we will assume NumPy has been imported as `np` in line with common practices and NumPy's documentation.

## A Brief Overview of Vectors &amp; Matrices

---

### Vectors

In mathematics, a **vector** is a one-dimensional array, representing quantities such as position or direction. In Python, vectors are conveniently represented using NumPy arrays. Vectors can be displayed as row vectors (horizontally listed elements) or column vectors (vertically listed elements).

Mathematically, we can represent vectors as follows:

Mathematically:
- **Row Vector**:
$$\text{row_vector} = \begin{bmatrix}1 & 2 & 3\end{bmatrix}$$
- **Column Vector**:
$$\text{col_vector} = \begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix}$$

Components are accessed using subscripted letters ($v_i$), where $i$ ranges from $0$ to $n-1$ for an n-dimensional vector.

- **Vector Norms:** The **norm** of a vector measures its length and is crucial in various mathematical computations. 
  - $L_1$ Norm (Manhattan Norm): $\|v\|_1 = \sum_i \|v_i\|$
  - $L_2$ Norm (Euclidean Norm): $\|v\|_2 = \sqrt{\sum_i v_i^2}$
  - $L_p$ Norm: $\|v\|_p = \sqrt[p]{\sum_i v_i^p}$
  - $L_\infty$ Norm: $\|v\|_\infty$ (maximum absolute value).

### Matrices

In mathematics, a **matrix** is a rectangular array of numbers. Matrices are fundamental in linear algebra and data analysis. A matrix is represented as:

$$\mathbf{A} = \begin{bmatrix}1 & 2 & 3 \\ 7 & 8 & 9\end{bmatrix}$$

Here, $\mathbf{A}$ is a $2 \times 3$ matrix (2 rows, 3 columns). Matrix components are accessed using indices ($A_{ij}$), where $i$ is the row and $j$ is the column.

- **Matrix Norm:** The norm of a matrix can be considered as a particular kind of vector norm. If we treat the $m \times n$ elements of $\mathbf{A}$ as the elements of an $mn$-dimensional vector, then the $p$-norm of this vector can be written as: $$\|A\|_p = \sqrt[p]{\sum_i^m \sum_j^n \|a_{ij}\|^p}$$

Now, let's go into practical applications by exploring how to create and manipulate arrays in Python using NumPy.                            

## Creating Arrays with NumPy

---

Creating numerical arrays in Python is made simple and efficient by NumPy, with the fundamental interface being the `array()` function. This function seamlessly transforms Python lists into powerful NumPy arrays.

NumPy's core strength lies in the manipulation of arrays using the `ndarray` class. This class allows us to effortlessly generate vectors and matrices, foundational elements in various numerical computations.

Let's dive into creating a vector $$\mathbf{x} = \begin{bmatrix}1 & 2 & 3\end{bmatrix}$$ and a matrix $$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3  \\ 4 & 5 & 6 \\ 7 & 8 & 9\end{bmatrix}$$ using NumPy:

{% highlight python %}
import numpy as np

# Creating a vector
vector_list = [1, 2, 3]
x = np.array(vector_list)
print(x)
# Output: [1 2 3]

# Creating a matrix
matrix_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
A = np.array(matrix_list)
print(A)
# Output:
# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]
{% endhighlight %}

These arrays can be envisioned as vectors and matrices in mathematics and prove to be extremely valuable for a wide array of numerical tasks.

Note that we've created a $1 \times 3$ vector and a $3 \times 3$ matrix with these simple commands. The result of `array()` is of type `ndarray`, distinct from a Python list. Unlike the common convention of starting indexing at 1, Python arrays adhere to a zero-indexed system. This means the first element is at position zero, crucial information for array iteration and indexing.

### Creating Special Arrays

While the `array()` function provides a straightforward interface, NumPy extends its functionality with specific functions to generate special types of arrays:

- **Zeros Function**: Creates an array filled with zeros.
- **Ones Function**: Creates an array filled with ones.
- **Eye Function**: Generates a 2-D array with ones on the diagonal and zeros elsewhere (similar to an identity matrix).
- **Arange Function**: Creates an array with regularly incrementing values.
- **linspace Function**: Generates an array of evenly spaced values over a specified range.
- **logspace Function**: Produces an array of logarithmically spaced values over a specified range.

#### Zeros, Ones, and Eye Functions

The `zeros`, `ones`, and `eye` functions are convenient for generating arrays with specific values:

{% highlight python %}
from numpy import zeros, ones, eye

# Array filled with 0s
x = zeros(3, int)
print(x)
# Output: [0 0 0]

# Array filled with 1s
y = ones(3)
print(y)
# Output: [1. 1. 1.]

# A 3x3 identity matrix
I = eye(3)
print(I)
# Output:
# [[1. 0. 0.]
#  [0. 1. 0.]
#  [0. 0. 1.]]
{% endhighlight %}

The `zeros` function creates arrays filled with zeros, the `ones` function with ones, and the `eye` function with an identity matrix of the specified size.

#### Arange, Linspace, and Logspace Functions

Consider a scenario where we want to model temperature readings over time for some experiment. I'll use this experiment to demonstrate how the `arange`, `linspace`, and `logspace` functions can be used to achieve this.

##### Using `arange`

The `arange()` function generates an array with regularly incrementing values:

{% highlight python %}
import numpy as np

# Time intervals
interval_seconds = 30 * 60
total_time = 12 * 3600

# Using arange to create an array of time values (in seconds)
time_values_arange = np.arange(0, total_time, interval_seconds)
print(time_values_arange)

# Output:
# [    0  1800  3600  5400  7200  9000 10800 12600 14400 16200 18000 19800
# 21600 23400 25200 27000 28800 30600 32400 34200 36000 37800 39600 41400]
{% endhighlight %}

In this example, we use `arange` to create an array of time values (in seconds) starting from 0 seconds and incrementing by `interval_seconds` up to the total time in seconds. The `arange` function is useful when you want regular intervals, often used in simulations or modeling.

##### Using `linspace`

The `linspace()` function generates evenly spaced values:

{% highlight python %}
# Using linspace to create an array of time values (in seconds)
time_values_linspace = np.linspace(0, total_time, num=24)
print(time_values_linspace)

# Output:
# [    0.          1878.26086957  3756.52173913  5634.7826087
# 7513.04347826  9391.30434783 11269.56521739 13147.82608696
# 15026.08695652 16904.34782609 18782.60869565 20660.86956522
# 22539.13043478 24417.39130435 26295.65217391 28173.91304348
# 30052.17391304 31930.43478261 33808.69565217 35686.95652174
# 37565.2173913  39443.47826087 41321.73913043 43200.        ]
{% endhighlight %}

In this example, we use `linspace` to create an array of time values (in seconds) starting from 0 seconds up to the total time in seconds, with a total of 24 evenly spaced intervals. The `linspace` function is useful when you want a specific number of evenly spaced intervals, commonly used in experiments and plotting.

The choice between `arange` and `linspace` depends on your specific use case. If you need precise control over the step size, `arange` is more suitable. However, if you need a specific number of evenly spaced points in a range, `linspace` is more appropriate.

##### Using `logspace`

The `logspace` function creates an array of values that are logarithmically spaced. It takes the start and end powers of 10 and the number of samples:

{% highlight python %}
# Using logspace to create an array of time values (in seconds)
log_time_values = np.logspace(0, np.log10(total_time), num=10)
print(log_time_values)

# Output:
# [1.00000000e+00 3.27381210e+00 1.07178457e+01 3.50882129e+01
#  1.14872216e+02 3.76070050e+02 1.23118268e+03 4.03066076e+03
#  1.31956260e+04 4.32000000e+04]
{% endhighlight %}

The `logspace` function is useful for modeling phenomena with exponential behavior, such as growth or decay. It's often employed in logarithmic plots or frequency scales.

## Understanding Array Attributes and Operations

---

When working with arrays, it's vital to comprehend their characteristics. NumPy provides several attributes that shed light on the structure of the array:

- **Shape**: The shape of an array, represented as a tuple, indicates the number of elements along each axis.
- **Dimensions (ndim)**: This attribute specifies the number of dimensions of the array.
- **Size**: Size denotes the total number of elements in the array.
- **Data Type (dtype)**: This attribute signifies the data type of the elements in the array.

Let's demonstrate how to access these attributes:

{% highlight python %}
import numpy as np

example_array = np.array([[1, 2, 3], [4, 5, 6]])
example_array_float = np.array([[1, 2, 3], [4, 5, 6]], dtype=np.float64)

# Shape of the array
shape = example_array.shape
print(shape)  # Output: (2, 3)

# Number of dimensions
dimensions = example_array.ndim
print(dimensions)  # Output: 2

# Total number of elements
size = example_array.size
print(size)  # Output: 6

# Data type of elements
dtype_int = example_array.dtype
dtype_float = example_array_float.dtype
print(dtype_int)  # Output: int64
print(dtype_float)  # Output: float64
{% endhighlight %}

In the above example, the array `example_array` is created without specifying a data type, so NumPy infers the data type based on the elements provided. In this case, the elements are integers, so the data type (`dtype`) of `example_array` would be inferred as `int64` or a similar integer type depending on your system.

The `shape` attribute gives the dimensions of the array. For `example_array`, it will be `(2, 3)` indicating 2 rows and 3 columns. The `ndim` (number of dimensions) attribute specifies the number of dimensions of the array. For `example_array`, it's 2 since it's a 2D array. The `size` attribute tells us the total number of elements in the array. For `example_array`, it's 6 because there are 6 elements in total. The `dtype` attribute indicates the data type of the elements in the array. For `example_array`, it might be inferred as `int64` if your system uses 64-bit integers. For `example_array_float`, it is `float64`, since it was specified.

### Flattening &amp; Reshaping Arrays

Consider a vector $$\mathbf{x} = \begin{bmatrix}1 & 2 & 3\end{bmatrix}$$ and a matrix $$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3  \\ 4 & 5 & 6 \\ 7 & 8 & 9\end{bmatrix}$$:

{% highlight python %}
import numpy as np

x = np.array([1, 2, 3])

A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) 
{% endhighlight %}

#### Flattening Arrays

Although it doesn't arise frequently in calculations, it is possible to flatten arrays into a one-dimensional format. One of the simplest methods is to flatten a multidimensional array into one dimension. For example, we can flatten our $\mathbf{A}$ array from above with the command:

{% highlight python %}
print(A)
# Output:
# [[1 2 3]
# [4 5 6]
# [7 8 9]]

print(A.flatten()) 
# Output:
# [1 2 3 4 5 6 7 8 9]
{% endhighlight %}

You will note that the method flattens the array by rows. This method doesn't change the dimensions of $\mathbf{A}$, but recasts $\mathbf{A}$ into a one-dimensional array. That is, the `flatten` method preserves the row-wise order.

An alternate method, `ravel`, provides another view of the same array, and any modifications of the array affect both the new view and the original array.

#### Reshaping Arrays

Alternatively, we can reshape an array into a different arrangement of rows and columns. For an existing array, you can change the shape after creating it. Reshaping allows us to change the shape of an array without changing its data.

{% highlight python %}
print(x)
# Output:
# [1 2 3]

print(x.reshape(3, 1))
# Output:
# [[1]
#  [2]
#  [3]]
{% endhighlight %}

The original array `x` is a simple one-dimensional array with the elements 1, 2, and 3. The `reshape(3, 1)` operation transforms this one-dimensional array into a two-dimensional array with 3 rows and 1 column. The resulting array is arranged vertically, with each element of the original array now residing in its own row.

### Array Slicing and Indexing

It is very common to refer to individual elements or sets of elements in arrays. This is accomplished through indexing, also called subscripting.

#### Vector Indexing and Slicing

{% highlight python %}
import numpy as np

# Example vector
x = np.linspace(1, 25, 11)
print('Vector x:')
print(x)

# Indexing to get a single element
print('\nElement at index 3:', x[3])
print('Element at index 6:', x[6])
print('Last element:', x[-1])

# Slicing to get a subset of elements
print('\nSubset using slicing (index 2 to 6):', x[2:7])
print('\nSubset using slicing (index 1 to 9):', x[1:10])

# Reverse the vector using slicing
print('\nReverse the vector:', x[::-1])
{% endhighlight %}

Output:

{% highlight bash %}
Vector x:
[ 1.   3.4  5.8  8.2 10.6 13.  15.4 17.8 20.2 22.6 25. ]

Element at index 3: 8.2
Element at index 6: 15.399999999999999
Last element: 25.0

Subset using slicing (index 2 to 6): [ 5.8  8.2 10.6 13.  15.4]

Subset using slicing (index 1 to 9): [ 3.4  5.8  8.2 10.6 13.  15.4 17.8 20.2 22.6]

Reverse the vector: [25.  22.6 20.2 17.8 15.4 13.  10.6  8.2  5.8  3.4  1. ]
{% endhighlight %}

#### Matrix Indexing and Slicing

{% highlight python %}
import numpy as np

# Example matrix
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print('Matrix A:')
print(A)

# Indexing to get a single element
print('\nElement at row 0, column 2:', A[0, 2])
print('Element at row 1, column 2:', A[1, 2])
print('Element at row 2, column 0:', A[2, 0])

# Slicing to get a subset of elements
print('\nSubset using slicing (rows 0 to 1, columns 1 to 2):')
print(A[0:2, 1:3])

# Using a colon for indexing (all rows, column 0)
print('\nUsing a colon for indexing (all rows, column 0):')
print(A[:, 0])
{% endhighlight %}

Output:

{% highlight bash %}
Matrix A:
[[1 2 3]
 [4 5 6]
 [7 8 9]]

Element at row 0, column 2: 3
Element at row 1, column 2: 6
Element at row 2, column 0: 7

Subset using slicing (rows 0 to 1, columns 1 to 2):
[[2 3]
 [5 6]]

Using a colon for indexing (all rows, column 0):
[1 4 7]
{% endhighlight %}

In the above examples, we demonstrate various indexing and slicing operations for both a vector and a matrix. Indexing allows us to access specific elements, while slicing helps us obtain subsets of elements based on specified ranges. The colon (:) is a powerful tool for accessing subsets of elements, either in a row or a column, or even the entire row or column.

## Array Operations and Linear Algebra with NumPy

---

The real strength of arrays is their capability to carry out various operations such as addition, subtraction, multiplication, and more efficiently—a concept known as **vectorization**. Vectorization implies applying operations element-wise across arrays.

### Scalar-Array Operations

Basic arithmetic extends naturally to arrays. Let's consider a matrix $$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3  \\ 4 & 5 & 6 \\ 7 & 8 & 9\end{bmatrix}$$, $$\mathbf{B} = \begin{bmatrix} 2 & 8 & 9  \\ 1 & 6 & 7 \\ 3 & 5 & 4\end{bmatrix}$$, and a scalar $x = 2$.

- $\mathbf{A} + x$: Adds $x$ to every element of $\mathbf{A}$.
- $\mathbf{A} - x$: Subtracts $x$ from every element of $\mathbf{A}$.
- $\mathbf{A} * x$: Multiplies every element of $\mathbf{A}$ by $x$.
- $\mathbf{A} / x$: Divides every element of $\mathbf{A}$ by $x$.

{% highlight python %}
import numpy as np

A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
B = np.array([[2, 8, 9], [1, 6, 7], [3, 5, 4]])
x = 2

print('A + x:\n', A + x)
print('A - x:\n', A - x)
print('A * x:\n', A * x)
print('A / x:\n', A / x)

# Output
# A + x:
#  [[ 3  4  5]
#  [ 6  7  8]
#  [ 9 10 11]]
# A - x:
#  [[-1  0  1]
#  [ 2  3  4]
#  [ 5  6  7]]
# A * x:
#  [[ 2  4  6]
#  [ 8 10 12]
#  [14 16 18]]
# A / x:
#  [[0.5 1.  1.5]
#  [2.  2.5 3. ]
#  [3.5 4.  4.5]]
{% endhighlight %}

### Element-Wise Operations

Element-wise operations involve applying an operation to each corresponding pair of elements in two arrays. This includes addition, subtraction, multiplication, and division:

{% highlight python %}
print('A + B:\n', A + B)
print('A - B:\n', A - B)
print('A * B:\n', A * B)
print('A / B:\n', A / B)

# Output
# A + B:
#  [[ 3 10 12]
#   [ 5 11 13]
#   [10 13 13]]
# A - B:
#  [[-1 -6 -6]
#   [ 3 -1 -1]
#   [ 4  3  5]]
# A * B:
#  [[ 2 16 27]
#   [ 4 30 42]
#   [21 40 36]]
# A / B:
#  [[0.5        0.25       0.33333333]
#   [4.         0.83333333 0.85714286]
#   [2.33333333 1.6        2.25      ]]
{% endhighlight %}

These operations work as expected, performing calculations element-wise. It's important to note that these operations require the arrays to have the same shape or dimensions.

### Multiplying a Matrix with a Vector (Dot Product)

The dot product of a matrix and a vector is a fundamental operation. It combines the elements of each row in the matrix with the corresponding elements of the vector, resulting in a new vector. This operation is often written as $\mathbf{A \cdot x}$.

Matrix-vector multiplication, also known as the dot product, is a fundamental operation in linear algebra. It involves multiplying each row of the matrix with the corresponding element of the vector and summing the results.

Let's consider matrices $$\mathbf{A} = \begin{bmatrix} 1 & 2 & 3  \\ 4 & 5 & 6 \\ 7 & 8 & 9\end{bmatrix}$$, $$\mathbf{B} = \begin{bmatrix} 2 & 8 & 9  \\ 1 & 6 & 7 \\ 3 & 5 & 4\end{bmatrix}$$, and a vector $$\mathbf{x} = \begin{bmatrix}1 & 2 & 3\end{bmatrix}$$.

{% highlight python %}
import numpy as np

A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
B = np.array([[2, 8, 9], [1, 6, 7], [3, 5, 4]])
x = np.array([1, 2, 3])

result = np.dot(A, x)
print(result)

# Output: 
# [14 32 50]
{% endhighlight %}

Here, `result` contains the matrix-vector product of A and x.

### Matrix Transpose

The transpose of a matrix is obtained by swapping its rows with columns. It's denoted as $\mathbf{A^T}$. The transpose operation can be performed using NumPy's `T` attribute.

{% highlight python %}
A_transpose = A.T
print(A_transpose)

# Output
# [[1 4 7]
#  [2 5 8]
#  [3 6 9]]
{% endhighlight %}

The resulting matrix `A_transpose` is the transpose of `A`.

### Matrix Inversion

Matrix inversion is a crucial operation, especially in solving systems of linear equations. For a square matrix $\mathbf{A}$, its inverse, denoted as $\mathbf{A^{-1}}$, satisfies $\mathbf{A \cdot A^{-1} = A^{-1} \cdot A = I}$, where $\mathbf{I}$ is the identity matrix.

{% highlight python %}
B_inverse = np.linalg.inv(B)
print(B_inverse)

# Output:
# [[ 3.66666667 -4.33333333 -0.66666667]
#  [-5.66666667  6.33333333  1.66666667]
#  [ 4.33333333 -4.66666667 -1.33333333]]
{% endhighlight %}

The `np.linalg.inv` function computes the inverse of the matrix B.

## Applications of NumPy Arrays and Matrices in Science

---

NumPy arrays and matrices are invaluable tools in the world of scientific computing. They enable a wide range of computational tasks that are essential for various scientific disciplines. Here are some examples of how NumPy is used in scientific applications:


- **Storing and Analyzing Experimental Data:** Scientists often gather large sets of experimental data. Whether it's measurements from particle accelerators, temperature readings from climate studies, or chemical properties of substances, NumPy arrays provide an efficient way to store and analyze this data. The ability to perform mathematical operations on these arrays simplifies data analysis and visualization.

- **Simulating Physical Phenomena:** Numerical simulations are crucial in physics, chemistry, and engineering. NumPy's array operations make it possible to simulate complex physical phenomena. For instance, you can model the temperature distribution in a material, the behavior of fluids in a pipe, or the motion of celestial bodies.

- **Image and Signal Processing:** In fields like computer vision and signal processing, NumPy arrays play a fundamental role. Images and signals are represented as arrays, allowing scientists to apply various transformations and filters. This is essential in tasks like medical image analysis, speech recognition, and remote sensing.

- **Statistical Analysis:** Scientists frequently perform statistical analyses on their data. NumPy provides a wide range of functions for statistical operations, making it a go-to library for tasks like hypothesis testing, regression analysis, and data fitting.

- **Quantum Mechanics and Quantum Computing:** In quantum mechanics, the behavior of quantum systems is described by complex matrices. NumPy's support for complex numbers and matrix operations is essential in simulating and studying quantum systems. Additionally, NumPy is a fundamental library for developing quantum computing algorithms.

- **Material Science and Engineering:** Engineers and material scientists use NumPy to model material properties, perform stress-strain analyses, and optimize designs. NumPy's multidimensional arrays are particularly useful when dealing with three-dimensional structures.

- **Data Visualization:** Data visualization is key to understanding scientific results. Libraries like Matplotlib and Seaborn, which are often used alongside NumPy, enable scientists to create informative and visually appealing plots and charts.

## Summary

---

Numerical computing is essential in various scientific and engineering fields. NumPy, with its powerful array and matrix operations, simplifies complex mathematical calculations. In this article, we've covered the basics of creating NumPy arrays, performing item-by-item and matrix/vector operations, indexing arrays, and fundamental matrix operations like matrix-vector multiplication, transposition, and matrix inversion. These concepts form the foundation of numerical computing with Python and NumPy, enabling you to solve complex problems in science and engineering efficiently.

Next up is our tutorial on "Evaluating Functions". Join us as we explore techniques for numerical function evaluation in scientific computing.