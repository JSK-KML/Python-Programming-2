---
outline: deep
title: Lab 3 - Lists and Data Structures
---

# Lab 03: Lists and Data Structures

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Why Do We Need Data Structures?

Launch **VS Code** and open the `exercise.py` file in `/labs/lab03/`. We'll discover why storing multiple values in individual variables becomes a nightmare.

### The Problem with Individual Variables

Imagine you're building a student grade system for your class. You need to store scores for just 5 students. Copy this code into your `exercise.py` file:

```python
# Storing 5 student scores
score1 = 85
score2 = 92
score3 = 78
score4 = 88
score5 = 95

# To find the average... we need to manually add each one
total = score1 + score2 + score3 + score4 + score5
average = total / 5
print(f"Average score: {average}")
```

Run this code. It works, but notice the problems:

1. You had to create 5 separate variables
2. You had to manually type each variable name in the calculation
3. The calculation formula changes if you add or remove students

Now imagine you have 50 students. Or 500 students. You'd need to create 500 variables and type all 500 names in your calculation!

::: warning PROBLEM
Individual variables don't scale. The more data you have, the more unmanageable your code becomes. You can't loop through variables, and every change requires editing multiple lines.
:::

### The Solution: Lists

Replace all the code in your `exercise.py` with this:

```python
# Store all scores in ONE list
scores = [85, 92, 78, 88, 95]

# Now we can access individual scores by index
print(f"First score: {scores[0]}")
print(f"Third score: {scores[2]}")
print(f"Last score: {scores[4]}")
```

Run this code. Look at the difference:

- **One variable** instead of five
- **Organized by position** - you can access any score using its index
- **Adding more students?** Just add numbers to the list

Try adding more scores to the list:
```python
scores = [85, 92, 78, 88, 95, 73, 91, 87]
print(f"We now have {scores} scores")
```

Run it again. The list grows easily!

::: tip INFO
A **data structure** is a way to organize and store multiple values so they can be used efficiently. Instead of many variables, you use ONE structure that holds everything.
:::

## What is a List?

A list is **Python**'s most commonly used data structure. Think of it as a numbered container where you can store multiple items in a specific order.

### Creating Your First List

Copy this code into your `exercise.py`:

```python
# Creating different types of lists
fruits = ["apple", "banana", "cherry"]
numbers = [10, 20, 30, 40, 50]
prices = [19.99, 24.50, 15.00]

print(fruits)
print(numbers)
print(prices)
```

Run this code. What do you see?

Each list is printed with square brackets `[ ]` and commas separating the items. This is how **Python** represents lists.

### List Structure

Every list has these components:

```python
fruits = ["apple", "banana", "kiwi"]
```

| Component | Value |
|-----------|-------|
| **List name** | `fruits` |
| **Elements** | `"apple"`, `"banana"`, `"kiwi"` |
| **Number of elements** | 3 |
| **List size** | 3 |

The **size** and **number of elements** mean the same thing - how many items are in the list.

### What Can Lists Hold?

Lists can store any type of data. Try this:

```python
# Different data types
integers = [10, 20, 30, 40, 50]
floats = [1.5, 2.3, 3.7, 4.1]
strings = ["apple", "banana", "cherry"]
booleans = [True, False, True, False]

print("Integers:", integers)
print("Floats:", floats)
print("Strings:", strings)
print("Booleans:", booleans)
```

Run this code. All of these work perfectly!

But here's something interesting - you can even mix types:

```python
mixed = [25, "hello", 3.14, True]
print(mixed)
```

This works, but should you do it? We'll explore why mixing types is usually a bad idea in a future lab.

## Accessing List Elements: Indexing

Now that you can create lists, you need to know how to access individual items. This is where **indexing** comes in.

### Positive Indexing

**Python** numbers list elements starting from `0`. This is called **zero-based indexing**.

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]
#          0        1         2       3         4        5
```

Copy this code:

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]

print(fruits[0])  # First element
print(fruits[2])  # Third element
print(fruits[5])  # Sixth element
```

Run this code. What do you see?


::: warning COMMON MISTAKE
The first element is at index `0`, not `1`
:::

### Negative Indexing

**Python** also lets you count from the **end** of the list using negative numbers:

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]
#          -6       -5        -4      -3        -2       -1
```

Try this:

```python
fruits = ["apple", "banana", "kiwi", "durian", "guava", "orange"]

print(fruits[-1])  # Last element
print(fruits[-2])  # Second-to-last element
print(fruits[-6])  # First element (counting from end)
```

Run this code. Notice that:
- `fruits[-1]` gives you the **last** element (`"orange"`)
- `fruits[-2]` gives you the **second-to-last** element (`"guava"`)

::: tip WHEN TO USE NEGATIVE INDEXING
Use `[-1]` when you need the last item but don't know the list size. This is much more common than other negative indices. In practice, you'll rarely use anything beyond `[-1]` or `[-2]`.
:::

### Nested List Indexing

Lists can contain other lists! This is called **nesting**. Try this:

```python
students = [
    ["Ali", 85, 92],
    ["Sara", 90, 88],
    ["Ahmad", 78, 82]
]

# Access the first student's data
print(students[0])  # ['Ali', 85, 92]

# Access Ali's name
print(students[0][0])  # Ali

# Access Sara's second score
print(students[1][2])  # 88
```

Run this code. The pattern is `list[outer_index][inner_index]`.

### The IndexError

What happens if you try to access an index that doesn't exist? Try this:

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[5])  # Only 3 elements, but asking for index 5
```

Run this code. You'll see:

```
IndexError: list index out of range
```

This error means you tried to access a position that doesn't exist in the list.

::: danger PREVENTING IndexError
Always make sure the index you're using is within the valid range. The valid indices for a list with 3 elements are 0, 1, 2 (or -1, -2, -3).
:::

## Modifying Lists

Lists are **mutable**, which means you can change them after creation.

### Changing Elements

You can modify individual elements by assigning a new value to an index:

```python
numbers = [10, 20, 30]
print(numbers)  # [10, 20, 30]

numbers[1] = 25  # Change the second element
print(numbers)  # [10, 25, 30]
```

Try this yourself. Change different indices and see what happens!

### Lists Can Grow and Shrink

Unlike some other programming languages, **Python** lists can change size. We'll learn how to add and remove elements in the next lab, but for now, know that lists are **dynamic** - they can grow or shrink as needed.

## List Characteristics

Lists have 5 key characteristics that make them useful:

### 1. Ordered

Lists maintain the order of elements as they are inserted.

```python
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
print(days[0])  # Always Monday
print(days[4])  # Always Friday
```

The order never changes unless you explicitly change it.

### 2. Mutable (Changeable)

You can modify elements after creation (as we just saw):

```python
names = ["Ali", "Sara", "John"]
names[1] = "Aisha"  # Change "Sara" to "Aisha"
print(names)  # ['Ali', 'Aisha', 'John']
```

### 3. Allows Duplicates

Lists can have the same value multiple times:

```python
names = ["Ali", "Sara", "Ali", "John"]
print(names)  # ['Ali', 'Sara', 'Ali', 'John']
```

Both "Ali" entries are kept!

### 4. Supports Different Data Types

A list can store multiple data types (though it's usually better to keep one type per list):

```python
mixed_list = [5, "Hello", 3.5, True]
print(mixed_list)  # [5, 'Hello', 3.5, True]
```

### 5. Dynamic Size

Lists can grow or shrink as needed. **Python** handles the memory management automatically.

## How Lists Work Internally

**Python** lists are implemented as **dynamic arrays**. Here's what that means:

When you create a list, **Python** allocates extra memory beyond what's immediately needed. This allows the list to grow efficiently.

```
Initial: numbers = [1, 2, 3]
┌───┬───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │   │   │   │  <- Extra space allocated
└───┴───┴───┴───┴───┴───┘
  Used: 3      Capacity: 6
```

When the capacity is exceeded, **Python** automatically resizes the list by allocating a larger block of memory.

::: tip WHY THIS MATTERS
Understanding that lists are dynamic arrays helps you appreciate why they're so flexible. You don't need to declare a size upfront - **Python** handles it all for you!
:::

## Exercise 1: Index Explorer <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise1/exercise1.py`.

**Situation:**

A program needs to access specific elements from a list of city names.

**Task:**

Write a program that:
1. Takes 5 city names as input (one per line)
2. Stores them in a list
3. Prints:
   - The first city
   - The third city
   - The last city (using negative indexing)

**Example Input:**
```
Kuala Lumpur
Tokyo
New York
Paris
Dubai
```

**Example Output:**
```
First: Kuala Lumpur
Third: New York
Last: Dubai
```

## Exercise 2: List Modifier <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise2/exercise2.py`.

**Situation:**

A program needs to update specific elements in a list.

**Task:**

Write a program that:
1. Takes 4 numbers as input (integers)
2. Stores them in a list
3. Changes the second element to 99
4. Changes the last element to 88
5. Prints the modified list

**Example Input:**
```
10
20
30
40
```

**Example Output:**
```
[10, 99, 30, 88]
```

## Exercise 3: Nested List Navigator <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise3/exercise3.py`.

**Situation:**

A program stores student data as nested lists and needs to extract specific information.

**Task:**

Write a program that:
1. Creates a nested list with 3 students, each having [name, score1, score2]
2. Takes 9 inputs total (3 students × 3 values each)
3. Prints:
   - The first student's name
   - The second student's first score
   - The third student's second score

**Example Input:**
```
Ali
85
92
Sara
90
88
Ahmad
78
82
```

**Example Output:**
```
First student: Ali
Second student's first score: 90
Third student's second score: 82
```

## Exercise 4: Index Range Checker <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise4/exercise4.py`.

**Situation:**

A program needs to safely access list elements and handle invalid indices.

**Task:**

Write a program that:
1. Takes 5 numbers as input (integers)
2. Stores them in a list
3. Takes an index to access (integer)
4. If the index is valid (0-4), print the element at that index
5. If the index is invalid, print "Invalid index"

**Example Input 1:**
```
10
20
30
40
50
2
```

**Example Output 1:**
```
30
```

**Example Input 2:**
```
10
20
30
40
50
7
```

**Example Output 2:**
```
Invalid index
```

**Hint:** Check if the index is between 0 and 4 (inclusive).

## Exercise 5: List Type Identifier <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise5/exercise5.py`.

**Situation:**

A program needs to identify what type of data a list contains.

**Task:**

Write a program that:
1. Takes 3 values as input (can be numbers or strings)
2. Stores them in a list
3. Checks the type of the first element
4. Prints "Number list" if it's an integer or float
5. Prints "String list" if it's a string

**Example Input 1:**
```
10
20
30
```

**Example Output 1:**
```
Number list
```

**Example Input 2:**
```
apple
banana
cherry
```

**Example Output 2:**
```
String list
```

**Hint:** Use `type()` to check the data type: `type(my_list[0])`

## Exercise 6: Duplicate Detector <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise6/exercise6.py`.

**Situation:**

A program needs to check if a list contains duplicate values.

**Task:**

Write a program that:
1. Takes 5 numbers as input (integers)
2. Stores them in a list
3. Checks if any value appears more than once
4. Prints "Has duplicates" or "No duplicates"

**Example Input 1:**
```
10
20
10
30
40
```

**Example Output 1:**
```
Has duplicates
```

**Example Input 2:**
```
10
20
30
40
50
```

**Example Output 2:**
```
No duplicates
```

**Hint:** Compare each element with every other element using nested loops.

## Exercise 7: Position Finder <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise7/exercise7.py`.

**Situation:**

A program needs to find the position (index) of a specific value in a list.

**Task:**

Write a program that:
1. Takes 5 numbers as input (integers)
2. Stores them in a list
3. Takes a target number to search for
4. Finds and prints the index of the target number
5. If not found, print "Not found"

**Example Input 1:**
```
10
20
30
40
50
30
```

**Example Output 1:**
```
2
```

**Example Input 2:**
```
10
20
30
40
50
99
```

**Example Output 2:**
```
Not found
```

**Hint:** Loop through the list and check each element.

## Exercise 8: List Reverser <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise8/exercise8.py`.

**Situation:**

A program needs to print a list in reverse order.

**Task:**

Write a program that:
1. Takes 4 words as input (strings)
2. Stores them in a list
3. Prints the list in reverse order (last element first)

**Example Input:**
```
apple
banana
cherry
date
```

**Example Output:**
```
date
cherry
banana
apple
```

**Hint:** Use negative indexing or loop backwards from the last index to 0.

## Exercise 9: List Comparator <Badge type="warning" text="Task" />

Navigate to `/labs/lab03/exercise9/exercise9.py`.

**Situation:**

A program needs to compare two lists and check if they're identical.

**Task:**

Write a program that:
1. Takes 3 numbers for the first list (integers)
2. Takes 3 numbers for the second list (integers)
3. Compares the lists element by element
4. Prints "Lists are equal" if all elements match
5. Prints "Lists are different" otherwise

**Example Input 1:**
```
10
20
30
10
20
30
```

**Example Output 1:**
```
Lists are equal
```

**Example Input 2:**
```
10
20
30
10
25
30
```

**Example Output 2:**
```
Lists are different
```

**Hint:** Compare each element at the same index position.

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 3: Lists and Data Structures", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
