import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey.js';

export const ToastsContext = React.createContext();

function ToastsProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const clearToasts = React.useCallback((e) => {
		if (e.code === 'Escape') setToasts([]);
	}, []);
	useEscapeKey(clearToasts);

	return <ToastsContext.Provider value={[toasts, setToasts]}>{children}</ToastsContext.Provider>;
}

export default ToastsProvider;
