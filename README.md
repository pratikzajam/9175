# Shopping Cart Application

This is a React-based shopping cart application that provides functionality to add, remove, and manage items in a cart. It includes user authentication, product browsing, and a checkout process.

## Features

- Add items to the cart
- Increase or decrease item quantity
- Remove items from the cart
- Place an order (checkout functionality)
- User login redirection if not authenticated
- Toast notifications for user feedback

## Technologies Used

- **React** for building the UI components
- **React Router** for routing
- **React Hot Toast** for toast notifications
- **CSS** for styling

## Folder Structure

```plaintext
.
├── src
│   ├── allroutes
│   │   └── AllRoutes.jsx
│   ├── components
│   │   ├── FlashDeals
│   │   │   └── flashDealsData.js
│   │   ├── Shop
│   │   │   └── shopData.js
│   │   ├── AllProducts
│   │   │   └── allProductsData.js
│   ├── context
│   │   └── UserContext.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.js
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd shopping-cart
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Browse Products:**
   - Products are fetched from data files (`flashDealsData.js`, `shopData.js`, `allProductsData.js`).

2. **Add to Cart:**
   - Click on a product to add it to the cart. If the product is already in the cart, the quantity increases by one.

3. **Remove from Cart:**
   - Decrease the quantity by clicking the remove button. If the quantity reaches zero, confirm removal from the cart.

4. **Checkout:**
   - Confirm the order to clear the cart and place an order. If not logged in, you will be redirected to the login page.

## Key Components

### `App.jsx`
- Handles the main logic for managing the cart and interacting with the product data.
- Provides functions such as:
  - `addToCart`: Add items to the cart or increase quantity.
  - `deleteFromCart`: Decrease quantity or remove items.
  - `checkOut`: Place an order and clear the cart.
  - `removeFromCart`: Remove items entirely from the cart.

### `AllRoutes.jsx`
- Handles routing between different pages (e.g., product listing, cart, login).

### Data Files
- **`flashDealsData.js`**: Contains data for flash deals.
- **`shopData.js`**: Contains data for shop products.
- **`allProductsData.js`**: Contains data for all products.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)
