---
layout: post
title: "Fundamentals Of Numeric Representation"
sub-title: "Understanding Units, Significance, and Representation"
tags: ["numbers", "basics", "precision"]
category: "computational-python"
permalink: /workspace/computational_python/numbers-basics
---

Working with numbers is inevitable, and it's crucial to understand various forms of numeric types in Python. In mathematics, we encounter different sets of numbers, including natural numbers ($\mathbb{N}$), integers ($\mathbb{Z}$), rational numbers ($\mathbb{Q}$), real numbers ($\mathbb{R}$), and complex numbers ($\mathbb{C}$). These sets are infinite, each with distinct operations and potential undefined scenarios.

* toc
{:toc}

When solving physics or engineering problems with a computer, several challenges surface. Firstly, the absence of units in stored numbers necessitates manual tracking. Secondly, programs often generate more digits than significant digits, demanding careful consideration. Lastly, the digital representation and inherent algorithmic issues of computers introduce errors that must be navigated.

## Overview of Numeric Data Types in Python

---

In the Python Programming 101 series [Understanding Python Data Structures: Numeric Data Types](/workspace/python/numbers), we thoroughly explored Python's numeric types—integers, floats, and complex numbers. The coverage includes operations, precision challenges, type conversions, and understanding the characteristics and functionalities of numeric data types in Python.

### Integers, Floats, and Complex Numbers

**Integers:** 
Let's begin with the basics, even if it feels like First Grade! We start with counting numbers: $1, 2, 3, 4, \ldots,$ also known as *natural numbers*. Zero joined the scene a little later. The integers comprise natural numbers, their corresponding negatives, and zero, denoted as $\mathbb{Z} = \{0, \pm 1, \pm 2, \pm 3, . . .\}$. In Python, integer variables are used to represent quantities like counting students in a class or any scenario involving whole numbers.

**Floats:** 
Floats, or floating-point numbers, are used to represent variables with fractional values. In mathematical notation, they belong to the set of real numbers, denoted as $\mathbb{R}$. Unlike integers, floats can include decimal places, allowing for the precise representation of values. In Python, float variables are crucial for scenarios where measurements or computations involve fractional parts.

**Complex Numbers:** 
Complex numbers are a two-dimensional extension of the numeric data types. Represented as an ordered pair $a + bj$, where $a$ is the real part and $b$ is the imaginary part, complex numbers are used to handle scenarios requiring both real and imaginary components. In mathematical notation, they belong to the set of complex numbers, denoted as $\mathbb{C}$. In Python, complex variables are denoted using two floats: one for the real part and one for the imaginary part, multiplied by $j$ to distinguish from variables.

{% highlight python %}
# Integers
integer_var = 42

# Floats
float_var = 3.14

# Complex Numbers
complex_var = 3 + 4j
{% endhighlight %}

These data types form the foundation for more advanced numerical representations. Understanding numeric representations is crucial for accurate and efficient computations. Different scenarios demand specific numeric types, and awareness of these distinctions enhances code quality and reliability.

## Keeping Track of Units

---

Units play a vital role in numeric computations, ensuring context and accuracy. In Python, representing and managing units is essential for scientific and engineering applications.

Consider a scenario where we calculate the velocity of a car traveling $2.0\, \mathrm{m}$ in $10.0\, \mathrm{s}$. Here is how you would perform the calculation in Python:

{% highlight bash %}
>>> x = 2.0    # in meters (m)
>>> t = 10.0   # in seconds (s)
>>> v = x / t  # in km/s
>>> v
0.2
{% endhighlight %}

The result is "0.2". It's crucial to recognize that the units for the answer are $\left.\mathrm{m}\middle/\mathrm{s}\right.$. You could have performed the same calculation with $x = 2.0\, \mathrm{km}$ and $t = 10.0\, \mathrm{s}$, yielding the answer $0.2\, \left.\mathrm{km}\middle/\mathrm{s}\right.$. Tracking units correctly is essential, and here are some tips to ensure that:

- Write the units into your code when defining numbers, e.g., `x = 2.0  # m`.
- Use units on the axes in your plots.
- Learn how to rewrite your equations in non-dimensional form.

In sciences, numbers alone don't cut it. We use them to describe the natural world, but we also need to anchor these numbers to the physical world through measurement units. For instance, measuring the width of your desktop screen might yield a number, but that number only gains significance when paired with a unit. Practicality demands standardized units when communicating findings beyond personal use.

### Standardized Units

The Metric System had its beginnings back in 1670 by a mathematician called Gabriel Mouton. The modern version, (since 1960) is correctly called "International System of Units" or "SI" (from the French "Système International"). So we should really call it "SI", but mostly people just call it "Metric".

In the world of sciences, units and measurements play a crucial role. The [Systeme International (SI)](https://en.wikipedia.org/wiki/International_System_of_Units){:target='_blank'} provides standardized units that are globally recognized. These units are based on precisely defined base units. For example, in the SI system, the standard unit for length is the meter (m). To ensure uniformity, a standard meter bar made of platinum-iridium is maintained at the International Bureau of Weights and Measures near Paris. Accurate copies of this bar are distributed to national standards laboratories worldwide.

A few special units are also needed to complete the SI System:

- **ampere** for electric current,
- **kelvin** for temperature,
- **mole** for the amount of substance, and
- **candel** a for luminous intensity

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
    }
</style>

<table class="table table-dark table-responsive table-sm table-striped table-hover caption-top">
    <caption>Table: SI Units and Standard Prefixes</caption>
    <thead>
        <tr>
            <th scope="colgroup" colspan="3">SI Units</th>
            <th scope="colgroup" colspan="3">Standard Prefixes</th>
        </tr>
        <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Unit</th>
            <th scope="col">Symbol</th>
            <th scope="col">Factor</th>
            <th scope="col">Prefix</th>
            <th scope="col">Symbol</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">
        <tr>
            <td>Length</td>
            <td>Meter</td>
            <td>m</td>
            <td>10^12</td>
            <td>tera-</td>
            <td>T</td>
        </tr>
        <tr>
            <td>Mass</td>
            <td>Kilogram</td>
            <td>kg</td>
            <td>10^6</td>
            <td>mega-</td>
            <td>M</td>
        </tr>
        <tr>
            <td>Time</td>
            <td>Second</td>
            <td>s</td>
            <td>10^-3</td>
            <td>milli-</td>
            <td>m</td>
        </tr>
        <tr>
            <td>Amount of Substance</td>
            <td>Mole</td>
            <td>mol</td>
            <td>10^-6</td>
            <td>micro-</td>
            <td>µ</td>
        </tr>
        <tr>
            <td>Electric Current</td>
            <td>Ampere</td>
            <td>A</td>
            <td>10^9</td>
            <td>giga-</td>
            <td>G</td>
        </tr>
        <tr>
            <td>Thermodynamic Temperature</td>
            <td>Kelvin</td>
            <td>K</td>
            <td>10^-9</td>
            <td>nano-</td>
            <td>n</td>
        </tr>
        <tr>
            <td>Luminous Intensity</td>
            <td>Candela</td>
            <td>cd</td>
            <td>10^3</td>
            <td>kilo-</td>
            <td>k</td>
        </tr>
    </tbody>
</table>

All other units derive from the base units in the SI system. For example, the unit for force is the Newton (N), and the unit for energy is the Joule (J). Both are combinations of the base units in the SI system:

- $1 \, \text{Newton} = 1 \, \mathrm{N} = 1 \, \mathrm{kg} \cdot \mathrm{m} \cdot  \mathrm{s}^{-2}$
- $1 \, \text{Joule} = 1 \, \mathrm{J} = 1 \, \mathrm{N} \cdot \mathrm{m}= 1 \, \mathrm{kg} \cdot \mathrm{m} \cdot \mathrm{s}^{-2} \cdot \mathrm{m} = 1 \, \mathrm{kg} \cdot \mathrm{m}^{2} \cdot \mathrm{s}^{-2}$

Here are more examples of derived units from the base units in the SI system:

- **Unit for Pressure (Pascal, Pa):**
  - $1 \, \text{Pascal} = 1 \, \mathrm{Pa} = 1 \, \mathrm{N/m^2} = 1 \, \mathrm{kg \cdot m^{-1} \cdot s^{-2}}$

- **Unit for Power (Watt, W):**
  - $1 \, \text{Watt} = 1 \, \mathrm{W} = 1 \, \mathrm{J/s} = 1 \, \mathrm{kg \cdot m^2 \cdot s^{-3}}$

- **Unit for Electric Charge (Coulomb, C):**
  - $1 \, \text{Coulomb} = 1 \, \mathrm{C} = 1 \, \mathrm{A \cdot s}$ (ampere-second)

- **Unit for Electric Potential (Volt, V):**
  - $1 \, \text{Volt} = 1 \, \mathrm{V} = 1 \, \mathrm{W/A} = 1 \, \mathrm{kg \cdot m^2 \cdot s^{-3} \cdot A^{-1}}$

- **Unit for Capacitance (Farad, F):**
  - $1 \, \text{Farad} = 1 \, \mathrm{F} = 1 \, \mathrm{C/V} = 1 \, \mathrm{kg^{-1} \cdot m^{-2} \cdot s^4 \cdot A^2}$

- **Unit for Resistance (Ohm, Ω):**
  - $1 \, \text{Ohm} = 1 \, \mathrm{\Omega} = 1 \, \mathrm{V/A} = 1 \, \mathrm{kg \cdot m^2 \cdot s^{-3} \cdot A^{-2}}$

- **Unit for Magnetic Flux (Weber, Wb):**
  - $1 \, \text{Weber} = 1 \, \mathrm{Wb} = 1 \, \mathrm{V \cdot s} = 1 \, \mathrm{kg \cdot m^2 \cdot s^{-2} \cdot A^{-1}}$

- **Unit for Inductance (Henry, H):**
  - $1 \, \text{Henry} = 1 \, \mathrm{H} = 1 \, \mathrm{Wb/A} = 1 \, \mathrm{kg \cdot m^2 \cdot s^{-2} \cdot A^{-2}}$

These examples illustrate how various physical quantities have units that are combinations of the base units in the SI system.

Precision in units is paramount, as evidenced by the infamous case of the [Mars Climate Orbiter](https://en.wikipedia.org/wiki/Mars_Climate_Orbiter){:target='_blank'} in 1999. NASA lost contact because two groups working on the orbiter used different measurement units—English and metric—without clear communication.

Here are some interesting numbers in the Metric System (also learn about Metric Measurements and Common Metric Units:

<table>
		<tr>
			<th scope="col">Quantity</th>
			<th scope="col">Approximate Value</th>
			<th scope="col">Notes</th>
		</tr>
		<tr style="text-align:center;">
			<td>Distance from Earth to Sun</td>
			<td>150 000 000 km</td>
			<td>1.5 x 10<sup>8</sup> km in <a href="../numbers/scientific-notation.html">Scientific Notation</a><br>
Varies over the year</td>
		</tr>
		<tr style="text-align:center;">
			<td>Distance from Earth to Moon</td>
			<td>385 000 km</td>
			<td>Changes from 363 000 to 405 000</td>
		</tr>
		<tr style="text-align:center;">
			<td><a href="../geometry/circle.html">Circumference</a> of Earth</td>
			<td> 40 000 km</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Height of geostationary satellite</td>
			<td>35 800 km</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Height of Mount Everest</td>
			<td> 8849 m</td>
			<td><br>
</td>
		</tr>
		<tr>
			<td><br>
</td>
			<td><br>
</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Speed of <a href="../physics/light.html">light</a> (in vacuum)</td>
			<td> 300 000 000 m/s</td>
			<td>3 x 10<sup>8</sup> m/s in <a href="../numbers/scientific-notation.html">Scientific Notation</a><br>
More accurately: 299 792 458 m/s</td>
		</tr>
		<tr style="text-align:center;">
			<td>Speed of <a href="../physics/waves-sound.html">sound</a> (in air)</td>
			<td> 340 m/s</td>
			<td>Varies with temperature and pressure</td>
		</tr>
		<tr style="text-align:center;">
			<td>Speed of Earth around Sun</td>
			<td>30 000 m/s</td>
			<td>30 km per second</td>
		</tr>
		<tr>
			<td><br>
</td>
			<td><br>
</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Earth's <a href="../physics/gravity.html">gravity</a></td>
			<td> 9.8 m/s<sup>2</sup></td>
			<td>Varies by location</td>
		</tr>
		<tr>
			<td><br>
</td>
			<td><br>
</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Freezing point of water</td>
			<td> 0°C</td>
			<td>Varies with pressure</td>
		</tr>
		<tr style="text-align:center;">
			<td>Human body <a href="../temperature-conversion.html">temperature</a></td>
			<td> 37°C</td>
			<td>Varies by person, site and health</td>
		</tr>
		<tr style="text-align:center;">
			<td>Boiling point of water</td>
			<td> 100°C</td>
			<td>Varies with pressure</td>
		</tr>
		<tr>
			<td><br>
</td>
			<td><br>
</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Atmospheric pressure</td>
			<td> 100 kPa</td>
			<td>Varies with weather and height</td>
		</tr>
		<tr>
			<td><br>
</td>
			<td><br>
</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Density of water</td>
			<td> 1 g/cm<sup>3</sup><br>
(= 1 kg per liter)</td>
			<td>Varies with temperature and pressure</td>
		</tr>
		<tr style="text-align:center;">
			<td>Density of rock</td>
			<td>3 g/cm<sup>3</sup></td>
			<td>Varies a lot based on type of rock</td>
		</tr>
		<tr style="text-align:center;">
			<td>Density of gold</td>
			<td>19.3 g/cm<sup>3</sup></td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td><br>
</td>
			<td><br>
</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Age of the Universe</td>
			<td>13.7 billion years</td>
			<td><br>
</td>
		</tr>
		<tr style="text-align:center;">
			<td>Age of Earth</td>
			<td>4.5 billion years</td>
			<td><br>
</td>
		</tr>
	</table> 

### Changing Units

There are many different units used to describe real world quantities: Speed, for example, might be measured in meters per second, kilometers per hour, or feet per second. Converting between these units involves substituting equivalent quantities represented by different units.

Let's take an example to illustrate the conversion process. If a speedometer indicates a speed of 60 kilometers per hour (km/h), how do we express this in meters per second (m/s)? The conversion involves replacing kilometers with meters and hours with seconds, using the equivalences $1 \, \mathrm{km} = 1000 \, \mathrm{m}$ and $1 \, \mathrm{h} = 3600 \, \mathrm{s}$:

$$60 \, \frac{\mathrm{km}}{\mathrm{h}} = 60 \, \frac{1000 \, \mathrm{m}}{3600 \, \mathrm{s}} = 16.667 \, \frac{\mathrm{m}}{\mathrm{s}}$$

Conversely, if the wind is blowing at 20 meters per second (m/s), we can convert this to kilometers per hour (km/h) using the same technique:

$$20 \, \frac{\mathrm{m}}{\mathrm{s}} = 20 \, \frac{\frac{1}{1000}\, \mathrm{km}}{\frac{1}{3600} \, \mathrm{h}} = 72 \, \frac{\mathrm{km}}{\mathrm{h}}$$

## Numeric Representation and Precision

---

We often grow up using decimal, base-10 numbers, but it's crucial to understand that computers internally use a different number system, base-2 or binary. To comprehend this shift, let's revisit the fundamentals of the decimal numbering system.

### Decimal and Binary Representation

#### Decimal (Base-10)

Most of us are familiar with decimal numbers, which are based on powers of 10. In the decimal system, digits range from 0 to 9, and each position represents a power of 10. For example;

**Positional Notation:**
A number like $1234.56$ utilizes digits from the decimal system ($0, 1, 2, 3, 4, 5, 6, 7, 8, 9$). The positions of these digits represent contributions to the overall number through powers of the base of the system, which is 10. Indexing these positions allows us to break down the number into the sum of its parts.

For example, in the number $1234.56$, each digit's contribution is determined by its position:
$$1 \times 10^3 + 2 \times 10^2 + 3 \times 10^1 + 4 \times 10^0 + 5 \times 10^{-1} + 6 \times 10^{-2}$$

This sum, of course, equals the original number.

**Scientific Notation:**
Positional notation leads us to scientific notation, a common representation in engineering and science. In this notation, a number is expressed as the product of its significand (or mantissa) and a power of 10 (the exponent).

For instance, the number $1234.56$ can be expressed in scientific notation as $1.23456 \times 10^3$. Here, $1.23456$ is the significand, and 3 is the exponent.

It's also possible to express the number in an alternate but less common form, such as $123456 \times 10^{-2}$. However, typical scientific notation involves normalizing the number with only one digit to the left of the decimal point.

This notation is invaluable for representing very large and small numbers conveniently. Examples include Avogadro's number: $6.022 \times 10^{23}$ and Planck's constant: $6.626 \times 10^{-34}$.

Scientific notation in Python is denoted with "e", indicating the power of 10:

{% highlight bash %}
>>> n = 0.000001
>>> print(n)
1e-06
{% endhighlight %}

This notation provides a concise and clear way to handle both very large and very small numbers in a computational context.

#### Binary (Base-2)

Computers, on the other hand, use the binary system, a base-2 numbering system. Binary digits, or bits, can only be 0 or 1. The positions represent powers of 2. Converting decimal to binary involves repeatedly dividing the number by 2 and noting the remainders. Let's illustrate the steps using the example of converting $13_{10}$ to binary.

Basically to sum up the entire process, all you do is divide the number by 2 each time while noting the remainder, i.e.
- Divide the decimal number by 2, $13 \div 2 = 6$ with a remainder of 1.
- Repeat the process with the quotient obtained in the previous step. $6 \div 2 = 3$ with a remainder of 0.
- Continue dividing the quotient until it becomes 0. $3 \div 2 = 1$ with a remainder of 1.
- The final quotient is 1, and the last remainder is 1.
- Now, we assemble the binary representation by reading the remainders from bottom to top. For $$13_{10}$$ : 1, 1, 0, 1. That is, $$1101_2$$ is the binary representation of $$13_{10}$$.

Now, let's relate this binary representation to the expression involving powers of 2:

$$13_{10} = (1 \times 2^3) + (1 \times 2^2) + (0 \times 2^1) + (1 \times 2^0)$$

Breaking it down:
- $1 \times 2^3 = 8$
- $1 \times 2^2 = 4$
- $0 \times 2^1 = 0$
- $1 \times 2^0 = 1$

Summing these up: $$8 + 4 + 0 + 1 = 13_{10}$$. Therefore, the binary representation $$1101_2$$ accurately represents the decimal number $13_{10}$ through the sum of its contributions in terms of powers of 2.

Let's convert a few more decimal numbers to binary using the same method:

**Convert $25_{10}$ to Binary:**

- $25 \div 2 = 12$ (remainder: 1)
- $12 \div 2 = 6$ (remainder: 0)
- $6 \div 2 = 3$ (remainder: 0)
- $3 \div 2 = 1$ (remainder: 1)
- $1 \div 2 = 0$ (remainder: 1)
- Assembling the remainders: $11001_2$

$$25_{10} = (1 \times 2^4) + (1 \times 2^3) + (0 \times 2^2) + (0 \times 2^1) + (1 \times 2^0)$$

So, the binary representation of $25_{10}$ is obtained by assembling the binary digits derived from the powers of 2: $$11001_2$$. Each digit's position represents a power of 2, and by summing them up, we obtain the original decimal value of 25.

**Convert $42_{10}$ to Binary:**

- $42 \div 2 = 21$ (remainder: 0)
- $21 \div 2 = 10$ (remainder: 1)
- $10 \div 2 = 5$ (remainder: 0)
- $5 \div 2 = 2$ (remainder: 1)
- $2 \div 2 = 1$ (remainder: 0)
- $1 \div 2 = 0$ (remainder: 1)
- Assembling the remainders: $101010_2$

$$42_{10} = (1 \times 2^5) + (0 \times 2^4) + (1 \times 2^3) + (0 \times 2^2) + (1 \times 2^1) + (0 \times 2^0)$$

So, $42_{10} = 101010_2$.

Binary numbers offer computational efficiency for computers, allowing them to perform rapid arithmetic operations using logical operations like AND, OR, and NOT. However, computers face a limitation in the number of bits they can store simultaneously. For instance, a 32-bit computer can handle 32-digit binary numbers. This limitation implies a finite capacity, restricting the range of representable numbers. In the case of a 32-bit system, it can represent up to $\sum_{n=0}^{31} 2^n = 4 \, 294 \, 967 \, 296$ different numbers.

### Hexadecimal and Octal Representation

#### Hexadecimal (Base-16)

Hexadecimal, or base-16, is another numeral system commonly used in computing. It employs 16 distinct symbols: 0-9 and A-F, where A stands for 10, B for 11, and so on up to F for 15.

**Hexadecimal Digits:**
The hexadecimal system operates on powers of 16. The digits 0-9 represent values 0-9, and A-F represent values 10-15. The positions in a hexadecimal number denote powers of 16, similar to the decimal system.

For example, the hexadecimal number $1A2_{16}$ breaks down as follows:
$$1 \times 16^2 + 10 \times 16^1 + 2 \times 16^0$$
Simplifying this expression yields the equivalent decimal value, $418$

**Hexadecimal to Decimal Conversion:**
To convert a hexadecimal number to decimal, the positional notation principle applies, similar to other bases. For instance, $1A_{16}$ in decimal is calculated as $1 \times 16^1 + 10 \times 16^0$, resulting in 26.

**Decimal to Hexadecimal Conversion:**
Converting decimal to hexadecimal involves dividing the decimal number by 16 and noting remainders. The process is then repeated until the quotient becomes 0. The remainders, read from bottom to top, form the hexadecimal representation.

Hexadecimal numbers are commonly used in programming due to their compact representation of binary-coded values. For instance, the binary sequence 1101 0110 1010 can be expressed more concisely as $D6A_{16}$ in hexadecimal.

In Python, hexadecimal numbers are prefixed with "0x," such as $0x1A2$. They are widely used in memory addresses and bitwise operations.

#### Octal (Base-8)

Octal, or base-8, is another numeral system that uses eight distinct digits: 0-7. It's less common in modern computing but is occasionally encountered in specific contexts.

**Octal Digits:**
Similar to decimal and hexadecimal, octal represents values using powers of 8. The digits 0-7 correspond to the numerical values of 0-7, and the positions indicate powers of 8.

For example, the octal number $345_8$ is calculated as:
$$3 \times 8^2 + 4 \times 8^1 + 5 \times 8^0$$

**Octal to Decimal Conversion:**
Similar to other bases, converting octal to decimal follows positional notation. For example, $52_8$ in decimal is calculated as $5 \times 8^1 + 2 \times 8^0$, resulting in 42.

**Decimal to Octal Conversion:**
Converting decimal to octal entails dividing the decimal number by 8 and noting remainders. Repeating the process until the quotient is 0, and reading the remainders from bottom to top provides the octal representation.

Octal numbers were historically used in computing, especially on older systems. However, they have largely been replaced by hexadecimal and binary representations.

In Python, octal numbers are prefixed with "0o," such as $0o345$. While less prevalent, octal notation can still be relevant in certain scenarios.

In Python, hex and oct functions facilitate these conversions:

{% highlight python %}
# Hexadecimal to Decimal
hex_to_decimal = int("1A", 16)
print(hex_to_decimal)          # Output: 26

# Decimal to Hexadecimal
decimal_to_hex = hex(26)[2:]
print(decimal_to_hex)          # Output: '1a'

# Octal to Decimal
oct_to_decimal = int("52", 8)
print(oct_to_decimal)          # Output: 42

# Decimal to Octal
decimal_to_oct = oct(42)[2:]
print(decimal_to_oct)          # Output: '52'
{% endhighlight %}

### Floating Point Representation

Floating-point numbers serve as a means to represent real numbers with finite digital precision in computer memory. They utilize scientific notation, consisting of digits and an exponent, with a specified number of bits.

#### The IEEE Standard for Floating-Point Numbers

The [IEEE standard](https://en.wikipedia.org/wiki/IEEE_754){:target='_blank'} meticulously defines the architecture of floating-point numbers, specifying the allocation of bits for both digits and an exponent. For instance, a 4-byte floating-point number employs 23 bits for digits and 9 bits for the exponent, covering a specified range. So, these numbers have 6-9 significant digits and cover a range from $−3.4 × 10^{38}$ to $−1.4 × 10^{−45}$ for negative numbers, and from $1.4 × 10^{−45}$ to $3.4 × 10^{38}$ for positive numbers.

In Python, we usually deal with 32-bit integers and 64-bit floating-point numbers. Doubles have approximately 16 decimal places of precision and magnitudes in the range of $4.9 × 10^{−324} \leq \text{double precision} \leq 1.8 × 10^{308}$. You will seldom encounter cases where you are limited by numerical precision when using 8-byte floating-point numbers. For all practical purposes, you will be limited by the number of significant digits in your measurements.

#### Round-off Errors

Round-off errors occur when a computer approximates a real number. Since computers have finite precision, representing all real numbers is impossible. Thus, rounding occurs, leading to discrepancies between the true value and its computer representation.

#### Machine Precision and Overflows

Floating-point numbers, while powerful in their representation of real numbers, come with inherent vulnerabilities—overflows and underflows—that can lead to unpredictable computational outcomes. To navigate these challenges, understanding the concept of machine precision ($\epsilon_{m}$) becomes pivotal, delineating the limits of numerical accuracy within the computational environment.

**Machine Precision:**
Machine precision, denoted by $\epsilon_{m}$, defines the maximum positive number that can be added to 1.0 without altering its representation. In essence, it sets the boundary for precision within the floating-point representation. The mathematical expression $1.0_{c} + \epsilon_{m} \stackrel{\text{def}}{=} 1.0_{c}$ emphasizes this limit, underscoring that, except for powers of 2, which are precisely represented, floating-point numbers inherently carry an error, typically manifesting in the fifteenth decimal place.

**Overflow and Underflow:**
In computational sciences, overflow and underflow are phenomena intrinsic to the representation limits of numeric data types. When a double surpasses $1.8 × 10^{308}$, an overflow occurs, potentially resulting in a machine-dependent pattern, non-numeric values (NAN), or unpredictable outcomes. Conversely, an underflow transpires when a double diminishes below $4.9 × 10^{−324}$, often leading to the resulting number being set to zero. These scenarios can introduce unexpected errors in calculations, underscoring the importance of vigilance in numerical computations.

When engaging with floating-point numbers, it is imperative to acknowledge their limitations and remain cognizant of potential rounding errors, machine precision boundaries, and the risk of overflows. This awareness allows practitioners to proactively address these challenges, mitigating the occurrence of unexpected and challenging-to-debug errors in computational programs.

So, when working with floating-point numbers, it's important to keep in mind their limitations and to be aware of potential rounding errors, machine precision, and overflows. By doing so, you can avoid unexpected and hard-to-debug errors in your programs.

### Accuracy and Precision

When dealing with numerical values, accuracy and precision play pivotal roles, especially when dealing with experimental or measured data. The concepts of significant figures and rounding become crucial in maintaining the reliability of these values.

Computers, with their ability to generate long sequences of numbers, underscore the importance of understanding significant digits. Arithmetic operations—addition, subtraction, multiplication, and division—serve as the foundation for numerical calculations. While we often perform these operations routinely, whether manually or with the aid of technology, it's essential to consider precision, significant figures, and rounding when reporting results.

**Precision vs. Accuracy:**
Precision relates to the resolution with which a number is expressed, whereas accuracy involves measurements and their alignment with accepted standards. Standards are usually traceable to entities like the National Institute of Standards and Technology (NIST) in the U.S. or the Association Française de Normalisation (AFNOR) in France. It's critical to distinguish between these terms, as precision does not necessarily imply accuracy. Precision is often misused, leading to confusion; hence, using "resolution" in scientific writing is recommended.

**Example Comparison:**
Consider the temperatures 65°F and 18.3333°C. While the second temperature is a close equivalent, precision differs significantly. Converting using the formula $°C = \frac{°F − 32}{1.8}$, we see that 65°F implies a range in the 60s, closer to 65°F than 64°F or 66°F. In contrast, 18.3333°C suggests an exactness to the fourth decimal place. Reporting the converted temperature as 18°C aligns with the precision of 65°F. This introduces the concept of significant figures.

**Significant Figures:**
These are the digits in a number that indicate its precision. Operational rules for significant figures are:

1. From the first nonzero digit on the left to the last digit on the right (whether zero or nonzero) if there is a decimal point.
2. To the last nonzero digit if there is no decimal point.

Examples of significant figures:

- $65°F$: 2 significant figures (rule b)
- $18.3333°C$: 6 significant figures (rule a)
- $0.00471$: 3 significant figures (rule a)
- $43,500$: 3 significant figures (rule b)
- $43,500.$: 5 significant figures (rule a)

**Uncertainty and Reporting:**
Measured quantities are never exact and always carry some uncertainty. This uncertainty, specified by a range of values, depends on the measurement method. When reporting uncertainties, it's standard practice to include the last digit as uncertain. For instance, a distance of $25.0 \pm 0.5\, \mathrm{m}$ is reported as $25\, \mathrm{m}$, implying a potential range of $24\, \mathrm{m}$ to $26\, \mathrm{m}$.

**Handling Significant Digits in Calculations:**
When performing calculations, adhering to the rules of significant digits is crucial:

- **Addition:** The position of the decimal point determines uncertainty.
- **Multiplication:** The result's significant digits cannot exceed those of the factor with the fewest significant digits.

Examples:

- $3.4 \, \mathrm{mm} + 10\, \mathrm{mm} = 13\, \mathrm{mm}$
- $1000.00\, \mathrm{m} + 5\, \mathrm{m} = 1005\, \mathrm{m}$
- $1\, \mathrm{km} + 10 \, \mathrm{m} = 1\, \mathrm{km} + 0.010\, \mathrm{km} = 1\, \mathrm{km}$
- $2.10101\, \mathrm{N} \times 4.0\, \mathrm{m} = 8.4\, \mathrm{Nm}$
- $2\, \mathrm{kN} \times 4.400\, \mathrm{m} = 9\, \mathrm{Nm}$
- $2\, \mathrm{kN} \times 4.000\, \mathrm{m} \times 2.600\, \mathrm{s} = 2 \times 10^1\, \mathrm{Nms}$


## Summary

---

In this tutorial on numerical representation, we covered diverse number systems, including Decimal, Binary, Hexadecimal, and Octal, providing detailed insights into their structures and conversion processes. The tutorial elucidated the significance of Binary Representation in computers, exemplified by the conversion of $13_{10}$ to $1101_2$. Additionally, it explored Floating Point Representation, emphasizing the IEEE standard and its implications, particularly in Python's use of 64-bit floating-point numbers. The discussion extended to Round-off Errors, Accuracy, and Precision, elucidating the intricacies of significant figures and the nuanced difference between precision and accuracy. The tutorial concluded with an exploration of Machine Precision and Overflows, highlighting the vulnerabilities of floating-point numbers and encouraging practitioners to be mindful of these limitations. Overall, this tutorial provides a comprehensive guide for understanding and navigating numerical systems, ensuring precision and accuracy in computational endeavors.


Numerical representation is a foundational aspect of computing and scientific calculations. Understanding different numbering systems, floating-point representation, and potential pitfalls like underflow and round-off errors is crucial for accurate and reliable results. Whether you're coding in Python or working with numerical data, these concepts play a pivotal role in computational accuracy.