import styles from "./toolbar.module.css"

export const Toolbar = ({filters, onSelectFilter, selected}) => {
  function focus(e) {
    onSelectFilter(e)
    if(document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active")
    }
    e.target.classList.add("active")
    console.log(selected)
  }
  

    return (
        <div className={styles["toolbar"]}>
            {filters.map((it, i) => (
                <button 
                key={i} 
                onClick={focus}>{it}</button>
            ))}
        </div>
    )
    
}


