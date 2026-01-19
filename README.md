# SubTracker

A full-stack subscription tracker built with **Next.js** and **Firebase**.

SubTracker helps users manage and keep track of their recurring subscriptions in one place. Users can create an account, sign in securely, and store their subscription data in the cloud.

The goal of this project was to practice building a full-stack Next.js application with authentication and a real database, while learning how to structure client and server logic cleanly using the Next.js App Router.

The app uses Firebase Authentication for user login and Cloud Firestore for storing subscription data per user.

## Features

* User authentication (sign up / login / logout)
* Add, view, edit, and delete subscriptions
* Cloud data storage using Firestore (per-user data)
* Responsive UI

## Tech Stack

* **Next.js**
* **Firebase Authentication**
* **Cloud Firestore**
* **JavaScript**

## What I Learned

* Implementing authentication using Firebase Auth
* Using Firestore as a cloud database and structuring collections/documents
* Handling user-specific data using Firestore
* Managing authentication state across the app using React Context
* Building CRUD functionality (Create, Read, Update, Delete)
* Structuring an app using the Next.js App Router

## Getting Started

```bash
npm install
```

## Set up environment variables

Create a `.env.local` file in the root and add:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

These values come from your Firebase Console project settings.

## Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

This project was built as part of a course-based learning process to better understand full-stack Next.js patterns, including authentication, CRUD operations, and cloud database integration using Firebase.
