import  React from 'react'
class FlavorForm extends React.Component {
    state = {
        value: ' ',
        name:'',
        review:'',
        listReview:[],
        submitValue:false
    };



    handleSubmit = (event)=> {
        event.preventDefault()
        if(this.state.value && this.state.name && this.state.review){
            this.setState((preCurrent)=>({
                listReview: preCurrent.listReview.concat([this.state.name,this.state.review,this.state.value])
            }))
            this.setState(({
                value:'',
                name:'',
                review:'',
                submitValue:false
            }))

        }else {
            this.setState(({
                submitValue:true
            }))
        }

    }

    handleChange = (event)=> {
        this.setState({value: event.target.value});
    }

    handleInput = (event)=>{

        if(event.target.name === 'name'){
            this.setState(({
                name:event.target.value
            }))
        }
        if(event.target.name === 'review') {
            this.setState(({
                review:event.target.value
            }))
        }

    }

    render() {
        console.log(this.state.listReview)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <span>Name:</span>
                    <input type="text" name='name' value={this.state.name} onChange={this.handleInput}/>
                    <span>Review:</span>
                    <input type="text" name='review' value={this.state.review} onChange={this.handleInput}/>
                    <label>
                        Rating:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>

                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.submitValue&& <div>
                    {this.state.name === ""&&<li>Name required</li>}
                    {this.state.review === ""&&<li>review required</li>}
                    {this.state.value === ""&&<li>option rquired</li>}
                </div>}

                <ul>
                    {this.state.listReview.length >0 && <div>
                        <h3>List:</h3>
                    </div>}
                    {this.state.listReview&&this.state.listReview.map((item,index)=>(
                            <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default  FlavorForm