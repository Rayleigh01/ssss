const formName = document.querySelector('.user-form');
        const loginButton = formName.querySelector('.login-button')
        const pushButton = document.querySelector('.profile-push-button')
        const eventButton = document.querySelector('.raise-event-button')


        
        
        const submitLogin = (e) => {
            e.preventDefault();
            const username = formName.querySelector('.username-input').value;
            const email = formName.querySelector('.email-input').value;
            const phNumber = formName.querySelector('.phNumber-input').value;
            const dob = formName.querySelector('.dob-input').value;
            console.log(username, email, phNumber, dob);
            alert("submitted");
            clevertap.onUserLogin.push({
                "Site": {
                    "Name": username,            // use the Name variable
                    "Email": email,         // Email address of the user
                    "Phone": phNumber,           // Phone (with the country code
                    "DOB": new Date()                 // Date of Birth. Date object   
                }
            });
         }
        const submitPush = () => {

            const username = formName.querySelector('.username-input').value;
            const email = formName.querySelector('.email-input').value;
            const phNumber = formName.querySelector('.phNumber-input').value;
            const dob = formName.querySelector('.dob-input').value;
                
            alert(username+" "+"your profile data is stored");    
            clevertap.profile.push({
                "Site": {
                  "Name": username,           // use the Name variable
                  "Email": email,         // Email address of the user
                  "Phone": phNumber,           // Phone (with the country code
                  "DOB": new Date(),
                  "Address": "B/703,HAHAHAHA"      // Date of Birth. Date object   
                }
               });

        }
        const submitEvent = () => {
            alert("Viewed products saved");
            clevertap.event.push("Product Viewed", {
                "Product name":"Casio Chronograph Watch",
                "Category":"Mens Accessories",
                "Price":59.99,
              });    
            

            
        }
 
 formName.addEventListener('submit', e => submitLogin(e) )
 pushButton.addEventListener('click', submitPush )
 eventButton.addEventListener('click', submitEvent )
 
