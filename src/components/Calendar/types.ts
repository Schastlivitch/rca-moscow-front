import React, { ReactNode } from 'react';

export enum CalendarType {
	DayTime = 'daytime',
	Day = 'day',
	Month = 'month',
	Year = 'year',
	Period = 'period',
	PeriodWithTime = 'periodWithTime',
}

export type RenderElements = {
	Input: ({ className, style }: CalendarPaneProps) => Element;
	Pane: ({ className, style }: CalendarPaneProps) => Element;
};

export type RenderParts = {
	[calendarType: string]: React.ReactNode;
};

export interface CalendarProps {
	dates: Date[];
	usedTypes?: CalendarType[];
	className?: string;
	style?: Record<string, string>;
	min?: Date;
	max?: Date;
	type?: CalendarType;
	onSelect?: (period: Date[]) => void;
	onTypeChange?: (type: CalendarType) => void;
	renderBottomPaneSection?: () => ReactNode;
}

export type CalendarPaneRootProps = Omit<
	CalendarProps,
	'usedTypes' | 'onTypeChange'
>;

export interface CalendarPaneProps {
	className?: string;
	style?: Record<string, string>;
	period?: boolean;
	showTimeSelect?: boolean;
}

export type CalendarContextProvider = {
	dates: Date[];
	displayDate?: Date;
	displayPeriod?: Date[];
	isStartPeriod?: boolean;
	min?: Date;
	max?: Date;
	onSelect: (period: Date[]) => void;
	onChangeDate?: (newDate: Date) => void;
	onTogglePeriodFlag?: (current: boolean) => void;
	onChangePeriod?: (period: Date[]) => void;
};

export interface CalendarViewSelectorProps {
	className?: string;
	style?: Record<string, string>;
	selectedDate: Date;
	min?: Date;
	max?: Date;
	selectedCalendarType?: CalendarType;
	onChangeDate?: (newDate: Date) => void;
	onChangeType?: (type: CalendarType) => void;
}

export interface IconProps {
	className?: string;
	style?: Record<string, string>;
}

export type CalculateFunctions = {
	[calendarType: string]: ((date: number | Date, amount: number) => Date)[];
};

export interface CalendarTypeSelectorProps {
	usedTypes: CalendarType[];
	selectedType: CalendarType;
	className?: string;
	style?: Record<string, string>;
	onChangeType?: (type: CalendarType) => void;
	onPaneToggle?: () => void;
}
