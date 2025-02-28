<%@ page isErrorPage="true" %>
<html>
<head><title>Error</title></head>
<body>
    <h2>Oops! Something went wrong..</h2>
    <p>Error Message: <%= exception.getMessage() %></p>
    <a href="reg.html">Go Back to register</a>
    
    
</body>
</html>
