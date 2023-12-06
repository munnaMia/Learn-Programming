let peoples = [
  "Md Munna Mia",
  "Rony Ahamed Shawon",
  "Tarif Udding Razi",
  "Anas Sarkar",
  "Asif Ullah",
];

export default function Peoples() {
    const listItems = peoples.map((person, index) => {
    return <li key={index}>{person}</li>
});
    return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
