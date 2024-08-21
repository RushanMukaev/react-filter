import styles from "./toolbar.module.css"

export const Toolbar = ({filters, onSelectFilter, selected}) => {
    return (
        <div className={styles["toolbar"]}>
            {filters.map((it, i) => (
                <button 
                key={i}
                className={it === selected ? "active" : ""}
                onClick={onSelectFilter}>{it}</button>
            ))}
        </div>
    )
    
}


