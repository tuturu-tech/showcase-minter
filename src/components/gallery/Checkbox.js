import React from "react";

const Checkbox = ({ value, onChangeHandler, count }) => {
	return (
		<div className='flex items-start mb-6'>
			<div className='flex items-center h-5'>
				<input
					id='remember'
					aria-describedby='remember'
					type='checkbox'
					value={value}
					onChange={() => onChangeHandler(value)}
					className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
					required
				/>
			</div>
			<div className='ml-3 text-sm'>
				<label
					htmlFor='remember'
					className='font-medium text-white dark:text-gray-300 text-[10px] md:text-sm'>
					{value} ({count})
				</label>
			</div>
		</div>
	);
};

export default Checkbox;
