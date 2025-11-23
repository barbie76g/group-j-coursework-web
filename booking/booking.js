
        // Collecting the data of the form we need to control.
        const form = document.getElementById('bookingForm');
        const messageBox = document.getElementById('validationMessage');

        // This function shows a  styled message to the user.
        function showMessage(type, message) {
            // Put the text into the box
            messageBox.textContent = message;
            
             messageBox.style.display = 'block';

             messageBox.classList.remove('validation-error', 'validation-success');

            // Then,this function shows both error and success
            if (type === 'error') {
        
                messageBox.classList.add('validation-error');
            } else if (type === 'success') {
                
                messageBox.classList.add('validation-success');
            }
        }

        
        form.addEventListener('submit', function(event) {
            // ** CRITICAL STEP: Stop the form from submitting! **
            event.preventDefault(); 

            let validationPassed = true; 
            let errorList = '';          

            // --- A. Gather All Input Data ---
            const customerName = document.getElementById('name').value.trim();
            const customerEmail = document.getElementById('email').value.trim();
            const checkInDateStr = document.getElementById('in').value;
            const checkOutDateStr = document.getElementById('out').value;
            const allPaymentRadios = document.getElementsByName('payment_method');


            // --- B. VALIDATION 1: Check if all important fields are empty ---
            if (customerName === '' || customerEmail === '' || checkInDateStr === '' || checkOutDateStr === '') {
                validationPassed = false;
                errorList += '• All fields (Name, Email, Dates) must be filled out.\n';
            }


            // --- C. VALIDATION 2: Simple check for Email format ---
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (validationPassed && !emailPattern.test(customerEmail)) {
                validationPassed = false;
                errorList += ' Please enter a valid email address (e.g., user@domain.com).\n';
            }


            // validation of time / date of check in and check out
            

            const checkInTime = new Date(checkInDateStr).getTime();
            const checkOutTime = new Date(checkOutDateStr).getTime();
            
            // 2. Check-out time must be strictly GREATER THAN Check-in time.
            if (validationPassed && checkInTime >= checkOutTime) {
                validationPassed = false;
                errorList += '• Check-out date must be after the Check-in date.\n';
            }


            // --- E. VALIDATION 4: Check if a Payment Method is Selected ---
            let foundPayment = false;
        
            for (const radio of allPaymentRadios) {
                if (radio.checked) {
                    foundPayment = true; 
                    break; 
                }
            }

            if (validationPassed && !foundPayment) {
                validationPassed = false;
                errorList += '• Please select a payment method.\n';
            }
            
            
            // --- F. FINAL RESULT: Check the 'validationPassed' flag ---
            if (validationPassed) {
                // If this runs, it means no errors were found.
                showMessage('success', 'Thank you for booking with us Golden Sand Hotel');
            } else {
                
                showMessage('error', 'please fill all the required information:\n' + errorList);
            }
        });
    
