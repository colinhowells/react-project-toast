import React from 'react';

import { ToastsContext } from '../ToastsProvider';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon
};

function Toast({ data }) {
	const [toasts, setToasts] = React.useContext(ToastsContext);
	const { id, variant, message } = data;
	const Icon = ICONS_BY_VARIANT[variant];

	function dismissToast(id) {
		setToasts(toasts.filter((t) => t.id !== id));
	}

	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{variant}</VisuallyHidden>
				{message}
			</p>
			<button
				className={styles.closeButton}
				aria-label="Dismiss message"
				aria-live="off"
				onClick={() => dismissToast(id)}
			>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
