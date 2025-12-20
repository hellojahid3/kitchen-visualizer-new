import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { store } from './app/store';
import router from './router';
import './styles/globals.css';

const rootElement = document.querySelector('#root') as Element;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
}
