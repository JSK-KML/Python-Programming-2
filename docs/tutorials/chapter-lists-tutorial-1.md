---
title: Lists - Tutorial 1
outline: deep
---

# Lists - Tutorial 1



## **Exercise 1: Scenario-Based Problems** <Badge type="tip" text="Question" />

**Read each scenario carefully. Write function(s) to solve the problem using lists.**

---

### **Scenario 1: Duplicate Detector**

A registration system needs to check for duplicate entries.

Given a list of student IDs: `[101, 102, 103, 101, 104, 102]`

Write a function `has_duplicates(ids)` that checks if there are any duplicate IDs.

Return `True` if duplicates exist, `False` otherwise.

**Test with:**
- `[101, 102, 103, 101, 104, 102]` → Should return `True`
- `[101, 102, 103, 104, 105]` → Should return `False`

---

### **Scenario 2: Grade Boundary Checker**

A scholarship requires ALL subjects to score 80 or above for distinction.

Given scores: `[78, 82, 79, 81, 80]`

Write a function `has_distinction(scores)` that returns `True` if ALL scores are ≥80, `False` otherwise.

**Test with:**
- `[85, 90, 82, 88]` → Should return `True`
- `[78, 82, 79, 81, 80]` → Should return `False`

---

### **Scenario 3: Streak Counter**

An attendance system tracks daily attendance as `True` (present) or `False` (absent).

Given attendance: `[True, True, True, False, True, True]`

Write a function `longest_streak(attendance)` that finds the longest consecutive `True` streak.

Return the streak count.

**Test with:**
- `[True, True, True, False, True, True]` → Should return `3`
- `[True, True, False, True, True, True, True]` → Should return `4`

---

### **Scenario 4: Threshold Splitter**

A weather system categorizes temperatures into hot and normal days.

Given temperatures: `[28, 32, 35, 29, 31, 36, 27]`

Write a function `split_temperatures(temps, threshold)` that splits into two lists:
- Hot days: temperatures ≥ threshold
- Normal days: temperatures < threshold

Return both lists.

**Test with:**
- Temperatures: `[28, 32, 35, 29, 31, 36, 27]`, Threshold: `32`
- Should return: Hot `[32, 35, 36]`, Normal `[28, 29, 31, 27]`

---

### **Scenario 5: Pairwise Comparator**

A sports league compares two teams' match scores to determine overall performance.

Given two lists of match scores:
- Team A: `[3, 2, 1, 4, 2]`
- Team B: `[2, 2, 3, 1, 2]`

Each index represents a match. Higher score wins that match.

Write a function `compare_teams(team_a, team_b)` that returns the count of:
- Wins (Team A score > Team B score)
- Losses (Team A score < Team B score)
- Draws (scores equal)

**Test with:**
- Team A: `[3, 2, 1, 4, 2]`, Team B: `[2, 2, 3, 1, 2]`
- Should return: Wins `2`, Losses `1`, Draws `2`

---

### **Scenario 6: Catalog Sanitizer**

A library's digital catalog has some messy data, including empty entries or names that are too short to be valid.

**Data**: `["Zaid", "Ali", "", "Sara", "A", "Zulkifli"]`

**Task**: Write functions that:
1. Use a loop to build a **new list** containing only names that have **3 or more characters**.
2. From this "sanitized" list, find and return the **first and last** names alphabetically.
3. If the resulting list is empty, return an empty list `[]`.

---

### **Scenario 7: Inventory Batch Auditor**

A warehouse receives shipments where the same item may appear multiple times in different batches.

**Data**: `["Drill", "Hammer", "Drill", "Saw", "Drill", "Nut"]`

**Task**: Write functions that:
1. Use a loop to **count** how many times a specific `item_name` appears in the inventory list.
2. Evaluate the count using these rules:
   - If the item appears **3 or more times**, return: `"Stock Stable: [Count] batches found"`.
   - If it appears **1 or 2 times**, return: `"Low Stock: [Count] batches found"`.
   - If it is not found (0), return: `"Out of Stock"`.

---

### **Scenario 8: Selective Volatility**

A trader wants to analyze the volatility of a stock, but they only care about prices between **RM100 and RM200**.

**Data**: `[90, 150, 110, 210, 180, 105]`

**Task**: Write functions that:
1. Use a loop to extract all prices that fall within the **100 to 200** range (inclusive) into a new list.
2. If this new list contains **at least 2 prices**:
   - Calculate the volatility (`max - min`) of this subset.
   - If the volatility is greater than 50, return `"High Volatility: [Value]"`, otherwise return `"Normal Volatility: [Value]"`.
3. If there are fewer than 2 relevant prices, return `"Insufficient Data"`.

---

---

### **Scenario 9: Game Lobby Analyzer**

A multiplayer game server logs the ping (latency in milliseconds) of all connected players. A server is considered **"Unstable"** if the **average ping** exceeds **150ms**.

**Data**: `[45, 120, 30, 85, 200]`

**Task**: Write functions that:
1. Calculate the **average ping** of the lobby.
2. Find the **best ping** (lowest) and **worst ping** (highest).
3. Count how many players have a **"bad connection"** (ping > 100ms).
4. Determine if the lobby is **"Stable"** or **"Unstable"** based on whether the *average* exceeds 150ms.
5. Return a formatted status string: `"Lobby Status - Avg: [X]ms | Best: [Y]ms | Worst: [Z]ms | Lagging: [N] | Status: [Stable/Unstable]"`

---

### **Scenario 10: Pet Shelter Manager**

An animal shelter has a strict capacity of **5 animals**. Staff need a system to manage arrivals and check availability.

**Task**: Write functions that:
1. Check if a pet name already exists in the shelter list (no duplicates allowed).
2. Add a new pet **only if** the name is not a duplicate **and** spots are available. Return `True` if successfully added, `False` otherwise.
3. Return the number of **empty spots** remaining (5 - current count).
   - `0` means the shelter is full.
   - `1` to `5` means spots are available.

---

### **Scenario 11: Queue Priority System**

A hospital emergency room uses a priority queue. Each patient has a priority level (1-5, where 1 is most critical). The system needs to identify if there are any critical patients (priority 1 or 2) waiting.

**Data**: `[3, 2, 4, 5, 1, 3, 4]`

**Task**: Write functions that:
1. Find the position (index) of the first critical patient (priority 1 or 2) in the queue.
2. Count how many critical patients are waiting.
3. If no critical patients exist, return `-1` for position and `0` for count.

**Test with:**
- `[3, 2, 4, 5, 1, 3, 4]` → First critical at index `1`, Count: `2`
- `[3, 4, 5, 3, 4]` → First critical at index `-1`, Count: `0`

---

---

## **Exercise 2: Code Improvement** <Badge type="tip" text="Question" />

**The following code works but violates best practices. Improve the code by applying principles for lists and functions.**

---

### **Code A**

```python
# Student records (mixed types)
student1 = ["Ali", 85, 90, 78]
avg1 = (student1[1] + student1[2] + student1[3]) / 3
print(f"{student1[0]}: {avg1}")

student2 = ["Sara", 72, 88, 65]
avg2 = (student2[1] + student2[2] + student2[3]) / 3
print(f"{student2[0]}: {avg2}")

student3 = ["Ahmad", 91, 87, 93]
avg3 = (student3[1] + student3[2] + student3[3]) / 3
print(f"{student3[0]}: {avg3}")
```

---

### **Code B**

```python
numbers = [10, 25, 8, 42, 15, 5, 38, 20]

# Remove numbers less than 20
for num in numbers:
    if num < 20:
        numbers.remove(num)

print(f"Filtered: {numbers}")
print(f"Count: {len(numbers)}")
print(f"Total: {sum(numbers)}")
```

---

### **Code C**

```python
daily_sales = [1200, 980, 1450, 1100, 1800]

# Calculate total
total = daily_sales[0]
for i in range(1, len(daily_sales)):
    total = total + daily_sales[i]

# Calculate average
average = total / len(daily_sales)

# Find highest
highest = daily_sales[0]
for sale in daily_sales:
    if sale > highest:
        highest = sale

print(f"Total: RM{total}")
print(f"Average: RM{average}")
print(f"Highest: RM{highest}")
```

---

### **Code D**

```python
# Count items in different categories
electronics = [250, 80, 450, 120, 900]
electronics_high = 0
for price in electronics:
    if price >= 200:
        electronics_high = electronics_high + 1
print(f"Electronics above 200: {electronics_high}")

furniture = [500, 150, 1200, 80, 300]
furniture_high = 0
for price in furniture:
    if price >= 200:
        furniture_high = furniture_high + 1
print(f"Furniture above 200: {furniture_high}")
```

---

### **Code E**

```python
scores = [75, 82, 68, 90, 55, 78]

# Process everything in one go
total = sum(scores)
average = total / len(scores)
pass_count = 0
for s in scores:
    if s >= 50:
        pass_count = pass_count + 1
pass_rate = (pass_count / len(scores)) * 100

print("=== EXAM REPORT ===")
print(f"Total: {total}")
print(f"Average: {average:.2f}")
print(f"Pass count: {pass_count}")
print(f"Pass rate: {pass_rate:.1f}%")

---

### **Code F: Magic Indices**

```python
# Processing order data
# index 0: item name
# index 1: quantity
# index 2: unit price
order1 = ["Monitor", 2, 850.50]
order2 = ["Mouse", 5, 45.00]

cost1 = order1[1] * order1[2]
cost2 = order2[1] * order2[2]

print(f"Total for {order1[0]}: RM{cost1}")
print(f"Total for {order2[0]}: RM{cost2}")
```

---

### **Code G: Unrelated Data**

```python
# Event data for Saturday
temp = 32.5
is_raining = False
expected_guests = 50
location = "Hall A"

# Storing it all in one list for "convenience"
saturday_event = [temp, is_raining, expected_guests, location]

print(f"Event Details: {saturday_event}")
```
```

