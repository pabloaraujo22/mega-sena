export default function Numero(props) {
    return(
        <div style={{
            backgroundColor: "#222",
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            color: "#fff",
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            margin: "1em"
        }}>
            <span>{props.numero}</span>
        </div>
    )
}