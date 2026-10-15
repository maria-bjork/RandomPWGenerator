# Random Password Generator

A clean, dark-mode web application that generates customizable, secure passwords on demand with click-to-copy functionality. Built using vanilla JavaScript, HTML5, and CSS3.

##  Features

- **Customizable Password Length:** Choose any length between 5 and 20 characters.
- **Character Pool Selection:** Toggle inclusion of:
  - Lowercase letters (`a-z`)
  - Uppercase letters (`A-Z`)
  - Numbers (`0-9`)
  - Special symbols (`!@#$%...`)
- **Dual Output:** Generates two distinct passwords simultaneously for quick selection.
- **Click-to-Copy:** Click any generated password box to automatically copy the text to your clipboard.
- **Interactive UI:** Smooth CSS hover transitions and responsive Flexbox layout.

## 🛠️ Built With

- **HTML5:** Semantic structure and form input elements (`number`, `checkbox`).
- **CSS3:** Custom dark theme, Flexbox layout, dynamic hover transitions, and responsive styling.
- **JavaScript (ES6):**
  - DOM manipulation (`document.getElementById`, `.textContent`).
  - Event listeners (`click`).
  - Array operations (`concat`, random sampling via `Math.random()` and `Math.floor()`).
  - Clipboard API (`navigator.clipboard.writeText`).

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
