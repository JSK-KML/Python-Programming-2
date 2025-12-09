---
title: Functions - Tutorial 1
outline: deep
---

# Functions - Tutorial 1



## **Exercise 1: Scenario-Based Problems** <Badge type="tip" text="Question" />

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

### **Scenario 5: Restaurant Bill Calculator**

A restaurant calculates bills with these rules:
- Food total + Service charge (10% of food total)
- Government tax: 6% of (Food total + Service charge)
- Final bill = Food total + Service charge + Tax
- If bill ≥ RM200, apply 5% discount to food total before calculating service charge and tax

Call the function using these details:

Customer orders RM250 worth of food

---

### **Scenario 6: Parking Fee System**

A parking lot charges:
- First hour: RM3
- Each additional hour: RM2
- Maximum charge per day: RM20
- Lost ticket: Flat rate RM50

Call the function using these details:

Car parks for 8 hours with valid ticket

---

### **Scenario 7: Movie Ticket Pricing**

Cinema ticket pricing:
- Child (< 12 years): RM8
- Student (12-17 years): RM12
- Adult (18-59 years): RM18
- Senior (≥ 60 years): RM10
- Weekend surcharge: +RM3 per ticket
- 3D movie: +RM5 per ticket

Call the function using these details:

23-year-old adult, weekend, 3D movie

---

### **Scenario 8: Electricity Bill Calculator**

Electricity tariff rates:
- First 200 units: RM0.218 per unit
- Next 100 units (201-300): RM0.334 per unit
- Next 300 units (301-600): RM0.516 per unit
- Above 600 units: RM0.546 per unit
- Service charge: RM3.00 (flat)

Call the function using these details:

Household uses 450 units in a month

---

### **Scenario 9: Car Insurance Premium**

Insurance calculation based on:
- Base premium: RM1000
- Age factor:
  - Under 25: +30%
  - 25-60: No change
  - Above 60: +20%
- Accident history:
  - No claims: -10%
  - 1 claim: No change
  - 2+ claims: +25%

Call the function using these details:

28-year-old driver with 1 previous claim

---

### **Scenario 10: Water Bill System**

Water billing structure:
- First 35m³: RM0.57 per m³
- Next 15m³ (36-50m³): RM1.03 per m³
- Above 50m³: RM1.50 per m³
- Meter rental: RM1.50 (flat)
- Service charge: RM0.50 (flat)

Call the function using these details:

Household uses 68m³ of water

---

## **Exercise 2: Code Improvement** <Badge type="tip" text="Question" />

**The following code snippets function correctly, but they are written poorly. Your task is to IMPROVE them.**

---

### **Code A**

```python
# Calculating areas
radius_value = 5
pi_value = 3.14159
answer = pi_value * radius_value * radius_value
print(f"Area 1: {answer}")

radius_value_2 = 10
pi_value_2 = 3.14159
answer_2 = pi_value_2 * radius_value_2 * radius_value_2
print(f"Area 2: {answer_2}")

radius_value_3 = 7
pi_value_3 = 3.14159
answer_3 = pi_value_3 * radius_value_3 * radius_value_3
print(f"Area 3: {answer_3}")
```

---

### **Code B**

```python
student_score = 85

if student_score >= 90:
    print("Grade: A")

if student_score >= 80:
    if student_score < 90:
        print("Grade: B")

if student_score >= 70:
    if student_score < 80:
        print("Grade: C")

if student_score < 70:
    print("Grade: F")
```

---

### **Code C**

```python
item_price_1 = 50
quantity_1 = 3
total_cost_1 = item_price_1 * quantity_1
if total_cost_1 > 100:
    total_cost_1 = total_cost_1 * 0.9  # 10% discount
print(f"Item 1 Cost: {total_cost_1}")

item_price_2 = 120
quantity_2 = 1
total_cost_2 = item_price_2 * quantity_2
if total_cost_2 > 100:
    total_cost_2 = total_cost_2 * 0.9  # 10% discount
print(f"Item 2 Cost: {total_cost_2}")

grand_total_cost = total_cost_1 + total_cost_2
print(f"Grand Total: {grand_total_cost}")
```

---

### **Code D**

```python
# Conversion
fahrenheit_temp = 100
celsius_temp = (fahrenheit_temp - 32) * 5/9
print(f"Temp 1: {celsius_temp:.2f}")

fahrenheit_temp_2 = 212
celsius_temp_2 = (fahrenheit_temp_2 - 32) * 5/9
print(f"Temp 2: {celsius_temp_2:.2f}")

fahrenheit_temp_3 = 32
celsius_temp_3 = (fahrenheit_temp_3 - 32) * 5/9
print(f"Temp 3: {celsius_temp_3:.2f}")
```

---

### **Code E**

```python
# Interest calculation
money_invested = 1000
yearly_rate = 0.05
years_waited = 3
total_profit = money_invested * yearly_rate * years_waited
print(f"Profit 1: {total_profit}")

money_invested_2 = 5000
yearly_rate_2 = 0.04
years_waited_2 = 5
total_profit_2 = money_invested_2 * yearly_rate_2 * years_waited_2
print(f"Profit 2: {total_profit_2}")
```

---

### **Code F**

```python
# Paint calculator
wall_height = 10
wall_width = 12
wall_area = wall_height * wall_width
paint_needed = wall_area / 350
cost = paint_needed * 45
print(f"Wall 1: Area={wall_area}, Paint={paint_needed:.2f} gallons, Cost=RM{cost:.2f}")

wall_height_2 = 8
wall_width_2 = 15
wall_area_2 = wall_height_2 * wall_width_2
paint_needed_2 = wall_area_2 / 350
cost_2 = paint_needed_2 * 45
print(f"Wall 2: Area={wall_area_2}, Paint={paint_needed_2:.2f} gallons, Cost=RM{cost_2:.2f}")
```

---

### **Code G**

```python
# Employee Slip Generator
emp_name = "Ali"
base_pay = 2000
overtime_hours = 10
ot_rate = 15

ot_pay = overtime_hours * ot_rate
gross_pay = base_pay + ot_pay
tax = gross_pay * 0.11
net_pay = gross_pay - tax

print("--- PAYSLIP ---")
print(f"Name: {emp_name}")
print(f"Base: RM{base_pay}")
print(f"Overtime: RM{ot_pay}")
print(f"Tax: RM{tax}")
print(f"Net Pay: RM{net_pay}")
print("----------------")
```

