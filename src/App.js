import './App.css';
import 'flowbite';
import Tailwind from './Tailwind';
function App() {
  const list = ['01.jpg', '02.jpg', '03.jpg','04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'];
  return (
    <div className="w-full h-screen flex text-white">
      <div className="w-full bg-white flex justify-center h-10">
        {
          list.map((li, index) => (
            <button
              key={index}
              type="button"
              className="w-1/6 m-1 bg-black"
              data-tooltip-placement="bottom"
              data-tooltip-target={li}
              data-tooltip-trigger="hover"
            >
              Imagem {index + 1}
            </button>
          ))
        }
      </div>
      <img src={require(`./09.jpg`)} className="absolute top-11 w-screen object-cover h-screen" />
      <div>
        {
          list.map((li, index) => (
            <div
              key={index}
              id={li}
              className="w-full absolute flex items-center justify-center invisible z-10 shadow-sm opacity-0 dark:bg-gray-700 ">
                <img src={require(`./${li}`)} className="w-screen object-cover h-screen" />
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
