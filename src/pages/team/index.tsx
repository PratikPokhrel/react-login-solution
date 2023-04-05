import { useState,useEffect } from "react";
import { Card, Form, Row } from "react-bootstrap"
import { AppButton, Slider, TeamCard } from "@components/index";
import { AppDispatch, RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { getTeamsPaged } from "@store/actions/team";


const Team = () => {
    const dispatch = useDispatch<AppDispatch>();
    const teams = useSelector((store : RootState) => store.team.teams);
    const teamsLoading = useSelector((store : RootState) => store.team.teamsLoading);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        dispatch(getTeamsPaged())
    },[])

    function onSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e)
    }
    return (
        <>
            <Card className='bg-white rounded m-2'>
                <Card.Body>
                    <div className="container-fluid">
                        <h3>Teams</h3>
                        <div className="d-flex align-items-center justify-content-between py-3">
                            <div className="d-flex align-items-center">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    onChange={(e) => setSearchText(e.target.value)}
                                    value={searchText}
                                    aria-label="Search"
                                />
                                <AppButton iconLeft="search" size="small" />
                            </div>
                            <AppButton title="Add new" size="small" iconRight="plus" onClick={handleShow} />
                        </div>
                        <hr />
                        <Row>
                            {
                                teams.filter(e => e.name.toLowerCase().includes(searchText.toLowerCase())).map((item, idx) => {
                                    return (
                                        <div className="col-md-4 col-lg-3 col-xs-12 col-sm-6" key={idx}>
                                            <TeamCard team={item} />
                                        </div>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Card.Body>
            </Card>

            <Slider show={show} header='Add new' handleClose={handleClose}>
                <Form onSubmit={(e) => onSubmitForm(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter email" required />
                    </Form.Group>
                    <AppButton buttonHtmlType="submit" bg="primary" title="Save" />
                </Form>
            </Slider>
        </>
    )
}

export default Team;