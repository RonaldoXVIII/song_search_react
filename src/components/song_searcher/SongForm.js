import React,{useState} from 'react'
import styles from './SongForm.module.css'

const initialForm = {
    artist:'',
    song:'',
}


export const SongForm = ({handleSearch}) => {

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!form.artist || !form.song) {
            alert("Empty Inputs");
            return;
        } else 
        
        handleSearch(form);
        setForm(initialForm);
    }


    return (
        <div>
            <h3>What music do you like?</h3>
            <form className={styles.box_color} onSubmit={handleSubmit}>
                <input 
                className={"form-control"}
                style={{marginBottom:"20px"}}
                type="text" name="artist"
                placeholder="Interpreter's name"
                onChange={handleChange}
                value ={form.artist}
                />


                <input 
                className={"form-control"}
                style={{marginBottom:"20px"}}
                type="text" name="song"
                placeholder="Song name"
                onChange={handleChange}
                value ={form.song}
                />

                <input 
                className={"btn btn-outline-warning"} style={{width:"100%"}}
                type="submit" value ="Search"
                />
            </form>
        </div>
    )
}
