# The Cord
[The Cord](the-cord.herokuapp.com) is my rendition of the Discord app, a digital distribution platform for building communities for gamers, businesses, and everything inbetween. The Cord allows you to:
  * Log and Sign in securely
  * Create communities through servers
  * Take part in discussions through text channels with real-time messaging
 
## Technologies
  * Javascript
  * React/Redux
  * Ruby on Rails
  * HTML/CSS
  * PostgreSQL
  * AWS

## Features
### User Authentication
Users are able to log and sign in securely
![logging-in](https://giphy.com/gifs/QUM2gUhUienkBK38hG)

### Servers and Channels
Users are able to create servers to start their own community as well as join other servers. Channels serve as topic of conversation in a server. Owners of a server are able to create, edit, and delete channels within their server. 
![adding-server](https://puu.sh/G2VwS/230e252ec5.png)
Most CRUD operations for servers and channels are interfaced using modals. Modals dynamically generate the appropriate operation component. 
```javascript
const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    };
    let component;
    switch(modal) {
        case 'Add Server':
            component = <AddServerFormContainer />;
            break;
        // ...
        default:
            return null;
    };
    return(
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};
```


## Future Features
* Live Chat
* Direct Messaging
* Server and Channel CRUD
