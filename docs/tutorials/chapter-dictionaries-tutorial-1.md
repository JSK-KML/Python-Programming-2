---
title: Dictionaries - Tutorial 1
outline: deep
---

# Dictionaries - Tutorial 1

## **Exercise 1: Scenario-Based Problems** <Badge type="tip" text="Question" />

**Read each scenario carefully. Write function(s) to solve the problem.**

---

### **Scenario 1: Recipe Cost Calculator**

A chef needs to know how much a recipe costs to make. The recipe is stored as a **list of dictionaries**, where each dictionary represents an ingredient and its required quantity. You also have a price list (a dictionary) for the cost per unit.

**Input:**
- `ingredients`: A list of ingredient records `[{"name": "flour", "quantity": 2}, ...]`
- `price_per_unit`: A dictionary `{"flour": 0.50, ...}`

**Task:** Write a function `calculate_recipe_cost(ingredients, price_per_unit)` that returns the total cost.

**Example Input:**
```python
recipe = [
    {"name": "flour", "quantity": 2},
    {"name": "eggs", "quantity": 3}
]
prices = {"flour": 0.50, "eggs": 0.20}
```

**Example Output:**
```python
1.6
```
*(Explanation: Flour: 2 * 0.50 = 1.0. Eggs: 3 * 0.20 = 0.6. Total = 1.6)*



---

### **Scenario 2: Out of Stock Alert**

A store manager needs a list of all products that are out of stock. The inventory is stored as a **list of dictionaries**.

**Input:**
- `inventory`: A list of product records `[{"product": "Apple", "stock": 10}, {"product": "Banana", "stock": 0}]`

**Task:** Write a function `find_out_of_stock(inventory)` that returns a **list of product names** where the stock is 0.

**Example Input:**
```python
data = [
    {"product": "Laptop", "stock": 5},
    {"product": "Mouse", "stock": 0},
    {"product": "Keyboard", "stock": 0}
]
```

**Example Output:**
```python
["Mouse", "Keyboard"]
```

<

---

### **Scenario 3: Vote Counter**

An election system receives a stream of votes. Each vote is a dictionary containing the voter's ID and their chosen candidate. You need to count the total votes for each candidate.

**Input:**
- `votes`: A list of vote records `[{"voter_id": "1", "candidate": "Alice"}, ...]`

**Task:** Write a function `count_votes(votes)` that returns a dictionary mapping candidates to their total vote count.

**Example Input:**
```python
votes = [
    {"id": "1", "candidate": "Alice"},
    {"id": "2", "candidate": "Bob"},
    {"id": "3", "candidate": "Alice"}
]
```

**Example Output:**
```python
{"Alice": 2, "Bob": 1}
```



---

### **Scenario 4: The Subject Average Calculator**

A school stores student results as a list of records. Each record contains the student's name, the subject, and the score. You need to calculate the average score for a **specific** subject.

**Input:**
- `results`: A list of result records `[{"subject": "Math", "score": 80}, ...]`
- `target_subject`: The subject to analyze (string)

**Task:** Write a function `calculate_average(results, target_subject)` that returns the average score. Return `0` if no records match the subject.

**Example Input:**
```python
data = [
    {"name": "Ali", "subject": "Math", "score": 80},
    {"name": "Sara", "subject": "Math", "score": 90},
    {"name": "Ali", "subject": "History", "score": 70}
]
target = "Math"
```

**Example Output:**
```python
85.0
```
*(Explanation: Math scores are 80 and 90. Average = 170 / 2 = 85.0)*



---

### **Scenario 5: The "Expensive Item" Finder**

A system needs to find all transactions that exceed a certain amount. The transactions are stored as a list of records.

**Input:**
- `transactions`: A list of transaction records `[{"id": "T1", "amount": 50}, ...]`
- `threshold`: The minimum amount (float/int)

**Task:** Write a function `find_high_value_transactions(transactions, threshold)` that returns a **list of transaction IDs** that are stricly greater than the threshold.

**Example Input:**
```python
data = [
    {"id": "T1", "amount": 100},
    {"id": "T2", "amount": 50},
    {"id": "T3", "amount": 200}
]
limit = 80
```

**Example Output:**
```python
["T1", "T3"]
```
*(Explanation: 100 > 80 and 200 > 80. 50 is not.)*



---

### **Scenario 6: The "Employee Email" Generator**

An HR system needs to generate email addresses for new employees. You are given a list of employees with their first and last names. All emails should be `firstname.lastname@company.com` (in lowercase).

**Input:**
- `employees`: A list of records `[{"first": "John", "last": "Doe"}, ...]`

**Task:** Write a function `generate_emails(employees)` that returns a **list of strings** (the email addresses).

**Example Input:**
```python
data = [
    {"first": "Ali", "last": "Abu"},
    {"first": "SARA", "last": "TAN"}
]
```

**Example Output:**
```python
["ali.abu@company.com", "sara.tan@company.com"]
```
*(Explanation: Names converted to lowercase and joined with dot.)*

