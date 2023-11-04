const MyMessage = ({message}) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className="message-image"
                style={{float: 'right'}}
            />
        )
    }
    return (
        <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#7554a0'}}>
            {message.text}
        </div>
    )
}

//#3B2A50

export default MyMessage;