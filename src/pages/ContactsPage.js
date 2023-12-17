import { Filter } from '@mui/icons-material';
import { Section, SectionTitle } from 'components/App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import ContactForm from 'components/Form/Form';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section>
        <SectionTitle>Add contact</SectionTitle>
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle>Contacts</SectionTitle>

        <Filter />
        {isLoading && !error && <Loader />}

        <ContactList />
      </Section>
    </>
  );
};
export default ContactsPage;
