import { FC } from 'react'

interface IProps {
	filter: boolean
	setFilter: (val: boolean) => void
}

export const Filter: FC<IProps> = ({ filter, setFilter }) => {
	const handleClick = () => {
		setFilter(!filter)
	}

	return (
		<button onClick={handleClick} className='button button-with-text'>
			{filter ? 'Показать все задачи' : 'Показать активные задачи'}
		</button>
	)
}
