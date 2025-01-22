import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
	return (
		<ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
			{toasts.map((t, i) => (
				<li key={t.id} className={styles.toastWrapper}>
					<Toast data={t} />
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
