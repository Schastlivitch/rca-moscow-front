import React, { useState } from 'react';
import {
	addDays,
	endOfDay,
	endOfMonth,
	format,
	getDay,
	isAfter,
	isBefore,
	isSameDay,
	startOfDay,
	startOfMonth,
	subDays,
} from 'date-fns';
import { ru } from 'date-fns/locale';

import {
	CalculateFunctions,
	CalendarContextProvider,
	CalendarType,
} from './types';

export function getDaysOffsetFromStartWeek(currentDayOfWeek: number): number {
	const DAYS_FROM_START_WEEK = [6, 0, 1, 2, 3, 4, 5];
	return DAYS_FROM_START_WEEK[currentDayOfWeek];
}

export function getMonthGridDatesPeriod(selectedDate: Date): Date[] {
	const MAX_DAYS_OFFSET = 6;
	const startDate: Date = startOfMonth(selectedDate);
	const endDate: Date = endOfMonth(selectedDate);
	const startDayOfWeek: number = getDay(startDate);
	const endDayOfWeek: number = getDay(endDate);

	return [
		subDays(startDate, getDaysOffsetFromStartWeek(startDayOfWeek)),
		addDays(
			endDate,
			MAX_DAYS_OFFSET - getDaysOffsetFromStartWeek(endDayOfWeek),
		),
	];
}

export function isInOfMinMax(current: Date, min?: Date, max?: Date): boolean {
	if (min == null && max == null) return false;
	return Boolean(
		(min && isBefore(current, min)) ||
			(max && isAfter(current, max)) ||
			(min && isSameDay(current, min)) ||
			(max && isSameDay(current, max)),
	);
}

export const CalendarContext = React.createContext<CalendarContextProvider>({
	dates: [],
	onSelect: () => {},
});

export function toUpperFirstChar(changingString: string): string {
	const firstChar = changingString.substring(0, 1);
	return `${firstChar.toUpperCase()}${changingString.substring(1)}`;
}

export function useTransitionsStack(navigationList: CalendarType[]) {
	const [paneType, setPaneType] = useState<CalendarType[]>([]);

	function go(calendarType: CalendarType): void {
		const itemIndex: number = navigationList.findIndex(
			(type) => type === calendarType,
		);
		setPaneType(navigationList.slice(0, itemIndex + 1));
	}

	function back(): void {
		setPaneType(paneType.slice(0, -1));
	}

	function current(): CalendarType | undefined {
		const [lastElement] = paneType.slice(-1);
		return lastElement;
	}

	return { go, back, current };
}

export function generateDefaultNavigationList(
	defaultCalendarType: CalendarType,
): CalendarType[] {
	return [
		...new Set<CalendarType>([
			defaultCalendarType,
			CalendarType.Month,
			CalendarType.Year,
		]),
	];
}

export function isAlternateHeader(defaultType: CalendarType) {
	switch (defaultType) {
		case CalendarType.Month:
		case CalendarType.Year:
			return true;
		default:
			return false;
	}
}

export function getHeaderControl(
	calculateFunctions: CalculateFunctions,
	selectedDate: Date,
	selectedCalendarType?: CalendarType,
	onChangeType?: (type: CalendarType) => void,
	onChangeDate?: (newDate: Date) => void,
) {
	const raiseYearType = () => onChangeType && onChangeType(CalendarType.Year);
	const [sub, add] =
		calculateFunctions[selectedCalendarType || CalendarType.Month];

	const offset: number = selectedCalendarType === CalendarType.Year ? 10 : 1;

	const setPreviousDate = () =>
		onChangeDate && onChangeDate(sub(selectedDate, offset));
	const setNextDate = () =>
		onChangeDate && onChangeDate(add(selectedDate, offset));

	return {
		raiseYearType,
		setPreviousDate,
		setNextDate,
	};
}

export function formatDateByType(dates: Date[], type: CalendarType) {
	const [startPeriod, endPeriod] = dates;
	switch (type) {
		case CalendarType.Day:
			return format(startPeriod, 'dd.MM.yyyy');
		case CalendarType.DayTime:
			return format(startPeriod, 'dd.MM.yyyy, HH:mm');
		case CalendarType.Month:
			return toUpperFirstChar(format(startPeriod, 'LLLL yyyy', { locale: ru }));
		case CalendarType.Year:
			return format(startPeriod, 'yyyy');
		case CalendarType.PeriodWithTime:
			return `${format(startPeriod, 'dd.MM.yyyy, HH:mm')} – ${format(
				endPeriod,
				'dd.MM.yyyy, HH:mm',
			)}`;
		default:
			return `${format(startPeriod, 'dd.MM.yyyy')} – ${format(
				endPeriod,
				'dd.MM.yyyy',
			)}`;
	}
}

export function saveDate(dates: Date[]): Date[] {
	if (dates.length === 0) return [startOfDay(new Date()), endOfDay(new Date())];
	const [periodStart, periodEnd] = dates;
	return [
		periodStart || startOfDay(periodEnd),
		periodEnd || endOfDay(periodStart),
	];
}
