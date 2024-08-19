import styles from "./projectList.module.css"

export const ProjectList = ({projects}) => {
  return (
    <div className={styles.projects}>
        {projects.map((item, i) => <img key={i} src={item.img} alt={item.category} className="img-item"/>)}
    </div>
  )
}
