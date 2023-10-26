import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/auth.context';
import router from './routers/AppRouter';
import { MessageProvider } from './context/message.context';

function App() {
  return (
    <AuthProvider>
      <MessageProvider>
        <RouterProvider router={router} />
      </MessageProvider>
    </AuthProvider>
  );
}

export default App;
