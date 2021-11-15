import React from 'react'; 


const Item = ({whychoose}) => {
    const {icon,title,text} = whychoose;
    return ( 
        <div className="special_ser_item">
            <div className="special_ser_icon"><i className={`${icon}`}></i></div>
            {/* <h4>{title}</h4>
            <p> {text} </p> */}
            {/* <p>Many Dealerships around South Australia have begun to ditch their car yard hand and instead use
our service. After using our service, many have not gone back to the traditional yard hand model.
Why?</p>
<ul className="whychose_list">
<li><i class="fa fa-check-square"></i> Most dealerships find our service is cheaper than hiring their own yard hand full time</li>
<li><i class="fa fa-check-square"></i> As we send in a team of yard hands, the yard is completed much quicker</li>
<li><i class="fa fa-check-square"></i> If your dealership is accessible before hours, most of the time your yard is completed prior to
opening (meaning you’ll never see a dirty yard!)</li>
<li><i class="fa fa-check-square"></i> We offer multiple services that cannot be completed by a single yard hand alone</li>
<li><i class="fa fa-check-square"></i> During the event of rain or bad weather, we simply reschedule the service to a later time.</li>
<li><i class="fa fa-check-square"></i> We supply the chemicals, equipment and chamois. Saving your dealership money.</li>
<li><i class="fa fa-check-square"></i> All our yard hands are experienced, in the case of a new worker they are trained amongst
experienced yard hands, making them get good at what we do, quickly. This makes our quality of
work really high.</li>
</ul>
<h3>Still not convinced?</h3>
<p>We have no lock in contract. Give us a go and if you’re not happy with our service there is no need to
commit!</p> */}
        </div>
    );
};

export default Item;
