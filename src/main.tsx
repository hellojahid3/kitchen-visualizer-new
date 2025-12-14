import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/globals.css';

const rootElement = document.querySelector('#root') as Element;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <React.Suspense fallback="loading">
        <h1>Hello World</h1>
      </React.Suspense>
    </React.StrictMode>
  );
}
