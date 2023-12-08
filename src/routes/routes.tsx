import BuySellDigitalCurrency from "@pages/buy-sell-digital-currency";
import Layout from "@layout/layout";
import HomePage from "@pages/home";
import LearningArticlesPage from "@pages/learning-articles";
import NewsPage from "@pages/news";
import OnlinePricesPage from "@pages/online-prices";
import { createBrowserRouter } from "react-router-dom";
import ContactUsPage from "@pages/contact-us";

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
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/buy-sell/digital-currency",
        element: <BuySellDigitalCurrency />,
      },
    ],
  },
]);
