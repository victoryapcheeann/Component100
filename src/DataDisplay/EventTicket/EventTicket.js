import React, { Component } from 'react';
import './EventTicket.css';
import AppEffect from '../../AppEffect'

class EventTicket extends Component {
  render() {
    return (
        <AppEffect>
<div className="ticketEvent">
<div className="ticketStub">
 <div className="ticketTop">
   <span>Admit</span>
   <span className="ticketLine"></span>
   <span className="ticketNum">
     Invitation
     <span>31415926</span>
   </span>
 </div>
 <div className="ticketNumber">1</div>
 <div className="ticketInvite">
   Invite for you
 </div>
</div>
<div className="ticketCheck">
 <div className="ticketBig">
   You're <br/> Invited
 </div>
 <div className="ticketNumber">#1</div>
 <div className="ticketInfo">
   <section>
     <div className="ticketTitle">Date</div>
     <div>4/27/2016</div>
   </section>
   <section>
     <div className="ticketTitle">Issued By</div>
     <div>Ampersand</div>
   </section>
   <section>
     <div className="ticketTitle">Invite Number</div>
     <div>31415926</div>
   </section>
 </div>
</div>
</div>
</AppEffect>
    );
  }
}

export default EventTicket;
