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
```

