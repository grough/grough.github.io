import "./old.css";

export default function Main() {
  return (
    <main>
      <p>Hello, this is Gavin Rough writing to you from the internet.</p>
      <p>Caterpillars from April 2004</p>
      <img
        id="caterpillars"
        src="/main/caterpillars-20040430.webp"
        alt="Caterpillars on a branch"
      />
      <p>Water and mountains from March 2023</p>
      <video id="water" preload="auto" autoPlay loop muted playsInline>
        <source src="/main/water-mountains-20230318.mp4" type="video/mp4" />
      </video>
      <p>Thank you for visiting :)</p>
    </main>
  );
}
