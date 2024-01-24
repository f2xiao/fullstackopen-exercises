```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: resource created successfully message
    deactivate server

    Note left of server: The server successfully creates a resource sent from the browser 
```

