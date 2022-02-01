import BrowserStorage from 'data/BrowserStorage'

const Routes = () => {
  const dataStorage = new BrowserStorage()

	return (
    <>
      Routes
      <button onClick={() => dataStorage.create('EventTag', { name: 'teste' })}>Create</button>
      <button onClick={() => dataStorage.read('EventTag', 0, {by: 'VALUE', get: 'ALL'}).then((res) => console.log(res))}>Show</button>
      <button onClick={() => dataStorage.delete('EventTag', 0)}>delete</button>
    </>
  )
}

export default Routes
