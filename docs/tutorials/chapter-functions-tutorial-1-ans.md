---
title: Functions - Tutorial 1 Answers
outline: deep
---

# Functions - Tutorial 1 - Answers

## **Exercise 1: Scenario-Based Problems**

### **Scenario 1: Library Fine System**

::: tip Answer
```python
def calculate_fine(days_overdue, is_reference):
    # Calculate base fine
    if days_overdue <= 3:
        fine = days_overdue * 1.00
    else:
        # First 3 days at RM1, rest at RM2
        fine = (3 * 1.00) + ((days_overdue - 3) * 2.00)
    
    # Double for reference books
    if is_reference:
        fine = fine * 2
    
    # Apply maximum cap
    if fine > 50.00:
        fine = 50.00
    
    return fine

# Ahmad's case: reference book, 10 days late
ahmad_fine = calculate_fine(10, True)
print(f"Ahmad's fine: RM{ahmad_fine:.2f}")
```

**Output:** `Ahmad's fine: RM34.00`
:::

---

### **Scenario 2: Student Scholarship Calculator**

::: tip Answer
```python
def calculate_scholarship(cgpa, tuition_fee):
    # Determine scholarship percentage based on CGPA
    if cgpa >= 3.8:
        scholarship_percent = 1.00  # 100%
    elif cgpa >= 3.5:
        scholarship_percent = 0.50  # 50%
    elif cgpa >= 3.0:
        scholarship_percent = 0.25  # 25%
    else:
        scholarship_percent = 0.00  # No scholarship
    
    # Calculate final fee
    discount = tuition_fee * scholarship_percent
    final_fee = tuition_fee - discount
    return final_fee

# Aishah's case
aishah_fee = calculate_scholarship(3.6, 10000)
print(f"Aishah's tuition after scholarship: RM{aishah_fee:.2f}")
```

**Output:** `Aishah's tuition after scholarship: RM5000.00`
:::

---

### **Scenario 3: Employee Payroll System**

::: tip Answer
```python
def calculate_payroll(hours, hourly_rate):
    basic_salary = hours * hourly_rate
    epf = basic_salary * 0.11
    return basic_salary, epf

# Ali's case (Assuming we just need to calculate and print, or returns can vary)
basic, epf = calculate_payroll(45, 25)
print(f"Basic Salary: RM{basic:.2f}")
print(f"EPF Deduction: RM{epf:.2f}")
```

**Output:**
```
Basic Salary: RM1125.00
EPF Deduction: RM123.75
```
:::

---

### **Scenario 4: E-commerce Shipping Calculator**

::: tip Answer
```python
def calculate_shipping(weight, order_value):
    # Calculate weight-based charge
    if weight <= 1:
        weight_charge = 5
    elif weight <= 5:
        weight_charge = 8
    elif weight <= 10:
        weight_charge = 12
    else:
        extra_kg = weight - 10
        weight_charge = 12 + (extra_kg * 2)
    
    # Check for free shipping
    if order_value >= 150:
        return 0.0
    
    return weight_charge

# Customer's case
shipping = calculate_shipping(7.5, 180)
print(f"Shipping cost: RM{shipping:.2f}")
```

**Output:** `Shipping cost: RM0.00`
:::

---

### **Scenario 5: Restaurant Bill Calculator**

::: tip Answer
```python
def calculate_bill(food_total):
    # Apply discount
    if food_total >= 200:
        food_total = food_total * 0.95
        
    service_charge = food_total * 0.10
    tax = (food_total + service_charge) * 0.06
    final_bill = food_total + service_charge + tax
    return final_bill

# Customer's case
bill = calculate_bill(250)
print(f"Final bill: RM{bill:.2f}")
```

**Output:** `Final bill: RM276.92`
:::

---

### **Scenario 6: Parking Fee System**

::: tip Answer
```python
def calculate_parking(hours, valid_ticket):
    if not valid_ticket:
        return 50.00
        
    if hours <= 1:
        fee = 3.00
    else:
        fee = 3.00 + ((hours - 1) * 2.00)
        
    if fee > 20.00:
        return 20.00
        
    return fee

# Car parks for 8 hours with valid ticket
fee = calculate_parking(8, True)
print(f"Parking fee: RM{fee:.2f}")
```

**Output:** `Parking fee: RM17.00`
:::

---

### **Scenario 7: Movie Ticket Pricing**

::: tip Answer
```python
def get_ticket_price(age, is_weekend, is_3d):
    # Base price
    if age < 12: price = 8
    elif age <= 17: price = 12
    elif age <= 59: price = 18
    else: price = 10
    
    if is_weekend: price += 3
    if is_3d: price += 5
    
    return price

# 23-year-old adult, weekend, 3D movie
price = get_ticket_price(23, True, True)
print(f"Ticket price: RM{price}")
```

**Output:** `Ticket price: RM26`
:::

---

### **Scenario 8: Electricity Bill Calculator**

::: tip Answer
```python
def calculate_electric_bill(units):
    total = 0
    
    # Progressive calculation approach
    if units <= 200:
        total = units * 0.218
    elif units <= 300:
        total = (200 * 0.218) + ((units - 200) * 0.334)
    elif units <= 600:
        total = (200 * 0.218) + (100 * 0.334) + ((units - 300) * 0.516)
    else:
        total = (200 * 0.218) + (100 * 0.334) + (300 * 0.516) + ((units - 600) * 0.546)
        
    return total + 3.00  # Add service charge

# Household uses 450 units
bill = calculate_electric_bill(450)
print(f"Electricity bill: RM{bill:.2f}")
```

**Output:** `Electricity bill: RM157.40`
:::

---

### **Scenario 9: Car Insurance Premium**

::: tip Answer
```python
def calculate_premium(age, claims):
    premium = 1000.00
    
    # Age factor
    if age < 25:
        premium *= 1.30
    elif age > 60:
        premium *= 1.20
        
    # Claims factor
    if claims == 0:
        premium *= 0.90
    elif claims >= 2:
        premium *= 1.25
        
    return premium

# 28-year-old driver with 1 claim
# Age 25-60 (no change), 1 claim (no change)
final_premium = calculate_premium(28, 1)
print(f"Premium: RM{final_premium:.2f}")
```

**Output:** `Premium: RM1000.00`
:::

---

### **Scenario 10: Water Bill System**

::: tip Answer
```python
def calculate_water_bill(usage):
    charge = 0
    if usage <= 35:
        charge = usage * 0.57
    elif usage <= 50:
        charge = (35 * 0.57) + ((usage - 35) * 1.03)
    else:
        charge = (35 * 0.57) + (15 * 1.03) + ((usage - 50) * 1.50)
        
    total = charge + 1.50 + 0.50  # Meter rental + Service charge
    return total

# Household uses 68m3
bill = calculate_water_bill(68)
print(f"Water Bill: RM{bill:.2f}")
```

**Output:** `Water Bill: RM64.40`
:::

---

## **Exercise 2: Code Improvement Challenge**

### **Code A (Area Calculation)**

::: tip Improved Code
**Improvements:** Used meaningful names, created a reusable function, defined `PI` as a constant.

```python
def calculate_circle_area(radius):
    PI = 3.14159
    return PI * radius * radius

# Main execution
print(f"Area 1: {calculate_circle_area(5)}")
print(f"Area 2: {calculate_circle_area(10)}")
print(f"Area 3: {calculate_circle_area(7)}")
```
:::

---

### **Code B (Grading Logic)**

::: tip Improved Code
**Improvements:** Used `elif` to prevent redundant checks (e.g., if checking `student_score >= 80`, checking `< 90` is unnecessary if using `elif`), simpler logic flow.

```python
def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

student_score = 85
print(f"Grade: {get_grade(student_score)}")
```
:::

---

### **Code C (Discount Calculation)**

::: tip Improved Code
**Improvements:** Created a function for the cost calculation logic (DRY principle), improved variable names.

```python
def calculate_item_cost(price, quantity):
    total = price * quantity
    if total > 100:
        total = total * 0.9  # Apply 10% discount
    return total

# Main execution
cost_1 = calculate_item_cost(50, 3)
print(f"Item 1 Cost: {cost_1}")

cost_2 = calculate_item_cost(120, 1)
print(f"Item 2 Cost: {cost_2}")

grand_total = cost_1 + cost_2
print(f"Grand Total: {grand_total}")
```
:::

---

### **Code D (Temperature Conversion)**

::: tip Improved Code
**Improvements:** Created reusable function `fahrenheit_to_celsius`, descriptive names.

```python
def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

print(f"Temp 1: {fahrenheit_to_celsius(100):.2f}")
print(f"Temp 2: {fahrenheit_to_celsius(212):.2f}")
print(f"Temp 3: {fahrenheit_to_celsius(32):.2f}")
```
:::

---

### **Code E (Interest Calculation)**

::: tip Improved Code
**Improvements:** Created `calculate_profit` function, meaningful names instead of `p, r, t`.

```python
def calculate_profit(principal, annual_rate, years):
    return principal * annual_rate * years

profit_1 = calculate_profit(1000, 0.05, 3)
print(f"Profit 1: {profit_1}")

profit_2 = calculate_profit(5000, 0.04, 5)
print(f"Profit 2: {profit_2}")
```
:::

---

### **Code F (Paint Calculator)**

::: tip Improved Code
**Improvements:** Split responsibilities into small functions (`get_area`, `calculate_paint`, `calculate_cost`), avoided magic numbers.

```python
def get_wall_area(height, width):
    return height * width

def calculate_paint_needed(area):
    COVERAGE_PER_GALLON = 350
    return area / COVERAGE_PER_GALLON

def calculate_paint_cost(gallons):
    PRICE_PER_GALLON = 45
    return gallons * PRICE_PER_GALLON

def process_wall(height, width, wall_id):
    area = get_wall_area(height, width)
    paint = calculate_paint_needed(area)
    cost = calculate_paint_cost(paint)
    print(f"Wall {wall_id}: Area={area}, Paint={paint:.2f} gallons, Cost=RM{cost:.2f}")

# Main execution
process_wall(10, 12, 1)
process_wall(8, 15, 2)
```
:::

---

### **Code G (Payslip Generator)**

::: tip Improved Code
**Improvements:** Separated calculation logic (`calculate_salary_details`) from display logic (`print_payslip`).

```python
def calculate_salary_details(base, ot_hours, ot_rate):
    ot_pay = ot_hours * ot_rate
    gross = base + ot_pay
    tax = gross * 0.11
    net = gross - tax
    return ot_pay, gross, tax, net

def print_payslip(name, base, ot_pay, tax, net):
    print("--- PAYSLIP ---")
    print(f"Name: {name}")
    print(f"Base: RM{base}")
    print(f"Overtime: RM{ot_pay}")
    print(f"Tax: RM{tax:.2f}")
    print(f"Net Pay: RM{net:.2f}")
    print("----------------")

# Main execution
name = "Ali"
base_pay = 2000
overtime_pay, gross, tax, net = calculate_salary_details(base_pay, 10, 15)
print_payslip(name, base_pay, overtime_pay, tax, net)
```
:::

---

### **Code H (Student Score Processor)**

::: tip Improved Code
**Improvements:** Separated into 3 functions - average calculation, highest finder, and pass rate calculation.

```python
def calculate_average(total, count):
    return total / count

def find_highest(current_highest, new_score):
    if new_score > current_highest:
        return new_score
    return current_highest

def calculate_pass_rate(pass_count, total_count):
    return (pass_count / total_count) * 100

# Main
total = 0
highest = 0
pass_count = 0

for i in range(5):
    score = int(input(f"Enter score {i+1}: "))
    total = total + score
    highest = find_highest(highest, score)

    if score >= 50:
        pass_count = pass_count + 1

average = calculate_average(total, 5)
pass_rate = calculate_pass_rate(pass_count, 5)

print(f"Average: {average}")
print(f"Highest: {highest}")
print(f"Pass rate: {pass_rate}%")
```
:::

---

### **Code I (Sales Report Generator)**

::: tip Improved Code
**Improvements:** Separated into 3 functions - average calculation, best day checker, and below target checker.

```python
def calculate_average(total, count):
    return total / count

def is_best_day(current_best, new_sales):
    if new_sales > current_best:
        return True
    return False

def is_below_target(sales, target):
    if sales < target:
        return True
    return False

# Main
total_sales = 0
best_day = 0
best_amount = 0
low_days = 0

for day in range(1, 8):
    sales = float(input(f"Day {day} sales: RM"))
    total_sales = total_sales + sales

    if is_best_day(best_amount, sales):
        best_amount = sales
        best_day = day

    if is_below_target(sales, 100):
        low_days = low_days + 1

average = calculate_average(total_sales, 7)

print(f"Total: RM{total_sales}")
print(f"Average: RM{average}")
print(f"Best day: Day {best_day} (RM{best_amount})")
print(f"Days below target: {low_days}")
```
:::

---

### **Scenario 11: Student Report Card Generator**

::: tip Answer
```python
def calculate_average(score1, score2, score3):
    return (score1 + score2 + score3) / 3

def determine_grade(average):
    if average >= 80:
        return "A"
    elif average >= 60:
        return "B"
    else:
        return "C"

def generate_report(name, math, science, english):
    avg = calculate_average(math, science, english)
    grade = determine_grade(avg)

    report = f"Student: {name} | Avg: {avg:.1f} | Grade: {grade}"
    return report

# Test
result = generate_report("Ahmad", 75, 82, 68)
print(result)
```

**Output:** `Student: Ahmad | Avg: 75.0 | Grade: B`

**Calculation:**
- Average: (75 + 82 + 68) / 3 = 75.0
- Grade: 75 ≥ 60 → B
:::

---

### **Scenario 12: Product Inventory Manager**

::: tip Answer
```python
def calculate_discount_price(price, quantity):
    if quantity > 50:
        return price * 0.75  # 25% off
    elif quantity > 10:
        return price * 0.85  # 15% off
    else:
        return price

def check_stock(quantity, available):
    if quantity <= available:
        return True
    else:
        return False

def calculate_order_total(price, quantity, available):
    # Check stock first
    if not check_stock(quantity, available):
        return 0  # Early return if no stock

    # Calculate discounted price
    discounted = calculate_discount_price(price, quantity)

    # Calculate total
    total = discounted * quantity
    return total

# Test
total = calculate_order_total(80, 45, 60)
print(total)
```

**Output:** `3060.0`

**Calculation:**
- Quantity 45 > 10 → 15% discount applied
- Discounted price: 80 × 0.85 = RM68
- Stock check: 45 ≤ 60 ✓ (available)
- Total: 68 × 45 = RM3060
:::

---

### **Scenario 13: Car Ownership Calculator**

::: tip Answer
```python
def calculate_insurance(age, accident_free):
    premium = 200

    if age < 25:
        premium = premium + 50

    if accident_free:
        premium = premium * 0.90

    return premium

def calculate_fuel_cost(distance_km):
    liters_per_100km = 8
    price_per_liter = 2.05

    liters_needed = (distance_km / 100) * liters_per_100km
    cost = liters_needed * price_per_liter

    return cost

# Test
insurance = calculate_insurance(23, True)
fuel = calculate_fuel_cost(150)

print(f"Monthly insurance: RM{insurance}")
print(f"Fuel cost: RM{fuel}")
```

**Output:**
```
Monthly insurance: RM225.0
Fuel cost: RM24.6
```

**Calculation:**
- Insurance: 200 + 50 (under 25) = 250, then 250 × 0.90 = RM225
- Fuel: (150/100) × 8 = 12 liters, 12 × 2.05 = RM24.60
:::

---
