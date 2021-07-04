const questions = [
  { id: '11', name: 'name', required: true, placeholder: 'Event name', label: 'Event Name' },
  { id: '12', name: 'startTime', required: true, label: 'Stars', type: 'datePicker', className: 'row' },
  { id: '13', name: 'endTime', required: true, label: 'Ends', type: 'datePicker', className: 'row', delay: true },
  { id: '17', name: 'location', required: true, placeholder: 'Venue Name', label: 'Venue name' },
  { id: '16', label: 'This is an online event', type: 'checkbox' },
  { id: '18', name: 'location', required: true, placeholder: 'Location Picker', label: 'Venue location', type: 'locationPicker' },
  { id: '20', name: 'description', label: 'Description', placeholder: 'Description', type: 'textarea' },
];

export default questions;
