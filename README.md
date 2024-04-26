# 500 Internal Error from client error 

Throwing an error in the load method in the browser results in a `500 Internal Error`. 

According to https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses the 500 response is used to indicate that an error has occured on the server, which is kind of confusing when the error is thrown on the client.