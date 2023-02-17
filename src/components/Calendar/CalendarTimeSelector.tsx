import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
	eachHourOfInterval,
	eachMinuteOfInterval,
	endOfDay,
	format,
	formatISO,
	startOfDay,
} from 'date-fns';

import { IconTime } from './Icons';

import styles from './Calendar.module.css';

function CalendarTimeSelector({
	className,
	style,
	date,
	onTimeSelect,
}: {
	className?: string;
	style?: Record<string, string>;
	date: Date;
	onTimeSelect: (date: Date) => void;
}) {
	const [isTimePaneOpen, setIsPaneOpen] = useState(false);
	const paneRef = useRef<HTMLDivElement>(null);

	const togglePane = () => {
		setIsPaneOpen(!isTimePaneOpen);
	};

	const outsideClick = (e: Event) => {
		if (paneRef && paneRef.current?.contains(e.target as Node)) return;
		isTimePaneOpen && setIsPaneOpen(false);
	};

	useEffect(() => {
		document.addEventListener('mouseup', outsideClick);
		return () => document.removeEventListener('mouseup', outsideClick);
	});

	return (
		<div className={clsx(styles.calendar_time, className)} style={style}>
			<div ref={paneRef}>
				<button
					className={styles.calendar_time_input}
					type="button"
					onClick={togglePane}
				>
					<span className={styles.time_value}>{format(date, 'HH:mm')}</span>
					<IconTime />
				</button>
				{isTimePaneOpen && (
					<div className={styles.time_pane}>
						<>
							{eachHourOfInterval({
								start: startOfDay(date),
								end: endOfDay(date),
							}).map((hour) => (
								<div key={formatISO(hour)}>
									{eachMinuteOfInterval(
										{
											start: new Date(`${format(date, 'yyyy-MM-dd')}T23:00:00`),
											end: endOfDay(date),
										},
										{ step: 5 },
									).map((minute) => {
										const isTimeSelected =
											date.getHours() === Number(format(hour, 'HH')) &&
											date.getMinutes() === Number(format(minute, 'mm'));
										return (
											<div key={`${formatISO(hour)}-${formatISO(minute)}`}>
												<button
													type="button"
													className={clsx(
														styles.time_cell,
														isTimeSelected && styles.time_cell_selected,
													)}
													onClick={() => {
														onTimeSelect(
															new Date(
																date.setHours(
																	Number(format(hour, 'HH')),
																	Number(format(minute, 'mm')),
																	0,
																),
															),
														);
													}}
												>
													{format(hour, 'HH')}:{format(minute, 'mm')}
												</button>
											</div>
										);
									})}
								</div>
							))}
						</>
					</div>
				)}
			</div>
		</div>
	);
}

export default CalendarTimeSelector;
