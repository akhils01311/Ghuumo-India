 /* toggal menu bar */
    document.addEventListener("DOMContentLoaded", function () {
      const mobileToggle = document.querySelector('.mobile-view');
      const navMenu = document.querySelector('nav ul');

      mobileToggle.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.toggle('active');
      });
    });


    /*Pop up for login when user click on a Get Guide Button */
    function book(){
      alert("Please Login to Book a Guide");
      window.location.href = "login.html";
    }
   


    /*Creating function for select option this function gives the details according to the user demand*/
      function handleCityChange(value) {
        if(value === "select"){
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if(value==="andrapradesh"){
            document.getElementById("show-andrapradesh-data").style.display = "block";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none"; 
        }

        else if (value === "arunachalpradesh") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "block";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none"; 
        }
       
        else if (value === "assam") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "block";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }

        else if (value === "bihar") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "block";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "chhattisgarh") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "block";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "delhi") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "block";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "goa") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "block";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "gujarat") { 
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "block";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "haryana") { 
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "block";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "himachalpradesh") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "block";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "jharkhand") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "block";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "karnataka") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "block";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "kerala") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "block";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "maharashtra") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "block";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "madhyapradesh") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "block";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "manipur") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "block";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "meghalaya") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "block";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "mizoram") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";  
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "block";
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "nagaland") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
            document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";
        document.getElementById("show-nagaland-data").style.display = "block";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "odisha") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "block";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "punjab") {
               document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "block";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "rajasthan") {
                   document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "block";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "sikkim") {
                   document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "block";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "tamilnadu") {
                      document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "block";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "telangana") {
                      document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "block";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "tripura") {
                      document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "block";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "uttarpradesh") {
                        document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "block";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
       else if (value === "uttrakhand") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "block";
        document.getElementById("show-westbengal-data").style.display = "none";
        }
        else if (value === "westbengal") {
            document.getElementById("show-andrapradesh-data").style.display = "none";
          document.getElementById("show-arunachalpradesh-data").style.display = "none";
        document.getElementById("show-assam-data").style.display = "none";
        document.getElementById("show-bihar-data").style.display = "none";
        document.getElementById("show-chhattisgarh-data").style.display = "none";
        document.getElementById("show-delhi-data").style.display = "none";
        document.getElementById("show-goa-data").style.display = "none";
        document.getElementById("show-gujarat-data").style.display = "none";
        document.getElementById("show-haryana-data").style.display = "none";
        document.getElementById("show-himachalpradesh-data").style.display = "none";
        document.getElementById("show-jharkhand-data").style.display = "none";
        document.getElementById("show-karnataka-data").style.display = "none";
        document.getElementById("show-kerala-data").style.display = "none";
        document.getElementById("show-maharashtra-data").style.display = "none";
        document.getElementById("show-madhyapradesh-data").style.display = "none";
        document.getElementById("show-manipur-data").style.display = "none";
        document.getElementById("show-meghalaya-data").style.display = "none";
        document.getElementById("show-mizoram-data").style.display = "none";    
        document.getElementById("show-nagaland-data").style.display = "none";
        document.getElementById("show-odisha-data").style.display = "none";
        document.getElementById("show-punjab-data").style.display = "none";
        document.getElementById("show-rajasthan-data").style.display = "none";
        document.getElementById("show-sikkim-data").style.display = "none";
        document.getElementById("show-tamilnadu-data").style.display = "none";
        document.getElementById("show-telangana-data").style.display = "none";
        document.getElementById("show-tripura-data").style.display = "none";    
        document.getElementById("show-uttarpradesh-data").style.display = "none";
        document.getElementById("show-uttrakhand-data").style.display = "none";
        document.getElementById("show-westbengal-data").style.display = "block";
        }
      }

      function submitDetails(){
          let submitName=document.getElementById('PersonName').value.trim();
          let submitEmail=document.getElementById('PersonEmail').value.trim();
          let submitMessage=document.getElementById('PersonSendMessage').value.trim();

          if(submitName==""||submitEmail==""||submitMessage==""){
            alert('Please Enter Proper Details');
            return;
          }
          else{
            alert('Message Was Sent');
            return;
          }
      }


// Get the buttons
const backToTopBtn = document.getElementById("backToTopBtn");
const hotelAdvertisement = document.getElementById("hotel-ad-top-left");

// Show/hide buttons on scroll
window.onscroll = function () {
  const scrollY = document.documentElement.scrollTop || document.body.scrollTop;

  // Toggle Back to Top button
  if (scrollY > 200) {
    backToTopBtn.style.display = "block";
    hotelAdvertisement.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
    hotelAdvertisement.style.display = "none";
  }
};

// Smooth scroll to top
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


    