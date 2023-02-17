import clsx from 'clsx';

import styles from './Checkbox.module.css';

interface IProps {
	name: string;
	title: string;
	checked: boolean;
	className?: string;
	onChange?: () => void;
}

function Checkbox({ name, title, checked, className, onChange }: IProps) {
	return (
		<label htmlFor={name} className={clsx(styles['root'], className)}>
			<span className={styles['title']}>{title}</span>
			<input
				id={name}
				name={name}
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<span className={styles['checkmark']} />
		</label>
	);
}

export default Checkbox;
