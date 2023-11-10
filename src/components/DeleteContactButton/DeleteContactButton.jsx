import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const DeleteContactButton = ({ userId }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(deleteContact(userId))}>Delete</button>
  );
};

export default DeleteContactButton;

DeleteContactButton.propTypes = {
  userId: PropTypes.string.isRequired,
};