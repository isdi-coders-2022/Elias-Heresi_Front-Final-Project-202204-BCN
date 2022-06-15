# Bonanza app: Improve your well-being (Front-end)

## https://bonanza-elias-heresi.netlify.app/

## **Versions**

### V5: About (Current version)

### V4: Pagination

### V3: Entry modification

### V2: Detailed PERMA

- Information about each variable

### V1: Historic

- History page: see summary registry of all past entries. Edit each one.
- Detail page: detailed account of past entries

### V0: Basic PERMA status

- Login user
- Register user
- Entry creation. Optional text detail and image.

## **Future implementations**

### V6: Self learning

- Regression to calculate weight of each variable
- Show which have bigger impact and recommend focus

## **Pages**

### Register user

- RegisterForm

### Login-user

- LoginForm

### Historic

- Filter
- EntryList
  - Entry
- Paginator

### Detail

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

### Edit entry

- EntryForm
  - Sliders
  - Text box
  - Input image

### 404 page

### About

## **Data layer**

### User

- login
- logout

### Diary

- loadCollection
- resetCollection
- deleteEntry
- createEntry

### UI

- loadingOn
- loadingOff
- feedbackOn
- feedbackOff
- resetEntryId
- saveEntryId

### Pagination

- nextPage
- previousPage
- pageNumber
- total number of pages

## **Components**

### CheckLogged

- Check token and serve as a guardian

### ConfirmationModal

- Renderize pop-up

### Edit/Create form

- Renderize required fields
- Submit form
- Modify formData state on changes

### EntryForm

- Render input form, sliders, image input, cancel and submit button
- Receive information to change entry status
- Submit new entry

### EntryDetail

- Render detailed entry information, as well as delete and edit button
- Pass delete action to button
- Pass edit action to button

### EntrySummary

- Render PERMA, well being, safety and commentary status on card
- Render delete and edit button
- Delete entry when click on delete

### Filter

- Render filters
- Modify collection status

### Loading

- Renderize loading modal

### LoginForm

- Render input form and button
- Receive information to change user status
- Submit login form

### NavBar

- Render basic information
- Render links to pages

### Paginator

- Render paginator
- Modify collection status depending on total per page and current page

### PERMA chart

- Renderize 6 variables depending on passed on props

### RegisterForm

- Render input form and button
- Receive information to register status
- Submit register form
