# Phonebook

<div align='center'>
<img src='https://lh3.googleusercontent.com/pw/ADCreHcw1MCcyUzPoegjnXSRx2U-YrjjmzkwabyscP6F_vUOcModeHRNqH0fyofnF7DT-0b9_WIcg9MJra8krITPN2HuP2POe7O2wgq-IRfZuqVVY8rw-BVig7fFgTm3cByQVFr_sLonvHXCoQAU9spLM1ij=w831-h480-s-no?authuser=3' width=400 />
</div>

Welcome to Phonebook, an open-source web application that simplifies contact management. Phonebook allows users to store contact information, including full names, nicknames, phone numbers, addresses, and photos. Users can add, delete, update, and search for contacts with ease. This project is developed using React for the frontend and Node.js with NestJS for the backend. The client-server communication is powered by GraphQL, and all data is stored in a PostgreSQL database. The server and database are Dockerized for easy deployment and scalability.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Related](#related)

## Overview

Phonebook simplifies contact management, making it easy to store and organize your contacts. Whether you're a personal user or a business, Phonebook can help you manage your contacts efficiently.

### Technology Stack

- **Frontend:** Phonebook's frontend is developed using React, providing a responsive and user-friendly interface.

- **Backend:** The backend is powered by Node.js with NestJS, offering a structured and scalable architecture for managing contact data.

- **Client-Server Communication:** GraphQL is used to facilitate efficient and flexible communication between the client and server.

- **Database:** All contact data is stored in a PostgreSQL database, ensuring data integrity and reliability.

- **Dockerization:** Both the server and database are Dockerized, simplifying deployment and scalability.

### Features

- **Contact Management:** Users can add, delete, update, and search for contacts.
- **Contact Details:** Store full names, nicknames, phone numbers, addresses, and photos for each contact.
- **Efficient Communication:** GraphQL enables efficient and precise data exchange between the client and server.

## Getting Started

To set up Phonebook locally or deploy a similar platform, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/SagiMines/phonebook-server.git
cd phonebook-server
```

2. Install the necessary dependencies.

```bash
npm install
```

3. Configure your environment variables for database connection and other settings using - [Environment Variables Guidence](#environment-variables).

4. Run the application locally for development.

```bash
npm run docker-compose:dev
```

5. Go to the [Phonebook Client Repository](https://github.com/SagiMines/phonebook-client) to continue the installation process.

## Environment Variables

To run this project, you will need to add an `.env` file to the root of the project with the following environment variables included:

**General:**

`PORT` - Your server port number.  
`ORIGIN` - Your client origin route.

**Database connection:**

`DB_HOST` - The host name of your database.  
`DB_PORT` - The port number of your database.  
`DB_USERNAME` - The user name of your database.  
`DB_PASSWORD` - The password of your database.  
`DB_DATABASE` - The type of your database (e.g MySQL, Postgres).

## Usage

Once Phonebook is set up, users can:

- Add new contacts with full name, nickname, phone number, address, and photo.
- Delete, update, or search for specific contacts.
- Efficiently manage their contact list.

## Related

[Phonebook Client Repository](https://github.com/SagiMines/phonebook-client)

Efficiently manage your contacts with Phonebook!
