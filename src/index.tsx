import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const theme : any = createTheme({
//   components: {
//     MuiIcon: {
//       defaultProps: {
//         // Replace the `material-icons` default value.
//         baseClassName: 'material-icons-two-tone',
//       },
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement ).render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
);