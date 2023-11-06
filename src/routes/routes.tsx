import LearningArticlesPage from "@pages/learningArticles";
import Layout from "@layout/layout";
import HomePage from "@pages/home";
import NewsPage from "@pages/news";
import { createBrowserRouter } from "react-router-dom";
import OnlinePricesPage from "@pages/onlinePrices";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/learning-articles",
        element: <LearningArticlesPage />,
      },
      {
        path: "/online-prices",
        element: <OnlinePricesPage />,
      },
    ],
  },
]);
