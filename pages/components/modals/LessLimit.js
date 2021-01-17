import {Modal, Button} from 'react-bootstrap'

const LessLimit = (props) => (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
                <Modal.Title>Alert!</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            { props.limit != 5 ?
                     <div><p className="text-danger">Error! Sorry, this operation is not permitted until there are 5 movies to nominate. if you dont wish to nominate then press close or cancel</p> </div> : 
                     <div><p className="text">Are you sure you want to nominate these movies</p> </div>}

        </Modal.Body>
        <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                      Close
                    </Button>
                    { props.limit != 5 ? <div></div> :
                    <Button variant="primary" type="submit" onClick={(e)=>{props.submit(e)}}>
                      Submit
                    </Button>}
            </Modal.Footer>
        </Modal>
)
export default LessLimit;