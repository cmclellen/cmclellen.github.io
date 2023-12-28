import { FC } from 'react';
import { ExperimentsWrapper } from './Experiments.styled';
import reservationimg from '../../assets/reservation.jpg';

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
               {/* <img src="..." className="card-img-top" alt="..."> */}
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content.
                     
                     
                     </p>
                  </div>
                  <div className="card-footer">
                     <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
            </div>
         </div>
         <div className="col">
            <div className="card">
               {/* <img src="..." className="card-img-top" alt="..."> */}
                  <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  </div>
                  <div className="card-footer">
                     <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
            </div>
         </div>
      </div>
      </div>
   </ExperimentsWrapper>
);

export default Experiments;
