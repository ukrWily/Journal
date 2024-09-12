import "./App.css";
import JournalItem from "./modules/JournalItem/JournalItem.jsx";
import Button from "./modules/Button/Button.jsx";
import CardButton from "./modules/CardButton/CardButton.jsx";

function App() {
  const data = [
    {
      title: "Title",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus error vero dignissimos, sit ratione id odit labore, necessitatibus maiores, accusantium nulla nisi ut quis quae facilis doloremque in cum perspiciatis.",
      date: new Date(),
    },
    {
      title: "Title two",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus error vero dignissimos, sit ratione id odit labore, necessitatibus maiores, accusantium nulla nisi ut quis quae facilis doloremque in cum perspiciatis.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus error vero dignissimos, sit ratione id odit labore, necessitatibus maiores, accusantium nulla nisi ut quis quae facilis doloremque in cum perspiciatis.`,
      date: new Date(),
    },
  ];

  return (
    <>
      <h1>Title</h1>
      <p>Some text</p>
      <Button />
      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </CardButton>
    </>
  );
}

export default App;
