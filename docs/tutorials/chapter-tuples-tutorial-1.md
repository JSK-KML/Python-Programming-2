---
title: Tuples - Tutorial 1
outline: deep
---

# Tuples - Tutorial 1



## **Exercise 1: Scenario-Based Problems** <Badge type="tip" text="Question" />

**Read each scenario carefully. Write function(s) to solve the problem using tuples.**

---

### **Scenario 1: Coordinate Distance Calculator**

A mapping app uses coordinate tuples `(x, y)` to represent points.

**Given:**
- Point A: `(0, 0)`
- Point B: `(3, 4)`

**Task:** Write a function that takes two coordinate tuples and returns the distance between them.

**Test with:**
- `(0, 0)` to `(3, 4)` → Should return `5.0`
- `(1, 1)` to `(4, 5)` → Should return `5.0`

---

### **Scenario 2: Color Warmth Detector**

A graphics app uses color tuples `(red, green, blue)` where each value is 0-255.

A color is considered "warm" if red dominates (red > green AND red > blue). A color is "cool" if blue dominates (blue > red AND blue > green). Otherwise it's "neutral".

**Given:** `(200, 50, 80)`

**Task:** Write a function that takes a color tuple and returns `"Warm"`, `"Cool"`, or `"Neutral"`.

**Test with:**
- `(200, 50, 80)` → Should return `"Warm"`
- `(50, 50, 200)` → Should return `"Cool"`
- `(100, 100, 100)` → Should return `"Neutral"`

---

### **Scenario 3: Midpoint Finder**

A mapping app uses coordinate tuples `(x, y)`.

Given two endpoints of a line segment, find the midpoint.

**Given:**
- Point A: `(2, 4)`
- Point B: `(8, 10)`

**Task:** Write a function that takes two coordinate tuples and returns a new tuple representing the midpoint.

**Test with:**
- `(2, 4)` and `(8, 10)` → Should return `(5.0, 7.0)`
- `(0, 0)` and `(10, 10)` → Should return `(5.0, 5.0)`

---

### **Scenario 4: Rectangle Fit Checker**

A shipping system represents boxes as tuples `(width, height)`.

To ship a package, it must fit inside the shipping box. The package CAN be rotated 90 degrees to fit.

**Given:**
- Shipping box: `(10, 6)`
- Package: `(5, 8)`

Normal orientation: Package 5×8 does NOT fit in 10×6 (8 > 6)

Rotated orientation: Package 8×5 DOES fit in 10×6 (8 ≤ 10 AND 5 ≤ 6)

**Task:** Write a function that takes two tuples (box, package) and returns `True` if the package fits in either orientation, `False` otherwise.

**Test with:**
- Box `(10, 6)`, Package `(5, 8)` → Should return `True` (fits when rotated)
- Box `(10, 6)`, Package `(7, 7)` → Should return `False` (7 > 6, doesn't fit either way)

---

### **Scenario 5: Time Overlap Detector**

A meeting scheduler uses time tuples `(hour, minute)` in 24-hour format.

Two meetings overlap if one starts before the other ends AND ends after the other starts.

**Given:**
- Meeting A: Start `(9, 0)`, End `(10, 30)`
- Meeting B: Start `(10, 0)`, End `(11, 0)`

**Task:** Write a function that takes four time tuples (meeting_a_start, meeting_a_end, meeting_b_start, meeting_b_end) and returns `True` if they overlap, `False` otherwise.

**Test with:**
- A: `(9, 0)` to `(10, 30)`, B: `(10, 0)` to `(11, 0)` → Should return `True` (overlap 10:00-10:30)
- A: `(9, 0)` to `(9, 30)`, B: `(10, 0)` to `(11, 0)` → Should return `False` (no overlap)

---

### **Scenario 6: Triangle Area from Vertices**

A geometry app calculates the area of triangles using vertex coordinates. Each vertex is represented as a tuple `(x, y)`.

**Given:**
- Vertex A: `(0, 0)`
- Vertex B: `(4, 0)`
- Vertex C: `(2, 3)`

**Task:** Write a function that takes three coordinate tuples and returns the area of the triangle.

**Test with:**
- Vertices `(0, 0)`, `(4, 0)`, `(2, 3)` → Should return `6.0`
- Vertices `(0, 0)`, `(6, 0)`, `(3, 4)` → Should return `12.0`

---

### **Scenario 7: Quadrant Detector**

A coordinate system uses tuples `(x, y)` to represent points. The coordinate plane is divided into 4 quadrants:
- Quadrant 1: x > 0 and y > 0
- Quadrant 2: x < 0 and y > 0
- Quadrant 3: x < 0 and y < 0
- Quadrant 4: x > 0 and y < 0

If a point lies on an axis (x = 0 or y = 0), return `0`.

**Given:** `(5, -3)`

**Task:** Write a function that takes a coordinate tuple and returns which quadrant (1, 2, 3, or 4) or `0` if on an axis.

**Test with:**
- `(5, -3)` → Should return `4`
- `(-2, 5)` → Should return `2`
- `(0, 5)` → Should return `0`

---

### **Scenario 8: Point Inside Rectangle Checker**

A graphics system defines rectangles using a corner tuple `(left, bottom)`, width, and height.

**Given:**
- Corner: `(1, 1)`
- Width: `4`
- Height: `3`
- Point: `(3, 2)`

The rectangle spans from (1, 1) to (5, 4).

**Task:** Write a function that takes a corner tuple, width, height, and a point tuple. Returns `True` if point is inside (inclusive), `False` otherwise.

**Test with:**
- Corner `(1, 1)`, Width `4`, Height `3`, Point `(3, 2)` → Should return `True`
- Corner `(1, 1)`, Width `4`, Height `3`, Point `(6, 2)` → Should return `False`
- Corner `(0, 0)`, Width `10`, Height `10`, Point `(10, 10)` → Should return `True` (on edge)
