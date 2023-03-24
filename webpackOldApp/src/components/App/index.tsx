import { Provider } from 'react-redux';
import store from '_redux/store';
import styles from './styles.module.scss';
import '_styles/main.scss';

export const App = () => {
    return (
        <Provider store={store}>
            <div className={styles.app}>Appp djksfn</div>
        </Provider>
    );
};
