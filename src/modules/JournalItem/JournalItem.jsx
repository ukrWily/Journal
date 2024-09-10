import "./JournalItem.css";
//
function JournalItem() {
  const title = "Sometitle";
  const date = new Date();
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus error vero dignissimos, sit ratione id odit labore, necessitatibus maiores, accusantium nulla nisi ut quis quae facilis doloremque in cum perspiciatis.";
  return (
    <div className="journal-item">
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">
          {new Intl.DateTimeFormat("ua-UA").format(new Date())}
        </div>
        <div className="journal-item__text">{text}</div>
      </div>
    </div>
  );
}
export default JournalItem;
