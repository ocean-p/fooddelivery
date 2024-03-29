import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateContainer, Header, MainContainer } from './components';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect } from 'react';
import { actionType } from './context/reducer';

function App() {
  const [{foodItems}, dispatch] = useStateValue();
  console.log(foodItems)

  useEffect(() => {
    const fetchData = async () => {
      await getAllFoodItems().then(data => {
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data
        })
      })
    }

    fetchData();
  }, [dispatch])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className='mt-16 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
