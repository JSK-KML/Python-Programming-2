---
marp: true
theme: default
paginate: true
header: 'CP125 - Topic 3a: Tuples'
footer: 'Immutable Sequences'
---

# Topic 3a: Tuples
## Immutable Sequences

**Learning Outcomes:**
- Understand why tuples exist (immutability)
- Apply tuple syntax and operations
- Distinguish when to use tuples vs lists
- Use tuple unpacking effectively

**Prerequisites:** Topic 1 (Functions), Topic 2 (Lists)

---

<!-- Part 1: Opening Problem -->

# Opening Problem

**You're building a GPS tracking system.**

Location coordinates should never change once recorded.

```python
# Storing Kuala Lumpur coordinates as a list
kl_location = [3.1390, 101.6869]

print("Original:", kl_location)
```

What could go wrong?

---

# The Problem: Accidental Modification

```python
kl_location = [3.1390, 101.6869]

# Somewhere deep in the code...
def process_location(loc):
    loc[0] = 0  # Bug: accidentally modifying the original!
    return loc

process_location(kl_location)

print("After processing:", kl_location)
```

**Output:**
```
After processing: [0, 101.6869]
```

The original data is corrupted. No error was raised.

---

# Why This Happens

**Lists are mutable** — they can be changed after creation.

When you pass a list to a function, the function receives a reference to the same list, not a copy.

```python
coordinates = [3.1390, 101.6869]
backup = coordinates  # Not a copy — same list!

coordinates[0] = 0
print(backup)  # [0, 101.6869] — backup is also modified!
```

**For data that should never change, lists are dangerous.**

There must be a better way.

---

<!-- Part 2: The Solution -->

# The Solution: Tuples

**Tuples are immutable sequences.**

```python
kl_location = (3.1390, 101.6869)  # Parentheses, not brackets

kl_location[0] = 0  # Attempting to modify
```

**Output:**
```
TypeError: 'tuple' object does not support item assignment
```

Python prevents the modification. The bug is caught immediately.

---

# Tuples Protect Your Data

```python
kl_location = (3.1390, 101.6869)

def process_location(loc):
    loc[0] = 0  # TypeError raised here!
    return loc

process_location(kl_location)
```

**The program fails fast** — you know exactly where the problem is.

With lists, the bug might go unnoticed until much later.

---

<!-- Part 3: Taxonomy -->

# Where Tuples Fit

Python provides 4 built-in data structures:

| Data Structure | Symbol | Mutable? | Ordered? | Primary Use |
|----------------|--------|----------|----------|-------------|
| List | `[ ]` | Yes | Yes | Collections that change |
| **Tuple** | `( )` | **No** | Yes | Collections that should not change |


---

# Tuple vs List: The Core Difference

| Feature | List | Tuple |
|---------|------|-------|
| Symbol | `[1, 2, 3]` | `(1, 2, 3)` |
| Mutable | Yes | **No** |
| Can modify elements | Yes | No |
| Can add/remove elements | Yes | No |
| Memory usage | More | **Less** |
| Speed | Slower | **Faster** |

**Think of it as:** Tuple = "Frozen List"

---


<!-- Part 4: Anatomy -->

# Structure of a Tuple

```python
my_tuple = (10, 20, 30, "Python", 3.14)
```

**Breaking it down:**

```
       tuple name              elements (comma-separated)
           │                              │
           ▼                              ▼
      my_tuple = (10, 20, 30, "Python", 3.14)
                 │                         │
                 └──── parentheses ( ) ────┘
```

| Component | Value |
|-----------|-------|
| Tuple name | `my_tuple` |
| Elements | `10`, `20`, `30`, `"Python"`, `3.14` |


---

# Creating Tuples: Multiple Ways

**Method 1: Using parentheses**
```python
coordinates = (3.14, 101.68)
print(coordinates)  # (3.14, 101.68)
```

**Method 2: Using the `tuple()` function**
```python
numbers = tuple([1, 2, 3])  # Convert list to tuple
print(numbers)  # (1, 2, 3)
```

**Method 3: Without parentheses (tuple packing)**
```python
point = 5, 10, 15  # Still a tuple!
print(point)       # (5, 10, 15)
print(type(point)) # <class 'tuple'>
```

---

# Special Cases: Empty and Single-Element Tuples

**Empty tuple:**
```python
empty = ()
# or
empty = tuple()

print(empty)       # ()
print(len(empty))  # 0
```

**Single-element tuple — trailing comma required:**
```python
single = (5,)   # Correct: tuple with one element
print(single)   # (5,)

wrong = (5)     # Wrong: just the integer 5 in parentheses
print(wrong)    # 5
print(type(wrong))  # <class 'int'>
```

---

# The Trailing Comma Rule

**Why is `(5)` not a tuple?**

Parentheses are used for grouping in math expressions:

```python
result = (5 + 3) * 2  # Parentheses for grouping, not tuple
print(result)  # 16
```

Python needs the comma to distinguish:

```python
grouping = (5)     # Integer 5
one_tuple = (5,)   # Tuple containing 5

print(type(grouping))  # <class 'int'>
print(type(one_tuple)) # <class 'tuple'>
```

**Rule:** Single-element tuples require a trailing comma.

---

# Exercise 1: Identify Tuple Syntax

**Which of these create valid tuples?**

```python
a = (1, 2, 3)
b = 1, 2, 3
c = (1)
d = (1,)
e = tuple([1, 2, 3])
f = ()
g = tuple()
```

**Identify:**
1. Which create tuples?
2. What is the type of `c`?
3. How many elements does `d` have?

---

<!-- Part 5: Deep Dive -->

# Tuple Characteristics

Tuples share many characteristics with lists:

| Characteristic | List | Tuple |
|----------------|------|-------|
| Ordered | Yes | Yes |
| Indexed | Yes | Yes |
| Allows duplicates | Yes | Yes |
| Supports multiple types | Yes | Yes |
| Iterable | Yes | Yes |
| **Mutable** | Yes | **No** |

The only difference: **Tuples cannot be modified after creation.**

---

# Indexing: Same as Lists

**Important:** Even though tuples use `()` for creation, we use `[]` for indexing.

```python
fruits = ("apple", "banana", "cherry", "date")  # Created with ()
print(fruits[0])   # Accessed with [] — NOT fruits(0)
```

**Positive indexing (left to right, starting at 0):**

```python
fruits = ("apple", "banana", "cherry", "date")
#           0         1         2        3

print(fruits[0])   # apple
print(fruits[2])   # cherry
```
---

**Negative indexing (right to left, starting at -1):**

```python
print(fruits[-1])  # date (last element)
print(fruits[-2])  # cherry (second to last)
```

---

# Slicing: Extracting a Range of Elements

**Slice syntax:** `tuple[start:end]`

- `start`: Index where slice begins (inclusive)
- `end`: Index where slice ends (exclusive — this index is NOT included)

```python
numbers = (10, 20, 30, 40, 50, 60)
#           0   1   2   3   4   5
```

---

# Slicing: Basic Examples

```python
numbers = (10, 20, 30, 40, 50, 60)
#           0   1   2   3   4   5
```

**Extract elements from index 1 to 3:**
```python
print(numbers[1:4])   # (20, 30, 40)
# Start at index 1, stop BEFORE index 4
```

**Omitting start — defaults to 0:**
```python
print(numbers[:3])    # (10, 20, 30)
# Same as numbers[0:3]
```
---
**Omitting end — goes to the last element:**
```python
print(numbers[3:])    # (40, 50, 60)
# From index 3 to the end
```




---

# Looping Through Tuples

**Using a for loop:**

```python
colors = ("red", "green", "blue")

for color in colors:
    print(color)
```

**Output:**
```
red
green
blue
```

**Works the same as looping through lists.**

---

# CRUD Operations Overview

| Operation | List | Tuple |
|-----------|------|-------|
| **C**reate | `[1, 2, 3]` | `(1, 2, 3)` |
| **R**ead | `list[0]`, slicing | `tuple[0]`, slicing |
| **U**pdate | `list[0] = 99` | Not directly possible |
| **D**elete | `del list[0]`, `remove()` | Not directly possible |

**Tuples are read-only after creation.**

---

# CREATE: Making Tuples

```python
# Empty tuple
empty = ()

# From literal
coordinates = (3.14, 101.68)

# From list conversion
numbers = tuple([1, 2, 3])

# Single element (trailing comma!)
single = (42,)

# Mixed types (allowed but rarely recommended)
mixed = (1, "hello", 3.14, True)

# Nested tuples
nested = ((1, 2), (3, 4), (5, 6))
```

---

# READ: Accessing Tuple Elements

**By index:**
```python
point = (10, 20, 30)
x = point[0]   # 10
y = point[1]   # 20
z = point[2]   # 30
```

**By slicing:**
```python
first_two = point[:2]  # (10, 20)
```

**By looping:**
```python
for value in point:
    print(value)
```

---

**By unpacking (covered next):**
```python
x, y, z = point  # x=10, y=20, z=30
```

---

# UPDATE: The Immutability Challenge

**Direct modification fails:**

```python
point = (10, 20, 30)
point[0] = 99
```

**Output:**
```
TypeError: 'tuple' object does not support item assignment
```

---

# UPDATE: Workaround (But Question It!)

**Workaround: Convert to list, modify, convert back**

```python
point = (10, 20, 30)

# Step 1: Convert to list
temp_list = list(point)

# Step 2: Modify the list
temp_list[0] = 99

# Step 3: Convert back to tuple
point = tuple(temp_list)

print(point)  # (99, 20, 30)
```

**If you need this workaround often, ask yourself: Do you really need a tuple?**

Perhaps a list is more appropriate for your use case.

---

# UPDATE: Using Concatenation

**Add elements by creating a new tuple:**

```python
original = (1, 2, 3)

# Add element at the end
extended = original + (4,)
print(extended)  # (1, 2, 3, 4)

# Add element at the beginning
extended = (0,) + original
print(extended)  # (0, 1, 2, 3)

# Combine tuples
combined = (1, 2) + (3, 4) + (5, 6)
print(combined)  # (1, 2, 3, 4, 5, 6)
```

**Note:** The original tuple is unchanged. A new tuple is created.

---

# DELETE: Removing Elements

**Direct deletion of elements fails:**

```python
point = (10, 20, 30)
del point[0]
```

**Output:**
```
TypeError: 'tuple' object doesn't support item deletion
```

---

# DELETE: Workaround (But Question It!)

**Workaround: Convert to list, remove, convert back**

```python
data = (1, 2, 3, 4, 5)

temp_list = list(data)
temp_list.remove(3)  # Remove value 3
data = tuple(temp_list)

print(data)  # (1, 2, 4, 5)
```

**If you need this workaround often, ask yourself: Do you really need a tuple?**

---

**Delete entire tuple:**

```python
data = (1, 2, 3)
del data  # Deletes the variable
# print(data)  # NameError: name 'data' is not defined
```

---

# Exercise 2: CRUD Operations

**Given this tuple:**
```python
scores = (85, 92, 78, 88, 95)
```

**Tasks:**
1. Access the third element
2. Get the last two elements using slicing
3. Change the first element to 90 (show the workaround)
4. Add 100 to the end of the tuple

---

# Tuple Unpacking

**Assign tuple elements to individual variables:**

```python
coordinates = (3.14, 101.68)

# Traditional way
lat = coordinates[0]
lon = coordinates[1]

# Unpacking way (cleaner)
lat, lon = coordinates

print(lat)  # 3.14
print(lon)  # 101.68
```

**The number of variables must match the number of elements.**

---

# Unpacking Error: Mismatched Count

**Too few variables:**

```python
point = (10, 20, 30)
x, y = point
```

**Output:**
```
ValueError: too many values to unpack (expected 2)
```

**Too many variables:**

```python
point = (10, 20)
x, y, z = point
```
---
**Output:**
```
ValueError: not enough values to unpack (expected 3, got 2)
```

**Always ensure the count matches**


---

# Exercise 3: Tuple Unpacking

**What will this code print?**

```python
def get_student_info(student_tuple):
    name, age, gpa = student_tuple
    return name, gpa

student = ("Ali", 20, 3.85)
student_name, student_gpa = get_student_info(student)

print(f"{student_name} has GPA {student_gpa}")
```

---



# Tuple Comparison

**Tuples are compared element by element:**

```python
print((1, 2, 3) == (1, 2, 3))  # True
print((1, 2, 3) == (1, 2, 4))  # False

print((1, 2, 3) < (1, 2, 4))   # True (compares element by element)
print((1, 2, 3) < (2, 0, 0))   # True (first element decides)
```

**Comparison follows lexicographic order:**
1. Compare first elements
2. If equal, compare second elements
3. Continue until a difference is found

---

# Membership Testing

**Check if element exists:**

```python
colors = ("red", "green", "blue")

print("red" in colors)      # True
print("yellow" in colors)   # False
print("yellow" not in colors)  # True
```

**Works the same as lists.**

---

<!-- Part 6: Built-in Tools -->

# Comparing Lists and Tuples: Functions

**Do these functions work the same on lists and tuples?**

| Function | List | Tuple |
|----------|------|-------|
| `len()` | `len([1,2,3])` → `3` | `len((1,2,3))` → `3` |
| `min()` | `min([5,2,8])` → `2` | `min((5,2,8))` → `2` |
| `max()` | `max([5,2,8])` → `8` | `max((5,2,8))` → `8` |
| `sum()` | `sum([1,2,3])` → `6` | `sum((1,2,3))` → `6` |

**Result: Exactly the same.**

---

# Is Everything the Same?

We've seen that `len()`, `min()`, `max()`, `sum()` behave identically.

**But what about methods?**

Let's compare 4 more operations:
1. `.append()` — Add element to end
2. `.remove()` — Remove element
3. `.sort()` — Sort elements
4. `.index()` — Find position of element

**Are these the same for lists and tuples?**

---

# Comparing `.append()`

**List has `.append()` method:**
```python
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)
```

**Output:**
```
['apple', 'banana', 'cherry']
```

---

**Tuple does NOT have `.append()` method:**
```python
fruits = ("apple", "banana")
fruits.append("cherry")
```

**Output:**
```
AttributeError: 'tuple' object has no attribute 'append'
```

**Why?** Because `.append()` modifies data. Tuples are immutable.

---

# Alternative for Tuples: Concatenation

**Use `+` to create a new tuple:**

```python
fruits = ("apple", "banana")
fruits = fruits + ("cherry",)
print(fruits)
```

**Output:**
```
('apple', 'banana', 'cherry')
```

**Note:** Don't forget the trailing comma for single-element tuple `("cherry",)`

---

# `.append()` Summary

| Aspect | List | Tuple |
|--------|------|-------|
| Method | `.append(item)` | ❌ None |
| Alternative | — | Concatenation `+` |
| Modifies original | Yes | No (creates new) |

---

# Comparing `.remove()`

**List has `.remove()` method:**
```python
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
print(fruits)
```

**Output:**
```
['apple', 'cherry']
```

---

**Tuple does NOT have `.remove()` method:**
```python
fruits = ("apple", "banana", "cherry")
fruits.remove("banana")
```

**Output:**
```
AttributeError: 'tuple' object has no attribute 'remove'
```

**Why?** Because `.remove()` modifies data. Tuples are immutable.

---

# Alternative for Tuples: Convert and Back

**No direct alternative. Must convert:**

```python
fruits = ("apple", "banana", "cherry")

temp = list(fruits)
temp.remove("banana")
fruits = tuple(temp)

print(fruits)
```

**Output:**
```
('apple', 'cherry')
```

**If you need this often, use a list instead.**

---

# `.remove()` Summary

| Aspect | List | Tuple |
|--------|------|-------|
| Method | `.remove(value)` | ❌ None |
| Alternative | — | Convert to list first |
| Modifies original | Yes | No (creates new) |

---

# Comparing `.sort()` vs `sorted()`

**List has `.sort()` method:**
```python
numbers = [5, 2, 8, 1, 9]
numbers.sort()
print(numbers)
```

**Output:**
```
[1, 2, 5, 8, 9]
```

**The original list is modified.**

---

**Tuple does NOT have `.sort()` method:**
```python
numbers = (5, 2, 8, 1, 9)
numbers.sort()
```

**Output:**
```
AttributeError: 'tuple' object has no attribute 'sort'
```

**Why?** Because `.sort()` modifies data in place. Tuples are immutable.

---

# The Alternative: `sorted()` Function

**`sorted()` is a function, not a method. It works on both!**

**List:**
```python
numbers = [5, 2, 8, 1, 9]
result = sorted(numbers)
print(result)
print(numbers)  # Original unchanged
```

**Output:**
```
[1, 2, 5, 8, 9]
[5, 2, 8, 1, 9]
```

---

**Tuple:**
```python
numbers = (5, 2, 8, 1, 9)
result = sorted(numbers)
print(result)
print(numbers)  # Original unchanged
```

**Output:**
```
[1, 2, 5, 8, 9]
(5, 2, 8, 1, 9)
```

**Note:** `sorted()` always returns a **list**, not a tuple.

---

# `.sort()` vs `sorted()` Summary

| Aspect | `.sort()` | `sorted()` |
|--------|-----------|------------|
| Type | Method | Function |
| Syntax | `list.sort()` | `sorted(sequence)` |
| Works on List | ✅ | ✅ |
| Works on Tuple | ❌ | ✅ |
| Modifies original | Yes | No |
| Returns | `None` | New list |

---

# Comparing `.index()`

**List:**
```python
fruits = ["apple", "banana", "cherry"]
print(fruits.index("banana"))
```

**Output:**
```
1
```

---

**Tuple:**
```python
fruits = ("apple", "banana", "cherry")
print(fruits.index("banana"))
```

**Output:**
```
1
```

**Result: Exactly the same.**

---

# `.index()` — Value Not Found

**List:**
```python
fruits = ["apple", "banana", "cherry"]
print(fruits.index("orange"))
```

**Output:**
```
ValueError: 'orange' is not in list
```

---

**Tuple:**
```python
fruits = ("apple", "banana", "cherry")
print(fruits.index("orange"))
```

**Output:**
```
ValueError: tuple.index(x): x not in tuple
```

**Result: Same behavior. Same error.**

---

# Safe `.index()` — Check First!

**Always check if the value exists before using `.index()`:**

```python
fruits = ("apple", "banana", "cherry")
target = "orange"

if target in fruits:
    position = fruits.index(target)
    print(f"Found at index {position}")
else:
    print(f"{target} not found")
```

**Output:**
```
orange not found
```

**The `in` keyword prevents the ValueError.**

---

# Summary: Lists vs Tuples

| Operation | List | Tuple | Same? |
|-----------|------|-------|-------|
| `len()` | ✅ | ✅ | Exactly the same |
| `min()` | ✅ | ✅ | Exactly the same |
| `max()` | ✅ | ✅ | Exactly the same |
| `sum()` | ✅ | ✅ | Exactly the same |
| `.append()` | ✅ | ❌ | Use `+` concatenation |
| `.remove()` | ✅ | ❌ | Convert to list first |
| `.sort()` | ✅ | ❌ | Use `sorted()` instead |
| `.index()` | ✅ | ✅ | Exactly the same |

---

# The Pattern

**Operations that READ data → Work on both**
- `len()`, `min()`, `max()`, `sum()` ✅
- `.index()` ✅

**Operations that MODIFY data → List only**
- `.append()` ❌
- `.remove()` ❌
- `.sort()` ❌

**Tuples reject any operation that tries to change them.**


---

# Exercise 4: Compare Operations

**Given:**
```python
list_data = [85, 92, 78, 88, 95]
tuple_data = (85, 92, 78, 88, 95)
```

**For each operation, predict: Will it work on both?**

1. `list_data.append(100)` vs `tuple_data.append(100)`
2. `list_data.remove(88)` vs `tuple_data.remove(88)`
3. `list_data.sort()` vs `tuple_data.sort()`
4. `sorted(list_data)` vs `sorted(tuple_data)`
5. `list_data.index(78)` vs `tuple_data.index(78)`

---

<!-- Part 7: The Principled Approach -->

# The Principled Approach

**4 principles for using tuples properly:**

1. Unpack Properly with Meaningful Names
2. Unpack Before Operating
3. Question Workarounds
4. Keep Elements the Same Type

---

# Principle 1: Unpack Properly with Meaningful Names

**The Wrong Way:**

```python
point = (10, 20, 30)
x, y = point  # ValueError! Wrong count
```

**Output:**
```
ValueError: too many values to unpack (expected 2)
```

---

# Principle 1: The Wrong Way (Continued)

**Also wrong — meaningless names:**

```python
data = (3.14, 101.68)
a, b = data  # What are a and b?

result = a + b  # Meaningless code
```

---

# Principle 1: The Correct Way

**Step 1: Match the count**
**Step 2: Use descriptive names**

```python
coordinates = (3.14, 101.68)

# Check count if unsure
print(len(coordinates))  # 2

# Unpack with meaningful names
latitude, longitude = coordinates

print(f"Location: {latitude}, {longitude}")
```

**Rule: Match the element count AND use names that describe the data.**

---

# Principle 1: More Examples

```python
# Bad: Generic names
p = (255, 128, 0)
a, b, c = p

# Good: Descriptive names
rgb_color = (255, 128, 0)
red, green, blue = rgb_color

# Bad: Wrong count AND bad names
point = (10, 20, 30)
x, y = point  # Error!

# Good: Correct count AND good names
point = (10, 20, 30)
x, y, z = point
```

---

# Principle 2: Unpack Before Operating

**The Wrong Way:**

```python
def process_point(point):
    # Directly using index in calculation
    result = point[0] * 2 + point[1] * 3
    return result
```

**Hard to read. What is index 0? What is index 1?**

---

# Principle 2: The Correct Way

**Unpack first, then operate:**

```python
def process_point(point):
    # Step 1: Unpack into named variables
    x, y = point
    
    # Step 2: Use the named variables
    result = x * 2 + y * 3
    return result

point = (10, 20)
print(process_point(point))  # 80
```

**Rule: Unpack tuple elements into named variables before using them in operations.**

---

# Principle 2: Another Example

```python
# Bad: Indices everywhere
def calculate_area(rectangle):
    return rectangle[0] * rectangle[1]

# Good: Unpack first
def calculate_area(rectangle):
    width, height = rectangle
    return width * height

rect = (10, 5)
print(calculate_area(rect))  # 50
```

---

# Principle 3: Question Workarounds

**If you find yourself doing this often:**

```python
data = (1, 2, 3)

# Convert to list
temp = list(data)
temp.append(4)
data = tuple(temp)
```

**Stop and ask: Do I really need a tuple here?**

---

# Principle 3: Make the Right Choice

**If data needs to change → Use a list from the start**

```python
# Wrong: Tuple that keeps getting converted
scores = (85, 90)
temp = list(scores)
temp.append(78)
scores = tuple(temp)  # Wasteful!

# Right: List when data changes
scores = [85, 90]
scores.append(78)  # Simple and efficient
```

**Rule: If you need workarounds frequently, reconsider your data structure choice.**

---

# Principle 4: Group Data That Belongs Together

**Tuples are for data that forms a logical unit.**

**Good examples:**

```python
# Coordinates — x and y belong together as one point
point = (10, 20)

# RGB color — three values that define one color
color = (255, 128, 0)

# Date — day, month, year belong together
date = (15, 1, 2024)
```

---

# Principle 4: The Key Question

**Ask: "Do these values belong together as one thing?"**

```python
# Good: Values that form a logical unit
coordinates = (3.14, 101.68)  # One location
rgb = (255, 128, 0)           # One color
date = (15, 1, 2024)          # One date

# Bad: Unrelated values thrown together
random_stuff = (42, 99, 7, 123)  # No logical connection
```

---

# Principle 4: Why Positional Indexing is OK Here

**In Topic 2, we said: "Don't rely on index positions."**

But tuples are different. Some data has a **universally known order**:

| Tuple | Everyone knows... |
|-------|-------------------|
| `(x, y)` | x comes first, y comes second |
| `(r, g, b)` | Red, Green, Blue — always this order |
| `(day, month, year)` | Standard date format |

**When the order is universally understood, positional indexing is acceptable.**

---

# Principle 4: The Rule

> **"Use tuples for data that belongs together as a logical unit."**

| Good Use (Cohesive) | Bad Use (Random) |
|---------------------|------------------|
| `(x, y)` coordinates | `(42, 99, 7)` random numbers |
| `(day, month, year)` | Unrelated values |
| `(red, green, blue)` | Data with no connection |

**Rule: If the values form a single concept together, use a tuple.**

---

# Principles Summary

| # | Principle | How To Apply |
|---|-----------|--------------|
| 1 | Unpack Properly | Match count + use meaningful names |
| 2 | Unpack Before Operating | Unpack first, then calculate |
| 3 | Question Workarounds | If converting often, use a list |
| 4 | Group Related Data | Use tuples for data that belongs together |

---

<!-- Part 8: Wrap-up -->

# Common Mistakes

**1. Forgetting trailing comma for single element:**
```python
single = (5)   # Wrong: integer 5
single = (5,)  # Correct: tuple with one element
```

**2. Trying to modify tuple elements:**
```python
point = (10, 20)
point[0] = 99  # TypeError!
```

---

# Common Mistakes (Continued)

**3. Expecting `sorted()` to return a tuple:**
```python
numbers = (5, 2, 8)
result = sorted(numbers)  # Returns a list, not tuple!
print(type(result))  # <class 'list'>
```

**4. Mismatched unpacking:**
```python
point = (10, 20, 30)
x, y = point  # ValueError: too many values to unpack
```

---

# Common Mistakes (Continued)

**5. Using list when tuple is more appropriate:**
```python
# Bad: coordinates can be accidentally modified
location = [3.14, 101.68]

# Good: coordinates are protected
location = (3.14, 101.68)
```

**6. Confusing tuple creation with function calls:**
```python
result = function(1, 2, 3)  # Function call
my_tuple = (1, 2, 3)        # Tuple creation
```

---

# Summary

**What we covered:**

1. **Tuples are immutable sequences** — cannot be modified after creation
2. **Syntax:** Parentheses `()`, comma-separated elements
3. **Single element:** Requires trailing comma `(5,)`
4. **CRUD Operations:** Read works, Update/Delete require conversion
5. **Tuple Unpacking:** Clean way to access elements
6. **Functions:** Tuples are ideal for returning multiple values
7. **Built-in tools:** `len()`, `min()`, `max()`, `sum()`, `count()`, `index()`
8. **Hashable:** Can be used as dictionary keys and set elements

---

# Tuples vs Lists: Quick Reference

| Aspect | List | Tuple |
|--------|------|-------|
| Syntax | `[1, 2, 3]` | `(1, 2, 3)` |
| Mutable | Yes | No |
| Methods | 11+ | 2 |
| Memory | More | Less |
| Speed | Slower | Faster |
| As dict key | No | Yes |
| Use case | Variable data | Fixed data |

---

# Principles Quick Reference

| # | Principle | Rule |
|---|-----------|------|
| 1 | Immutability by Design | If it shouldn't change, make it a tuple |
| 2 | Fixed vs Variable | Fixed structure → Tuple |
| 3 | Unpacking | Unpack into named variables |
| 4 | Multiple Returns | Return as tuples |
| 5 | Hashable Keys | Tuples can be dict keys |

---

# What's Next

**Topic 3b: Sets**

- Tuples can be **set elements** because they are immutable
- Lists **cannot** be set elements

```python
# Valid: set of tuples
coordinates = {(0, 0), (1, 0), (0, 1)}

# Invalid: set of lists
# coordinates = {[0, 0], [1, 0]}  # TypeError!
```

**Understanding tuple immutability is key to understanding sets.**
