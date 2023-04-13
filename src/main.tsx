import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "app/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyles } from "./global/globalStyles";
import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { suspense: true, refetchOnWindowFocus: false, retry: false },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
    <GlobalStyles />
  </>,
);
