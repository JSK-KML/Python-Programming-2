---
title: Functions - Tutorial 1
outline: deep
---

# Functions - Tutorial 1

## Function Structure

### **Exercise 1: Identify Pre-defined vs User-defined** <Badge type="tip" text="Question" />

**Examine each code snippet and answer the questions:**

**Code Snippet A:**
```python:line-numbers
def calculate_discount(price, rate):
    return price * rate

item_price = float(input("Enter price: RM"))
discount = calculate_discount(item_price, 0.15)
final_price = item_price - discount
print(f"Final price: RM{final_price:.2f}")
```

**Questions:**
1. List all pre-defined functions
2. List all user-defined functions
3. How many times is each function called?

---

**Code Snippet B:**
```python:line-numbers
def get_tax(amount):
    return amount * 0.06

def get_total(price, tax):
    return price + tax

base_price = 100
tax_amount = get_tax(base_price)
total = get_total(base_price, tax_amount)
print(f"Total: RM{total:.2f}")
```

**Questions:**
1. List all pre-defined functions
2. List all user-defined functions
3. Which function calls another user-defined function?

---

**Code Snippet C:**
```python:line-numbers
def display_receipt(item, price, quantity):
    subtotal = price * quantity
    print(f"Item: {item}")
    print(f"Quantity: {quantity}")
    print(f"Subtotal: RM{subtotal:.2f}")

name = input("Enter item name: ")
cost = float(input("Enter price: RM"))
qty = int(input("Enter quantity: "))
display_receipt(name, cost, qty)
```

**Questions:**
1. How many pre-defined functions are called?
2. How many user-defined functions are defined?
3. What does the user-defined function return?

---

## Fill in the Blanks

### **Exercise 2: Complete Function Definitions** <Badge type="tip" text="Question" />

**Fill in the blanks to make each function work correctly:**

**Function A: Calculate Area**
```python:line-numbers
___ calculate_area(length, width)___
    area = ___ * ___
    return ___

result = calculate_area(5, 10)
print(f"Area: {result}")
```

**Expected Output:**
```
Area: 50
```

---

**Function B: Check Passing Grade**
```python:line-numbers
def is_passing(score)___
    if score ___ 50:
        return ___
    else:
        return ___

print(is_passing(75))
print(is_passing(45))
```

**Expected Output:**
```
True
False
```

---

**Function C: Calculate Discounted Price**
```python:line-numbers
def apply_discount(price, discount_rate):
    discount_amount = ___ * ___
    final_price = ___ - ___
    ___ ___

original = 200
discounted = apply_discount(original, 0.20)
print(f"Discounted price: RM{discounted:.2f}")
```

**Expected Output:**
```
Discounted price: RM160.00
```

---

**Function D: Calculate BMI**
```python:line-numbers
def calculate_bmi(___, ___)___
    bmi = weight / (height * height)
    ___ ___

my_weight = 70
my_height = 1.75
result = ___(my_weight, my_height)
print(f"BMI: {result:.2f}")
```

**Expected Output:**
```
BMI: 22.86
```

---

**Function E: Greeting with Return**
```python:line-numbers
def create_greeting(name):
    message = ___
    ___ ___

greeting = create_greeting("Ahmad")
___(greeting)
```

**Expected Output:**
```
Welcome, Ahmad!
```

---

## Fix the Bugs

### **Exercise 4: Find and Fix Errors** <Badge type="tip" text="Question" />

**Each code snippet has one or more bugs. Identify the errors and provide corrected code:**

**Code A:**
```python:line-numbers
def calculate_total(price, quantity)
    total = price * quantity
    return total

result = calculate_total(50, 3)
print(result)
```

**What's wrong:** ___
**Corrected code:**

---

**Code B:**
```python:line-numbers
def greet(name):
print("Hello, " + name)

greet("Ahmad")
```

**What's wrong:** ___
**Corrected code:**

---

**Code C:**
```python:line-numbers
def add_numbers(a, b):
    sum = a + b

result = add_numbers(10, 20)
print(result)
```

**What's wrong:** ___
**Corrected code:**

---

**Code D:**
```python:line-numbers
calculate_discount(100, 0.15)

def calculate_discount(price, rate):
    return price * rate
```

**What's wrong:** ___
**Corrected code:**

---

**Code E:**
```python:line-numbers
def calculate_tax(amount):
    tax = amount * 0.06
    return tax

calculate_tax(200)
print(f"Tax: RM{tax:.2f}")
```

**What's wrong:** ___
**Corrected code:**

---

**Code F:**
```python:line-numbers
def get_total(price, quantity):
    subtotal = price * quantity
    tax = subtotal * 0.06
    total = subtotal + tax
    return total

get_total(50, 3)
print(f"Total: RM{total:.2f}")
```

**What's wrong:** ___
**Corrected code:**

---

**Code G:**
```python:line-numbers
def calculate_area(length, width):
    area = length * width

room_area = calculate_area(5, 4)
print(f"Area: {room_area}")
```

**What's wrong:** ___
**Corrected code:**

---

**Code H:**
```python:line-numbers
def display_message(text):
    message = "Important: " + text
    print(message)
    return message

result == display_message("Meeting at 3pm")
```

**What's wrong:** ___
**Corrected code:**

---

## Parameters vs Arguments

### **Exercise 5: Identify Parameters and Arguments** <Badge type="tip" text="Question" />

**For each code snippet, answer the questions:**

**Code A:**
```python:line-numbers
def calculate_bill(base_charge, usage, rate):
    charge = base_charge + (usage * rate)
    return charge

electricity = calculate_bill(25, 150, 0.40)
water = calculate_bill(15, 80, 0.30)
```

**Questions:**
1. What are the parameters?
2. What are the arguments in line 5?
3. What value does `usage` have when calculating electricity?
4. What value does `rate` have when calculating water?

---

**Code B:**
```python:line-numbers
def register_student(name, student_id, faculty):
    print(f"{name} ({student_id}) - {faculty}")

register_student("Ahmad Bin Ali", "2024001", "Engineering")
register_student("Siti Aminah", "2024002", "Science")
```

**Questions:**
1. How many parameters does the function have?
2. What value does `name` have in line 4?
3. What value does `faculty` have in line 5?

---

**Code C:**
```python:line-numbers
def calculate_final_grade(assignments, midterm, final_exam):
    weighted = (assignments * 0.4) + (midterm * 0.3) + (final_exam * 0.3)
    return weighted

student1_grade = calculate_final_grade(85, 78, 90)
student2_grade = calculate_final_grade(92, 88, 95)
```

**Questions:**
1. List the parameters
2. What are the arguments for student1?
3. What value does `midterm` have for student2?

---

## Refactoring - Factorization

### **Exercise 6: Eliminate Repetition** <Badge type="tip" text="Question" />

**Refactor each code by creating a function to eliminate repetition:**

**Code A:**
```python:line-numbers
# Calculate tax for multiple items
price1 = 50
tax1 = price1 * 0.06
total1 = price1 + tax1
print(f"Item 1: RM{total1:.2f}")

price2 = 75
tax2 = price2 * 0.06
total2 = price2 + tax2
print(f"Item 2: RM{total2:.2f}")

price3 = 100
tax3 = price3 * 0.06
total3 = price3 + tax3
print(f"Item 3: RM{total3:.2f}")
```

**Task:**
1. Create a function `calculate_total_with_tax(price)`
2. Rewrite the code using your function

---

**Code B:**
```python:line-numbers
# Calculate salary for employees
hours1 = 40
rate1 = 15
overtime1 = 5
salary1 = (hours1 * rate1) + (overtime1 * rate1 * 1.5)
print(f"Employee 1: RM{salary1:.2f}")

hours2 = 38
rate2 = 18
overtime2 = 3
salary2 = (hours2 * rate2) + (overtime2 * rate2 * 1.5)
print(f"Employee 2: RM{salary2:.2f}")

hours3 = 42
rate3 = 20
overtime3 = 7
salary3 = (hours3 * rate3) + (overtime3 * rate3 * 1.5)
print(f"Employee 3: RM{salary3:.2f}")
```

**Task:**
1. What calculation is repeated?
2. Create a function to eliminate repetition
3. How many parameters should your function have?

---

**Code C:**
```python:line-numbers
# Calculate shipping cost
weight1 = 2.5
cost1 = 5 + (weight1 * 2)
print(f"Package 1: RM{cost1:.2f}")

weight2 = 5.0
cost2 = 5 + (weight2 * 2)
print(f"Package 2: RM{cost2:.2f}")

weight3 = 1.2
cost3 = 5 + (weight3 * 2)
print(f"Package 3: RM{cost3:.2f}")
```

**Task:**
1. Create `calculate_shipping(weight)` function
2. Rewrite using the function

---

## Single Responsibility

### **Exercise 7: Analyze Function Responsibilities** <Badge type="tip" text="Question" />

**For each function, identify how many jobs it does and suggest improvements:**

**Function A:**
```python:line-numbers
def process_order(item_name, price, quantity):
    print(f"Processing {item_name}")
    subtotal = price * quantity
    tax = subtotal * 0.06
    total = subtotal + tax
    print(f"Subtotal: RM{subtotal:.2f}")
    print(f"Tax: RM{tax:.2f}")
    print(f"Total: RM{total:.2f}")
    return total
```

**Questions:**
1. List all jobs this function does
2. Does it follow Single Responsibility Principle?
3. How would you split it into focused functions?

---

**Function B:**
```python:line-numbers
def handle_registration(name, age, course):
    if age < 17:
        return "Too young"
    
    if age < 20:
        fee = 500
    else:
        fee = 600
    
    if course == "Engineering":
        fee = fee * 0.9
    
    print(f"Student: {name}, Age: {age}, Fee: RM{fee}")
    return fee
```

**Questions:**
1. How many different responsibilities does this have?
2. List each responsibility
3. Create smaller functions: `is_valid_age(age)`, `calculate_fee(age)`, `apply_discount(fee, course)`

---

**Function C:**
```python:line-numbers
def calculate_grade(test1, test2, test3):
    average = (test1 + test2 + test3) / 3
    
    if average >= 80:
        grade = "A"
    elif average >= 60:
        grade = "B"
    else:
        grade = "C"
    
    print(f"Average: {average:.2f}")
    print(f"Grade: {grade}")
    
    return grade
```

**Questions:**
1. What are the different jobs?
2. Should calculation and display be separate?
3. Refactor into: `calculate_average()` and `get_letter_grade()`

---

## General Function Questions

### **Exercise 8: Scenario-Based Problems** <Badge type="tip" text="Question" />

**Read each scenario carefully and answer the questions:**

---

### **Scenario 1: Library Fine System**

A library system calculates fines for overdue books. The rules are:
- First 3 days overdue: RM1.00 per day
- More than 3 days overdue: RM2.00 per day
- Maximum fine per book: RM50.00
- Reference books have double fines

Call the fuction using these details:

Ahmad borrows a reference book and returns it 10 days late.



---

### **Scenario 2: Student Scholarship Calculator**

A university offers scholarships based on these criteria:
- CGPA 3.8-4.0: Full scholarship (100% tuition waiver)
- CGPA 3.5-3.79: Partial scholarship (50% waiver)
- CGPA 3.0-3.49: Merit award (25% waiver)
- CGPA below 3.0: No scholarship



Call the fuction using these details:

Aishah has CGPA 3.6 and tuition fee RM10,000.


---

### **Scenario 3: Employee Payroll System**

Company payroll rules:
- Basic salary = Hours worked × Hourly rate

- EPF deduction: 11% of (Basic salary)


Call the function using these details:

Employee Ali works 45 hours at RM25/hour



---

### **Scenario 4: E-commerce Shipping Calculator**

Online shop shipping rules:
- Weight-based charges:
  - 0-1kg: RM5
  - 1-5kg: RM8
  - 5-10kg: RM12
  - Above 10kg: RM12 + (RM2 per extra kg)
- Free shipping if order value ≥ RM150


Call the function using these details:

Customer orders 7.5kg item worth RM180


---



