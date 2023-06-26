//External JavaScript
//Validate Username
function validateusername()
        {

            uname = document.getElementById("uname").value;
            // if we use if(uname == "") --> it will doesnot check for spaces
            if(uname.trim().length == 0)
            {
                document.getElementById("unameerr").innerHTML = "Username is Manditory";
                return false;
            }
            else
            {
                document.getElementById("unameerr").innerHTML ="";
               return true;
            }

        }
        //Validate password
        function validatepassword()
        {
           

            pass = document.getElementById("pass").value;
            // if we use if(pass == "") --> it will doesnot check for spaces
            if(pass.trim().length == 0)
            {
                document.getElementById("passerr").innerHTML = "Password is Manditory";
                return false;
            }
            else
            {
                document.getElementById("passerr").innerHTML="";
                return true;
            }
        }

        //Validate data
        function validatedata()
        {
            flag = validateusername();
            flag1 = validatepassword();

            //flag and flag1 will return true and false
            if(flag && flag1) //---> this will equivalent to (flag==true && flag1 == true) 
            {
                return true;
            }
            else{
                return false;
            }
        }