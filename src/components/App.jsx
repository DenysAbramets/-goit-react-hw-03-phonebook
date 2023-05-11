import React, { Component } from 'react';
import Form from './Contacts/Form/Form';
import Filter from './Contacts/Filter/Filter';
import ListContacts from './Contacts/ListContacts/ListContacts';
import { Title, Container, Caption } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem('contacts');
    if (data) {
      this.setState({ contacts: JSON.parse(data) });
    }
  }

  componentDidUpdate(prevPrors, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  onSubmit = data =>
    this.setState(prevState => {
      const contacts = prevState.contacts;
      if (contacts.find(({ name }) => name === data.name)) {
        return alert(`${data.name} is already in contacts`);
      }
      return { contacts: [data, ...contacts] };
    });

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return contacts.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  removeContact = e => {
    const { contacts } = this.state;
    const idx = contacts.findIndex(
      contact => contact.id === e.target.dataset.id
    );
    contacts.splice(idx, 1);
    this.setState({ contacts: contacts });
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <Form onSubmit={this.onSubmit} />
        <Container>
          <Caption>Contacts</Caption>
          <Filter
            value={this.state.filter}
            onChange={this.handleChangeFilter}
          />
          <ListContacts
            contacts={this.filteredContacts()}
            onRemove={this.removeContact}
          />
        </Container>
      </>
    );
  }
}
