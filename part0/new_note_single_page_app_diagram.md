sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a new note into the input field

    Note right of browser: User clicks the "Save" button

    Note right of browser: JavaScript intercepts form submission

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves the new note
    server-->>browser: HTTP 201 Created (JSON response)
    deactivate server

    Note right of browser: Browser updates the notes list locally
    Note right of browser: No page reload occurs
