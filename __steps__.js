/***
 * 1) create a post api on the server side
 * 2) send data via post from client side.
 * 3) set fetch method inside the fetch options (second parameter)
 * 4) options will have three things: method, headers, body
 * 5) headers will have 'content-type': 'application/json' inside an object. 
 * 6) don't forget to send data JSON.Stringify to the body
 * 7) On the server side: don't forget to use express.json() middleware
 * 
 * **/ 