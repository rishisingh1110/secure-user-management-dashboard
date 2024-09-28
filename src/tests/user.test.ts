import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust the path as needed
import SignIn from '../pages/SignIn'; // Adjust the path as needed
import SignUp from '../pages/SignUp'; // Adjust the path as needed
import { login, register } from '../redux/auth/authActions'; // Adjust the path as needed
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('User Authentication', () => {
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
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    // Check if the login action was called
    const actions = store.getActions();
    expect(actions[0]).toEqual(login({ email: 'user@example.com', password: 'Password123' }));
  });

  test('renders SignUp page', () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );

    expect(screen.getByText(/sign up/i)).toBeInTheDo
