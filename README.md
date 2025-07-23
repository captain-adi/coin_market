# 💰 CryptoInsight - Realtime Cryptocurrency Tracker

A fully responsive web application that helps users discover real-time information about their favorite cryptocurrencies. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, and powered by the **CoinGecko API**.

---

## 🖼 Preview

> Insert GIFs or images here  
> Example:
![Preview Screenshot](./public/screenshot.png)

---

## 🔥 Key Features

- 🔍 Search & filter coins by name
- 📊 Live data including price, volume, and market cap
- 🏆 View market rank & historical trends
- 🔁 Real-time updates using React Query
- 🌓 Dark/Light mode (if enabled)
- ✅ Fully responsive UI for all screen sizes
- 💨 Super-fast with Vite + TailwindCSS

---

## 📦 Tech Stack

| Tech           | Description                                 |
|----------------|---------------------------------------------|
| React          | Frontend library for UI                     |
| TypeScript     | Static type checking                        |
| Tailwind CSS   | Utility-first CSS framework                 |
| Vite           | Fast build tool                             |
| React Query    | Data fetching, caching and updating         |
| Axios / Fetch  | HTTP client (depending on your project)     |
| CoinGecko API  | Free crypto data API                        |

---

## 📦 NPM Packages Used

- `@tanstack/react-query`
- `axios`
- `react-router-dom`
- `tailwindcss`
- `vite`
- `ag-grid`
- `rechart` for show chart
- `shadcnUI`

---

## 🧠 Learnings / Concepts Practiced

- ✅ API Integration with real-world crypto data
- ✅ Handling asynchronous requests and loading states
- ✅ Dynamic routing (`/coin/:id`)
- ✅ Custom hooks with TypeScript
- ✅ Responsive design with TailwindCSS
- ✅ Component-based architecture
- ✅ Error handling and fallback UIs

---

## 🐛 Known Issues

> _(Optional, only include if applicable)_

- ⛔ Sometimes CoinGecko rate limits too many API calls.
- ⛔ No loading spinner for slow connections (planned fix).

---

## 🧠 Future Plans / Roadmap

- [ ] Add pagination or infinite scroll for long lists
- [ ] Add coin chart with historical trends
- [ ] Add authentication and watchlist feature
- [ ] Export coin data as CSV
- [ ] Push notifications on coin price alerts

---

## 📝 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Run the app
npm run dev
