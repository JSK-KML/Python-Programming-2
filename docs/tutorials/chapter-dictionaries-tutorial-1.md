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



---

### **Scenario 7: Database Record Filtering with Removal**

A database administrator needs to archive old, inactive user accounts. The system maintains a user table where each record contains multiple fields. Inactive users (those with `status: "inactive"`) should be removed from the active users table and transferred to an archive.

**Input:**
- `users`: A list of user records `[{"user_id": "U001", "name": "Ali", "status": "active"}, ...]`
- Each user record has: `user_id` (str), `name` (str), `status` (str), `login_count` (int)

**Task:** Write a function `archive_inactive_users(users)` that:
1. Identifies all users with `status: "inactive"`
2. Returns a **list of user IDs** (strings) for the inactive users

**Example Input:**
```python
user_table = [
    {"user_id": "U001", "name": "Ali", "status": "active", "login_count": 45},
    {"user_id": "U002", "name": "Sara", "status": "inactive", "login_count": 2},
    {"user_id": "U003", "name": "John", "status": "active", "login_count": 30},
    {"user_id": "U004", "name": "Maya", "status": "inactive", "login_count": 0}
]
```

**Example Output:**
```python
["U002", "U004"]
```
*(Explanation: U002 and U004 have `status: "inactive"`. The function returns a list of their user IDs.)*



---

### **Scenario 8: Sales Records Consolidation**

A retail company has two regional sales databases that need to be merged. Each database stores transactions with the same structure. When the same `transaction_id` appears in both databases, keep the record with the **higher `amount`** (assuming it's the corrected version).

**Input:**
- `region1_sales`: List of transaction records from region 1
- `region2_sales`: List of transaction records from region 2
- Each record has: `transaction_id` (str), `product` (str), `amount` (float), `date` (str)

**Task:** Write a function `merge_sales_data(region1_sales, region2_sales)` that returns a **list** of consolidated transaction records where:
- All unique transactions from both regions are included
- For duplicate `transaction_id`, keep the record with the higher `amount`
- Order doesn't matter

**Example Input:**
```python
region_a = [
    {"transaction_id": "T001", "product": "Laptop", "amount": 1200.00, "date": "2024-01-15"},
    {"transaction_id": "T002", "product": "Mouse", "amount": 25.00, "date": "2024-01-16"},
    {"transaction_id": "T003", "product": "Keyboard", "amount": 75.00, "date": "2024-01-17"}
]

region_b = [
    {"transaction_id": "T002", "product": "Mouse", "amount": 30.00, "date": "2024-01-16"},
    {"transaction_id": "T004", "product": "Monitor", "amount": 350.00, "date": "2024-01-18"}
]
```

**Example Output:**
```python
[
    {"transaction_id": "T001", "product": "Laptop", "amount": 1200.00, "date": "2024-01-15"},
    {"transaction_id": "T002", "product": "Mouse", "amount": 30.00, "date": "2024-01-16"},
    {"transaction_id": "T003", "product": "Keyboard", "amount": 75.00, "date": "2024-01-17"},
    {"transaction_id": "T004", "product": "Monitor", "amount": 350.00, "date": "2024-01-18"}
]
```
*(Explanation: T002 appears in both regions with amounts 25.00 and 30.00 → keep the record with 30.00. T001 and T003 only in region A. T004 only in region B.)*



---

### **Scenario 9: Student Enrollment Grouping**

A university stores student enrollment data as individual records. The registrar needs to reorganize this data to see which students are enrolled in each course. This requires grouping students by their `course_code`.

**Input:**
- `enrollments`: A list of enrollment records `[{"student_id": "S001", "student_name": "Ali", "course_code": "CP125"}, ...]`
- Each enrollment has: `student_id` (str), `student_name` (str), `course_code` (str), `semester` (str)

**Task:** Write a function `group_students_by_course(enrollments)` that returns a dictionary where:
- Keys are `course_code` values
- Values are **lists of student names** (strings)

**Example Input:**
```python
records = [
    {"student_id": "S001", "student_name": "Ali", "course_code": "CP125", "semester": "Fall2024"},
    {"student_id": "S002", "student_name": "Sara", "course_code": "CP126", "semester": "Fall2024"},
    {"student_id": "S003", "student_name": "John", "course_code": "CP125", "semester": "Fall2024"},
    {"student_id": "S004", "student_name": "Maya", "course_code": "CP126", "semester": "Fall2024"},
    {"student_id": "S005", "student_name": "Bob", "course_code": "CP125", "semester": "Fall2024"}
]
```

**Example Output:**
```python
{
    "CP125": ["Ali", "John", "Bob"],
    "CP126": ["Sara", "Maya"]
}
```
*(Explanation: Three students enrolled in CP125, two in CP126. Only student names are stored.)*

