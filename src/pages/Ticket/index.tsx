import styles  from "./styles.module.sass"

export function Ticket () {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.limit}>
                        <div className={styles.boxTicket}>
                            <h2>@</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
