import React from "react"; 

class Note extends React.Component {
    render() {
        return(
           <div className="note">
               <h1>{this.props.title}</h1>
               <p>{this.props.content}</p>
           </div>
        );

    }
}

export default Note;