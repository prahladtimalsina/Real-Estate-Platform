
# Phase 1 - Definition and Planning

## Project Description
This project is a **Real Estate Platform** designed to help users find, list, and save properties for rent or purchase. It allows home buyers, renters, and property owners to interact seamlessly. The platform supports property searches with filters, saved listings, and real-time communication through chat.

The system is built using **Prisma ORM with MongoDB** for efficient database management, along with **Node.js (Express) for the backend and React (Vite) for the frontend**.


# 1. User Personas for Real Estate Platform

## Home Buyer / Renter  

**Name:** Emma Johnson  
**Age:** 28  
**Occupation:** Marketing Manager  

### Goal:  
- Find a suitable apartment or house to rent or buy within her budget.  
- Compare properties by price, size, and location.  

### Pain Points:  
- Difficulty finding verified property listings with accurate details.  
- Frustrated by platforms that don’t provide enough filter options or detailed descriptions.  
- Wants a streamlined way to contact property owners directly.  

### How She Uses the Platform:  
- Searches for properties using filters such as price, location, type (rent or buy), and number of bedrooms.  
- Views property details, including images and descriptions.  
- Saves interesting properties for future review.  
- Contacts property owners through chat to ask questions or schedule viewings.  

---

##  Property Owner / Seller  

**Name:** David Lee  
**Age:** 40  
**Occupation:** Real Estate Agent / Property Owner  

### Goal:  
- Post properties for rent or sale to attract potential buyers or renters.  
- Respond to inquiries from interested users about properties.  

### Pain Points:  
- Needs a better way to manage multiple inquiries for the same property.  
- Struggles with platforms that don’t provide enough exposure for property listings.  
- Wants a secure and efficient way to communicate with potential buyers/renters.  

### How He Uses the Platform:  
- Creates and posts property listings with titles, prices, descriptions, and images.  
- Responds to inquiries sent via chat messages.  
- Monitors which properties have been saved by users.  
- Manages property details and updates them if needed.  

---

## Casual User / Visitor  

**Name:** Olivia Brown  
**Age:** 23  
**Occupation:** Graduate Student  

### Goal:  
- Browse properties to get an idea of prices and areas.  
- Save listings for future reference when ready to move.  

### Pain Points:  
- Doesn’t need to make an immediate decision but wants to keep track of interesting properties.  
- Gets overwhelmed by too many listings and wants a better way to filter results.  
- Needs an easy way to save properties without feeling pressured to contact owners.  

### How She Uses the Platform:  
- Browses property listings casually using filters to explore various options.  
- Saves favorite properties to revisit when ready to make a decision.  
- Does not interact with property owners directly unless necessary.  


## 2. Use Cases and Usage Scenarios

### Use Cases

#### Use Case 1: Searching for Properties
- **Actor:** Home Buyer / Renter
- **Goal:** Search for available properties based on location, price, and type.
- **Steps:**
  1. The user logs in or continues as a guest.
  2. The user enters search filters such as location, price, and property type.
  3. The system displays a list of properties matching the search criteria.
  4. The user selects a property to view more details.

#### Use Case 2: Saving a Property
- **Actor:** Casual User / Visitor
- **Goal:** Save a property for future reference.
- **Steps:**
  1. The user browses property listings.
  2. The user clicks on a property to view its details.
  3. The user clicks the "Save" button to save the property for later review.

### Usage Scenarios

#### Scenario 1: Emma (Home Buyer / Renter) is looking for a two-bedroom apartment in the city center under $2000/month.
- She uses the filter options to narrow her search, views properties, saves a few options, and contacts property owners for more information.

#### Scenario 2: David (Property Owner / Seller) wants to list his newly available apartment for rent.
- He logs into the platform, creates a new post with images and a detailed description, and submits the post for listing.

---

## 3. UI Prototypes

**Key Pages to Prototype:**
1. **Home Page:** Search for properties, featured listings, and navigation.
2. **Search Results Page:** Display filtered search results.
3. **Property Detail Page:** Show images, descriptions, prices, and contact options.
4. **Saved Listings Page:** View saved properties.
5. **User Profile Page:** Manage user details, saved posts, and messages.

**Tools for UI Prototypes:**
- **Visily ai**

---

## 4. Information Architecture and Technical Design

### Information Architecture (IA)
- **Site Map:**
  - Home
  - Search Results
  - Property Detail
  - Saved Listings
  - User Profile
  - Login/Sign Up

### Technical Design

#### **Back-End:**
- **Database:** MongoDB (using Prisma ORM for schema management)
- **Server:** Node.js with Express (RESTful API) + Prisma ORM
- **Authentication:** JWT for user authentication

#### **Front-End:**
- **Framework:** React
- **Styling:** sass

#### **APIs:** 
-  add later

#### **Additional Features:**
- **Real-time Chat:** WebSockets for instant messaging.
- **Search & Filters:** Optimized MongoDB queries via Prisma.
- **File Uploads:** Cloud storage for property images.

---

## 5. Project Management and User Testing

### **Project Management**
- **Tasks & Milestones:**
  - **Phase 1:** Define User Personas, Use Cases, and UI Prototypes.
  - **Phase 2:** Build Database and Backend API.
  - **Phase 3:** Implement Frontend and UI/UX.
  - **Phase 4:** Testing & Deployment.

- **Tools for Project Management:**
  - **Trello** to manage tasks and deadlines.
  - **GitHub**  for version control.

### **User Testing**
- **Test Scenarios:**
  - Ask a user to complete a task, such as searching for a property or saving a listing.
  - Gather feedback on pain points, ease of use, and performance.

**Types of Testing:**
- **Alpha Testing:** Internal testing by developers.
- **Beta Testing:** Real user feedback before launch.

---

