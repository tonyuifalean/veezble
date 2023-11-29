import development from '../../assets/services/development.svg';
import interview from '../../assets/services/interview.svg';
import writing from '../../assets/services/writing.svg';
import './Services.css';

export default function Services({ forwardRef }: any) {
  return (
    <>
      <div ref={ forwardRef } className="services-section-wrapper">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-3xl text-center">
          Our Services
        </h1>
        <div className="cards-wrapper flex flex-row justify-center">
          <div className="card flex flex-1 flex-col">
            <img src={development} className="w-auto" alt="Software Development" />
            <span className="text-center">Software Development</span>
          </div>
          <div className="card flex flex-1 flex-col">
            <img src={interview} className="w-auto" alt="Techical Interviews" />
            <span className="text-center">Techical Interviews</span>
          </div>
          <div className="card flex flex-1 flex-col">
            <img src={writing} className="w-auto" alt="Content Writing" />
            <span className="text-center">Content Writing</span>
          </div>
        </div>
      </div>

      <div className="services-message-wrapper flex flex-col">
        <h2 className="text-2xl text-center">Why You Hire Us?</h2>
        <div className="message-list-wrapper flex justify-center">
          <ul>
            <li>Contribute to all SDLC phases of your applications</li>
            <li>Give technical support on candidates screening</li>
            <li>Content Writing and Technical profile writing</li>
          </ul>
        </div>
      </div>
    </>  
  );
}