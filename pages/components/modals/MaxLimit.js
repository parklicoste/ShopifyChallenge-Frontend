import {Modal, Button} from 'react-bootstrap'

const MaxLimit = (props) => (
    <Modal show={props.limitError} onHide={props.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Alert!</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                     <div><p className="text-danger">Error! Sorry, You have reached the maximum limit of adding movies to nomination list. Please nominate the list or remove movies from it</p> </div> 
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
            </Modal>
)
export default MaxLimit;