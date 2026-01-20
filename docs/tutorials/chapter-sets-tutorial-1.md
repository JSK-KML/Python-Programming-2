---
title: Sets - Tutorial 1
outline: deep
---

# Sets - Tutorial 1



## **Exercise 1: Scenario-Based Problems** <Badge type="tip" text="Question" />

**Read each scenario carefully. Write function(s) to solve the problem using sets.**

---

### **Scenario 1: VIP Loyalty Counter**

A website tracks visitor IDs throughout the day. The marketing team wants to know how many VIP members visited in BOTH morning and afternoon (loyal VIPs).

**Given:**
- Morning visitors: `[101, 102, 101, 103, 102]`
- Afternoon visitors: `[103, 104, 105, 103, 104]`
- VIP members: `{102, 103, 105, 108}`

**Task:** Write a function `count_loyal_vips(morning_list, afternoon_list, vip_set)` that returns the count of VIP members who visited in BOTH morning and afternoon.

**Test with:**
- Morning `[1, 2, 3]`, Afternoon `[3, 4, 5]`, VIP `{2, 3, 5}` → `1` (only 3 is VIP and visited both)
- Morning `[1, 2]`, Afternoon `[3, 4]`, VIP `{1, 2, 3, 4}` → `0`

---

### **Scenario 2: Enrollment Eligibility Checker**

A university checks if a student can enroll in an advanced course. The student must complete all prerequisites (except waived ones) AND there must be available spots.

**Given:**
- Prerequisites: `{"MATH101", "CS100", "ENG101"}`
- Completed: `["MATH101", "CS100", "PHYS101"]`
- Waived: `{"ENG101"}`
- Capacity: `25`
- Currently enrolled: `23`

**Task:** Write a function `can_enroll(required, completed_list, waived, capacity, enrolled)` that returns `True` if the student can enroll, `False` otherwise.

**Test with:**
- Required `{"A", "B", "C"}`, Completed `["A", "B"]`, Waived `{"C"}`, Cap `10`, Enrolled `8` → `True`
- Required `{"A", "B", "C"}`, Completed `["A", "B"]`, Waived `set()`, Cap `10`, Enrolled `8` → `False`
- Required `{"A", "B"}`, Completed `["A", "B"]`, Waived `set()`, Cap `10`, Enrolled `10` → `False`

---

### **Scenario 3: Event Ticket Validator**

A concert has limited VIP backstage passes. Fans line up to request a pass, and the system processes them in order.

**Rules:**
- Only VIP ticket holders can get a pass
- Banned fans are rejected
- Once passes run out, no more can be given
- Each fan can only receive ONE pass (if Ali is in the queue twice, he only gets one)

**Given:**
- VIP ticket holders: `["Ali", "Sara", "Ahmad", "Mei", "John", "Ali"]`
- Banned fans: `{"Ahmad", "Lee"}`
- Backstage passes available: `3`
- Fans requesting pass (in order): `["Ali", "Sara", "Ahmad", "Mei", "John"]`

**Task:** Write a function `process_backstage(vip_list, banned, passes_available, requests)` that returns how many fans successfully got a backstage pass.

**Test with:**
- VIP `["A", "B", "C"]`, Banned `{"B"}`, Passes `2`, Requests `["A", "B", "C"]` → `2` (A gets pass, B banned so skipped, C gets pass)
- VIP `["A", "B"]`, Banned `set()`, Passes `5`, Requests `["A", "C", "B"]` → `2` (C not in VIP list)

---

### **Scenario 4: Warehouse Stock Auditor**

A warehouse receives items throughout the day. The same item may arrive in multiple shipments. At the end of the day, the auditor wants to identify "popular" items — items that were received MORE THAN ONCE.

**Given:**
- Items received (in order): `["Drill", "Hammer", "Drill", "Saw", "Hammer", "Drill", "Wrench"]`

In this example:
- Drill arrived 3 times → popular
- Hammer arrived 2 times → popular
- Saw arrived 1 time → not popular
- Wrench arrived 1 time → not popular

**Task:** Write a function `find_popular_items(received_list)` that returns a set of items that appeared MORE THAN ONCE.

**Test with:**
- `["A", "B", "A", "C", "B", "A"]` → `{"A", "B"}`
- `["A", "B", "C"]` → `set()`

---

### **Scenario 5: Study Group Former**

A teacher pairs students for study groups. The best study pairs are students who struggle with DIFFERENT topics — that way, each can help the other with their weak areas.

Two students are a GOOD pair if they have NO overlapping struggle topics.

**Given:**
- Student A struggles with: `["Math", "Physics", "Chemistry"]`
- Student B struggles with: `["Biology", "History", "English"]`

In this example: No common topics → Good pair!

Another example:
- Student A: `["Math", "Physics"]`
- Student B: `["Physics", "Biology"]`

Both struggle with Physics → Bad pair (they can't help each other with Physics)

**Task:** Write a function `is_good_pair(student_a_list, student_b_list)` that returns `True` if the students have NO common struggle topics, `False` otherwise.

**Test with:**
- A `["Math", "Physics"]`, B `["Biology", "English"]` → `True`
- A `["Math", "Physics"]`, B `["Physics", "Biology"]` → `False`

---
