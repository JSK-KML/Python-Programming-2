---
title: Integrated Data Structures - Tutorial 1
outline: deep
---

# Integrated Data Structures - Tutorial 1

## **Exercise 1: Real-World Scenarios** <Badge type="tip" text="Question" />

**Read each scenario carefully. Write function(s) to solve the problem using the appropriate data structures.**

---

### **Scenario 1: The Potluck Planner (Dictionary + Set)**

You are organizing a potluck dinner. You have a predefined set of food categories that *must* be covered (e.g., Main, Dessert, Drink). As guests sign up, they record their name and the category of food they are bringing. You need to identify which categories are still missing.

**Given:**
- `required_categories`: A Set of strings.
- `signups`: A Dictionary where Key is Guest Name and Value is Category.

**Task:** Write a function `check_missing_categories(required_categories, signups)` that returns a **Set** of categories that no one has signed up for yet.

**Example Input:**
```python
required = {"Main", "Dessert", "Drink", "Side"}
signups = {"Ali": "Main", "Sara": "Dessert"}
```

**Example Output:**
```python
{"Drink", "Side"}
```

---

### **Scenario 2: Student Grade Book Transformer (List + Dictionary)**

A teacher monitors student performance. She has a raw list of student records, where each record contains the student's name and a list of their test scores. She needs to convert these raw scores into a final Letter Grade for the report card.

**Grading Scale:**
- Average >= 90: "A"
- Average >= 80: "B"
- Average >= 70: "C"
- Below 70: "F"

**Given:**
- `students`: A List of Dictionaries containing "name" and "scores".

**Task:** Write a function `generate_report_card(students)` that returns a Dictionary mapping `Student Name -> Letter Grade`.

**Example Input:**
```python
students = [
    {"name": "Ali", "scores": [80, 85, 90]},
    {"name": "Sara", "scores": [60, 65, 70]}
]
```

**Example Output:**
```python
{"Ali": "B", "Sara": "F"}
```

---

### **Scenario 3: Marathon Lap Analyzer (Tuple Only)**

A professional runner records their time (in seconds) for each lap of a marathon in an immutable tuple. They want to know if their pace was "Consistent". A run is considered consistent if the difference between the fastest lap and the slowest lap is **less than or equal to 10 seconds**.

**Given:**
- `lap_times`: A Tuple of integers.

**Task:** Write a function `analyze_pace(lap_times)` that returns `True` if the pace was consistent, and `False` otherwise.

**Example Input:**
```python
lap_times = (120, 122, 119, 125)
```

**Example Output:**
```python
True
```

---

### **Scenario 4: E-Commerce Order Validator (List + Dictionary)**

A customer support agent needs to verify a claim. A customer says they ordered a specific item, but they "didn't receive it". The agent needs to search the entire order history to confirm if that item was ever virtually purchased by this customer.

**Given:**
- `order_history`: A List of Dictionaries, where each dictionary follows the structure `{"order_id": 101, "items": ["Item A", "Item B"]}`.
- `target_item`: A String representing the item to search for.

**Task:** Write a function `verify_purchase(order_history, target_item)` that returns `True` if the item is found in ANY order, and `False` otherwise.

**Example Input:**
```python
history = [
    {"order_id": 101, "items": ["Laptop", "Mouse"]},
    {"order_id": 102, "items": ["Monitor", "HDMI Cable"]}
]
target = "Mouse"
```

**Example Output:**
```python
True
```

---

### **Scenario 5: Daily Temperature Trend (Tuple Only)**

A weather station records hourly temperatures in an immutable tuple. Meteorologists want to know how often the temperature **dropped** compared to the previous hour, indicating a cooling trend.

**Given:**
- `temperatures`: A Tuple of floats.

**Logic:**
- If Temp[i] < Temp[i-1], count it as a drop.

**Task:** Write a function `count_temperature_drops(temperatures)` that returns the **count (integer)** of how many times the temperature decreased from one hour to the next.

**Example Input:**
```python
temps = (30.5, 31.0, 29.5, 28.0)
```

**Example Output:**
```python
2
```
*(Explanation: 31.0 -> 29.5 is a drop. 29.5 -> 28.0 is a drop.)*

---

### **Scenario 6: Library Overdue Checker (Dictionary + List)**

A library system tracks books checked out by users. The system stores the "Due Dates" (as simple day-of-year integers, 1-365) for every book a user currently has. If *any* of a user's books are past the `current_date`, the user is considered "Overdue".

**Given:**
- `loans`: A Dictionary mapping `User Email -> List of Due Dates`.
- `current_date`: An Integer.

**Task:** Write a function `find_overdue_users(loans, current_date)` that returns a **List** of emails for users who have at least one overdue book.

**Example Input:**
```python
loans = {
    "ali@email.com": [45, 50, 55],
    "sara@email.com": [40, 42]
}
current_date = 48
```

**Example Output:**
```python
["ali@email.com", "sara@email.com"]
```
*(Explanation: Ali has a book due on 45, which is before 48. Sara has books due on 40 and 42, both before 48.)*

---
