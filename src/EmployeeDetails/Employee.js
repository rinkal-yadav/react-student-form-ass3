import React, { Component } from 'react'
import FormData from './FormData'

export default class Employee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: '',
        department: '',
        rating: '',
        header: " EMPLOYEE FEEDBACK FORM ",
        display: [],
        toggle: false
         
      }
    }
    

    updateChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    submited = (e) => {
        e.preventDefault();

        const tempObj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        const tempArr = this.state.display
        tempArr.push(tempObj)
        this.setState({ display: tempArr })

        this.setState({
            header: "EMPLOYEE FEEDBACK DATA",
            toggle: true
        })


    }

    backbtn = () => {
        this.setState({
            name: '',
            department: '',
            rating: '',
            header: "EMPLOYEE FEEDBACK FORM",
            toggle: false
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1> <br/>

                { 
                    this.state.toggle ? 
                    <> <FormData Data={this.state.display}/>
                    <button onClick={this.backbtn} className='form-submit' >Go Back</button> </>

                        :

                        <form action="" onSubmit={this.submited} >
                            <div>
                                <label user="name" className='form-label'>Name : </label>
                                <input required type="text" className='form-input' name="name" id="name" value={this.state.name} onChange={this.updateChange} />  <br /><br />
                                <label user="name" className='form-label'>Department : </label>
                                <input required type="text" className='form-input' name="department" id="department" value={this.state.department} onChange={this.updateChange} />    <br /><br />
                                <label user="name" className='form-label'>Rating : </label>
                                <input required type="number" className='form-input' name="rating" id="rating" min={1} max={10} value={this.state.rating} onChange={this.updateChange} />   <br /><br />
                            </div>
                            <button type="submit" className='form-submit' > Submit </button>
                        </form>



                }




            </div>
        )
    }
}
