import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
	isPlaying: true,
	size: 200,
	strokeWidth: 12,
};

const renderTime = (dimension, time) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className=''>{time}</div>
			<div>{dimension}</div>
		</div>
	);
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Countdown = () => {
	const countdownOver = 1650736800;
	const dateNow = Math.floor(Date.now() / 1000);
	let remainingTime = countdownOver - dateNow;

	const days = Math.ceil(remainingTime / daySeconds);
	const daysDuration = days * daySeconds;

	return (
		<div className='flex flex-col w-full items-center justify-center mt-20 mb-20 md:mb-0'>
			{Number(dateNow) < Number(countdownOver) && (
				<div className='flex flex-col items-center justify-center'>
					<h2 className='text-xl md:text-2xl mb-10'>Countdown to Launch</h2>
					<div className='flex flex-col 900:flex-row'>
						<div className='flex flex-col 500:flex-row mb-5'>
							<span className='mr-0 mb-5 500:mb-0 500:mr-5'>
								<CountdownCircleTimer
									{...timerProps}
									colors='#D61F69'
									duration={daysDuration}
									initialRemainingTime={remainingTime}>
									{({ elapsedTime, color }) => (
										<span>
											{renderTime(
												"days",
												getTimeDays(daysDuration - elapsedTime)
											)}
										</span>
									)}
								</CountdownCircleTimer>
							</span>
							<span className='mr-0 500:mr-5'>
								<CountdownCircleTimer
									{...timerProps}
									colors='#16BDCA'
									duration={daySeconds}
									initialRemainingTime={remainingTime % daySeconds}
									onComplete={(totalElapsedTime) => ({
										shouldRepeat:
											remainingTime - totalElapsedTime > hourSeconds,
									})}>
									{({ elapsedTime, color }) => (
										<span>
											{renderTime(
												"hours",
												getTimeHours(daySeconds - elapsedTime)
											)}
										</span>
									)}
								</CountdownCircleTimer>
							</span>
						</div>
						<div className='flex flex-col 500:flex-row'>
							<span className='mr-0 mb-5 500:mb-0 500:mr-5'>
								<CountdownCircleTimer
									{...timerProps}
									colors='#d41efc'
									duration={hourSeconds}
									initialRemainingTime={remainingTime % hourSeconds}
									onComplete={(totalElapsedTime) => ({
										shouldRepeat:
											remainingTime - totalElapsedTime > minuteSeconds,
									})}>
									{({ elapsedTime, color }) => (
										<span>
											{renderTime(
												"minutes",
												getTimeMinutes(hourSeconds - elapsedTime)
											)}
										</span>
									)}
								</CountdownCircleTimer>
							</span>
							<span>
								<CountdownCircleTimer
									{...timerProps}
									colors='#1e50ff'
									duration={minuteSeconds}
									initialRemainingTime={remainingTime % minuteSeconds}
									onComplete={(totalElapsedTime) => ({
										shouldRepeat: remainingTime - totalElapsedTime > 0,
									})}>
									{({ elapsedTime, color }) => (
										<span>
											{renderTime("seconds", getTimeSeconds(elapsedTime))}
										</span>
									)}
								</CountdownCircleTimer>
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Countdown;
