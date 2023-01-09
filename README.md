# NoteTaker

## Description

This application is an online solution to keeping track of notes.  Notes must be given a title and body and once submitted, either through the webpage or through insomnia directly through a POST request, will be saved into a database.  Notes can also be deleted with a delete request or through the deployed webpage.

## Usage

To use this application, either deploy the application from the command line using insomnia or open up the webpage once the program is running.  

```
Insomnia Instructions
First connect to the port the application is hosted on in Insomnia, in this case the port is 3001.  Once you are connected, you can send GET, POST, and DELETE requests to the server to view, update, or delete information from the database.  For GET requests, the "/notes" parameter will take you to the notes homepage that displays all the notes.  Any other parameter in the url will redirect you to the homepage.  The GET request for "/api/notes" will return the json file containing all the currently stored notes, while a POST request to this url with a title and text in the body will add new notes to the database.  a DELETE request with the id of the note you would like to delete will permenantly delete the note from the database
```

```
Webpage Instructions
Once you open the webpage, click the 'notes' button and you will be directed to the notes homepage that displays all notes and allows you to enter your own.  Previously saved notes will appear in a column on the left of the page.  In the center of the page, there will be an area for you to type the title and text of your note.  Once you create a title and body, a save button will appear in the top right corner of the page.  Clicking the button will add the note to the database.  To delete a note from the live website, click the trash can button that appears next to the note.  The Test Title note cannot be deleted.  
```

## Demo

Here is a link to the demo of the [application](./Demo/demo.webm).

## Credits

Helper functions from class material were used in the fsUtils.js file.

## License

This application is licensed under the MIT license.
