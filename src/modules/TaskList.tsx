import { useDispatch, useSelector } from 'react-redux'
import { Empty } from 'src/components/Empty'
import { List } from 'src/components/List'
import { deleteTask, tasksSelector, toggleTask } from 'src/store/taskSlice'

interface IProps {
	filter: boolean
}

export const TaskList = ({ filter }: IProps) => {
	const items = useSelector(tasksSelector)
	const dispatch = useDispatch()

	const handleDelete = (id: Task['id']) => {
		dispatch(deleteTask(id))
	}

	const handleToggle = (id: Task['id']) => {
		dispatch(toggleTask(id))
	}

	const filteredItems = filter ? items.filter((item) => !item.done) : items

	return filteredItems.length > 0 ? (
		<List
			items={filteredItems}
			onDelete={handleDelete}
			onToggle={handleToggle}
		/>
	) : (
		<Empty />
	)
}
