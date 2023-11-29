import './Contact.css';
import talk from '../../assets/talk.svg';

export default function Contact({ forwardRef }: any) {
  return (
    <div ref={ forwardRef } className="contact-section-wrapper">
      <div className="contact-section flex flex-row justify-center">
        <div className="contact-text flex flex-1 flex-col grow justify-center align-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Have a project in mind?
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            We can help you turn your new idea into a successful software application, allowing you to focus on your core business.
          </p>
          <button className="rounded-md mt-6 font-bold">HIRE US</button>
        </div>
        <div className="talk-wrapper flex flex-col grow justify-center align-center">
          <img src={talk} alt="Talk"></img>
        </div>
      </div>
    </div>
  );
}