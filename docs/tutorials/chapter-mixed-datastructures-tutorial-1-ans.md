---
title: Integrated Data Structures - Tutorial 1 Answers
outline: deep
---

# Integrated Data Structures - Tutorial 1 Answers

## **Exercise 1: Real-World Scenarios**

---

### **Scenario 1: The Potluck Planner**

```python
def check_missing_categories(required_categories, signups):
    # 1. Collect all categories currently covered by signups
    covered_categories = set(signups.values())
    
    # 2. Find the difference (Required - Covered)
    missing = required_categories - covered_categories
    
    return missing

# Test Data
req = {"Main", "Dessert", "Drink", "Side"}
current = {"Ali": "Main", "Sara": "Dessert"}

print(check_missing_categories(req, current))
# Output: {'Drink', 'Side'}
```

---

### **Scenario 2: Student Grade Book Transformer**

```python
def generate_report_card(students):
    report_card = {}
    
    for student in students:
        name = student["name"]
        scores = student["scores"]
        
        # Calculate Average
        if not scores:
            average = 0
        else:
            average = sum(scores) / len(scores)
            
        # Determine Grade
        if average >= 90:
            grade = "A"
        elif average >= 80:
            grade = "B"
        elif average >= 70:
            grade = "C"
        else:
            grade = "F"
            
        report_card[name] = grade
        
    return report_card

# Test Data
data = [
    {"name": "Ali", "scores": [80, 85, 90]}, # Avg 85 -> B
    {"name": "Sara", "scores": [60, 65, 70]}  # Avg 65 -> F
]

print(generate_report_card(data))
# Output: {'Ali': 'B', 'Sara': 'F'}
```

---

### **Scenario 3: Marathon Lap Analyzer**

```python
def analyze_pace(lap_times):
    if not lap_times:
        return False
        
    fastest = min(lap_times)
    slowest = max(lap_times)
    
    diff = slowest - fastest
    
    # Consistent if difference is <= 10
    return diff <= 10

# Test Data
times = (120, 122, 119, 125) # Max 125, Min 119, Diff 6
print(analyze_pace(times))
# Output: True
```

---

### **Scenario 4: E-Commerce Order Validator**

```python
def verify_purchase(order_history, target_item):
    for order in order_history:
        items = order["items"]
        
        # Check if target is in this order's item list
        if target_item in items:
            return True
            
    # If we check all orders and don't find it
    return False

# Test Data
history = [
    {"order_id": 101, "items": ["Laptop", "Mouse"]},
    {"order_id": 102, "items": ["Monitor", "HDMI Cable"]}
]

print(verify_purchase(history, "Mouse"))      # Output: True
print(verify_purchase(history, "Keyboard"))   # Output: False
```

---

### **Scenario 5: Daily Temperature Trend**

```python
def count_temperature_drops(temperatures):
    if len(temperatures) < 2:
        return 0
        
    drops = 0
    
    # Iterate from the second element
    for i in range(1, len(temperatures)):
        current_temp = temperatures[i]
        previous_temp = temperatures[i-1]
        
        if current_temp < previous_temp:
            drops += 1
            
    return drops

# Test Data
temps = (30.5, 31.0, 29.5, 28.0)
# 30.5 -> 31.0 (No)
# 31.0 -> 29.5 (Yes)
# 29.5 -> 28.0 (Yes)
print(count_temperature_drops(temps))
# Output: 2
```

---

### **Scenario 6: Library Overdue Checker**

```python
def find_overdue_users(loans, current_date):
    overdue_users = []
    
    for email, due_dates in loans.items():
        is_user_overdue = False
        
        # Check all books for this user
        for date in due_dates:
            if date < current_date:
                is_user_overdue = True
                break # Found one overdue book, mark user and move on
        
        if is_user_overdue:
            overdue_users.append(email)
            
    return overdue_users

# Test Data
loans_data = {
    "ali@email.com": [45, 50, 55], # 45 is < 48 (Overdue)
    "sara@email.com": [40, 42]     # Both < 48 (Overdue)
}
curr_date = 48

print(find_overdue_users(loans_data, curr_date))
# Output: ['ali@email.com', 'sara@email.com']
```
