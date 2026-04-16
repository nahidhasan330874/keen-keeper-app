##### KeenKeeper — Keep Your Friendships Alive

##  Project Overview

**KeenKeeper** is a modern friendship management web app that helps you stay connected with your friends. It allows you to track interactions, set communication goals, and visualize your relationship activity through an intuitive and responsive UI.

## Live Features

### Navigation

* Clean and responsive Navbar with logo and navigation links (Home, Timeline, Stats)
* Active route highlighting for better UX
* Icons included with each menu item

### Home Page

* Eye-catching banner with title, subtitle, and CTA button
* Summary cards for quick insights
* Friends displayed in a responsive 4-column grid
* Each friend card shows:

  * Profile image
  * Name
  * Days since last contact
  * Tags
  * Status (overdue / almost due / on-track)

### Friend Details Page

## Left Section:

* Profile info (image, name, email, bio, tags)
* Status with dynamic color
* Action buttons:

  * Snooze 2 Weeks
  * Archive
  * Delete

## Right Section:

* Stats Cards (Days since contact, Goal, Next due date)
* Relationship Goal section (with Edit option)
* Quick Check-In:

  *  Call
  *  Text
  *  Video
    → Clicking adds a timeline entry + shows toast notification

## Timeline Page

* Displays all interaction history
* Each entry includes:

  * Date
  * Icon (Call/Text/Video)
  * Title (e.g., "Call with Alex")
*  Filter by interaction type (Call, Text, Video)

###  Stats Page (Analytics)

* Friendship Analytics dashboard
* Pie Chart (using Recharts)

  * Shows distribution of Call / Text / Video interactions

### Footer

* Clean and minimal footer following design


##  Technologies Used

* **Next.js / React.js** → Frontend framework
* **App Router (Next.js)** → Routing & navigation
* **Tailwind CSS** → Styling and responsiveness
* **React Icons** → Icons
* **Recharts** → Data visualization (Pie chart)
* **React Toastify** → Toast notifications
* **JSON (Local Data)** → Friend data storage

## Key Features

1. **Smart Friendship Tracking**

   * Automatically logs interactions (Call, Text, Video)
   * Tracks last contact and goals

2. **Interactive Timeline**

   * View all communication history
   * Filter interactions easily

3. **Visual Analytics**

   * Pie chart showing communication patterns
   * Helps understand relationship habits


## Additional Functionalities

* 404 Page for invalid routes
* Loading animation while fetching data
* Toast notifications for interactions
* Persistent data handling (no reload errors)
* Fully responsive design (mobile, tablet, desktop)

## Project Structure (Simplified)

```
/app
  /homepage
  /timeline
  /stats
  /friend/[id]
/components
/context
/data (friends.json)
/public
```

## Optional Enhancements (Future Ideas)

* Sort timeline (Newest → Oldest)
* Search by friend name or interaction type
* Authentication system
* Cloud database integration



## Author

**Nahid Hasan**


