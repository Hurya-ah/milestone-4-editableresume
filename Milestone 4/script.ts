// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong><span contenteditableresume="true">${name}</span></p>
        <p><strong>Email:</strong><span contenteditableresume="true">${email}</span></p>
        <p><strong>Phone:</strong><span contenteditableresume="true">${phone}</span></p>

        <h3>Education</h3>
        <p contenteditableresume="true">${education}</p>
        
        <h3>Experience</h3>
        <p contenteditableresume="true">${experience}</p>
        
        <h3>Skills</h3>
        <p contenteditableresume="true">${skills}</p>
    `;

    // Display the generated resume
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHTML;
    } else {
        console.error('The resume output element is missing.');
    }
});