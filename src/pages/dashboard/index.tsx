import { useRef, useState, useEffect } from "react";
import { Button, Card, Form, Offcanvas, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/button";
import BarChartEx from "../../components/charts/barChart";
import JointScatterChartEx from "../../components/charts/jointScatterChart";
import LineChartEx from "../../components/charts/lineChart";
import { RootState } from "../../store/store";

const Dashboard = () => {
    const bTs = useSelector((state: RootState) => state.businessTitle.businessTitles);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }


    const _card = (
        <Card className='shadow  rounded' style={{ backgroundColor: "#fff", border: '1px solid #D8D8D8', width: '24rem', }} onClick={handleShow} role='button'>
            <Card.Body>
                <Card.Title>Card Title {windowSize.innerWidth} --{windowSize.innerHeight}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
    return (
        <>
            <Card className='bg-white rounded my-4' style={{ margin: 4 }}  >
                <Card.Body>
                    <div className="container-fluid">
                        <div className='d-flex justify-content-start flex-wrap' style={{ gap: '2rem' }}>
                            <div className='d-flex' >
                                <div className='d-flex flex-column' >
                                    <div className='d-flex justify-content-between flex-wrap' style={{ gap: 18, paddingTop: 4 }}>
                                        <div>{_card}</div>
                                        <div>{_card}</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap' style={{ gap: 18, paddingTop: 16 }}>
                                        <div>{_card}</div>
                                        <div>{_card}</div>
                                    </div>
                                </div>

                            </div>
                            <div className='btns'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='row my-3'>
                            <div className='col-md-4'>
                                <Card className='bg-white rounded my-4 shadow  bg-white rounded' >
                                    <Card.Header as="h5" style={{ background: '#408E91', color: '#f3f3f3' }}>Sales trend</Card.Header>
                                    <Card.Body>
                                        <JointScatterChartEx />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-4'>
                                <Card className='bg-white rounded my-4 shadow  bg-white rounded' >
                                    <Card.Header as="h5" style={{ backgroundColor: '#408E91', color: '#f3f3f3' }}>Top Sales</Card.Header>
                                    <Card.Body>
                                        <BarChartEx />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-md-4'>
                                <Card className='bg-white rounded my-4 shadow  bg-white rounded' >
                                    <Card.Header as="h5" style={{ backgroundColor: '#408E91', color: '#f3f3f3' }}>Monthly report</Card.Header>
                                    <Card.Body>
                                        <LineChartEx />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Offcanvas show={show} onHide={handleClose} backdrop='static' placement='end' renderStaticNode>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Dashboard;