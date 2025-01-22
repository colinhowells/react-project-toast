import React from 'react';

/** @param {Function} callback Should be wrapped in useCallback to prevent unnecessary re-renders */
function useEscapeKey(callback) {
	React.useEffect(() => {
		window.addEventListener('keydown', callback);
		return () => window.removeEventListener('keydown', callback);
	}, []);
}

export default useEscapeKey;
