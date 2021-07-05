const questions = [
  { id: '11', name: 'name', required: true, placeholder: 'Event name', label: 'Event Name' },
  { id: '12', name: 'startTime', required: true, label: 'Starts', type: 'datePicker', className: 'row' },
  { id: '13', name: 'endTime', required: true, label: 'Ends', type: 'datePicker', className: 'row', delay: true },
  { id: '17', name: 'location', required: true, placeholder: 'Phone number', required: false, label: 'Venue name' },
  { id: '16', label: 'This is an online event', type: 'checkbox' },
  { id: '18', placeholder: '23123112', label: 'Venue postcode / zip' },
  { id: '19', placeholder: '23123112', label: 'Venue country ' },
  { id: '20', name: 'description', label: 'Description', placeholder: 'Description', type: 'textarea' },
];

export default questions;
