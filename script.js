
    
    const emailCategories = {
        student: [
        {
            subject: "Congratulations! You've been awarded a full scholarship!",
            content: `Dear Student,  <br>

            We are excited to inform you that you have been selected for a full scholarship as part of our annual academic excellence program. This scholarship covers your tuition fees for the upcoming academic year, allowing you to focus entirely on your studies.  

            To claim this scholarship, please click the link below and complete the verification process within 48 hours:  
            <a href='http://secure-scholarship-claim.com' target='_blank'>Scholarship</a> <br>

            Please note that this offer is only valid for the next two days, so act quickly to secure your spot. If you have any questions, feel free to contact us. <br>

            Best regards,<br>
            Scholarship Office`,
            isPhishing: true,
            from: "scholarship@secure-offers.com",
            feedback: "This email is phishing. Universities typically announce scholarships through official channels. Avoid clicking on unknown links."
        },
        {
            subject: "Your final exam results are ready!",
            content: `Dear Student,  <br>

            Your final exam results have been successfully processed and are now available. We understand how important this information is to you, and we want to ensure you access it without any delay.  

            To view your grades, log in using the link below:  
            <a href='http://student-results-access.com' target='_blank'>Check Your Results Here</a>  

            If you encounter any issues accessing the portal, please contact our support team immediately.  <br>

            Best wishes,  <br>
            Academic Team `,
            isPhishing: true,
            from: "results@examsnotify.com",
            feedback: "This is phishing. Universities provide results through official portals, not third-party links."
        },
        {
            subject: "Urgent: Verify your student ID information",
            content: `Dear Student,  <br>

            We noticed an issue with your student ID details in our system. It is crucial to verify this information to avoid disruption in accessing university services, including the library and campus facilities.  

            Verify your student ID now by clicking on the link below:  <br>
            <a href='http://verify-student-id-now.com' target='_blank'>Verify My ID</a>  <br>

            Please note that if you do not complete this verification within 24 hours, your account may be temporarily SUSPENDED.  

            Thank you for your prompt attention to this matter.  <br>

            Regards, 
            Student Services Team `,
            isPhishing: true,
            from: "idverify@university-check.com",
            feedback: "This email is phishing. Universities do not ask for sensitive information through email. Always verify with student services."
        },
        {
            subject: "You’ve been invited to the annual IT club meeting!",
            content: `Dear Student,  <br>

            The IT Club is excited to invite you to our annual meeting, where we’ll discuss exciting upcoming projects, including the inter-university science competition!  <br>

            Date: Friday, 5 PM; 
            Venue: Class 304.      <br>

            RSVP here: <a href='http://science-club-meeting.com' target='_blank'>Confirm Your Attendance</a>  

            Refreshments will be provided, and it’s a fantastic opportunity to network with like-minded students.  

            Looking forward to seeing you there!   <br>

            Best regards,  <br>
            IT   Club President,
            Alkida Hoxha <br>
            <a href="mailto:alkida.hoxha@itclubs.edu">alkida.hoxha@itclubs.edu</a>`,
            isPhishing: false,
            from: "club-president@university.edu",
            feedback: "This is legitimate. Always verify event details through official club announcements."
        },
        {
            subject: "Claim free access to premium online courses!",
            content: `Dear Student,  <br> 

            Enhance your learning experience with free access to our exclusive online courses, available for a limited time! These courses usually require a subscription, but as part of a special initiative, you can access them for free.  <br>

            Register today: <a href='http://free-courses-now.com' target='_blank'>Sign Up Here</a>  

            This offer is valid only for the next 72 hours, so don’t miss out!  <br>

            Regards,  <br>
            The learning team,  
            <a href="mailto:offers@coursesnow.com">offers@coursesnow.com</a>`,
            isPhishing: true,
            from: "offers@coursesnow.com",
            feedback: "This is phishing. Confirm such offers with your university or trusted learning platforms before registering."
        },
        {
            subject: "Library notice: Overdue books",
            content: `Dear Student,  <br>

            Our records indicate that you have overdue library books. Please return them at your earliest convenience to avoid additional fines.  

            If you need to renew your books, you can do so here:  <br>
            <a href='http://library-books-renewal.com' target='_blank'>Renew My Books</a>  

            Thank you for your prompt attention to this matter.  <br>

            Regards,  <br>
            University Library Team `,
            isPhishing: false,
            from: "library@university.edu",
            feedback: "This email is legitimate. Verify overdue notices through the library’s official portal if unsure."
        },
        {
            subject: "Apply for a paid internship opportunity!",
            content: `Dear Student,  <br>

            Don’t miss this exciting opportunity to gain hands-on experience with one of the top companies in your field! This internship offers competitive pay and the chance to work with industry leaders.  

            Submit your application here: 
            <a href='http://internship-opportunities.com' target='_blank'>Apply Now</a>  <br>

            Applications close soon, so act quickly to secure your spot.  <br>

            Regards,  <br>
            HR Manager `,
            isPhishing: true,
            from: "hr@internshiphub.net",
            feedback: "This email is phishing. Verify internship opportunities through your university’s career services or trusted job boards."
        },
        {
            subject: "Become a Student Ambassador!",
            content: `Dear Student,  <br>

            Are you passionate about representing our university? Join the Student Ambassador program and help us showcase our campus to prospective students.  

            Benefits include:  <br>
            - Networking opportunities  <br>
            - Leadership development  <br>
            - Exclusive event participation  <br>

            Apply now: <a href='http://student-ambassador.com' target='_blank'>Join the Team</a>  <br>

            Best regards,  
            University Outreach Team  
            `,
            isPhishing: false,
            from: "outreach@university.edu",
            feedback: "This is legitimate. Always confirm ambassador programs through official university communication."
        },
        {
            subject: "Feedback survey: We value your opinion!",
            content: `Dear Student,  <br>

            Help us improve the campus experience by sharing your feedback. This short survey will take less than 5 minutes to complete.  <br>

            Click here to start: <a href='http://phishing-feedback.com' target='_blank'>Provide Feedback</a>  

            Your input is invaluable, and we appreciate your time.  <br>

            Best! 
            `,
            isPhishing: true,
            from: "surveyphishing@scam.com",
            feedback: "This is phishing. Always verify surveys through official university platforms."
        },
        {
            subject: "Power outage notification",
            content: `Dear Student,  <br>

            Please be advised of a scheduled power outage in the East Wing this Saturday from 9 AM to 5 PM. Some services may be unavailable during this time.  

            We apologize for the inconvenience and appreciate your understanding.  <br>

            Regards,  <br>
            Facilities Management Team,  <br>
            <a href="mailto:facilities@university.edu">facilities@university.edu</a>`,
            isPhishing: false,
            from: "facilities@university.edu",
            feedback: "This email is legitimate. Confirm scheduled outages with facilities management if needed."
        }
        ],

        employee: [ 
        {
            subject: "Action Needed: Payroll information update",
            content: `Dear Employee, <br>

            We encountered an error while processing your recent payroll. To avoid delays in your next payment, please update your banking information immediately using the link below:  
            <a href='http://payroll-update.com' target='_blank'>Update Payroll Information</a>  <br>

            If you do not act within 24 hours, your payment may be further delayed.  <br>

            Best wishes,  <br>
            Payroll Support Team `,
            isPhishing: true,
            from: "payroll-alerts@companyalerts.com",
            feedback: "This email is phishing. Payroll changes are handled via official HR portals, not third-party links."
        },
        {
            subject: "Mandatory safety training - Complete now",
            content: `Dear Employee,  <br>

            As part of our compliance requirements, all employees must complete the mandatory safety training by this Friday. The training covers workplace safety and emergency procedures.  

            Access the training materials here:  
            <a href='http://official-safety-training.com' target='_blank'>Start Safety Training</a>  <br>

            Please contact HR if you have any questions or issues accessing the training.  <br>

            Best,  
            Safety Team  <br>
            <a href="mailto:safety@company.com">safety@company.com</a>`,
            isPhishing: false,
            from: "safety@company.com",
            feedback: "This email is legitimate. Verify with HR if you need confirmation."
        },
        {
            subject: "Unauthorized login attempt detected",
            content: `Dear Employee,  <br>

            We noticed an unauthorized login attempt to your account from a foreign IP address. To secure your account, we recommend resetting your password immediately.  

            Reset your password here:  
            <a href='http://account-security-reset.com' target='_blank'>Secure my account</a>  <br>

            If this was not you, contact IT Support.  <br> `,
            isPhishing: true,
            from: "security-alerts@companyit.com",
            feedback: "This email is phishing. Always confirm such alerts directly with your IT department."
        },
        {
            subject: "Annual leave request approved",
            content: `Dear Employee,  <br>

            Your annual leave request has been approved. Your leave dates have been scheduled from April 15th to April 22nd. If these dates are incorrect, please notify HR immediately.  <br>

            For further details, click here:  
            <a href='http://leave-approval-confirmation.com' target='_blank'>View leave details</a>  <br>

            Have a wonderful break!  <br>

            Best regards,  <br>
            HR Team  <br>
            <a href="mailto:hr@company.com">hr@company.com</a>`,
            isPhishing: false,
            from: "hr@company.com",
            feedback: "This email is legitimate. Always confirm leave requests through official HR channels."
        },
        {
            subject: "Exclusive bonus opportunity - ApplynNow",
            content: `Dear Employee,  <br>

            As part of our employee recognition program, you have been selected for an exclusive bonus opportunity. To claim this reward, please complete the application form using the link below:  
            <a href='http://bonus-reward-claim.com' target='_blank'>Claim Your Bonus</a>  

            The application deadline is tomorrow, so act quickly!  <br>

            Best,  
            Bonus Rewards Team`,
            isPhishing: true,
            from: "rewards@companyoffers.com",
            feedback: "This email is phishing. Bonuses are typically announced via official company channels, not unsolicited emails."
        },
        {
            subject: "Contact update request",
            content: `Dear Employee,  <br>

            To ensure your safety during emergencies, we need you to update your contact information. This is part of our annual employee records update.  

            Update your contact details here:  
            <a href='http://update-emergency-contacts.com' target='_blank'>Update Now</a>  <br>

            Thank you for your cooperation. Contact team if needed.  <br>

            Best wishes,  
            HR Records Team `,
            isPhishing: false,
            from: "hr@company.com",
            feedback: "This email is legitimate. Always update sensitive information via the official HR portal."
        },
        {
            subject: "Team collaboration tool update",
            content: `Dear Employee,  <br>

            The team collaboration tool you use has received a significant update, introducing new features to enhance prodctiyity. Learn about the updates and how to utilize them here:  
            <a href='http://collaboration-tool-update.com' target='_blank'>Explore new features</a>  <br>

            Regards,  
            IT Team  `,
            isPhishing: true,
            from: "updates@tool-improvements.com",
            feedback: "This email is phishing. Always confirm tool updates with IT through official communication."
        },
        {
            subject: "Invitation to Programming-Week event",
            content: `Dear Employee,  <br>

            We are excited to invite you to our annual company event! This year’s theme is "Together bigger."  <br>

            Date: January 15th <br> 
            Time: 6 PM  <br>
            Location: Palace of Congreses, Tirana Albania. <br>  

            Reserve here:  
            <a href='http://company-social-rsvp.com' target='_blank'>Confirmation Link</a>  <br>

            Best regards,  
            Event planning team`,
            isPhishing: false,
            from: "events@company.com",
            feedback: "This email is legitimate. Verify event invitations through your company’s official communication channels."
        },
        {
            subject: "Mandatory policy acknowledgment",
            content: `Dear Employee,  <br>

            A new company policy has been implemented to ensure compliance with regulatory standards. Please review this policy before the end of the day !!! 

            Access the policy document here:  
            <a href='http://policy-acknowledgment.com' target='_blank'>Review Policy</a>  <br>

            Best regards`,
            isPhishing: true,
            from: "com-lerts@companyphishingrules.com",
            feedback: "This email is phishing. Policy updates are shared via official channels. Always confirm with HR."
        },
        {
            subject: "IT Notice: Account suspension alert",
            content: `Dear Employee,  <br>

            Your account has been temporarily suspended due to suspicious login attempts. To restore access, please verify your credentials and reset your password immediately.  

            Reactivate your account here:  
            <a href='http://account-reactivation.com' target='_blank'>Reactivate acc now</a>  

            If you did not attempt to log in, report this issue to IT Support. <br> `,
            isPhishing: true,
            from: "security-alerts@companyit.com",
            feedback: "This email is phishing. Always verify account-related issues through direct IT contact."
        }
    ],

        ceo: [
        {
            subject: "Urgent: security breach detected - Immediate action required",
            content: `Dear CEO, <br> 

            We have detected suspicious activity on your account that may indicate a potential security breach. To protect your sensitive data, we urge you to secure your account immediately by clicking the link below:  
            <a href='http://secure-your-account.com' target='_blank'>Secure my account</a>  

            If you do not act within 24 hours, unauthorized parties may gain access to confidential information.  <br>

            Best,   
            IT Security Team`,
            isPhishing: true,
            from: "alertsfakemail@companysecurity.com",
            feedback: "This is phishing. IT teams do not send such links. Always verify through official channels."
        },
        {
            subject: "Immediate approval needed Budget",
            content: `Dear CEO,  <br>

            The finance team has finalized the budget proposal, and your approval is required to proceed. We’ve included projections for revenue growth and operational costs.  

            Please review the document and approve it at your earliest convenience:  
            <a href='http://review-budget-documents.com' target='_blank'>Review proposal</a>  <br>

            Your prompt action will ensure timely implementation of critical projects.  <br>

            Regards,  
            Finance Department  <br>
            <a href="mailto:finance@company.com">finance@company.com</a>`,
            isPhishing: false,
            from: "finance@company.com",
            feedback: "This email is legitimate. Verify attachments with the finance team before proceeding."
        },
        {
            subject: "Signature needed for legal documents",
            content: `Dear CEO,  <br>

            Attached are the urgent legal documents that require your signature. These documents are essential to finalize an ongoing agreement with one of our key partners.  

            Please review and sign the documents before the deadline:  
            <a href='http://sign-documents-now.com' target='_blank'>Sign doc here</a>  <br>

            Contact the very legal team if you have any questions... <br>  

            Best, <br>
            Legal Department! `,
            isPhishing: true,
            from: "signatures@doc-verifications.com",
            feedback: "This email is phishing. Always confirm legal document requests through official company channels."
        },
        {
            subject: "Charity event",
            content: `Dear CEO,  <br>

            We’re thrilled to invite you to the upcoming Charity Event, where executives from top companies will gather to support a GREAT cause.  

            you should confirm here:  
            <a href='http://charity-event-confirmation.com' target='_blank'>Click now</a>   <br>

            Bestt,  <br>
            Megi`,
            isPhishing: true,
            from: "rsvp@charity-events.com",
            feedback: "This email is phishing. Always confirm event invitations through trusted company channels."
        },
        {
            subject: "Quarterly financial report ready for review",
            content: `Dear CEO,  <br>

            The latest quarterly financial report is now available. This report includes comprehensive details of the company’s performance metrics and projections for the next quarter.  

            Access the report here:  
            <a href='http://quarterly-report.com' target='_blank'>View Report</a>  <br>

            Please let us know if you have any questions.  <br>

            Regards,  <br>
            Finance Team,  <br>
            <a href="mailto:finance@companydomain.com">finance@companydomain.com</a>`,
            isPhishing: false,
            from: "finance@companydomain.com",
            feedback: "This email is legitimate. Always verify financial reports through the company’s finance team."
        },
        {
            subject: "Confirm: team building event details",
            content: `Dear CEO,  <br>

            The team-building event is approaching! Here are the event details:  <br>

            Date: January 26th, during 10 AM - 3 PM  <br>
            Location: Tirana International Hotel, Tirana Center  <br>

            Kindly confirm your participation here:  
            <a href='http://confirm-team-event.com' target='_blank'>Confirm Attendance</a>  <br>

            Best wishes,  <br>
            Andi Hoxha, 
            Event planning team`,
            isPhishing: false,
            from: "events@company.com",
            feedback: "This email is legitimate. Such details are often given through emails in large companies."
        },
        {
            subject: "Employee feedback report",
            content: `Dear CEO,  <br>

            The HR team has compiled the latest employee feedback report, which highlights key areas for improvement and employee satisfaction trends.  <br>

            Review the full report here:  
            <a href='http://hr-feedback-report.com' target='_blank'>View report</a>  <br>

            Regards, <br>
            HR Department  <br>
            <a href="mailto:hr@companydomain.com">hr@companydomain.com</a>`,
            isPhishing: false,
            from: "hr@companydomain.com",
            feedback: "This email is legitimate. Verify with HR if needed."
        },
        {
            subject: "Unusual login attempt detected",
            content: `Dear CEO,  <br>

            We noticed an unusual login attempt on your account from an unrecognized device. For security purposes, we recommend resetting your password NOW:  
            <a href='http://reset-my-password.com' target='_blank'>Reset Password</a>  <br>  

            Best!`,
            isPhishing: true,
            from: "security@it-alerts.com",
            feedback: "This email is phishing. Verify with your IT department directly before taking action."
        },
        {
            subject: "Special Networking Event Invitation",
            content: `Dear CEO,  <br>

            You are invited to an exclusive networking event featuring TOP industry leaders. This event offers a unique opportunity to exchange ideas and collaborate with peers.  <br>  
            <a href='http://executive-network.com' target='_blank'>Join now</a>  <br>

            Best,  <br>
            Events team`,
            isPhishing: true,
            from: "invitefakeuser@executive-networking.com",
            feedback: "This email is phishing. Verify networking events through official channels."
        }
    ],

};


let currentCategory = null;
    let emails = [];
    let currentEmailIndex = 0;
    let correct = 0;
    let answered = false;

    // one section at a time
    function showSection(sectionId) {
    document.getElementById("role-selection").style.display = "none";
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("restart-section").style.display = "none";
    if (sectionId === "restart-section") {
        document.getElementById("final-score").innerText = correct; 
        document.getElementById("total-questions").innerText = emails.length;
    }
    document.getElementById(sectionId).style.display = "block";
}


    // Start for a selected role
    function startQuiz(category) {
        currentCategory = category;
        emails = [...emailCategories[category]];
        currentEmailIndex = 0;
        correct = 0;
        answered = false;
        document.getElementById("correct").innerText = correct;
        document.getElementById("remaining").innerText = emails.length;
        showSection("quiz-section");
        nextEmail();
    }

    // Restart 
    function restartQuiz() {
        showSection("role-selection");
    }

    // Show the next email 
    function nextEmail() {
    if (currentEmailIndex < emails.length) {
        const email = emails[currentEmailIndex];
        document.getElementById("email-subject").innerText = "Subject: " + email.subject;
        document.getElementById("email-time").innerText = "Date: " + new Date().toLocaleString();
        document.getElementById("email-from").innerText = "From: " + email.from; 
        document.getElementById("email-content").innerHTML = email.content;
        document.getElementById("feedback").innerText = "";
        document.getElementById("feedback").style.display = "none";
        document.getElementById("next-btn").disabled = true;
        answered = false;
    } else {
        showSection("restart-section");
    }
}

   function handleAnswer(isPhishing) {
    if (answered) return; 
    answered = true; 
    const email = emails[currentEmailIndex];
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");

    if (isPhishing === email.isPhishing) {
        feedbackElement.innerText = `Correct! ${email.feedback}`;
        feedbackElement.classList.add('correct-feedback');
        feedbackElement.classList.remove('incorrect-feedback');
        correct++; 
    } else {
        feedbackElement.innerText = `Incorrect. ${email.feedback}`;
        feedbackElement.classList.add('incorrect-feedback');
        feedbackElement.classList.remove('correct-feedback');
    }

    feedbackElement.style.display = 'block'; 
    document.getElementById("correct").innerText = correct;
    document.getElementById("remaining").innerText = emails.length - currentEmailIndex - 1;
    nextButton.disabled = false;
    currentEmailIndex++; 
}

     showSection("role-selection");
    
    function submitForm(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        message: message,
        dateSubmitted: new Date().toISOString()
    };
    document.getElementById("final-score").innerText = correct;  
document.getElementById("total-questions").innerText = emails.length;  


    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(formData);
    localStorage.setItem("messages", JSON.stringify(messages));
    alert("Your message has been submitted successfully!");
    document.getElementById("contact-form").reset();
}
