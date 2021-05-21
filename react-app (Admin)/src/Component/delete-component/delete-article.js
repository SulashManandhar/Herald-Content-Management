import React, { Component } from 'react'
import axios from 'axios';
import style from '../../stylesheet/delete-video.module.css';

export default class DeleteArticle extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            length:0,
            flag:0,
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/event-and-article')
        .then(res=>{
            this.setState({
                data:res.data
            })
            {console.log("Data number "+this.state.data.length)}
        })
    }

    getId=event=>{
        this.setState({
            flag:event.target.value
        })
        // console.log(this.state.flag)
    }
    
deleteData=event=>{
    event.preventDefault();
    console.log(this.state.flag)
    console.log('http://localhost:5000/event-and-article/id='+this.state.flag)
    axios.delete('http://localhost:5000/event-and-article/'+this.state.flag,)
    .then(res=>{
        console.log(res);
        console.log("Successfully deleted data.")
    })
    .catch(res=>{
        console.log(res)
    })
    event.target.reset();
    alert("Successfully delete the data");
    //window.location.reload();
}
    render() {
        return (
            <div>
            <div className={style.contain}>
                <h1>Delete Post</h1>
                <hr/><br/>
                <span>Press delete button to delete a post</span>
            </div>
             <table className={style.table}>
                 <tr className={style.title}>
                    
                     <td className={style.id}>Id</td>
                     <td className={style.image}>Title</td>
                     <td>Type</td>

                 </tr>
                {this.state.data.map(item=>(
                    <tr>
                        <td className="id" id={item.id}>{item.id}</td>
                        <td >{item.title}</td>
                        <td>{item.type}</td> 
                          
                    </tr>
                ))}

                
             </table>
             <form className={style.btnContainer} onSubmit={this.deleteData} >
                <input type="text" id="idValue" onInput={this.getId} placeholder={this.state.data.length} min="1" max={this.state.data.length}  className={style.input}/>
                <input type="submit" className={style.myBtn} value="Delete"/>
             </form>    
        </div>
        )
    }
}
