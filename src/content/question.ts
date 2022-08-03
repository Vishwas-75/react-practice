export const QUESTIONS = [
  {
    question: "What is your name",
    key: "userName",
    nextKey: "userAge",
  },
  {
    question: "What is you age",
    key: "userAge",
    nextKey: "userCountry",
  },
  {
    question: "Which country you are from",
    key: "userCountry",
    nextKey: undefined,
    subQuestion: {
      question: "Can i know your exact city?",
      key: "userCity",
    },
  },
];

const place = {
  country: { value: "india", city: "banglore" },
};

const person = {
  name: "",
  age: "",
  place: place,
};
