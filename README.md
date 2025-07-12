# Copilot Submit with Enter

🎯 A lightweight Chrome extension that enables form submission on Microsoft Copilot Pages by pressing the `Enter` key — no mouse required.

"Written" by Rich Clingman, or he at least prompted Copilot nicely. 

## 📦 Overview

Copilot Pages currently require manual clicking to submit input, which disrupts keyboard-only workflows. This extension solves that by triggering a click on the submit button whenever a plain `Enter` keystroke is detected.

## 🚀 Features

- ✅ **Keyboard-only Submission** — Press `Enter` to activate `[data-testid="submit-button"]`
- 🌐 **Scoped to Copilot Pages** — Runs only on `https://copilot.microsoft.com/*`
- 🧠 **Modifier-Aware** — Ignores `Enter` if Ctrl, Shift, Alt, or Meta are held
- 🧼 **Lightweight and Silent** — No popups, no settings, just works

## 📂 Folder Structure

```
copilot-enter-click-extension/
│
├── manifest.json     # Extension configuration
├── content.js        # Enter key listener logic
└── icon.png          # Optional toolbar icon
```

## 🧪 Installation (Developer Mode)

1. Download or clone this repository
2. Navigate to `chrome://extensions` in your browser
3. Toggle **Developer mode** (top-right)
4. Click **Load unpacked** and select the extension folder
5. Visit a Copilot Page — press `Enter` instead of clicking "Submit"

## 🔐 Permissions

Uses Chrome’s **host permissions** to inject only on Copilot Pages:
```json
"host_permissions": [
  "https://copilot.microsoft.com/*"
]
```

No data collection, background activity, or unnecessary access.

## 🛠️ Code Summary (`content.js`)

```js
document.addEventListener("keydown", function (e) {
  const isPlainEnter =
    e.key === "Enter" &&
    !e.shiftKey &&
    !e.ctrlKey &&
    !e.altKey &&
    !e.metaKey;

  if (isPlainEnter) {
    const btn = document.querySelector('[data-testid="submit-button"]');
    if (btn) btn.click();
  }
});
```

## 📘 Future Ideas

- Toggle extension on/off
- Add input focus filtering (trigger only when a field is active)
- UI options page for customizing button selectors
