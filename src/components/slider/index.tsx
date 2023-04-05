import { Offcanvas } from "react-bootstrap";
import { ISliderProps } from "../../ts/interfaces/components/slider/iSliderProps";


const Slider = (props: ISliderProps) => {
    return (
        <Offcanvas show={props.show} onHide={props.handleClose} backdrop='static' placement={props.placement} renderStaticNode>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.header}</Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
                {props.children && props.children}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

Slider.defaultProps = {
    placement: 'end'
}

export default Slider;