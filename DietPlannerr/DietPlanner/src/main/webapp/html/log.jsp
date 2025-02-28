<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>

<%
    String loginEmail = request.getParameter("log_email");
    String loginPassword = request.getParameter("log_password");

    Class.forName("com.mysql.cj.jdbc.Driver");
    Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/eat2fit", "root", "");

    PreparedStatement ps = con.prepareStatement("SELECT username FROM users WHERE email=? AND password=?");
    ps.setString(1, loginEmail);
    ps.setString(2, loginPassword);

    ResultSet rs = ps.executeQuery();

 if(loginEmail!=null && loginPassword!=null)
 {
    if (rs.next()) 
    {
    	
        String username = rs.getString("username");
        out.println("<script>");
        out.println("window.location.href='welcome.html?name=" + username + "';");
        out.println("</script>");
    }
    else 
    { out.println("<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>");
    out.println("<script>");
    out.println("Swal.fire({");
    out.println("  title: '❌ Login Failed!',");
    out.println("  html: '<b>Incorrect Username or Password</b><br>Please try again.',");
    out.println("  icon: 'error',");
    out.println("  timer: 4000,");  // ⏳ 4 seconds before redirecting
    out.println("  timerProgressBar: true,");  // 📊 Shows a progress bar
    out.println("  showConfirmButton: false,");  // ❌ No button needed
    out.println("  backdrop: 'rgba(255, 0, 0, 0.3)',");  // 🎨 Soft red background
    out.println("}).then(() => {");
    out.println("    window.location.href = 'log.html';");  // ⏩ Auto-redirect after 4 sec
    out.println("});");
    out.println("</script>");
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	/* out.println("<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>");
        out.println("<script>");
        out.println("Swal.fire({");
        out.println("  title: '❌ Login Failed!',");
        out.println("  html: '<b>Incorrect Username or Password</b><br>Please try again.',");
        out.println("  icon: 'error',");
        out.println("  timer: 4000,");  // ⏳ 4 seconds before redirecting
        out.println("  timerProgressBar: true,");  // 📊 Shows a progress bar
        out.println("  showConfirmButton: false,");  // ❌ No button needed
        out.println("  backdrop: 'rgba(255, 0, 0, 0.3)',");  // 🎨 Soft red background
        out.println("  showClass: { popup: 'animate__animated animate__shakeX' }");  // 💥 Shake animation
        out.println("}).then(() => {");
        out.println("    window.location.href = 'log.html';");  // ⏩ Auto-redirect after 4 sec
        out.println("});");
        out.println("</script>"); */
    }
 } 
    rs.close();
    ps.close();
    con.close();
%>

</body>
</html>
