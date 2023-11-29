import "./About.css";
import programmer from '../../assets/programmer.png';

export default function About({ forwardRef }: any) {
  return (
    <div ref={forwardRef} className="about-section-wrapper">
      <div className="about-section flex flex-row justify-center">
        <div className="flex flex-1 flex-col grow justify-center align-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            veezble agency
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Empowering businesses with innovative technology solutions for a
            better tomorrow
          </p>
          <button className="rounded-md mt-6 font-bold">HIRE US</button>
        </div>
        <div className="flex flex-1 flex-col grow justify-center align-center">
          <img src={ programmer } alt="Programmer"></img>
        </div>
      </div>
    </div>
  );
}
