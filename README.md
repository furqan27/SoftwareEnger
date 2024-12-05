## Features
- **Frontend**:
  - Responsive booking form.
  - Sections for About Us, Our Services, and Contact Us.

- **Backend**:
  - Node.js API for booking submissions.
  - MySQL integration for secure data storage.
  - Email notifications via `nodemailer`.

- **Database**:
  - Table `bookingsTable` with fields: `name`, `email`, `phoneNumber`, `address`, `date`, `time`, `service`.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript.
- **Backend**: Node.js, Express.js.
- **Database**: MySQL.
- **Email Service**: Nodemailer.

---

## Setup Instructions
1. Install [Node.js](https://nodejs.org) and MySQL.
2. Clone the repository.
3. Install dependencies:
   ```bash
   npm install

11/17 Naomi
1. Initial Commit
2. Meeting w/ Kenzo. Notes below.
   * height of footer needs reduced
   * second page can use a return-to-previous-page option
   * summary of company/services may be added to the front page

11/22 Kenzo
1. Update
2. Notes:
  * Height of footer reduced to a smaller size
  * second page now has a return-to-previous-page option. However whenever you choose to return to the homepage, it just directs you to the index again. So you're basically 
     not returning to the previous page but forwarded again to the homepage
  * summary of company/services were added to the front page along with bg images
3. Recommendations
  * Since the "Our Services" section was added, we maybe could add more info around each service
  * Since the "contact us" section was also added, we might need to add a form for the user to contact us
  * Smoother transitions between each section of the website could be good, as well as more info in the about us section too

11/29 Naomi

* Resolved bugs related to background images
* Deleted duplicate css code from the two html files
* Updated the header, navigation bar, and texts in different sections on the home page
* Updated the header and form container in the booking form
* Made styling (font, size, colors, etc) consistent in the two html files
* Commented the code in the three frontend files
* The website and the booking form are now functional and professional-looking.
<img width="1468" alt="website1" src="https://github.com/user-attachments/assets/689f7b88-0ba2-4332-8ce1-62e246680675">

<img width="1470" alt="website2" src="https://github.com/user-attachments/assets/296adabf-2c87-4791-ac08-bfc4e79f2db3">

12/2 Connor
1. Initial commit of Backend code
 * Needs ability to get user input from front end
 * If you're looking to run this on your own, insert user credentials for MySQL in database.js

12/3 Furqan Fazil
* Configured backend to handle form submissions via a `/book' API endpoint.
- Integrated database connection with MySQL2.
- Implemented nodemailer to send confirmation emails to users.
- Updated frontend to dynamically post form data to the backend.

12/4 Talha
* Reviewed frontend and backend integration.
* Improved animations and transitions between sections.
* Conducted testing of the booking API and frontend.

12/4 Oumar
* create and finalized the project documentation


configure MySQL in index.js: 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'bookings'
});

Accepts JSON payload with booking details: {
    "name": "Furqan Fazil",
    "email": "FurqanFaz@example.com",
    "phoneNumber": "1234567890",
    "address": "133 Example St",
    "date": "2024-12-10",
    "time": "14:00",
    "service": "Drivway cleaning"
}
<<<<<<< HEAD
12/5 Connor
*Attempted to finalize code, unfortunately still having errors with picking up the data from the front end. 
=======
>>>>>>> aa193b269fc02dcf02ec6baee44536c164238efa
