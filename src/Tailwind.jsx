export default function TailwindPopUp() {
  return(
    <div className="text-black w-full h-screen flex items-center justify-center">
      <button
        className="
        bg-gray-400 p-4 w-28 font-bold rounded text-xl flex flex-col items-center
        before:content-[attr(data-tip)]
        before:bg-gray-300
        before:rounded
        before:absolute
        before:p-4
        before:-translate-y-20
        before:transition-all
        before:opacity-0

        after:absolute
        after:left-1/2
        after:opacity-0
        after:

        hover:before:opacity-100
        hover:after:opacity-100
        "
        data-tip="Clique aqui para uma nova imagem"
      >
        Adicionar
      </button>
    </div>
  );
}