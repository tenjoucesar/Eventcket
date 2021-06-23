// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 1,
    title: ' Event Details',
    update: true,
    className: 'event',
    options: [
      { id: '11', placeholder: 'Event name', label: 'Event Name' },
      { id: '12', placeholder: 'Mon 31 May 2021', label: 'Stars' },
      { id: '13', placeholder: '06:00 PM', label: ' ', gg: '3' },
      { id: '14', placeholder: 'Mon 31 May 2021', label: 'Ends' },
      { id: '15', placeholder: '11:00 PM', label: ' ' },
      { id: '16', label: 'This is an online event', type: 'checkbox' },
      { id: '17', placeholder: 'Phone number', label: 'Venue name' },
      { id: '18', placeholder: '23123112', label: 'Venue postcode / zip' },
      { id: '19', placeholder: '23123112', label: 'Venue country ' },
      { id: '20', label: 'Description', placeholder: 'Description', textarea: true },
    ],
  },
  {
    id: 2,
    title: ' Organizer Details',
    className: 'organizer',
    options: [
      { id: '21', placeholder: 'Name and Surname', label: 'Contact Person' },
      { id: '22', placeholder: 'Company Name', label: 'Company name(not required)' },
      { id: '23', placeholder: 'Location', label: 'Address' },
      { id: '24', placeholder: 'Number', label: 'Phone number' },
      { id: '25', placeholder: 'ID Number', label: 'ID Number' },
      { id: '26', placeholder: 'Lorem Ipsum', label: 'Extra Field' },
    ],
  },
  {
    id: 3,
    title: 'Tickets Details',
    className: 'ticket',
    options: [
      { id: '31', placeholder: 'Ticket Name', label: 'Ticket Name' },
      { id: '32', placeholder: 'Quantity', label: 'Select option...', type: 'select' },
      { id: '33', placeholder: 'e.g. 25$', label: 'Price' },
      { id: '34', label: 'Free event', type: 'checkbox', row: true },
      { id: '35', placeholder: 'Select option...', label: 'Additional Information', type: 'select' },
    ],
  },
];
