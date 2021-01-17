import {Modal, Button} from 'react-bootstrap'

const SearchError = (props) => (
<Modal show={props.showError} onHide={props.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Alert!</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                     <div><p className="text-danger">Error! Sorry, this search does not exist please try searching with information. if you dont wish to search then press close or cancel</p> </div> 
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
            </Modal>)
export default SearchError;
