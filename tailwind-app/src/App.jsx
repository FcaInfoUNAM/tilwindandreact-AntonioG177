
import './App.css'
import Navbar from './Navbar';
import Card from './Card';

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Card></Card>
    <div className="h-screen bg-orange-500 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white">¡Hola Tailwind CSS!</h1>
      <p className="mt-4 text-white">
        Tailwind CSS es increíblemente poderoso. ¡No puedo esperar para seguir explorándolo!
      </p>
    </div>
    </>
  )
}

export default App
