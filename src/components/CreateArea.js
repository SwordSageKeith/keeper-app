import React from "react";

function CreateArea(props) {
    function handleSubmit(event){
        console.log(event.target);
        event.preventDefault();
        props.createNote(event.target.title.value, event.target.content.value);
         event.target.title.value = "";
         event.target.content.value = "";
    }

    return (<div>
        <form onSubmit={handleSubmit} className="create-note">
            <input name="title" placeholder="Title" />
            <textarea name="content" placeholder="Take a note..." rows="3"/>
            <button type="submit">Add</button>
        </form>
    </div>);
}

export default CreateArea;