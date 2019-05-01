const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
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
  ]
};

const course = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_LESSON":
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module
      };
    default:
      return state;
  }
};

export default course;
