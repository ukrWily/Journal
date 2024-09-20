import "./App.css";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";
import LeftPanel from "./components/Layouts/LeftPanel/LeftPanel.jsx";
import Body from "./components/Layouts/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";

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
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {data.map((el, i) => (
            <CardButton key={i}>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
