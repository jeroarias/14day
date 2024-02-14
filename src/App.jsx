import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 1,
    description: "Di si por favor",
    img: "https://i.pinimg.com/originals/97/7e/27/977e2711b502b45fb7d0546cd0970550.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo.",
    img: "https://media.tenor.com/jdPBDds2mskAAAAi/tkthao219-tooji.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, atrévete a decir que sí.",
    img: "https://i.pinimg.com/originals/56/7d/a5/567da559ec0e76fab39f52dd33db38e9.gif"
  },
  {
    id: 3,
    description: "No tengas miedo, será genial.",
    img: "https://media.tenor.com/APIFIpJugwYAAAAi/tkthao219-bubududu.gif"
  },
  {
    id: 4,
    description: "Confía en mí, será divertido.",
    img: "https://media.tenor.com/zcBJlOtJVIsAAAAi/tkthao219-bunny.gif"
  },
  {
    id: 5,
    description: "No tengas dudas, te hará sonreír.",
    img: "https://media.tenor.com/9mWbwBjokbwAAAAi/hugs-love.gif"
  },
  {
    id: 6,
    description: "Te prometo que será inolvidable.",
    img: "https://media.tenor.com/Hqwu6m1B5YUAAAAi/tkthao219-tooji.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "https://i.pinimg.com/originals/97/7e/27/977e2711b502b45fb7d0546cd0970550.gif"
  },
  {
    id: 8,
    description: "Confía en el destino, nos está dando una señal.",
    img: "https://media.tenor.com/K-yamZHocEYAAAAi/tkthao219-bubududu.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "https://i.pinimg.com/originals/cf/9c/56/cf9c564ffa7b7cc112d5132b3a152c46.gif"
  },
  {
    id: 10,
    description: "No te arrepentirás.",
    img: "https://i.pinimg.com/originals/81/62/77/8162778195d37ca5e5803abe82e20a72.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-black font-bold text-5xl text-center">¿Quieres ser mi San Valentin?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://i.pinimg.com/originals/97/7e/27/977e2711b502b45fb7d0546cd0970550.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😺', '😻', '🖤', '😽'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-black items-center font-bold">Yo sabia 😼 que vos querias 🖤!</h1>
            <img src="https://media.tenor.com/n-vP_xDINYcAAAAi/tkthao219-tooji.gif" alt="" className="mx-auto" />
            <span hidden>{document.title = 'Yo sabia 😼 que vos querias 🖤!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App
