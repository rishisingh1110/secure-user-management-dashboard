import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import SignIn from '../pages/SignIn'; 
import SignUp from '../pages/SignUp'; 
import { login, register } from '../redux/auth/authActions';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('Authentication', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders SignIn page', () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  test('login with valid credentials', async () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'Password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /s
