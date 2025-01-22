import React from 'react';

import { ToastsContext } from '../ToastsProvider';
import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [toasts, setToasts] = React.useContext(ToastsContext);

	function addToast(e) {
		e.preventDefault();
		setToasts([...toasts, { message, variant, id: crypto.randomUUID() }]);
		setMessage('');
		setVariant(VARIANT_OPTIONS[0]);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{toasts.length > 0 && <ToastShelf toasts={toasts} />}

			<form className={styles.controlsWrapper} onSubmit={addToast}>
				<div className={styles.row}>
					<label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((v) => {
							return (
								<label key={v} htmlFor={`variant-${v}`}>
									<input
										id={`variant-${v}`}
										type="radio"
										name="variant"
										required
										value={v}
										checked={v === variant}
										onChange={(e) => setVariant(e.target.value)}
									/>
									{v}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
