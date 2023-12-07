

import styles from "../Styles/Home.module.css"

export const Card = ({item})=>{
    return(
        <div className={styles.cardWrapper}>
            <div>
                <h1>{item.title}</h1>
            </div>
            <div className={styles.imageWrapper}>
                <div>
                    <img src={item.urlToImage}></img>
                </div>
            </div>
            <div>
                <p>{item.description}</p>
            </div>
            <div>
                <a href={item.url}>Read Full News</a>
            </div>
        </div>
    )
}