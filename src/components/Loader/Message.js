import React from 'react'
import styles from './Message.module.css'
export const Message = ({msg,bgColor}) => {

    



    return (
        <div className={styles.styleMessage} style={{backgroundColor:bgColor}}>
            <p dangerouslySetInnerHTML = {{__html:msg}}/>
        </div>
    )
}
