import { render } from '@testing-library/react'
import { TaskList } from 'src/modules/TaskList'
import { JestStoreProvider } from '../utils/JestStoreProvider'
import * as taskSliceModule from 'src/store/taskSlice'

const items = [
	{
		id: '1',
		header: 'test1',
		done: false,
	},
	{
		id: '2',
		header: 'test2',
		done: true,
	},
	{
		id: '3',
		header: 'test3',
		done: false,
	},
]

describe('Список задач', () => {
	// не содержит выполненные задачи
	// после нажатия на кнопку фильтрации
	it('с включенным фильтром', () => {
		const spied = jest
			.spyOn(taskSliceModule, 'tasksSelector') // Мокирование useSelector
			.mockReturnValue(items)

		const view = render(<TaskList filter={true} />, {
			wrapper: JestStoreProvider,
		})

		const listItems = view.queryAllByTestId('list-item-label')
		expect(listItems).toHaveLength(2)
	})

	// показывает как выполненные, так и не выполненные задачи
	// после повторного нажатия на кнопку фильтрации
	it('с выключенным фильтром', () => {
		const spied = jest
			.spyOn(taskSliceModule, 'tasksSelector') // Мокирование useSelector
			.mockReturnValue(items)

		const view = render(<TaskList filter={false} />, {
			wrapper: JestStoreProvider,
		})

		const listItems = view.queryAllByTestId('list-item-label')
		expect(listItems).toHaveLength(3)
	})
})
