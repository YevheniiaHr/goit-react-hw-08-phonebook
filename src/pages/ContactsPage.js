import { Filter } from '@mui/icons-material';
import { Message, Section, SectionTitle, Title } from 'components/App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import ContactForm from 'components/Form/Form';

const Contacts = () => {
  return (
    <>
      <Section>
        <SectionTitle>Add contact</SectionTitle>
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle>Contacts</SectionTitle>

        <Filter />

        <ContactList />
      </Section>
    </>
  );
};
export default Contacts;
