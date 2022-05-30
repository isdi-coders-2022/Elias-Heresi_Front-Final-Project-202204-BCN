# Bonanza app: Improve your well-being (Front-end)

## **MVP versions**

### V0: Basic PERMA status

- Login user
- Register user
- Entry creation. Optional text detail and image.

### V1: Historic

- History page: see summary registry of past entries. Edit each one.
- Detail page: detailed account of past entries

### V2: Detailed PERMA

- Information about each variable

### V3: Entry modification

### V4: Pagination

## **Nice to have versions**

### V5: About

### V6: Self learning

- Regression to calculate weight of each variable
- Show which have bigger impact and recommend focus

## **Pages**

### Register user

- RegisterForm

### Login-user

- LoginForm

### Landing page

- Landing
- Navigation cards

### Entry list page

- Filter
- EntryList
  - Entry
- Paginator

### Detailed entry

- DetailedEntry
  - PERMA chart
  - PERMA table
  - Status bar
  - Image

### Create entry

- EntryForm
  - Sliders
  - Text box
  - Input image

### 404 page

### About

### Well being analysis

- EntryCharts

## **Data layer**

### User

- register
- login
- triggers

### Diary

- newEntry
- collection
- perPage
- currentPage

### UI

- loading
- modal

## **Components**

### RegisterForm

- Render input form and button
- Receive information to register status
- Submit register form

### LoginForm

- Render input form and button
- Receive information to change user status
- Submit login form

### EntryForm

- Render input form, sliders, image input, cancel and submit button
- Receive information to change entry status
- Submit new entry

### Entry

- Render PERMA, well being, safety and commentary status on card
- Render delete and edit button
- Delete entry when click on delete

### EntryList

- Render all entries in collection

### Filter

- Render filters
- Modify collection status

### Paginator

- Render paginator
- Modify collection status depending on total per page and current page

### Landing

- Render landing infromation

### DetailedEntry

- Render detailed entry information, as well as delete and edit button
- Pass delete action to button
- Pass edit action to button

### Header

- Render basic information
- Render links to pages

### Footer

- Render basic information
- Render links to pages

### EntryCharts

- Render charts depending on user insights
