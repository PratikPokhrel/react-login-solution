import { useEffect, useRef, useState } from "react";
import { getCategories } from "@store/actions/category";
import btActions from "@store/actions/business-title";
import { AppDispatch, RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

const UseBusinessTitle = () => {

    const bts = useSelector((state: RootState) => state.businessTitle.businessTitles);
    const btsLoading = useSelector((state: RootState) => state.businessTitle.businessTitlesLoading);
    const creteBusinessTitleLoading = useSelector((state: RootState) => state.businessTitle.creteBusinessTitleLoading);
    const categories = useSelector((state: RootState) => state.category.categories);
    const categoriesLoading = useSelector((state: RootState) => state.category.categoriesLoading);
    const dispatch = useDispatch<AppDispatch>();

    const [editableItem, setEditableItem] = useState<any>();
    const [businessTitle, setBusinessTitle] = useState({ id: null, name: '', isActive: true, color: '#ffe74c' });

    const [show, setShow] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [btToDelete, setBtToDelete] = useState<any>(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const effectRef = useRef(false);

    useEffect(() => {
        dispatch(btActions.getBusinessTitle());
        dispatch(getCategories());
    }, []);

    const onAddClick = (sectionName: string) =>  handleShow();
    

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(btActions.createBusinessTitle({
            bt: businessTitle, callBack: () => {
                handleClose();
                setBusinessTitle({ id: null, name: '', isActive: true, color: '#ffe74c' })
            }
        }));
    }

    const onShowDeleteConfirmation = (bt: any) => {
        setBtToDelete(bt);
        setShowConfirmation(true);
    }

    const onConfirmDelete = () => {
        dispatch(btActions.deleteBusinessTitle({bt: btToDelete, callBack: () => {setBtToDelete(null);setShowConfirmation(false);}}))
    }


    return {
        show, handleShow, handleClose,
        editableItem, setEditableItem,
        bts, btsLoading,
        creteBusinessTitleLoading,
        categories, categoriesLoading,
        onAddClick, onSubmitForm,
        businessTitle, setBusinessTitle,
        showConfirmation, setShowConfirmation, onShowDeleteConfirmation,onConfirmDelete
    }
}

export default UseBusinessTitle;