const ServiceMixin = {
  data: () => ({
    servicesTypes: [
      { value: 1, text: 'Cabelo' },
      { value: 2, text: 'Barba' },
      { value: 3, text: 'Combo' }
    ],
    durationTimes: [
      { value: '00:15:00', text: '00:15' },
      { value: '00:30:00', text: '00:30' },
      { value: '00:45:00', text: '00:45' },
      { value: '01:00:00', text: '01:00' },
      { value: '01:15:00', text: '01:15' },
      { value: '01:30:00', text: '01:30' },
      { value: '01:45:00', text: '01:45' },
      { value: '02:00:00', text: '02:00' },
      { value: '02:15:00', text: '02:15' },
      { value: '02:30:00', text: '02:30' },
      { value: '02:45:00', text: '02:45' },
      { value: '03:00:00', text: '03:00' }
    ]
  })
}

export default ServiceMixin