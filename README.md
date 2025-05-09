# Web Calculator

A lightweight and interactive web calculator built entirely with HTML, CSS, and JavaScript. This app is perfect for performing quick and basic arithmetic calculations directly in the browser.

## 🧮 Overview

This calculator allows users to:
- Enter numbers and basic operators (+, −, ×, ÷)
- Instantly evaluate expressions using the "=" button
- Clear the input with a single tap using the "C" button
- Use keyboard or mouse for input (optional enhancement)

## 🔧 Tech Stack

- **HTML** — defines the calculator structure and layout.
- **CSS** — styles the interface, including responsive button design.
- **JavaScript** — handles expression building, evaluation, and reset functionality.

## 🚀 Getting Started

1. Clone or download the project folder.
2. Open `index.html` in any modern browser.
3. Start calculating!

## 🛠 Main Functions in JavaScript

- `appendValue(value)`: Adds a digit or operator to the expression.
- `calculate()`: Uses `eval()` to compute the result.
- `resetCalculator()`: Clears the expression and result field.

## ⚠️ Note on Security

This calculator uses the `eval()` function to interpret and compute expressions. While safe in this controlled context, avoid using `eval()` with untrusted input in real-world applications.

## 📷 Screenshot

![Calculator UI](screenshot.png)

## 👤 Author

Made with simplicity and clarity in mind by [Your Name].
