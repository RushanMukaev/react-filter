import styles from "./toolbar.module.css"

export const Toolbar = ({filters, onSelectFilter, selected}) => {
    const focusFilter = () => {
        
    }

    return (
        <div className={styles["toolbar"]}>
            {filters.map((it, i) => (<button key={i} onClick={onSelectFilter}>{it}</button>))}
        </div>
    )
    
}


