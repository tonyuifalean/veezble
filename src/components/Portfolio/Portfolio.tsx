import './Portfolio.css';
import epam from '../../assets/clients/epam.svg';
import interactivid from '../../assets/clients/interactivid.svg';
import upper from '../../assets/clients/upper.svg';

export default function Portfolio({ forwardRef }: any) {
  return (
    <div ref={ forwardRef } className="portfolio-section-wrapper">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-3xl text-center">
          Our Clients
        </h1>
        <div className="clients-wrapper flex justify-center">
          <img src={epam} alt="Epam" />
          <img src={interactivid}  alt="InteractivId" />
          <img src={upper} alt="Upper" />
        </div>
      </div>
  );
}