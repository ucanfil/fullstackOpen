const errorStyle = {
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
}

const defaultStyle = {
    ...errorStyle,
    color: "green"
}

const Notification = ({ message, error }) => {
    if (message === null) {
        return null;
    }

    return (
        <div style={error ? errorStyle : defaultStyle} >
            {message}
        </div>
    )
}

export default Notification;
