---
layout: post
title: "Evaluating Functions"
sub-title: "Exploring techniques and applications of numerical function evaluation in scientific computing."
tags: ["python", "basics", "NumPy"]
category: "computational-python"
permalink: /workspace/computational_python/evaluating-functions
---

Welcome to the fourth tutorial in our Computational Programming with Python series. In this tutorial, we'll delve into the fascinating realm of evaluating functions numerically. Understanding how to evaluate functions is a crucial skill in scientific computing, and Python provides powerful tools to facilitate this process.

* toc
{:toc}

Function evaluations are fundamental in numerical programming, impacting both the accuracy and efficiency of computations. In this section, we'll explore the significance of accurate and efficient function evaluation and introduce the methods to achieve both.

## Importance of Accurate and Efficient Function Evaluation

---

Function evaluations are ubiquitous in numerical programming, crucial in various domains like physics, engineering, finance, and more. The accuracy of these evaluations directly influences the precision of results. However, in numerical computing, efficiency is equally critical. The computational demands increase with the size of data, making efficient function evaluation pivotal for the feasibility of computations, especially in scientific simulations and big data analytics.

Efficiency in function evaluation is achieved through carefully chosen algorithms and mathematical transformations. Techniques like Horner's scheme for polynomials and continued fractions for rational functions significantly enhance efficiency without compromising accuracy.

In the following sections, I'll delve into specific methods. But first, let's understand the significance of polynomials.

## Understanding Polynomials

---

Polynomials, while conceptually simple, hold immense significance in numerical applications. Understanding their properties is crucial for efficient evaluation.

A polynomial is an expression consisting of variables, typically a single variable like $x$, raised to non-negative integer powers and multiplied by coefficients. The degree of a polynomial is the highest power of the variable.

 In general, a polynomial $P(x)$ can be represented as a sum or linear combination of multiples of non-negative integer powers of $x$, often arranged in descending order of powers ($x^n$).

The general form of an nth-degree polynomial is:
$$P_{n}(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0 \equiv \sum_{i=0}^{n} a_i x^i, \quad (n \ge 0) \label{eq1} \tag{1}$$ where $n$ denotes the degree of the polynomial, $a_i$ are known constant coefficients, and there are $n + 1$ coefficients, requiring $n + 1$ discrete data points to obtain unique values for the coefficients.

Polynomials possess properties that make them suitable as approximating functions. The Weierstrass approximation theorem states that any continuous function can be approximated to any accuracy by a polynomial of a high enough degree. In practice, low-degree polynomials are often employed, requiring careful consideration to achieve the desired accuracy.
<blockquote>If $f(x)$ is a continuous function in the closed interval $a \le x \le b$, then for every $\varepsilon \gt 0$ there exists a polynomial $P_n(x)$, where the the value of $n$ depends on the value of $\varepsilon$, such that for all $x$ in the closed interval $a \le x \le b$,
$$|P_n(x) - f(x)| \lt \varepsilon$$
</blockquote>

Polynomials also adhere to a uniqueness theorem:
<blockquote>A polynomial of degree $n$ passing exactly through $n+1$ discrete points is unique.</blockquote>

The polynomial through a specific set of points may take different forms, but all forms are equivalent and can be manipulated into each other through simple algebraic rearrangements, such as using Taylor Series or nested multiplication algorithms like Horner's algorithm.


## Polynomial Evaluation

---

A polynomial, $P_n(x)$, as defined earlier, is constructed from constant coefficients and the variable $x$, utilizing fundamental arithmetic operations such as addition, multiplication, and exponentiation (repeated multiplication) to non-negative integer powers of $x$. This inherent simplicity allows polynomials to be easily evaluated, differentiated, and integrated, making them ideal candidates for approximating functions or data.

One key feature that contributes to the efficient evaluation of polynomials is their recursive nature. To compute $x^n$, we need to calculate $x^{n-1}, x^{n-2}, \ldots, x$. By evaluating a term at a time, we can efficiently compute the values $\{x^n, x^n{-1}, \ldots, x \}$ with just $n$ multiplications.

Let's examine the number of additions and multiplications required to evaluate a specific polynomial, 
$P_4(x) = 1 + 3x + 3x^2 + 4x^3 + 5x^4$ at given value of $x$ using different methods.


### Naive Method

The naive method calculates $x^i,\, \text{for} \, k=2,3,4,$ in $P_4(x)$ is calculated as $x \cdot x \cdots x$, which is the repeated multiplication of $x$ for $i-1$ times. Therefore, the term $a_i x^i$ needs i multiplications. The total number of multiplications in evaluating $P_4(x)$ is 
$$0+1+2+3+4 \equiv \sum_{i=0}^{4} i = 10$$ The total number of additions in evaluating $P_4(x)$ is 4.

This method can be extended to a polynomial of degree $n$, $\sum_{i=0}^{n} a_i x^i$, for which the naive method needs
$$\sum_{i=0}^{n} i = 0 + 1 + 2 + 3 + \cdots + (n-1) + n = \frac{n(n+1)}{2}$$ multiplications and $n$ additions


### Horner's Method

To reduce the number of multiplications, we can use Horner's method, where $x^i$ is calculated as $x^{i-1} \cdot x$ if $x^{i-1}$ is known. By expressing $P_4(x)$ in the form of nested multiplication, we can significantly reduce the number of multiplications.

For instance, $P_4(x)$ can be expressed as: $$P_4(x) = 1 + x \cdot (2 + x \cdot \{3 + x \cdot [4 + 5 \cdot x]\})$$ where only 4 multiplications are required. The number of additions remains at 4. This evaluation procedure using nested multiplication is known as Horner's method.


For a polynomial of degree $n$, $P_n(x)$, nested multiplication is given by
$$P_n(x) = a_0 + x \cdot (a_1 + x \cdot \{a_2 + x \cdot[a_3 + \cdots + x \cdot (a_{n-1} + a_nx)] \})$$ which requires $n$ multiplications and $n$ additions.

The above equation can be evaluated by constructning the nested multiplication sequence:
$$\begin{align}
b_n & = a_n \\
b_i & = a_i + x \cdot b_{i+1}, \quad (i = n-1, n-2, \ldots, 0)
\end{align}$$ where $P_n(x)=b_0$.

Horner's scheme illustrates the beneficial combination of a simple algorithmic formulation with the efficiency gained by using only elementary operations. It not only reduces the number of necessary multiplications, but also results in less numerical instability, which might, otherwise, possibly be caused by subtractions involving large monomials of comparable magnitudes.

Several other properties of polynomials are quite useful. The division algorithm states that:
$$P_n(x) = (x - x_0)Q_{n-1}(x) + R$$ where $x_0$ is any number at $x=x_0$, $Q_{n-1}(x)$ is a polynomial of degree $n-1$, and R is a constant remainder. Now, the remainder theorem states that:
$$P_n(x_0) = R$$

The factor theorem states that if $P_n(x_0) = 0$, then $(x - x_0)$ is a factor of $P_n(x)$, which means that $x_0$ is a root, $\alpha$, or zero, of $P_n(x)$. That is, $(x - x_0)=0$, and $\alpha=x_0$.

The derivative of a polynomial $P_n'(x)$ can be obtained from the above Eq. (4.20). Thus,
$$P_n'(x)=Q_{n-1}(x) + (x - x_0)Q_{n-1}'(x)$$

At x = x_0,
$$P_n'(x_0)=Q_{n-1}(x_0)$$

Consequently, first derivatives of an nth-degree polynomial can be evaluated from the $(n- 1)$st-degree polynomial $Q_{n-1}(x)$. Higher-order derivatives can be determined applying the synthetic division algorithmto $Q_{n-1}(x)$, etc. The $(n- 1)$st-degree polynomial $Q_{n-1}(x)$, which can be used to evaluate derivative $P_n'(x)$ and the remainder $R$, which yields $P_n(x_0)=R$, can be evaluated by the synthetic division algorithm. Consider $P_n(x)$ in the form given by Eq. (4.3):
$$P_{n}(x) = a_0 + a_1x + \cdots + a_{n-1}x^{n-1} +  a_nx^n$$ and $Q_{n-1}(x)$ in the form:
$$Q_{n-1}(x) = b_1 + b_2x + \cdots + b_{n-1}x^{n-2} +  b_nx^{n-1}$$

Substituting Eqs. (4.24a) and (4.24b) into Eq. (4.20) and equating coefficients of powers of $x$ yields:
$$\begin{align}
b_n &= a_n \\
b_{n-1} &= a_{n-1} + x b_n \\
\vdots &= \vdots \\
b_1 &= a_1 + xb_2 \\
b_0 &= a_0 + xb_1 = R
\end{align}$$

Equation (4.25) can be written as:
$$\begin{align}
b_n & = a_n \\
b_i & = a_i + x \cdot b_{i+1}, \quad (i = n-1, n-2, \ldots, 0)
\end{align}$$

Equation(4.26) is identical to the nested multiplication algorithm presented in Eq. (4.19). Substituting $x=x_0$ into Eq. (4.24b) yields the value of $P_n'(x_0)$.
$$Q_{n-1}(x)=0$$ The deflated polynomial $Q_{n-1}(x)$ has $n-1$ roots, or zeros, which are the remaining roots, or zeros, of the original polynomial, $P_n(x)$.

## Evaluation of Analytic Functions

---

An infinitely differentiable real function $f(x)$ is said to be analytic in a neighborhood $|x - x_0 | \lt R$ of some point $x_0$ if it can be represented by a convergent Taylor series:
$$f(x) = f(x_0) + \frac{f'(x_0)}{1!}(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots = \sum_{i=0}^{\infty}\frac{f^{(i)}(x_0)}{i!}(x-x_0)^i$$ In the particular case when the reference point is $x_0=0$, the expansion is called Maclaurin's series.

The nth-order partial sum of a Taylor-series expansion is called Taylor polynomial of degree $n$:
$$F_n(x)=\sum_{i=0}^{n}\frac{f^{(i)}(x_0)}{i!}(x-x_0)^i=\sum_{i=0}^{n}t_i(x)$$

The nth-order remainder is defined as the difference between the function f(x) and the nth-degree Taylor polynomial,
$$R_n(x)=f(x)-F_n(x)=\sum_{i=n+1}^{\infty}t_i(x)$$ and it represents the error of replacing function $f(x)$ with the nth-degree Taylor polynomial, or, equivalently, the error of truncating the Taylor series after the nth-order term. Given that, for a convergent alternating series, the truncation error is rigorously bounded from above by the absolute value of the last term added (Demidovich and Maron 1987), that is, $|R_n(x)| \le |t_n(x)|$, the latter provides, in general, practical estimates for the absolute and relative errors:
$$\Delta^{(n)} = |t_n(x)|, \quad \delta^{(n)} = \left| \frac{t_n(x)}{F_n(x)} \right|$$

Let us consider for illustration the power-series expansion of the exponential function,
$$e^x=\sum_{i=0}^{\infty} \frac{x^i}{i!} = 1 + x + \frac{x^2}{2!} + \cdots$$ having as interval of convergence $(−\infty, +\infty)$ (the series converges for any argument). The nth-degree Taylor polynomial is in this case
$$F_n(x) = \sum_{i=0}^{n} t_i(x), \quad t_i(x)=\frac{x^i}{i!}$$

## Summary

---

Join us in the next tutorial, where we'll explore "Linear Algebra Techniques" using NumPy. Let's continue our journey into the world of computational programming with Python!