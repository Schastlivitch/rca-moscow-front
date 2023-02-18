import clsx from 'clsx';

import styles from './Spinner.module.css';

interface IProps {
	className?: string;
}

function Spinner({ className }: IProps) {
	return (
		<div className={clsx(styles['root'], className || '')}>
			<div className={styles['spinner']} />
		</div>
	);
}

export default Spinner;
