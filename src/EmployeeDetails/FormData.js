import React , { Component } from 'react'

export default class FormData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Data:this.props.Data
      }
    }
    render(){

        return(
                           
                    <>
                       { console.log(this.state.Data) }

                     <div className='flex'>
                            {
                                this.state.Data.map((val, index) =>
                                    <div className='info' key={index}>
                                        Name : {val.name} || Department : {val.department} || Rating : {val.rating}

                                    </div>)

                            }
                            
                        </div>

                        

                        </>
           
        )
    }

}
