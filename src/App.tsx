import { useContext } from 'react';

import { AuthContext } from './contexts/Auth';

import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { LoginBox } from './components/LoginBox';

import styles from './App.module.scss';

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}
