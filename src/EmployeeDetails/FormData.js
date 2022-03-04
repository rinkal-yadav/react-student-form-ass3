import React , { Component } from 'react'

export default class FormData extends Component {
    render(){
        return(
                           
                    <> <div className='flex'>
                            {
                                this.state.display.map((val, index) =>
                                    <div className='info' key={index}>
                                        Name : {val.name} || Department : {val.department} || Rating : {val.rating}

                                    </div>)

                            }
                            
                        </div>

                        <button onClick={this.backbtn} className='form-submit' >Go Back</button></>
           
        )
    }

}
