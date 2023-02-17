import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { IconChevronDown } from './Icons';
import { CalendarType, CalendarTypeSelectorProps } from './types';

import styles from './Calendar.module.css';

const MENU_ITEMS_TRANSLATE: { [type: string]: string } = {
	[CalendarType.Day]: 'Сутки',
	[CalendarType.DayTime]: 'Начало',
	[CalendarType.Month]: 'Месяц',
	[CalendarType.Year]: 'Год',
	[CalendarType.Period]: 'Период',
	[CalendarType.PeriodWithTime]: 'Период',
};

function renderMenu(
	usedTypes: CalendarType[],
	onClick: (type: CalendarType) => void,
) {
	return (
		<ul className={styles.menu}>
			{usedTypes.map((type: CalendarType) => {
				return (
					<li key={type} className={styles.menu_item}>
						<button
							type="button"
							className={styles.menu_button}
							onClick={() => onClick(type)}
						>
							{MENU_ITEMS_TRANSLATE[type]}
						</button>
					</li>
				);
			})}
		</ul>
	);
}

function CalendarTypeSelector({
	className,
	style,
	usedTypes,
	selectedType,
	onChangeType = () => {},
}: CalendarTypeSelectorProps) {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const paneRef = useRef<HTMLDivElement>(null);
	const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
	const changeType = (type: CalendarType) => {
		onChangeType(type);
		toggleMenu();
	};
	const outsideClick = (e: Event) => {
		if (paneRef && paneRef.current?.contains(e.target as Node)) return;
		isOpenMenu && setIsOpenMenu(false);
	};
	useEffect(() => {
		document.addEventListener('mouseup', outsideClick);
		return () => document.removeEventListener('mouseup', outsideClick);
	});
	return (
		<div
			ref={paneRef}
			className={clsx(styles.type_selector, className)}
			style={style}
		>
			<button
				className={styles.selector_button}
				type="button"
				onClick={toggleMenu}
			>
				{MENU_ITEMS_TRANSLATE[selectedType]}
				<IconChevronDown className={styles.selector_chevron} />
			</button>
			{isOpenMenu && renderMenu(usedTypes, changeType)}
		</div>
	);
}

export default CalendarTypeSelector;
