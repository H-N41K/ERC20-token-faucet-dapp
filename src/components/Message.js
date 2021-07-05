import Alert from 'react-bootstrap/Alert'

const Message = ({ balance }) => {
    return (
      <div>
      <Alert variant="info"> Balance of FCT Token : {balance}</Alert>
      </div>
  )
}

export default Message