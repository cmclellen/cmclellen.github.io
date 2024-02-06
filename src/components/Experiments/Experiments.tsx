import { FC } from 'react';
import { ExperimentsWrapper } from './Experiments.styled';
import reservationimg from '../../assets/reservation.jpg';
import auditoriumimg from '../../assets/auditorium.jpg';
import magnifyimg from '../../assets/magnify.jpg';

interface ExperimentsProps { }

const Experiments: FC<ExperimentsProps> = () => (
   <ExperimentsWrapper>
      <div className="container py-5">
         <div className="row row-cols-1 row-cols-md-3 g-4">

            <div className="col">
               <div className="card">
                  <img src={reservationimg} />
                  <div className="card-body">
                     <h5 className="card-title">Reservation System</h5>
                     <p className="card-text">Decide where you want to go and leave the flight, car rental and hotel bookings to us.</p>
                  </div>
                  <div className="card-footer">
                     <a href="/reservation/">Try it!</a>
                  </div>
               </div>
            </div>

            <div className="col">
               <div className="card">
                  <img src={auditoriumimg} />
                  <div className="card-body">
                     <h5 className="card-title">AI :: RAG using Famous Speeches</h5>
                     <p className="card-text">Using RAG to search within a dataset of famous speeches.</p>
                  </div>
                  <div className="card-footer">
                     <a href="/FamousSpeeches/">Read more</a>
                  </div>
               </div>
            </div>

            <div className="col">
               <div className="card">
                  <img src={magnifyimg} />
                  <div className="card-body">
                     <h5 className="card-title">AI :: PII Detection</h5>
                     <p className="card-text">Using Azure AI Search & Document Intelligence to identify documents containing PII information.</p>
                  </div>
                  <div className="card-footer">
                     <a href="https://github.com/cmclellen/PiiDocDetect">Read more</a>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </ExperimentsWrapper>
);

export default Experiments;
