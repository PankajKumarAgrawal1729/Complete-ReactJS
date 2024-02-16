import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-2">
        Tailwind Test
      </h1>
      <Card
        name="Naruto Uzumaki"
        about="Naruto Uzumaki is the main character in the manga series Naruto by
              Masashi Kishimoto. Naruto is a ninja from the Hidden Leaf Village
              (konohagakure) who wants to become the Hokage, the leader of his
              village."
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcjTo7V3xF1oohpa_H33rvmy7hiSu9ypt0tNVnn4lTmOA3mctTJL0vF4bogVN1lrxt2c&usqp=CAU"
      />
      <Card
        name="Kakashi Hatake"
        about="Kakashi Hatake is known as 'Kakashi of the Sharingan' in Konohagakure. He puts a huge emphasis on teamwork and that you should value your friendships."
        imageSrc="https://i.pinimg.com/736x/09/2f/82/092f822be2964b113904eaca748bab2d.jpg"
      />
    </>
  );
}

export default App;
