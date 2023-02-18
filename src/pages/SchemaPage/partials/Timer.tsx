import { useEffect, useState } from "react";
import useSelector from "../../../hooks/useSelector";
import { differenceInSeconds, format, intervalToDuration } from "date-fns";

// Styles
import styles from "../SchemaPage.module.css";

function Counter() {
	const [counter, setCounter] = useState<number>(0);

	const timestamp = useSelector((state) => state.schema.timestamp);

	// useEffect(() => {
	// 	setTimeout(() => setCounter(counter + 1), 1000);
	// }, [counter]);

	useEffect(() => {
		const targetDate = timestamp ? new Date(timestamp) : new Date();
		const test = differenceInSeconds(targetDate, new Date());
		setCounter(test);
		const timerId = setInterval(() => setCounter((prev) => prev + 1), 1000);
		return () => {
			clearInterval(timerId);
		};
	}, [timestamp]);

	const timer = intervalToDuration({ start: 0, end: counter * 1000 });

	const zeroPad = (num?: number) => String(num).padStart(2, "0");

	return (
		<div className={styles["timer"]}>
			<div className={styles["date"]}>
				<span>С момента получения данных прошло</span>
				<span>
					{zeroPad(timer.hours)}:{zeroPad(timer.minutes)}:
					{zeroPad(timer.seconds)}
				</span>
			</div>
			<div className={styles["date"]}>
				<span>Данные актуальны на</span>
				<span>
					{format(
						timestamp ? new Date(timestamp) : new Date(),
						"dd.MM.yyyy HH:mm:ss"
					)}
				</span>
			</div>
		</div>
	);
}

export default Counter;
