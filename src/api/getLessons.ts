const dummyData = [
  {
    name: "Lesson 1: Altered Scales",
    isDone: true,
    description: "This should be practiced!",
    content: {
      link: "https://www.youtube.com/channel/UCIEkqMaarDJ3nk_2p_5RCzA",
      text: "Click here to get Lesson 1",
    },
  },
  {
    name: "Lesson 2: Chords i do not understand",
    isDone: false,
    description: "This should be practiced!",
    content: {
      link: "https://www.youtube.com/channel/UCIEkqMaarDJ3nk_2p_5RCzA",
      text: "Click here to get Lesson 1",
    },
  },
];

export type Lesson = typeof dummyData[0];

export const getLessons = (): Promise<Lesson[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(dummyData), 1000));
};
