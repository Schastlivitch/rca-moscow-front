import clsx from 'clsx';

import { IconProps } from './types';

import styles from './Calendar.module.css';

export function IconChevronRight({ className, style }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={clsx(styles.icon, styles.icon_lt_gt, className)}
			viewBox="0 0 6 12"
			style={style}
		>
			<path
				fillRule="evenodd"
				d="M.2 1c.3-.3.8-.3 1 0l4.6 4.5c.3.3.3.7 0 1L1.3 11a.7.7 0 1 1-1-1l3.9-4-4-4a.7.7 0 0 1 0-1Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export function IconChevronLeft({ className, style }: IconProps) {
	return (
		<svg
			className={clsx(styles.icon, styles.icon_lt_gt, className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 6 12"
			style={style}
		>
			<path
				fillRule="evenodd"
				d="M5.8 1c.3.3.3.7 0 1l-4 4 4 4a.7.7 0 1 1-1 1L.1 6.5a.7.7 0 0 1 0-1L4.7 1c.3-.3.8-.3 1 0Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export function IconChevronDown({ className, style }: IconProps) {
	return (
		<svg
			className={clsx(styles.icon, styles.icon_chevron_down, className)}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 10 6"
			style={style}
		>
			<path
				fillRule="evenodd"
				d="M1 .8a1 1 0 0 1 1 0L5 4l3-3a.6.6 0 0 1 1 .8L5.3 5.2c-.2.2-.6.2-.8 0L1 1.7a.6.6 0 0 1 0-.9Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export function IconCalendar({ className, style }: IconProps) {
	return (
		<svg
			className={clsx(styles.icon, styles.icon_calendar, className)}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 15 16"
			style={style}
		>
			<path
				fillRule="evenodd"
				d="M5 1.13c.35 0 .63.27.63.62v.63h3.75v-.63a.62.62 0 1 1 1.24 0v.63h1.26c1.03 0 1.87.83 1.87 1.87V13c0 1.04-.84 1.88-1.88 1.88H3.13A1.88 1.88 0 0 1 1.25 13V4.25c0-1.04.84-1.88 1.88-1.88h1.25v-.62c0-.35.27-.63.62-.63Zm-.63 2.5H3.13a.62.62 0 0 0-.62.62v1.88h10V4.25a.62.62 0 0 0-.63-.63h-1.24v.63a.62.62 0 1 1-1.26 0v-.63H5.63v.63a.62.62 0 1 1-1.25 0v-.63Zm8.13 3.75h-10V13c0 .35.28.63.63.63h8.75c.34 0 .62-.28.62-.63V7.37Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
export function IconTime({ className, style }: IconProps) {
	return (
		<svg
			className={clsx(styles.icon, styles.icon_time, className)}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={style}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.00015 2.25C5.27223 2.25 2.25015 5.27208 2.25015 9C2.25015 12.7279 5.27223 15.75 9.00015 15.75C12.7281 15.75 15.7502 12.7279 15.7502 9C15.7502 5.27208 12.7281 2.25 9.00015 2.25ZM0.750153 9C0.750153 4.44365 4.4438 0.75 9.00015 0.75C13.5565 0.75 17.2502 4.44365 17.2502 9C17.2502 13.5563 13.5565 17.25 9.00015 17.25C4.4438 17.25 0.750153 13.5563 0.750153 9ZM9.00015 3.75C9.41437 3.75 9.75015 4.08579 9.75015 4.5V8.53647L12.3356 9.82918C12.706 10.0144 12.8562 10.4649 12.671 10.8354C12.4857 11.2059 12.0352 11.3561 11.6647 11.1708L8.66474 9.67082C8.41065 9.54378 8.25015 9.28408 8.25015 9V4.5C8.25015 4.08579 8.58594 3.75 9.00015 3.75Z"
				fill="#9B9B9C"
			/>
		</svg>
	);
}
