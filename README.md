# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...


    },
  },
])
```
---
🏬 Store Page

This page displays a product catalog including Laptop, Headphones, and Keyboard.
Each product card shows a short description, price, and an “Add to cart” button.
Users can easily browse and select the items they want to purchase.
The Shopping Cart section below dynamically updates as items are added.
<img width="875" height="1023" alt="image" src="https://github.com/user-attachments/assets/565df841-4ff4-41b0-99f6-9a774ba23248" />

---

🛍️ Shopping Cart
This section shows the shopping cart after adding several products.
Each item displays its name, quantity, and price.
The user can increase or decrease the quantity of products using + / – buttons.
The total amount is automatically recalculated in real time.
There is also a “Clear cart” button to remove all items from the cart.
<img width="857" height="1525" alt="image" src="https://github.com/user-attachments/assets/21b91e47-472c-4569-a93e-b26e1474142e" />

---
💳 Checkout Page

The Checkout page allows the user to enter delivery information such as name, email, address, ZIP code, and city.
On the right side, an Order summary displays all items from the cart with the total cost.
This layout provides a clear overview before finalizing the order.

<img width="851" height="1359" alt="image" src="https://github.com/user-attachments/assets/b6c14e89-306d-458c-accf-a5639390fdfa" />

---

⚠️ Form Validation
The application includes input validation to ensure correct form data.
For example, when entering an invalid email address, a message appears reminding the user to include an “@” symbol.
This prevents submission of incorrect or incomplete information and improves overall usability.
<img width="851" height="1258" alt="image" src="https://github.com/user-attachments/assets/d1b3c71b-382c-4309-859f-f03b1ac6e98c" />
