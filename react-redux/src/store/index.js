import { createStore } from "redux";
function reducer() {
  return [
    {
      id: 1,
      title: "Modulo 1",
      lessons: [
        {
          id: 1,
          title: "Primeiro vídeo do módulo 1"
        },
        {
          id: 2,
          title: "Segundo vídeo do módulo 1"
        }
      ]
    },
    {
      id: 2,
      title: "Modulo 2",
      lessons: [
        {
          id: 1,
          title: "Primeiro vídeo do módulo 2"
        },
        {
          id: 2,
          title: "Segundo vídeo do módulo 2"
        }
      ]
    }
  ];
}
const store = createStore(reducer);
export default store;
