// All the business details live here. To reuse this site for a real client,
// change the values in this file and the whole website updates.

export const business = {
  name: 'Akshara Academy',
  tagline: 'JEE, NEET and Foundation coaching in Kukatpally',
  phone: '+91 90000 12345',
  whatsapp: '919000012345', // country code + number, no spaces or +
  email: 'admissions@aksharaacademy.in',
  address: '3rd Floor, Sai Plaza, KPHB Phase 1, Kukatpally, Hyderabad 500072',
  mapQuery: 'KPHB Phase 1, Kukatpally, Hyderabad',
  hours: [
    { days: 'Monday to Saturday', time: '7:00 AM to 8:30 PM' },
    { days: 'Sunday', time: '9:00 AM to 1:00 PM (tests only)' },
  ],
}

export const results = [
  { name: 'Sai Charan K.', exam: 'JEE Advanced 2026', rank: 'AIR 412' },
  { name: 'Harika M.', exam: 'NEET 2026', rank: '681 / 720' },
  { name: 'Rohith V.', exam: 'JEE Main 2026', rank: '99.62 %ile' },
  { name: 'Deepthi S.', exam: 'NEET 2026', rank: '664 / 720' },
  { name: 'Aditya P.', exam: 'JEE Main 2026', rank: '99.18 %ile' },
]

export const courses = [
  {
    id: 'jee',
    name: 'IIT-JEE Main and Advanced',
    who: 'Class 11, 12 and droppers',
    duration: '1 or 2 years',
    points: [
      'Physics, Chemistry and Maths from basics to Advanced level',
      'Weekly JEE-pattern tests with all-India style ranking',
      'Doubt sessions every evening, 6 to 8 PM',
    ],
  },
  {
    id: 'neet',
    name: 'NEET (Medical)',
    who: 'Class 11, 12 and droppers',
    duration: '1 or 2 years',
    points: [
      'NCERT line-by-line coverage for Biology',
      'Physics and Chemistry with NEET-level problem practice',
      'Full-length mock test every Sunday',
    ],
  },
  {
    id: 'foundation',
    name: 'Foundation (Class 8 to 10)',
    who: 'Class 8, 9 and 10',
    duration: 'Full academic year',
    points: [
      'Strong school basics in Maths and Science',
      'Olympiad and NTSE preparation',
      'Monthly report card shared with parents',
    ],
  },
]

export const reasons = [
  {
    title: 'Batches of 30, not 300',
    text: 'Every teacher knows each student by name and follows their weak topics.',
  },
  {
    title: 'A test every week',
    text: 'Sunday tests in the real exam pattern, with marks and rank shared on WhatsApp.',
  },
  {
    title: 'Parents stay in the loop',
    text: 'Attendance alerts, monthly reports and a parent meeting every term.',
  },
  {
    title: 'Study hall till 8:30 PM',
    text: 'A quiet AC study hall with faculty on hand for doubts after class.',
  },
]

export const faculty = [
  { name: 'Dr. Ramesh Varma', subject: 'Physics', years: 18, from: 'Ph.D., Osmania University' },
  { name: 'Lakshmi Prasanna', subject: 'Chemistry', years: 14, from: 'M.Sc., University of Hyderabad' },
  { name: 'Srinivas Reddy', subject: 'Mathematics', years: 16, from: 'M.Tech, NIT Warangal' },
  { name: 'Dr. Kavya Rao', subject: 'Biology', years: 11, from: 'M.Sc., Ph.D., Botany' },
]

export const testimonials = [
  {
    quote: 'The Sunday tests showed me exactly where I was losing marks. By January I had stopped making the same mistakes.',
    name: 'Sai Charan K.',
    role: 'JEE Advanced 2026, AIR 412',
  },
  {
    quote: 'We got a message every time she missed a class and a report every month. As parents we always knew where she stood.',
    name: 'Mrs. Padmaja M.',
    role: 'Parent of a NEET 2026 student',
  },
  {
    quote: 'Small batch, so I could ask doubts without feeling shy. The evening doubt hour helped me the most.',
    name: 'Deepthi S.',
    role: 'NEET 2026, 664 / 720',
  },
]

export const batches = [
  { course: 'JEE 2-year (Class 11)', starts: '2 June 2027', timing: '4:30 PM to 8:00 PM', seats: '30 seats' },
  { course: 'NEET 2-year (Class 11)', starts: '2 June 2027', timing: '4:30 PM to 8:00 PM', seats: '30 seats' },
  { course: 'Long-term (droppers)', starts: '15 May 2027', timing: '9:00 AM to 3:00 PM', seats: '25 seats' },
  { course: 'Foundation (Class 8 to 10)', starts: '1 April 2027', timing: '5:00 PM to 7:00 PM', seats: '30 seats' },
]
