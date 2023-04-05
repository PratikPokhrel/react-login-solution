import React, { FC } from "react";
import { Card, Form } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AppButton, Confirmation, Slider } from "@components/index";
import Icons from "@components/icons";
import UseBusinessTitle from "./hooks/useBusinessTitle";

const BusinessTitle = () => {
    const {
        show, handleShow, handleClose,
        editableItem, setEditableItem,
        bts, btsLoading,
        creteBusinessTitleLoading,
        categories, categoriesLoading,
        onAddClick, onSubmitForm,
        businessTitle, setBusinessTitle,
        showConfirmation, setShowConfirmation, onShowDeleteConfirmation, onConfirmDelete
    } = UseBusinessTitle();


    const Section = ({ items, itemsLoading, sectionTitle, addTitle, displayKey, onAddClick }: { items: any[], itemsLoading: boolean, sectionTitle: string, addTitle: string, displayKey: string, onAddClick?: Function }) => {
        return (
            <>
                <div className="d-flex align-items-center justify-content-between">
                    <h5>{sectionTitle}</h5>
                    <AppButton bg="primary" title={addTitle} iconRight='plus' size="small" onClick={() => onAddClick && onAddClick()} />
                </div>

                <hr />

                <Card className='bg-white shadow rounded my-4 px-2' style={{ minHeight: '8rem' }}  >
                    <div className="d-flex flex-wrap align-items-center justify-content-start" style={{ gap: '0.5rem' }}>
                        {
                            itemsLoading ? <h3>Loading ...</h3> : items.map((b: any, idx: number) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <Box item={b} displayKey={displayKey} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </Card>
            </>
        )
    }

    const Box: FC<{ item: any, displayKey: string }> = ({ item, displayKey }) => (
        <div className="bt-box my-2 shadow">
            <div className="d-flex justify-content-between align-items-center">
                {
                    editableItem && editableItem.id === item.id ?
                        <input className="form-control" type='text' value={editableItem[displayKey]} /> : <span className="fw-normal">{item[displayKey]}</span>
                }
                <span className="card-icon" onClick={handleShow}>
                    <Icons name="edit" color="#3C84AB" />
                </span>
                <span className="card-icon" onClick={() => onShowDeleteConfirmation(item)}>
                    <Icons name="trash" color="#B3005E" />
                </span>
            </div>
        </div>
    )


    return (
        <>
            <Breadcrumb className="my-2 mx-2">
                <Breadcrumb.Item href="#" className="text-decoration-none">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" className="text-decoration-none">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>

            <Card className='bg-white rounded m-2'>
                <Card.Body>
                    <div className="px-1">
                        <Section items={bts? bts :[]} itemsLoading={btsLoading} sectionTitle="Business titles" onAddClick={() => onAddClick('bt')} addTitle="Add new" displayKey="name" />
                        <Section items={categories ? categories : []} itemsLoading={categoriesLoading} sectionTitle="categories" onAddClick={() => onAddClick('cat')} addTitle="Add new" displayKey="categoryName" />
                    </div>
                </Card.Body>
            </Card>

            <Slider show={show} header='Add new' handleClose={handleClose} >
                <Form onSubmit={(e) => onSubmitForm(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title name</Form.Label>
                        <Form.Control type="text" value={businessTitle.name} name='name' onChange={(e) => { setBusinessTitle({ ...businessTitle, [e.target.name]: e.target.value }) }} placeholder="Enter title" required />
                    </Form.Group>

                    <AppButton buttonHtmlType="submit" bg="primary" title="Save" loading={creteBusinessTitleLoading} />
                </Form>
            </Slider>

            <Confirmation showModal={showConfirmation} hideModal={() => setShowConfirmation(false)} message="Are you sure you want to delete this?" confirmModal={onConfirmDelete} />
        </>
    )
}

export default BusinessTitle;