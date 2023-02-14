import './bootstrap';
import ReactDOM from 'react-dom/client';
import Counter from './components/organisms/Counter';

function App() {
    return (
        <Counter />
    );
}

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<App />);
