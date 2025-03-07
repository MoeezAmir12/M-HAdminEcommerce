import React, { Component } from 'react';
import _ from 'lodash'
import { price, url, headers } from '../../config'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firest } from '../fr';

class Order4 extends Component {
    
    
    
    
    
    
    
        render() {
            const {order} = this.props
            var carm = order.Cart.map((item)=> (

   

         
                <div className="col-md-4 order-md-2 mb-4">
                  
                  <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Product name</h6>
                        <small className="text-muted">{item.name}</small>
                      </div>
                      <div>
                        <h6 className="my-0">Product price</h6>
                        <small className="text-muted">{item.saleprice}</small>
                      </div>
                    </li>
                   </ul>
                </div>
                    
                )
                    )
                    
          
            return (
               
                <div className="product">
                    <div className="photo">
                       
                    </div>
                    <div className="code">
                        <div>Order ID</div>
                        <span>{order.OrderID}</span>
                    </div>
                    <div className="code">
                        <div>Order Total</div>
                        <span>{order.Price}</span>
                    </div>
                    <div className="code">
                        <div>Inspection Charges</div>
                        <span>{order.InspectionPrice}</span>
                    </div>
                    <div className="code">
                        <div>Delivery Charges</div>
                        <span>{order.DeliveryCharges}</span>
                    </div>
                    <div className="name">
                        <div> Order Details </div>
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
   
   
  </h4>
{carm}
                    </div>
                    <div className="code">
                        <div>Customer Email</div>
                        <span>{order.Email}</span>
                    </div>
                    <div className="code">
                        <div>Status</div>
                        <span>{order.Status}</span>
                    </div>
                    <div className="code">
                        <div>Delivery Date (Targeted)</div>
                        <span>{order.DeliveryDate}</span>
                    </div>
                   
                  
                   
                   
                </div>
                
            );
        }
    }
    
    const mapStateToProps = (state) => {
        return({
            user : state.userReducer
        })
    }
    
    export default connect(mapStateToProps)(Order4);

