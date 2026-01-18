---
outline: deep
title: Lab 5 - Tuples
---

# Lab 05: Tuples

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>

## What is a Tuple?

A tuple is like a list, but with one key difference: **tuples cannot be changed after creation**.

```python
# List - uses square brackets
fruits_list = ["apple", "banana", "cherry"]

# Tuple - uses parentheses
fruits_tuple = ("apple", "banana", "cherry")
```

Both store multiple values. Both are ordered. Both support indexing. But only lists can be modified.

### Why Use Tuples?

Tuples protect data that should never change. If you accidentally try to modify a tuple, Python raises an error immediately:

```python
coordinates = (3.14, 101.68)
coordinates[0] = 0  # TypeError: 'tuple' object does not support item assignment
```

This "fail fast" behavior helps you catch bugs early.

### The Single-Element Trap

Creating a single-element tuple requires a trailing comma:

```python
single = (5,)   # Correct: tuple with one element
wrong = (5)     # Wrong: just the integer 5

print(type(single))  # <class 'tuple'>
print(type(wrong))   # <class 'int'>
```

Without the comma, Python interprets `(5)` as a grouped expression, not a tuple.

## Tuple Operations

Tuples support the same read operations as lists:

```python
colors = ("red", "green", "blue", "yellow")

# Indexing
print(colors[0])    # red
print(colors[-1])   # yellow

# Slicing
print(colors[1:3])  # ('green', 'blue')

# Membership
print("red" in colors)  # True

# Length
print(len(colors))  # 4
```

The key difference: you cannot modify, add, or remove elements.

## Tuple Unpacking

Instead of accessing elements by index, you can **unpack** a tuple into named variables:

```python
point = (3.14, 101.68)

# Using indexing (clunky)
x = point[0]
y = point[1]

# Using unpacking (clean and professional)
x, y = point

print(x)  # 3.14
print(y)  # 101.68
```

This is especially powerful in loops:

```python
results = [("A", 90), ("B", 85)]

for name, score in results:
    print(f"Student {name} got {score}")
```


## Exercise 1: Drone Backward Checker <Badge type="warning" text="Task" />

Navigate to `/labs/lab05/exercise1/exercise1.py`.

**Situation:**

A delivery drone records its flight path as a tuple of coordinate tuples: `(x, y, z)`. The system needs to ensure the drone is always moving forward. 

A drone is considered to have moved **backward** if its current `x` value is less than the previous `x` OR its current `y` value is less than the previous `y`.

**Example:**
```
Path: ((0, 0, 10), (5, 5, 12), (4, 6, 10), (10, 10, 15))
       Point 0     Point 1     Point 2      Point 3

Check Point 1 to 2:
- Pt 1: x=5, y=5
- Pt 2: x=4, y=6
- Since 4 < 5, the drone moved backward in the x-direction.
→ Result: True
```

**Task:**

Write a function that takes a tuple of waypoint tuples and returns `True` if backward movement was detected, and `False` otherwise.

---

## Exercise 2: Largest Temperature Drop <Badge type="warning" text="Task" />

Navigate to `/labs/lab05/exercise2/exercise2.py`.

**Situation:**

A climate sensor records hourly temperature readings stored in a tuple. An analyst needs to find the **maximum single drop** in temperature between any two consecutive hours. A "drop" only occurs if the temperature decreases.

**Example:**
```
Readings: (32.5, 31.0, 31.5, 28.0, 24.5)
           hr 0  hr 1  hr 2  hr 3  hr 4

Drops between hours:
- Hr 0 to 1: 32.5 → 31.0 (Drop of 1.5)
- Hr 1 to 2: 31.0 → 31.5 (No drop)
- Hr 2 to 3: 31.5 → 28.0 (Drop of 3.5)
- Hr 3 to 4: 28.0 → 24.5 (Drop of 3.5)

Largest drop found: 3.5
```

**Task:**

Write a function that takes a tuple of temperatures and returns the value of the largest consecutive drop found. If no drops occur, return `0.0`.

---


## Functions and Methods: List vs. Tuple

Many built-in functions behave identically for both lists and tuples. However, because tuples are immutable (read-only), they do not support methods that modify data in-place.

### 1. Functions (Exactly the Same)

Functions like `len()`, `min()`, `max()`, and `sum()` work exactly the same way on both structures.

| Function | List Example | Tuple Example | Result |
| :--- | :--- | :--- | :--- |
| `len()` | `len([1, 2, 3])` | `len((1, 2, 3))` | `3` |
| `min()` | `min([5, 2, 8])` | `min((5, 2, 8))` | `2` |
| `max()` | `max([5, 2, 8])` | `max((5, 2, 8))` | `8` |
| `sum()` | `sum([1, 2, 3])` | `sum((1, 2, 3))` | `6` |

### 2. Methods (Key Differences)

Methods belong to the object itself. Lists have many more methods because they can be modified.

| Method | List | Tuple | Reasoning |
| :--- | :--- | :--- | :--- |
| `.index(val)` | Supported | Supported | Does not modify data |
| `.count(val)` | Supported | Supported | Does not modify data |
| `.append(val)` | Supported | Not Supported | Tuples cannot grow |
| `.remove(val)` | Supported | Not Supported | Tuples cannot shrink |
| `.sort()` | Supported | Not Supported | Cannot reorder items in-place |

#### Sorting a Tuple
While tuples do not have a `.sort()` method, you can use the `sorted()` function. Note that `sorted()` always returns a **new list**, regardless of the input type.

```python
scores = (90, 80, 85)
# Use sorted() function, NOT scores.sort()
sorted_scores = sorted(scores)
print(sorted_scores)  # [80, 85, 90] (This is now a list)
```

## Tuple Nesting and Grouping

Tuples are often used to group related information together. When you have a collection of these groups, you get a **tuple of tuples**.

```python
# A list of student records
# Each record is (name, score, attendance_percent)
students = (
    ("Ali", 85, 95),
    ("Sara", 92, 98),
    ("Ahmad", 78, 80)
)

# Accessing nested data
first_student = students[0]
print(first_student)        # ("Ali", 85, 95)
print(first_student[0])     # "Ali"

# Or using unpacking in a loop (preferred)
for name, score, attendance in students:
    if attendance < 90:
        print(f"Warning: {name} has low attendance")
```

---

## Exercise 3: Network Hop Analyzer <Badge type="warning" text="Task" />


Navigate to `/labs/lab05/exercise3/exercise3.py`.

**Background:**

When you visit a website, your data doesn't go directly to the server. It passes through multiple **routers** along the way. Each router is called a **"hop"**.

A **traceroute** tool measures the time (in milliseconds) it takes for data to reach each hop. Network engineers use this to find slow points in the network.

**Data Format:**

Traceroute results are stored as a **tuple of tuples**. Each inner tuple represents one hop:
```
(hop_number, latency_in_ms)
```

For example: `(3, 45)` means "hop number 3 took 45 milliseconds"

**What is a Bottleneck?**

A **bottleneck** is where the network suddenly slows down. We detect it by finding the **largest jump in latency** between two consecutive hops.

**Situation:**

Given a traceroute result, find the index of the hop where the bottleneck **begins** (the starting point of the largest jump).

**Example:**
```
Traceroute: ((1, 5), (2, 8), (3, 45), (4, 48), (5, 50))
             idx 0    idx 1   idx 2    idx 3    idx 4

Calculate jumps between consecutive hops:
- From (1, 5) to (2, 8):   |8 - 5| = 3ms
- From (2, 8) to (3, 45):  |45 - 8| = 37ms  ← LARGEST
- From (3, 45) to (4, 48): |48 - 45| = 3ms
- From (4, 48) to (5, 50): |50 - 48| = 2ms

The largest jump (37ms) starts at hop (2, 8)
(2, 8) is at index 1 in the traceroute

→ Return 1
```

**Task:**

Write a function that:
1. Iterates through the traceroute to calculate absolute latency jumps between consecutive hops.
2. Identifies the record where the largest jump begins.
3. Returns the index of the detected record.


---

## Lists vs. Tuples: A Quick Summary

| Feature | List `[]` | Tuple `()` |
| :--- | :--- | :--- |
| **Mutable?** | Yes (can `.append`, `.remove`) | No (read-only) |
| **Speed** | Slightly slower | Slightly faster |
| **Typical Use** | Collection of similar items | Group of related data (like x, y) |
| **Safety** | Can be changed by mistake | Protected from changes |

---


## List Review: Building Lists with append()

Unlike tuples, lists can grow dynamically. The `.append()` method adds an element to the end of a list.

```python
passing_scores = []

all_scores = [45, 82, 67, 91, 55, 78, 88]

for score in all_scores:
    if score >= 60:
        passing_scores.append(score)

print(passing_scores)  # [82, 67, 91, 78, 88]
```

This pattern is extremely common:
1. Start with an empty list
2. Loop through data
3. If condition is met, append to the list



## Exercise 4: Query Performance Filter <Badge type="warning" text="Task" />

Navigate to `/labs/lab05/exercise4/exercise4.py`.

**Background:**

Database administrators monitor how long queries take to execute. Sometimes a query runs unusually slow due to temporary issues (server busy, waiting for locks, etc.). These slow queries are called **outliers** and should be removed before analyzing typical performance.

**What is an Outlier?**

A slow outlier is any query time that exceeds `mean + standard deviation`.

**Standard Deviation Formulas:**
```
mean = sum of all values / count

variance = sum of (each value - mean)² / count

std_dev = √variance
```

**Situation:**

Given a list of query execution times (in milliseconds), remove all slow outliers and return the remaining times sorted from fastest to slowest.

**Example:**
```
Query times: [45, 52, 48, 180, 51, 47, 50, 12]

Mean = 60.625
Std Dev ≈ 46.75
Upper limit = 60.625 + 46.75 = 107.375

180 > 107.375 → REMOVE

Sorted result: [12, 45, 47, 48, 50, 51, 52]
```

**Task:**

Write a function that:
1. Calculates the **mean** (average) of all query times.
2. Calculates the **standard deviation** using the provided formula.
3. Use a safe removal pattern to **remove** all times that exceed `mean + std_dev`.
4. Returns the cleaned list **sorted** from fastest to slowest.


---

## List Review: Safe Removal in Loops

Removing elements while iterating is dangerous. The list shifts, causing elements to be skipped.

**The Wrong Way:**
```python
words = ["hi", "go", "apple", "me", "cat", "banana"]

for word in words:
    if len(word) < 3:
        words.remove(word)

print(words)  # ["go", "apple", "cat", "banana"] — "go" was skipped!
```

**The Safe Way — iterate over a copy:**
```python
words = ["hi", "go", "apple", "me", "cat", "banana"]

for word in words[:]:  # [:] creates a copy
    if len(word) < 3:
        words.remove(word)

print(words)  # ["apple", "cat", "banana"] — Correct!
```

Alternatively, build a new list with items you want to **keep**:
```python
words = ["hi", "go", "apple", "me", "cat", "banana"]
result = []

for word in words:
    if len(word) >= 3:
        result.append(word)

print(result)  # ["apple", "cat", "banana"]
```

## Exercise 5: Session Cleaner <Badge type="warning" text="Task" />

Navigate to `/labs/lab05/exercise5/exercise5.py`.

**Background:**

A **load balancer** distributes network traffic across multiple servers. It maintains:
- A **server pool**: The complete registry of all server IDs (both active and inactive). This is fixed infrastructure that does not change during runtime.
- **Active sessions**: Current connections between clients and servers.

When a server fails its **health check**, all sessions connected to that server must be removed.

**Situation:**

A load balancer stores:
- **Server pool** as a tuple: All registered server IDs (e.g., `("srv-A", "srv-B", "srv-C", "srv-D")`)
- **Active sessions** as a list of tuples: Each session is `(server_id, client_id)`
- **Dead servers** as a list: Server IDs that failed health check

The system must:
1. Verify each dead server exists in the server pool (skip if not registered)
2. Remove ALL sessions connected to dead servers
3. Sort remaining sessions alphabetically

**Example:**
```
Server pool: ("srv-A", "srv-B", "srv-C", "srv-D")

Active sessions: 
  [("srv-B", "cli-1"), ("srv-A", "cli-2"), ("srv-C", "cli-3"), 
   ("srv-B", "cli-4"), ("srv-D", "cli-5")]

Dead servers: ["srv-B", "srv-D"]

Step 1 - Verify dead servers in pool:
  - "srv-B" exists in pool ✓
  - "srv-D" exists in pool ✓

Step 2 - Identify sessions to remove:
  - ("srv-B", "cli-1") → REMOVE
  - ("srv-A", "cli-2") → KEEP
  - ("srv-C", "cli-3") → KEEP
  - ("srv-B", "cli-4") → REMOVE
  - ("srv-D", "cli-5") → REMOVE

Step 3 - Sort remaining:
→ [("srv-A", "cli-2"), ("srv-C", "cli-3")]
```

**Example 2 (unregistered dead server):**
```
Server pool: ("srv-A", "srv-B")
Active sessions: [("srv-A", "cli-1"), ("srv-B", "cli-2")]
Dead servers: ["srv-B", "srv-X"]

"srv-X" is NOT in pool → skip it
Only remove sessions for "srv-B"

→ [("srv-A", "cli-1")]
```

**Task:**

Write a function that:
1. Validates the `dead_servers` list by checking if each server exists in the `server_pool`.
2. Identifies all sessions in `active_sessions` connected to those validated dead servers.
3. **Removes** those sessions from the list.
4. Returns the remaining list **sorted** alphabetically by server ID.


---

## Exercise 6: API Response Time Monitor <Badge type="warning" text="Task" />

Navigate to `/labs/lab05/exercise6/exercise6.py`.

**Background:**

Modern web applications consist of multiple **microservices** that communicate through APIs (Application Programming Interfaces). Each API call is logged with:
- **Endpoint**: The API route being called (e.g., `/login`, `/data`)
- **Response time**: How long the request took (in milliseconds)
- **Status code**: HTTP status (200 = success, 500 = error, etc.)

DevOps teams monitor these logs to identify slow endpoints that need optimization.

**Data Format:**

API calls are stored as a **list of tuples**:
```
(endpoint, response_time_ms, status_code)
```

For example: `("/login", 45, 200)` means the `/login` endpoint took 45ms and returned success.

**Situation:**

Your monitoring system needs to identify slow endpoints. However, you should only consider **successful requests** (status code 200) because errors naturally take different amounts of time.

An endpoint is considered "slow" if its **average response time** for successful calls exceeds a given threshold. Additionally, an endpoint must have **at least 2 successful calls** to be evaluated (single calls are not statistically significant).

**Example:**
```
Input:
api_calls = [("/login", 45, 200), ("/login", 120, 200), ("/data", 80, 200),
             ("/login", 50, 500), ("/data", 95, 200), ("/search", 30, 200),
             ("/health", 150, 200)]
threshold = 70

Output:
["/data", "/login"]

Explanation:
- Only status 200 calls are considered
- /login has 2 successful calls, average exceeds 70ms → included
- /data has 2 successful calls, average exceeds 70ms → included
- /search has 1 successful call → excluded (need at least 2)
- /health has 1 successful call → excluded (need at least 2)
- Results sorted alphabetically
```

**Task:**

Write a function `find_slow_endpoints(api_calls, threshold)` that returns a sorted list of endpoint names meeting the criteria.

---

## Exercise 7: Firewall Rule Conflict Detector <Badge type="warning" text="Task" />

Navigate to `/labs/lab05/exercise7/exercise7.py`.

**Background:**

A **firewall** controls network traffic by applying rules to ports. Each rule specifies:
- **Rule ID**: Unique identifier for the rule
- **Port**: Network port number (e.g., 80 for HTTP, 443 for HTTPS)
- **Action**: Either "ALLOW" (permit traffic) or "BLOCK" (deny traffic)

When multiple rules target the same port, the **first rule** in the list takes precedence. This means later rules are ignored.

**What is a Conflict?**

A **conflict** occurs when the same port has both "ALLOW" and "BLOCK" rules. This indicates:
- Redundant configuration (wasted resources)
- Potential security misconfiguration
- Rules that will never execute (dead rules)

**Data Format:**

Firewall rules are stored as a **list of tuples**:
```
(rule_id, port, action)
```

For example: `(1, 80, "ALLOW")` means rule #1 allows traffic on port 80.

**Situation:**

A network administrator needs to audit the firewall configuration and identify all ports that have conflicting rules (both ALLOW and BLOCK actions). Additionally, return the **rule ID of the first conflicting rule** for each port (the rule that comes second and creates the conflict).

**Example 1:**
```
Input:
rules = [(1, 80, "ALLOW"), (2, 443, "ALLOW"), (3, 80, "BLOCK"),
         (4, 22, "BLOCK"), (5, 443, "BLOCK"), (6, 8080, "ALLOW")]

Output:
[(80, 3), (443, 5)]

Explanation:
- Port 80: First rule is 1 (ALLOW), conflict created by rule 3 (BLOCK)
- Port 443: First rule is 2 (ALLOW), conflict created by rule 5 (BLOCK)
- Port 22: Only BLOCK, no conflict
- Port 8080: Only ALLOW, no conflict
- Results sorted by port number
```

**Example 2:**
```
Input:
rules = [(1, 80, "ALLOW"), (2, 80, "ALLOW"), (3, 443, "BLOCK")]

Output:
[]

Explanation:
- Port 80 has only ALLOW (no conflict)
- Port 443 has only BLOCK (no conflict)
```

**Task:**

Write a function `find_conflicting_ports(rules)` that returns a sorted list of tuples `(port, conflicting_rule_id)` where each tuple represents a port with a conflict and the ID of the rule that created the conflict.

---



## Commit and Push Your Work


After completing all exercises, save all your files and commit them to your repository.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 5: Tuples", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
