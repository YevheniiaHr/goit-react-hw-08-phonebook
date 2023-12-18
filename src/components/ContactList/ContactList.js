import ContactItem from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';
import {
  // selectContacts,
  selectError,
  // selectIsLoading,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
// import { Loader } from 'components/Loader';
import { Message } from 'components/App.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {/* {isLoading && contacts?.length === 0 && <Loader />} */}
      {/* {error && !isLoading && <div>Something went wrong ...</div>} */}
      {!visibleContacts?.length && !error && (
        // !isLoading
        <Message>
          There are no contacts in your phonebook. Please add your first
          contact!
        </Message>
      )}
      <List>
        {visibleContacts.map(({ contacts, id }) => {
          return <ContactItem key={id} {...contacts} />;
        })}
      </List>
    </>
  );
};
