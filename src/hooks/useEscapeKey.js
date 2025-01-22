import React from 'react';

/** @param {Function} callback Should be wrapped in useCallback  */
function useEscapeKey(callback) {
	React.useEffect(() => {
		function callIfEscape(e) {
			if (e.code === 'Escape') callback();
		}
		window.addEventListener('keydown', callIfEscape);
		return () => window.removeEventListener('keydown', callIfEscape);
	}, []);
}

export default useEscapeKey;
