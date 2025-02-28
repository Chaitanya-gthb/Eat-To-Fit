<%@ page language="java" contentType="text/html; charset=UTF-8" 
    pageEncoding="UTF-8" errorPage="error.jsp" isErrorPage="false" %>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!-- ✅ Include SweetAlert2 -->
</head>
<body>

<%
    String username = request.getParameter("uname");
    String email = request.getParameter("email");
    String password = request.getParameter("password");

    Class.forName("com.mysql.cj.jdbc.Driver");
    Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/eat2fit", "root", "");

    // ✅ Checking if username or email already exists
    PreparedStatement checkUser = con.prepareStatement("SELECT * FROM users WHERE username = ? OR email = ?");
    checkUser.setString(1, username);
    checkUser.setString(2, email);
    ResultSet rs = checkUser.executeQuery();

    if (rs.next()) { // User already exists
    	 out.println("<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>");
    	    out.println("<script>");
    	    out.println("Swal.fire({");
    	    out.println("  title: '❌ Registration Failed!',");
    	    out.println("  html: '<b>Oops! Email or username already exists.</b><br>Please try again.',");
    	    out.println("  icon: 'error',");
    	    out.println("  showConfirmButton: false,"); 
    	    out.println("  timer: 4000,"); // Auto-close after 4 seconds
    	    out.println("  timerProgressBar: true,");
    	    out.println("  backdrop: 'rgba(255, 0, 0, 0.4)'"); // Light red backdrop
    	    out.println("}).then(() => {");
    	    out.println("    window.location.href = 'reg.html';"); // Redirects back to registration
    	    out.println("});");
    	    out.println("</script>"); return; 
    	    }

    // ✅ If user does not exist, insert the new record
    PreparedStatement ps = con.prepareStatement("INSERT INTO users(username, email, password) VALUES (?, ?, ?)");
    ps.setString(1, username);
    ps.setString(2, email);
    ps.setString(3, password);

    int count = ps.executeUpdate();
    if (count > 0) { // ✅ Successful registration
        out.println("<script>");
        out.println("Swal.fire({");
        out.println("  title: '🎉 Registration Successful!',");
        out.println("  html: '<b>Welcome aboard!</b><br>Your account has been created.',");
        out.println("  icon: 'success',");
        out.println("  showConfirmButton: false,");
        out.println("  timer: 4000,");
        out.println("  timerProgressBar: true,");
        out.println("  backdrop: 'rgba(0, 128, 0, 0.4)'");
        out.println("}).then(() => {");
        out.println("    window.location.href = 'log.html';");
        out.println("});");
        out.println("</script>");
    }

    // ✅ Close resources properly
    rs.close();
    checkUser.close();
    ps.close();
    con.close();
%>

</body>
</html>
