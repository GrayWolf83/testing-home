import { store } from './store/configureStore'

import './styles.css'
import { NewTaskBar } from './modules/NewTaskBar'
import { TaskList } from './modules/TaskList'
import { Provider } from 'react-redux'
import { NotifierContainer } from './modules/NotifierContainer'
import { Filter } from './components/Filter'
import { useState } from 'react'

export const App = () => {
	const [filter, setFilter] = useState<boolean>(false)
	return (
		<div className='root-container'>
			<Provider store={store}>
				<h3>Список задач</h3>
				<NewTaskBar />
				<Filter filter={filter} setFilter={setFilter} />
				<TaskList filter={filter} />
				<NotifierContainer />
			</Provider>
		</div>
	)
}
