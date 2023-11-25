function MessageComponent({showMessage}) {
    return (
        <div>
            {showMessage && <p>This message is conditionaly  rendered !</p>}
        </div>
    );
}

export default MessageComponent;