```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: "201 created"
    deactivate server
    
    Note right of browser: Creating the new note and update the page on server side.
```
