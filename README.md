# Nua PDP — Frontend Assignment

## Setup

git clone https://github.com/jobin-j/nua-pdp.git
cd nua-pdp
npm install
npm run dev

App runs at http://localhost:5173

## Stack

- React 18 with hooks
- Vite
- SCSS Modules
- React Router v6
- Context API for cart state
- Fake Store API for product data
- localStorage for cart persistence

## Known Tradeoffs

- TypeScript not used due to time constraints
- Product variants (colours, sizes, images) are mocked locally in variants.js as Fake Store API doesn't provide them
- Product listing shows only 3 products matching available variant data